import { ReactNode } from "react";

// components props

export interface IMarkupProps {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
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
	className?: string;
}

export interface IModalButtonProps {
	label: string;
	type?: "button" | "submit" | "reset";
	onClick: () => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: string;
}

export interface IModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title: string;
	body: ReactNode;
	actionLabel: string;
	footer: ReactNode;
	disabled: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

export interface IInputProps {
	id: string;
	label: string;
	type?: string;
	disabled: boolean;
	formatPrice?: boolean;
	required: boolean;
	register: any;
	errors: any;
}

export interface IHeadingProps {
	title: string;
	subTitle: string;
	center?: boolean;
}

//

export interface IMenuItem {
	id: number;
	icon?: string;
	route?: string;
	label?: string;
	action?: () => void;
}

export interface IUserData {
	email: string;
	name?: string;
	password: string;
}

export interface IFrames {
	id: number;
	icon: string;
	route?: string;
	headText: string;
	subText: string;
}

export interface IFields {
	headText: string;
	subText: string;
	button: string;
}
