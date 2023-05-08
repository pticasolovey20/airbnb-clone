import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";

import { MarkupPageComponent } from "../components/markup-components";
import { IconSelectorComponent } from "../components/icon-selector";

import { classNames } from "../utils";
import { styles } from "../styles/styles";

import { accountFrames } from "../constants";

export const AccountSettingsPage: FC = (): JSX.Element => {
	const { user } = useAppSelector((state) => state.userReducer);
	const { isMobile } = useAppSelector((state) => state.appReducer);

	return (
		<MarkupPageComponent>
			<div className="flex flex-col gap-2 mt-16">
				<h1 className="text-3xl text-start">Account</h1>
				<div
					className={classNames(isMobile && "flex-col", isMobile ? "items-start" : "items-end", "flex gap-2")}
				>
					<p className="font-semibold text-[18px]">{user?.name}</p>
					<p className="text-silver-one">{user?.email}</p>
					<Link to="/account-settings/personal-info" className="underline font-semibold">
						Go to profile
					</Link>
				</div>
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{accountFrames.map((element) => (
					<Link
						to={element.route}
						key={element.id}
						className={classNames(
							"w-full flex flex-col gap-6 p-4 text-start text-white rounded-lg cursor-pointer",
							styles.frames
						)}
					>
						<div className="flex-1">
							<IconSelectorComponent icon={element.icon} size={32} />
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="text-lg font-semibold">{element.headText}</h1>
							<p className="text-silver-one">{element.subText}</p>
						</div>
					</Link>
				))}
			</div>
		</MarkupPageComponent>
	);
};
