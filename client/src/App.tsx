import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setIsMobileAction, setWidthAction } from "./store/slices/appSlice";
import { fetchUser } from "./store/slices/userSlice";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { PrivateRouteComponent, RootLayoutComponent } from "./components/layout-components";

import { AccountSettingsPage } from "./pages/AccountSettingsPage";
import { PersonalInfoPage } from "./pages/PersonalInfoPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export const App = () => {
	const dispatch = useAppDispatch();

	const { width } = useAppSelector((state) => state.appReducer);

	useEffect(() => {
		dispatch(fetchUser());
	}, []);

	useEffect(() => {
		const handleResize = () => dispatch(setWidthAction(window.innerWidth));
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [dispatch]);

	useEffect(() => {
		width < 744 ? dispatch(setIsMobileAction(true)) : dispatch(setIsMobileAction(false));
	}, [width]);

	return (
		<div className="min-h-screen text-white bg-primary">
			<Routes>
				<Route path="/" element={<RootLayoutComponent />}>
					<Route element={<PrivateRouteComponent />}>
						<Route path="/account-settings" element={<AccountSettingsPage />} />
						<Route path="/account-settings/personal-info" element={<PersonalInfoPage />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
};
