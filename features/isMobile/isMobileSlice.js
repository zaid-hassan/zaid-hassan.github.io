import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobile: window.innerWidth <= 768,
}

export const isMobileSlice = createSlice({
    name: 'isMobile',
    initialState,
    reducers: {
        setIsMobile: (state, action) => {
            state.isMobile = action.payload;
        },
    }
})

export const {setIsMobile} = isMobileSlice.actions;
export default isMobileSlice.reducer;