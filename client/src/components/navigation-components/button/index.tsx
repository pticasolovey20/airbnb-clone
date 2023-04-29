import { FC } from "react";
import { IButtonProps } from "../../../types";
import { IconSelectorComponent } from "../../icon-selector";

export const HeaderButtonComponent: FC<IButtonProps> = ({
	buttons,
	button,
	index,
}): JSX.Element => {
	return (
		<button
			className={
				index === buttons.length - 1
					? "ml-3 p-1 rounded-full whitespace-nowrap text-white bg-pink-100"
					: "px-3 border-r-2 border-black border-opacity-50 whitespace-nowrap"
			}
		>
			{index === buttons.length - 1 ? <IconSelectorComponent icon={button} /> : button}
		</button>
	);
};
