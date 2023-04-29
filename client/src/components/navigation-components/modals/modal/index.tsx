import { FC, useCallback, useEffect, useState } from "react";

import { IconSelectorComponent } from "../../../icon-selector";
import { ButtonComponent } from "../button";

import { classNames } from "../../../../utils";
import { IModalProps } from "../../../../types";

export const ModalComponent: FC<IModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	actionLabel,
	footer,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}: IModalProps) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}

		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 500);
	}, [onClose, disabled]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}

		onSubmit();
	}, [onSubmit, disabled]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}

		secondaryAction();
	}, [secondaryAction, disabled]);

	if (!isOpen) {
		return null;
	}

	return (
		<div className="text-black fixed flex justify-center items-center outline-none focus:outline-none overflow-x-hidden overflow-y-auto inset-0 z-50 bg-neutral-800/70">
			<div className="relative w-[80%] sm:w-[70%] md:w-[50%] lg:w-w-[40%] xl:w-[35%] 2xl:w-[30%] my-6 mx-auto">
				<div
					className={classNames(
						"h-full translate duration-500",
						showModal ? "translate-y-0" : "translate-y-full",
						showModal ? "opacity-100" : "opacity-0"
					)}
				>
					<div className="relative flex  flex-col w-full h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg translate  outline-none focus:outline-none bg-white">
						<div
							className="
                            relative flex justify-center items-center p-6 rounded-t border-b-[1px] "
						>
							<button
								className="absolute left-4 p-1 border-0 hover:opacity-70 transition"
								onClick={handleClose}
							>
								<IconSelectorComponent icon="close" size={20} />
							</button>
							<div className="text-lg font-semibold">{title}</div>
						</div>
						<div className="relative p-6 flex-auto">{body}</div>
						<div className="flex flex-col gap-2 p-6">
							<div className="flex flex-row items-center gap-4 w-full">
								{secondaryAction! && secondaryActionLabel && (
									<ButtonComponent
										disabled={disabled}
										label={secondaryActionLabel}
										onClick={handleSecondaryAction}
										outline
									/>
								)}
								<ButtonComponent
									disabled={disabled}
									label={actionLabel}
									type="submit"
									onClick={handleSubmit}
								/>
							</div>
							{footer}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
