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
      // Here you can handle the payment logic, such as making an API request
      // You might set the payment status based on the result of the payment process
      // For demonstration purposes, let's assume the payment is successful
      state.paymentStatus = "success";
    },
  },
});

export default PaymentSlice.reducer;
export const { makePayment,clearCart } = PaymentSlice.actions;
