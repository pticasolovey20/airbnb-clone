import { FC, useMemo, useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setIsOpenAction, setLogModalAction, setRegModalAction } from "../../../store/slices/appSlice";
import { logoutAction } from "../../../store/slices/userSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { IconSelectorComponent } from "../../icon-selector";

import { menuVariants } from "../../../motion/variants";
import { IMenuItem } from "../../../types";
import { classNames } from "../../../utils";

export const MenuComponent: FC = (): JSX.Element => {
	const ref = useRef<HTMLDivElement | null>(null);
	const { user } = useAppSelector((state) => state.userReducer);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && (ref.current as Node).contains(event.target as Node)) {
				dispatch(setIsOpenAction(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	const menu = useMemo(() => {
		if (user) {
			return [
				{ id: 1, icon: "home", route: "/", label: "Home" },
				{ id: 2, icon: "profile", route: "/account-settings", label: "Profile" },
				{ id: 3, icon: "travels", route: "/bookings", label: "Bookings" },
				{ id: 4, icon: "places", route: "/places", label: "My accommodations" },
				{ id: 5, icon: "logout", action: () => dispatch(logoutAction()), label: "Logout" },
				{ id: 6, icon: "settings", route: "/settings", label: "Settings" },
			];
		} else {
			return [
				{ id: 1, action: () => dispatch(setLogModalAction(true)), label: "Login" },
				{ id: 2, action: () => dispatch(setRegModalAction(true)), label: "Sign Up" },
			];
		}
	}, [user]);

	const handleClick = useCallback(
		(element: IMenuItem) => {
			return element.action ? element.action() : navigate(element.route!);
		},
		[navigate]
	);

	return (
		<motion.div
			ref={ref}
			className="absolute top-[75px] right-0 flex flex-col py-2 gap-2 z-10"
			variants={menuVariants}
			initial="closed"
			animate="open"
			exit="closed"
		>
			{menu.map((element: IMenuItem) => {
				const variant = {
					hidden: {
						opacity: 0,
						y: -20 * element.id,
					},
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.1 * element.id,
						},
					},
				};

				return (
					<div className="flex justify-end" key={element.id}>
						<div className="hover:-translate-x-3 duration-300">
							<motion.button
								className={classNames(
									"flex items-center gap-2 px-3 pl-6 py-2 rounded-2xl bg-[#161616] shadow-md shadow-black",
									"hover: shadow-md hover:shadow-blue-600/50 hover:text-blue-600"
								)}
								onClick={() => handleClick(element)}
								variants={variant}
								initial="hidden"
								animate="visible"
								whileTap={{ scale: 0.95 }}
							>
								{element.label}
								<IconSelectorComponent icon={element.icon!} size={24} />
							</motion.button>
						</div>
					</div>
				);
			})}
		</motion.div>
	);
};
