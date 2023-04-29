import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setIsMobileAction, setWidthAction } from "./store/slices/appSlice";
import { Routes, Route } from "react-router-dom";

import { RootLayoutComponent } from "./components/layout-components";

export const App = () => {
	const dispatch = useAppDispatch();

	const { width } = useAppSelector((state) => state.appReducer);

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
				<Route path="/" element={<RootLayoutComponent />}></Route>
			</Routes>
		</div>
	);
};
