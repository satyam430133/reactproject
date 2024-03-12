import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makePayment } from './PaymentSlice'; // Import action creator for making payment
import AddressForm from './AddressForm';
import { Link } from 'react-router-dom';


const PaymentPage = () => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method is card
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when form is submitted
    try {
      // Dispatch action to make payment with provided details based on selected payment method
      if (paymentMethod === 'card') {
        await dispatch(makePayment({ method: 'card', cardNumber, expiryDate, cvv }));
      } else if (paymentMethod === 'upi') {
        await dispatch(makePayment({ method: 'upi' }));
      } else if (paymentMethod === 'phonepe-gpay') {
        await dispatch(makePayment({ method: 'phonepe-gpay' }));
      } else if (paymentMethod === 'cod') {
        await dispatch(makePayment({ method: 'cod' }));
      }
      // Additional logic after successful payment, such as navigation to success page
      
    } catch (error) {
      // Handle errors if payment fails
      console.error('Payment failed:', error);
      setIsLoading(false); // Set loading state back to false if payment fails
    }
  };  

  // Function to check if payment method requires additional details
  const requiresAdditionalDetails = (method) => {
    return method === 'card' || method === 'upi';
  };

  // Function to check if payment is ready to proceed
  const isPaymentReady = () => {
    if (requiresAdditionalDetails(paymentMethod)) {
      // Check if card details are filled
      if (paymentMethod === 'card') {
        return cardNumber.trim() !== '' && expiryDate.trim() !== '' && cvv.trim() !== '';
      }
      // For UPI, no additional check required
      return true;
    }
    // For other methods like COD, proceed directly
    return true;
  };

  return (
    <>
      <div style={{height:"90px"}}></div>
      <div className="payment-container">
        <h2>Payment</h2>
        <form onSubmit={handlePayment}>
          <label className="form-label">Select Payment Method:</label>
          <div id='paymethod' className="mb-3">
            <div>
              <input type="radio" id="card" name="paymentMethod" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
              <label htmlFor="card">Credit/Debit Card</label>
            </div>
            <div>
              <input type="radio" id="upi" name="paymentMethod" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
              <label htmlFor="upi">UPI</label>
            </div>
            <div>
              <input type="radio" id="phonepe-gpay" name="paymentMethod" value="phonepe-gpay" checked={paymentMethod === 'phonepe-gpay'} onChange={() => setPaymentMethod('phonepe-gpay')} />
              <label htmlFor="phonepe-gpay">PhonePe / GPay</label>
            </div>
            <div>
              <input type="radio" id="cod" name="paymentMethod" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
          {paymentMethod === 'card' && (
            <>
              <div className="mb-3">
                <label className="form-label">Card Number:</label>
                <input type="text" className="form-control" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Expiry Date:</label>
                <input type="text" className="form-control" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">CVV:</label>
                <input type="text" className="form-control" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            </>
          )}
           {paymentMethod === 'upi' && (
            <>
              <div style={{textAlign:"center"}}>
                <img src='https://www.kvgbank.com/images/gallery/upi.png' /> <br/>
                <label htmlFor='upi'> Enter Your UPI ID </label>  <input type='text' name='upi' />                
              </div>
            </>
          )}
          {paymentMethod === 'phonepe-gpay' && (
            <>
              <div style={{textAlign:"center"}}>
                <img src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/08/google-pay-phonepe-1597071677.jpg'  height="100px" /> <br/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png' alt='...' />
              </div>
            </>
          )}
          <button class="btn" disabled={!isPaymentReady()}> <Link className='buttoncolor' to="/paymentsuccess"> Proceed to Payment </Link> </button>
        </form>
      </div>
      {/* <div style={{height:"90px"}}></div> */}
    </>
  );
};

export default PaymentPage;
