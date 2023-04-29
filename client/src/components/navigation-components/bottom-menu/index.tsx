import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { IconSelectorComponent } from "../../icon-selector";

import { bottomMenu } from "../../../constants";

export const BottomMenuComponent: FC = (): JSX.Element => {
	return (
		<motion.div className="fixed right-0 bottom-0 min-w-full flex items-center justify-around py-4 px-2 text-sm bg-primary bg-opacity-50 backdrop-blur-lg backdrop-filter z-10">
			{bottomMenu.map((button) => {
				const variant = {
					hidden: {
						opacity: 0,
						x: -20 * button.id,
					},
					visible: {
						opacity: 1,
						x: 0,
						transition: {
							delay: 0.1 * button.id,
						},
					},
				};

				return (
					<motion.button
						key={button.id}
						variants={variant}
						initial="hidden"
						animate="visible"
						className={`${
							button.icon === "plus" && "text-secondary font-bold"
						} flex flex-col items-center gap-1 uppercase `}
					>
						<Link to={button.id === 1 ? "/" : `/account${button.route}`}>
							<IconSelectorComponent icon={button.icon} size={28} />
						</Link>
					</motion.button>
				);
			})}
		</motion.div>
	);
};
