import { FC } from "react";

import { HeaderComponent } from "../navigation-components/header";
import { ToasterProvider } from "../../provider/ToasterProvider";
import { RegModalComponent } from "../navigation-components/modals/reg-modal";
import { LoginModalComponent } from "../navigation-components/modals/log-modal";

export const RootLayoutComponent: FC = (): JSX.Element => {
	return (
		<div className="min-h-screen px-4">
			<HeaderComponent />
			<ToasterProvider />
			<RegModalComponent />
			<LoginModalComponent />
		</div>
	);
};
