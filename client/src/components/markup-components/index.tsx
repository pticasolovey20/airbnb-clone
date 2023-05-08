import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { IMarkupProps } from "../../types";
import { classNames } from "../../utils";

export const MarkupMenuComponent: FC<IMarkupProps> = ({ children, className, onClick }: IMarkupProps): JSX.Element => {
	return (
		<div
			onClick={onClick}
			className={`${className} flex items-center p-2 rounded-full border-2 bg-gray-900 shadow-lg shadow-dark-one hover:shadow-xl`}
		>
			{children}
		</div>
	);
};

export const MarkupPageComponent: FC<IMarkupProps> = ({ children, className }: IMarkupProps): JSX.Element => {
	const { isMobile } = useAppSelector((state) => state.appReducer);

	return (
		<div className="flex justify-center pb-4 bg-[#0f0f0f]">
			<div
				className={classNames(
					isMobile ? "pt-4 pb-[60px] w-full" : "max-w-6xl px-8 mt-0 -mx-8",
					className,
					"flex flex-col w-full text-center gap-8"
				)}
			>
				{children}
			</div>
		</div>
	);
};
