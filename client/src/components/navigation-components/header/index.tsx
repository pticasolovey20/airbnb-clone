import { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setIsOpenAction, setRegModalAction } from "../../../store/slices/appSlice";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { MarkupMenuComponent } from "../../markup-components";
import { HeaderButtonComponent } from "../button";
import { ActionButtonComponent } from "../action-button";
import { MenuButtonComponent } from "../menu-button";
import { IconSelectorComponent } from "../../icon-selector";
import { MenuComponent } from "../menu";
import { BottomMenuComponent } from "../bottom-menu";

import { classNames } from "../../../utils";
import { headerButtons } from "../../../constants";

export const HeaderComponent: FC = (): JSX.Element => {
	const ref = useRef<HTMLButtonElement | null>(null);

	const { width, isMobile, isOpen } = useAppSelector((state) => state.appReducer);
	const { user } = useAppSelector((state) => state.userReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !(ref.current as Node).contains(event.target as Node)) {
				dispatch(setIsOpenAction(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	if (isMobile) {
		return <BottomMenuComponent />;
	}

	const onUserClick = () => (!user ? dispatch(setRegModalAction(true)) : console.log("user"));

	return (
		<header
			className={classNames(
				isMobile && "hidden",
				width > 870 && "grid grid-cols-3",
				width <= 870 && "flex justify-between",
				"sticky top-0 flex py-4 z-10 bg-primary"
			)}
		>
			{width > 870 && (
				<div className="flex justify-start">
					<Link to="/" className="flex items-center gap-1">
						<span className="font-bold text-2xl uppercase">booking</span>{" "}
					</Link>
				</div>
			)}
			<div className="flex justify-center">
				<MarkupMenuComponent>
					{headerButtons.map((button, index) => (
						<HeaderButtonComponent
							key={index}
							buttons={headerButtons}
							button={button}
							index={index}
						/>
					))}
				</MarkupMenuComponent>
			</div>
			<div className="flex justify-end items-center gap-4">
				<ActionButtonComponent
					icon="lang"
					size={24}
					text="Languages"
					className="flex gap-1"
					handleClick={() => {}}
				/>
				<MarkupMenuComponent className="gap-2">
					<MenuButtonComponent />
					<AnimatePresence>
						{!isOpen && (
							<motion.button
								className="ml-2 border border-gray-500 rounded-full bg-gray-500 overflow-hidden"
								onClick={onUserClick}
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								transition={{
									type: "tween",
									stiffness: 260,
									damping: 10,
								}}
							>
								<IconSelectorComponent icon="user" size={24} />
							</motion.button>
						)}
					</AnimatePresence>
				</MarkupMenuComponent>
			</div>
			{isOpen && <MenuComponent />}
		</header>
	);
};
