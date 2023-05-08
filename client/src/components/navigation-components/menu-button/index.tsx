import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import { motion } from "framer-motion";

const Path = (props: any) => (
	<motion.path fill="transparent" strokeWidth="2" stroke="white" strokeLinecap="round" {...props} />
);

export const MenuButtonComponent: FC = (): JSX.Element => {
	const { isOpen } = useAppSelector((state) => state.appReducer);

	return (
		<motion.button className="text-white" whileHover={{ scale: 0.85 }} whileTap={{ scale: 0.85 }}>
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
