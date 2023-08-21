import { createSlice } from '@reduxjs/toolkit'

const langSlice = createSlice({
    name: 'lang',
    initialState: { lang: "en" },
    reducers: {
        selectLang: (state, action) => {
            console.log('action.payload ', action.payload)
            state.lang = action.payload
        }
    }
})

export const langSelected = state => state.langSelect;

export const { selectLang } = langSlice.actions;

export default langSlice.reducer;