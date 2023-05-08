import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { HeaderComponent } from "../navigation-components/header";
import { ToasterProvider } from "../../provider/ToasterProvider";
import { RegModalComponent } from "../navigation-components/modals/reg-modal";
import { LoginModalComponent } from "../navigation-components/modals/log-modal";
import { useAppSelector } from "../../hooks";

export const RootLayoutComponent: FC = (): JSX.Element => {
	return (
		<div className="min-h-screen px-4">
			<HeaderComponent />
			<ToasterProvider />
			<RegModalComponent />
			<LoginModalComponent />
			<Outlet />
		</div>
	);
};

export const PrivateRouteComponent: FC = (): JSX.Element => {
	const { user } = useAppSelector((state) => state.userReducer);

	return user ? <Outlet /> : <Navigate to="/" />;
};
