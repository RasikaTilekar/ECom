import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../API/AxiosAPI";

const initialState = {
    data: []
}

const electronicsSlice = createSlice({
    name: "electronics",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getElectronicsData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default electronicsSlice.reducer;

export const getElectronicsData = createAsyncThunk('products/categery/electronics', async () => {
    const electronis = axios.getElectronics();
    const data = (await electronis).data;
    return data;
})