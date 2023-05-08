import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { IUserData } from "../../types";

export const registerUser = createAsyncThunk(
	"user/registerUser",
	async ({ name, email, password }: IUserData, { rejectWithValue }) => {
		try {
			const { data } = await axios.post("/register", { name, email, password });
			toast("Registration Successful");
			return { data };
		} catch (error: any) {
			if ("message" in error && typeof error.message === "string") {
				toast.error(error.message);
				return rejectWithValue({ error: error.message });
			} else {
				return rejectWithValue({ error: "An error occurred" });
			}
		}
	}
);

export const loginUser = createAsyncThunk(
	"user/loginUser",
	async ({ email, password }: IUserData, { rejectWithValue }) => {
		try {
			const { data } = await axios.post("/login", { email, password });
			toast("Login Successful");
			return data;
		} catch (error: any) {
			if ("message" in error && typeof error.message === "string") {
				toast.error(error.message);
				return rejectWithValue({ error: error.message });
			} else {
				return rejectWithValue({ error: "An error occurred" });
			}
		}
	}
);

export const fetchUser = createAsyncThunk("user/fetchUser", async (_, thunkAPI) => {
	try {
		const { data } = await axios.get("/profile");
		return data;
	} catch (error) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
});

const initialState = {
	user: null,
	error: "",
	isLoading: false,
} as IUserState;

export interface IUserState {
	user: IUserData | null;
	error: string;
	isLoading: boolean;
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginAction(state, action) {
			state.user = action.payload;
		},

		logoutAction(state) {
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		// user

		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.error = "";
		});
		builder.addCase(fetchUser.rejected, (state, action) => {
			state.error = action.payload as string;
		});

		// login

		builder.addCase(loginUser.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
			state.error = "";
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.error = action.payload as string;
		});
	},
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
