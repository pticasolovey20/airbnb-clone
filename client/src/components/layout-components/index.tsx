import { FC } from "react";

import { HeaderComponent } from "../navigation-components/header";

export const RootLayoutComponent: FC = (): JSX.Element => {
	return (
		<div className="min-h-screen px-4">
			<HeaderComponent />
		</div>
	);
};
