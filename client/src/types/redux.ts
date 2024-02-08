import {Store }from "../redux/store";

export type RootState = ReturnType<typeof Store.getState>;