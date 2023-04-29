import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	width: window.innerWidth,
	isMobile: false,
	isOpen: false,
} as appState;

interface appState {
	width: number;
	isMobile: boolean;
	isOpen: boolean;
}

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setWidthAction(state, action: PayloadAction<number>) {
			state.width = action.payload;
		},
		setIsMobileAction(state, action: PayloadAction<boolean>) {
			state.isMobile = action.payload;
		},
		setIsOpenAction(state, action: PayloadAction<boolean>) {
			state.isOpen = action.payload;
		},
	},
});

export const { setWidthAction, setIsMobileAction, setIsOpenAction } = appSlice.actions;
export default appSlice.reducer;
