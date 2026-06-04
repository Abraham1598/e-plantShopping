import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(
    localStorage.getItem("cart")
  ) || [],
};

const saveCart = (items) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(items)
  );
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem: (state, action) => {
      const existingItem =
        state.items.find(
          (item) =>
            item.id ===
            action.payload.id
        );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCart(state.items);
    },

    removeItem: (state, action) => {
      state.items =
        state.items.filter(
          (item) =>
            item.id !== action.payload
        );

      saveCart(state.items);
    },

    updateQuantity: (
      state,
      action
    ) => {
      const {
        id,
        quantity,
      } = action.payload;

      const item =
        state.items.find(
          (item) =>
            item.id === id
        );

      if (item) {
        item.quantity =
          quantity < 1
            ? 1
            : quantity;
      }

      saveCart(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCart([]);
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;