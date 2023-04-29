import { FC } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { RiHome2Line } from "react-icons/ri";
import { BsSquare } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { HiOutlinePlus } from "react-icons/hi";
import { TbMessageCircle2 } from "react-icons/tb";
import { IIconSelectProps } from "../../types";

export const IconSelectorComponent: FC<IIconSelectProps> = ({ icon, size }): JSX.Element | null => {
	switch (icon) {
		// header icons

		case "search":
			return <BiSearch size={size} />;

		case "user":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="relative top-1"
					height={size}
					width={size}
				>
					<path
						fillRule="evenodd"
						d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
						clipRule="evenodd"
					/>
				</svg>
			);

		case "lang":
			return <HiLanguage size={size} />;

		// menu icons

		case "home":
			return <RiHome2Line size={size} />;

		case "profile":
			return <BiUser size={size} />;

		case "travels":
			return <BsSquare size={size} />;

		case "places":
			return <BsSquare size={size} />;

		case "plus":
			return <HiOutlinePlus size={size} />;

		case "message":
			return <TbMessageCircle2 size={size} />;

		case "settings":
			return <SlSettings size={size} />;

		default:
			return null;
	}
};
