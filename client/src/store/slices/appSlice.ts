import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	width: window.innerWidth,
	isMobile: false,
	isOpen: false,
	regModal: false,
	logModal: false,
} as appState;

interface appState {
	width: number;
	isMobile: boolean;
	isOpen: boolean;
	regModal: boolean;
	logModal: boolean;
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
		setRegModalAction(state, action: PayloadAction<boolean>) {
			state.regModal = action.payload;
		},
		setLogModalAction(state, action: PayloadAction<boolean>) {
			state.logModal = action.payload;
		},
		setModalAction(state, action: PayloadAction<boolean>) {
			state.regModal = action.payload;
			state.logModal = action.payload;
		},
	},
});

export const {
	setWidthAction,
	setIsMobileAction,
	setIsOpenAction,
	setRegModalAction,
	setLogModalAction,
	setModalAction,
} = appSlice.actions;
export default appSlice.reducer;
