import { FC } from "react";

import { IconSelectorComponent } from "../../../icon-selector";

import { classNames } from "../../../../utils";
import { IInputProps } from "../../../../types";

export const InputComponent: FC<IInputProps> = ({
	id,
	label,
	type,
	disabled,
	formatPrice,
	required,
	register,
	errors,
}: IInputProps): JSX.Element => {
	return (
		<div className="w-full relative">
			{formatPrice && (
				<IconSelectorComponent
					icon="square"
					size={24}
					className="text-neutral-700 absolute top-5 left-2"
				/>
			)}
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				type={type}
				className={classNames(
					"peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed",
					formatPrice ? "pl-9" : "pl-4",
					errors[id] ? "border-rose-500" : "border-neutral-300",
					errors[id] ? "focus:border-rose-500" : "focus:border-black"
				)}
			/>
			<label
				className={classNames(
					"absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]",
					formatPrice ? "left-9" : "left-4",
					"peer-placeholder-shown:scale-100",
					"peer-placeholder-shown:translate-y-0",
					"peer-focus:scale-75",
					"peer-focus:-translate-y-4",
					errors[id] ? "text-rose-500" : "text-zinc-400"
				)}
			>
				{label}
			</label>
		</div>
	);
};
