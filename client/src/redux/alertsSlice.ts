import { createSlice } from "@reduxjs/toolkit";
type stateType = {
    loading:boolean
}
const state:stateType ={
    loading: false
}
const alertsSlice = createSlice({
    name: "alerts",
    initialState:state,
    reducers: {
        showLoading: (state) => {
            state.loading = true;
        },
        hideLoading: (state) => {
            state.loading = false;
        },
    },
});

export const { showLoading, hideLoading } = alertsSlice.actions;
export default alertsSlice.reducer;
