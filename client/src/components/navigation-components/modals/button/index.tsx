import { FC } from "react";

import { IconSelectorComponent } from "../../../icon-selector";
import { classNames } from "../../../../utils";
import { IModalButtonProps } from "../../../../types";

export const ButtonComponent: FC<IModalButtonProps> = ({
	label,
	type,
	onClick,
	disabled,
	outline,
	small,
	icon,
}: IModalButtonProps): JSX.Element => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			className={classNames(
				"relative w-full flex items-center justify-center gap-4 transition rounded-lg hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed",
				outline ? "bg-white" : "bg-[#FF5A5F]",
				outline ? "border-black" : "border-rose-500",
				outline ? "text-black" : "text-white",
				small ? "text-sm" : "text-md",
				small ? "py-1" : "py-3",
				small ? "font-light" : "font-semibold",
				small ? "border-[1px]" : "border-2"
			)}
		>
			<IconSelectorComponent icon={icon!} size={24} />
			{label}
		</button>
	);
};
