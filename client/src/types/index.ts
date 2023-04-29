import { ReactNode } from "react";

// components props

export interface IMarkupProps {
	children: ReactNode;
	className?: string;
}

export interface IButtonProps {
	buttons: string[];
	button: string;
	index: number;
}

export interface IActionButtonProps {
	icon: string;
	size: number;
	text: string;
	className?: string;
	handleClick?: () => void;
}

export interface IIconSelectProps {
	icon: string;
	size?: number;
}

//

export interface IMenuItem {
	id: number;
	icon: string;
	route: string;
	label?: string;
}
