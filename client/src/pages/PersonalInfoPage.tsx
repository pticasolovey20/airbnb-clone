import { FC } from "react";
import { useAppSelector } from "../hooks";

import { MarkupPageComponent } from "../components/markup-components";
import { IconSelectorComponent } from "../components/icon-selector";

import { classNames } from "../utils";
import { accountFields, rigthFrames } from "../constants";
import { styles } from "../styles/styles";

export const PersonalInfoPage: FC = (): JSX.Element => {
	const { isMobile } = useAppSelector((state) => state.appReducer);
	const { user } = useAppSelector((state) => state.userReducer);

	return (
		<MarkupPageComponent>
			<div className="flex flex-col gap-4">
				<div className="text-start flex flex-col gap-1 mt-2">
					<p className="">Account</p>
					<h1 className="text-4xl text-silver-one">Personal information</h1>
				</div>
				<div className={classNames(isMobile ? "grid-cols-1" : "grid-cols-3", "grid gap-4")}>
					<div className={classNames(isMobile ? "col-span-1" : "col-span-2 pr-8", "text-start")}>
						<div className="py-6 border-b border-gray-600">
							<div className="flex justify-between">
								<p>Name on the documents</p>
								<button className="underline">Edit</button>
							</div>
							<p className="text-silver-one">{user?.name}</p>
						</div>
						<div className="py-6 border-b border-gray-600">
							<div className="flex justify-between">
								<p>Email address</p>
								<button className="underline">Edit</button>
							</div>
							<p className="text-silver-one">{user?.email}</p>
						</div>
						{accountFields.map((element) => (
							<div key={element.headText} className="py-6 border-b border-gray-600">
								<div className="flex justify-between">
									<p>{element.headText}</p>
									<button className="underline">{element.button}</button>
								</div>
								<p className="text-silver-one">{element.subText}</p>
							</div>
						))}
					</div>
					{!isMobile && (
						<div className={classNames("col-span-1", styles.frames)}>
							<div className={classNames("col-span-1 flex flex-col gap-6 p-6 rounded-lg", styles.frames)}>
								{rigthFrames.map((element) => (
									<div
										key={element.id}
										className={classNames(
											"flex flex-col gap-3 text-start",
											element.id !== 3 && "border-b border-gray-600 pb-6"
										)}
									>
										<IconSelectorComponent icon={element.icon!} size={72} />
										<h1 className="text-xl font-semibold">{element.headText}</h1>
										<p className="text-[14px] text-silver-one">{element.subText}</p>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</MarkupPageComponent>
	);
};
