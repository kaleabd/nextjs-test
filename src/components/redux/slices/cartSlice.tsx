// cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'

interface CartItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
  
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const itemIdToIncrement = action.payload;
      const itemToIncrement = state.items.find((item) => item.id === itemIdToIncrement);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const itemIdToDecrement = action.payload;
      const itemToDecrement = state.items.find((item) => item.id === itemIdToDecrement);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
