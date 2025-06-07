import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentType: 'default',
}

export const cursorType = createSlice({
    name: 'cursorType',
    initialState,
    reducers: {
        setCursorType: (state, action) => {
            state.currentType = action.payload;
        },
    }
})

export const {setCursorType} = cursorType.actions;
export default cursorType.reducer;