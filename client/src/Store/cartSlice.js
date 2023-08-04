import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            return state.filter(item => item.data.id !== action.payload.data.id)
        }
    }
});

export const cartItem = state => state.cart;

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;