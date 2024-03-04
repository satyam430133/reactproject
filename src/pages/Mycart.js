import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from './Component/ProductSlice'; // Adjust the path to your ProductSlice file

const MyCart = () => {
  const cartItems = useSelector(state => state.addtocart.cart);
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  const increprocout = (itemId) => {
    dispatch(increaseQuantity({ itemId })); // Dispatch action to increase quantity
  };

  const decrement = (itemId) => {
    dispatch(decreaseQuantity({ itemId })); // Dispatch action to decrease quantity
  };

  const deleteItem = (itemId) => {
    dispatch(removeItem({ itemId })); // Dispatch action to remove item from cart
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const animationstyle = {
    margin: 0, padding: 0, display: "flex",justifyContent:"center", alignItems: "center", BackgroundColor: "#f0f0f0"
  }
  return (
    <>
      <div style={{height:"100px"}}></div>
      <div className='mycartt'>   
        <h2> My Cart </h2>
        <br/> <br/>
        {cartItems.length === 0 && (
          <>
            <div style={animationstyle}>
    <div class="container" style={{textAlign:"center"}}>
        <div class="empty-cart">      
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp' alt="Empty Cart" />
        </div>
    </div>
</div> <br /><br /> 
<center>
<button className='btn'> <Link className='buttoncolor' to="/"> Continue Shopping </Link> </button>
</center>
          </>
        )}
        {cartItems.length > 0 && (
          <>
            <div>
              {cartItems.map(item => (
                <div className='cartdiv' key={item.id}>
                  <p> <img src={item.image} height="90px" /> </p>
                  <p> {item.name} </p>
                  <p> {item.price} </p>
                  <p> 
                    <button className='btn' onClick={() => decrement(item.id)}> - </button> 
                    {item.quantity} 
                    <button className='btn' onClick={() => increprocout(item.id)} > + </button> 
                  </p>
                  <p> {item.quantity * item.price} </p>   
                  <button className='btn' onClick={() => deleteItem(item.id)}> Delete </button>
                </div>
              ))}
            </div>
            <div style={{marginLeft:"1040px", display:"flex"}}>
              <p style={{width:"50%"}}> TOTAL PRICE </p> <p> {totalPrice} </p>
            </div>
            <div style={{marginLeft:"700px"}}>
              <button className='btn'> <Link className='buttoncolor' to="/addressform"> Continue to Payment </Link> </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MyCart;
