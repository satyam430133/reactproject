import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const ProductSlice = createSlice({
  name: "addtocart",
  initialState: initialState,
  reducers: {
    addData: (state, action) => {
      var myitem = state.cart.filter((key) => key.id === action.payload.id);

      if (myitem.length >= 1) {
        alert("Item Already Added");
      } else {
        state.cart.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const { itemId } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
  },
});

export default ProductSlice.reducer;
export const { addData, increaseQuantity, decreaseQuantity, removeItem } = ProductSlice.actions;
