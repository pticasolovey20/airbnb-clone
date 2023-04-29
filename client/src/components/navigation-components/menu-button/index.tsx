import { FC, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setIsOpenAction } from "../../../store/slices/appSlice";
import { motion } from "framer-motion";

const Path = (props: any) => (
	<motion.path
		fill="transparent"
		strokeWidth="2"
		stroke="white"
		strokeLinecap="round"
		{...props}
	/>
);

export const MenuButtonComponent: FC = (): JSX.Element => {
	const ref = useRef<HTMLButtonElement | null>(null);

	const { isOpen } = useAppSelector((state) => state.appReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !(ref.current as Node).contains(event.target as Node)) {
				dispatch(setIsOpenAction(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	}, [isOpen]);

	return (
		<motion.button
			ref={ref}
			onClick={() => dispatch(setIsOpenAction(!isOpen))}
			className="text-white"
			whileHover={{ scale: 0.85 }}
			whileTap={{ scale: 0.85 }}
		>
			<svg className="h-6 w-6">
				<Path
					variants={{
						closed: { d: "M 4 5 L 20 5" },
						open: { d: "M 5 18 L 18 5" },
					}}
					animate={isOpen ? "open" : "closed"}
				/>
				<Path
					d="M 4 12 L 20 12"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.2 }}
					animate={isOpen ? "open" : "closed"}
				/>
				<Path
					variants={{
						closed: { d: "M 4 19 L 20 19" },
						open: { d: "M 5 5 L 18 18" },
					}}
					animate={isOpen ? "open" : "closed"}
				/>
			</svg>
		</motion.button>
	);
};
