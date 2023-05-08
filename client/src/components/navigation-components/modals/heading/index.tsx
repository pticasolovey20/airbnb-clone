import { FC } from "react";

import { IHeadingProps } from "../../../../types";

export const HeadingComponent: FC<IHeadingProps> = ({ title, subTitle, center }: IHeadingProps): JSX.Element => {
	return (
		<div className={center ? "text-center" : "text-start"}>
			<div className="text-2xl font-bold">{title}</div>
			<div className="font-light text-gray-300 mt-2">{subTitle}</div>
		</div>
	);
};
