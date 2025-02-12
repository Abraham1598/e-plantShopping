import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  
  reducers: {
    addItem: (state, action) => {
    state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
    // Filtra los elementos que no coinciden con el id del elemento a eliminar
    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.cartItems.find(item => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
