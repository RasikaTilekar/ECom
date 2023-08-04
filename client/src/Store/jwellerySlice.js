import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../API/AxiosAPI";

const initialState = {
    data: []
}

const jwellerySlice = createSlice({
    name: "jwellery",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getJwelleryItems.fulfilled, (state, action) => {

            state.data = action.payload
        })
    }
})

export default jwellerySlice.reducer;

export const getJwelleryItems = createAsyncThunk('products/categery/jewelery', async () => {
    const jwellery = await axios.getJwellery();
    const data = jwellery.data;

    return data;
})