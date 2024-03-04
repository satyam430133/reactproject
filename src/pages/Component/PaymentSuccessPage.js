import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from './ProductSlice';

const PaymentSuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsProcessing(false); 
      dispatch(clearCart());
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const [isProcessing, setIsProcessing] = useState(true);

  return (
    <>
      <div className='paymentdivstyle'>
        {isProcessing ? (
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' alt='loading' height="90px" />
            <h2>Processing Payment...</h2>
            <p>Please wait while we process your payment.</p>
          </div>
        ) : (
          <div>
            <img src='https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-check-mark-vector-icon-png-image_2380226.jpg' alt='...' height="90px" />
            <h2>Payment Successful!</h2>
            <p>Thank you for your payment.</p>
            <p>Your order has been successfully processed.</p>
          </div>
        )}
      </div>
      <div style={{height:"90px"}}></div>
    </>
  );
};

export default PaymentSuccessPage;
