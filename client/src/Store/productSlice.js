import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../API/AxiosAPI';

const initialState = {
    data: []
}

const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
});

//export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    let products = await axios.getAllProducts();
    const data = products.data;
    return data;
})

