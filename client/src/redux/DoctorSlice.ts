import { createSlice } from "@reduxjs/toolkit";

const DoctorsSlice = createSlice({
    name: "DoctorsSlice",
    initialState: {
        doctors: [],
    },
    reducers: {
        setDoctors: (state, action) => {
            state.doctors = action.payload;
        },
    },
});

export const { setDoctors } = DoctorsSlice.actions;
export default DoctorsSlice.reducer;
