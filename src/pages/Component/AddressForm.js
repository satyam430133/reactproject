import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddressForm = ({ onSubmit }) => {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const address = {
      streetAddress,
      city,
      state,
      postalCode
    };
    onSubmit(address); // Address object ko onSubmit function ke sath pass kiya gaya hai
    console.log('onSubmit:', onSubmit);
  };

  return (
    <>
    <div id='addressform'> <br/>
    <div style={{marginTop:"90px"}}> </div>
      <h2>Address Form</h2>
      <div>
        <div className="mb-4">
          <label className="form-label">Street Address:</label>
          <input type="text" className="form-control" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">City:</label>
          <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">State:</label>
          <input type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Postal Code:</label>
          <input type="text" className="form-control" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary"> <Link className='buttoncolor' to="/paymentpage"> Proceed to Buy </Link> </button>
      </div>
    </div>
    </>
  );
};

export default AddressForm;

