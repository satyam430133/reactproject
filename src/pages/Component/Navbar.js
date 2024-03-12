import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import Shop from "../Shop";
import Contact from "../Contact";
import About from "../About";
import Mycart from "../Mycart";
import PaymentPage from "./PaymentPage";
import AddressForm from "./AddressForm";
import PaymentSuccessPage from "./PaymentSuccessPage";
import { useSelector } from "react-redux";
import SearchResultsPage from "./SearchResultsPage";
import PubPage from "./PubPage";
import BarPage from "./BarPage";
import BearCards from "./BearCards";

const Navbar = () => {
  const cartItems = useSelector((state) => state.addtocart.cart);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search-results?term=${searchTerm}`; // Navigate to the search results page
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img id="navbarlogo" src="https://pngimg.com/d/tom_and_jerry_PNG60.png" alt="Loading" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars-staggered fa-xl"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/shop">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-lg-flex align-baseline gap-2" onSubmit={handleSearchSubmit}>
              <input 
                className="form-control me-3 h-200" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
              <Link to="/mycart" style={{color:"white"}}> <button className="btn btn-outline-success" type="button"><i className="fa-solid fa-cart-shopping"></i> {totalQuantity} </button></Link>
              <button className="btn btn-outline-success" type="submit"><i className="fa-regular fa-heart"></i></button>  
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mycart" element={<Mycart />} />
        <Route path="/addressform" element={<AddressForm/>} />
        <Route path="/paymentpage" element={<PaymentPage/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} /> {/* Pass location prop */}
        <Route path="/pubpage" element={<PubPage />} />
        <Route path="/barpage" element={<BarPage />} />
        <Route path="/bearcards" element={<BearCards />} />

      </Routes>
    </Router>
  );
};

export default Navbar;
