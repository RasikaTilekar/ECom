import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../API/AxiosAPI";

const initialState = {
    data: []
}

const categerySlice = createSlice({
    name: 'Categery',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategery.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export default categerySlice.reducer;

export const getCategery = createAsyncThunk('products/categery', async () => {
    const category = await axios.getCategery();
    const data = category.data;
    return data;
})