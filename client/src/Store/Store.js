
import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import productSlice from './productSlice.js';
import categerySlice from './categerySlice';
import jwellerySlice from './jwellerySlice';
import electronicsSlice from './electronicsSlice';
import wishlistSlice from "./wishlistSlice";
import langSlice from './langSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        category: categerySlice,
        jwellery: jwellerySlice,
        electronics: electronicsSlice,
        wishlist: wishlistSlice,
        langSelect: langSlice
    }
})

export default store;