import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";

const rootReducer = combineReducers({ appReducer });

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
