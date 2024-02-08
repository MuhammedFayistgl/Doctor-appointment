import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/userType";
type stateType = {
    user: UserType | null;
};
const state: stateType = {
    user: null,
};
const userSlice = createSlice({
    name: "user",
    initialState: state,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
