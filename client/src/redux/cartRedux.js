import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //   state.quantity =
      //     state.products.filter((p) => p._id === action.payload._id).length === 0
      //       ? state.quantity + 1
      //       : state.quantity;
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlide.actions;
export default cartSlide.reducer;
