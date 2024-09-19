import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;

      const existingProductIndex = state.products.findIndex(
        (product) => product.id === id);

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity++;
      } else {
        // Om inte produkten redan finns i shoppingcart, lägg till. 
        state.products.push({ id, name, price, quantity: 1 });
      }
    },

    deleteFromCart: (state, action) => {
      const productId = action.payload.id;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
