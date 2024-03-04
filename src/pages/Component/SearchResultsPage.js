import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Product from "./Product"; // Make sure Product is imported correctly
import { Container } from "react-bootstrap";
import { addData } from "./ProductSlice";

const SearchResultsPage = () => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.addtocart.cart); // Use optional chaining to avoid errors if addtocart is undefined
  const mydataAdd = (id, image, name, detail, price, quantity) => {
    let productObj = {id:id, image:image, name:name, detail:detail, price:price, quantity:quantity}
    dispatch(addData(productObj))
  }
  const location = useLocation(); 
  const searchTerm = new URLSearchParams(location.search).get("term");

  // Use the imported array of products
  const products = Product || [];

  // Filter the products based on the search term
  const searchResults = searchTerm ? 
    products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

  return (
   <> 
   <div style={{height:"150px"}}> </div>
    <div className="container py-4">
      <div style={{marginLeft:"400px"}}>
      <h1> Search Result </h1>
      {searchTerm}
      </div>
      {searchTerm && searchResults.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {searchResults.map(product => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.detail}</p>
                  <p className="card-text">Price: {product.price}</p>
                </div>
                <button onClick={()=>{mydataAdd(product.id, product.image, product.name, product.detail, product.price, product.quantity)}}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {searchTerm && searchResults.length === 0 && (
        <h2 className="text-center">No Results Found</h2>
      )}
    </div>
    <div style={{height:"40px"}}> </div>
   </>
  );
};

export default SearchResultsPage;
