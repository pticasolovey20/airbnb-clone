import { FC } from "react";
import { IconSelectorComponent } from "../../icon-selector";
import { IActionButtonProps } from "../../../types";

export const ActionButtonComponent: FC<IActionButtonProps> = ({
	icon,
	size,
	text,
	className,
	handleClick,
}: IActionButtonProps): JSX.Element => {
	return (
		<button className={className} onClick={handleClick}>
			<IconSelectorComponent icon={icon} size={size} />
			{text}
		</button>
	);
};
