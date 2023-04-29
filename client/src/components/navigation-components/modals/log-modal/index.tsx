import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
	setLogModalAction,
	setModalAction,
	setRegModalAction,
} from "../../../../store/slices/appSlice";
import { loginUser } from "../../../../store/slices/userSlice";

import { useForm } from "react-hook-form";

import { ModalComponent } from "../modal";
import { HeadingComponent } from "../heading";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";

import { IUserData } from "../../../../types";

export const LoginModalComponent = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { logModal } = useAppSelector((state) => state.appReducer);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data: IUserData) => {
		setIsLoading(true);

		dispatch(loginUser(data));

		reset();
		setIsLoading(false);
		dispatch(setModalAction(false));
	};

	const bodyContent = (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
			<HeadingComponent title="Welcome back" subTitle="Login to your account!" />
			<InputComponent
				id="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<InputComponent
				id="password"
				type="password"
				label="Password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</form>
	);

	const footerContent = (
		<div className="flex flex-col gap-4 mt-3">
			<hr />
			<ButtonComponent
				outline
				label="Continue with Google"
				icon="google"
				onClick={() => {}}
			/>
			<ButtonComponent
				outline
				label="Continue with Github"
				icon="github"
				onClick={() => {}}
			/>
			<div className="text-neutral-500 text-center font-light mt-4">
				<p>
					First time using Airbnb?
					<span
						onClick={() => {
							dispatch(setLogModalAction(false));
							dispatch(setRegModalAction(true));
						}}
						className="text-neutral-800 font-semibold cursor-pointer hover:underline"
					>
						{" "}
						Create an account
					</span>
				</p>
			</div>
		</div>
	);

	return (
		<ModalComponent
			disabled={isLoading}
			isOpen={logModal}
			title="Login"
			actionLabel="Continue"
			onClose={() => dispatch(setModalAction(false))}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};
