import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  paymentStatus: null, // You might want to include a payment status to track whether the payment was successful or not
};

const PaymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {
    makePayment: (state, action) => {
     
      state.paymentStatus = "success";
    },
  },
});

export default PaymentSlice.reducer;
export const { makePayment,clearCart } = PaymentSlice.actions;
