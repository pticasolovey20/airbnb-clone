import { FC } from "react";
import { IMarkupProps } from "../../types";

export const MarkupMenuComponent: FC<IMarkupProps> = ({
	children,
	className,
}: IMarkupProps): JSX.Element => {
	return (
		<div
			className={`${className} flex items-center p-2 border border-black rounded-full shadow-sm duration-500 shadow-gray-500 bg-purple-100`}
		>
			{children}
		</div>
	);
};
