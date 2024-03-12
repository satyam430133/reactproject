import React from 'react';
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./ProductSlice"; // Make sure this import is correct
import Bearpro from './Bearpro';

const BearCards = () => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.addtocart.cart);
  
  const mydataAdd = (id, image, name, detail, price, quantity) => {
    let productObj = {id, image, name, detail, price, quantity}; // Simplified object creation
    dispatch(addData(productObj));
  }
  
  const ans = Bearpro.map((item) => {
    return (
      <div className="col" key={item.id}>
        <div className="card">
          <div className="imgbody">
            <img
              className="card-img-top"
              src={item.image}
              alt="..."
            />
          </div>
          <div  className="card-body">
            <h5 style={{color:"white"}} className="card-title">{item.name}</h5>
            <p className="card-text">{item.detail}</p>
            <p>₹ {item.price}</p>
            <button className="btn btn-outline-success" onClick={() => mydataAdd(item.id, item.image, item.name, item.detail, item.price, item.quantity)}>Add to cart</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div style={{height:"90px"}}>  </div>
      <Container fluid className="text-center">
        <h1 className="my-5">Our Bear Menu</h1>
      </Container>
      <div className="row row-cols-1 row-cols-md-4 g-4">{ans}</div>
    </>
  );
};

export default BearCards;
