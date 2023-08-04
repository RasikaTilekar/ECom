
import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import productSlice from './productSlice.js';
import categerySlice from './categerySlice';
import jwellerySlice from './jwellerySlice';
import electronicsSlice from './electronicsSlice';
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        category: categerySlice,
        jwellery: jwellerySlice,
        electronics: electronicsSlice,
        wishlist: wishlistSlice
    }
})

export default store;