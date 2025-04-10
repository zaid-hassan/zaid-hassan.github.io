import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTab: 'home',
}

export const tabSlice = createSlice({
    name: 'tabSlice',
    initialState,
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload;
        },
    }
})

export const {setSelectedTab} = tabSlice.actions;
export default tabSlice.reducer;