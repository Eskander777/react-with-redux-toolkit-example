import { createSlice } from "@reduxjs/toolkit";

const cartInitialData = {
  isOpen: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialData,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const elIdx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (elIdx >= 0) {
        ++state.items[elIdx].quantity;
        state.items[elIdx].total += action.payload.price;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      const elIdx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (elIdx >= 0) {
        if (state.items[elIdx].quantity > 1) {
          --state.items[elIdx].quantity;
          state.items[elIdx].total -= action.payload.price;
        } else {
          state.items.splice(elIdx, 1);
        }
      }
    },
    showCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
