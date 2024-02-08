import DoctorsSlice from "./DoctorSlice";
import { configureStore } from "@reduxjs/toolkit";

import alertsSlice from "./alertsSlice";
import userSlice from "./userSlice";

export const Store = configureStore({
    reducer: {
        userSlice,
        alerts: alertsSlice,
        Doctors:DoctorsSlice,
    },
});
