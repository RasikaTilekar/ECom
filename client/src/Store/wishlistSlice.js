import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWish: (state, action) => {
            state.push(action.payload);
        },
        removeWish: (state, action) => {

            return state.filter(item => item.data.id !== action.payload.data.id)
        }
    }
});

export const wishlistItem = state => state.wishlist;

export const { addWish, removeWish } = wishlistSlice.actions;

export default wishlistSlice.reducer;