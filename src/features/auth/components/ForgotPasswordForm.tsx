"use client";

import { Input } from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { forgetPassword } from "../lib/auth-actions";
import { ForgotPasswordInput, forgotPasswordSchema } from "../lib/schema";

export function ForgotPasswordForm() {
	const [submitted, setSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ForgotPasswordInput>({
		resolver: zodResolver(forgotPasswordSchema),
	});

	async function onSubmit(input: ForgotPasswordInput) {
		await forgetPassword(input);
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<p className="text-sm text-center">
				If an account exists with this email address, we've sent you a link.
			</p>
		);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="E-Mail"
				type="email"
				placeholder="name@firma.de"
				error={errors.email?.message}
				{...register("email")}
			/>
			<button
				type="submit"
				className="btn btn-primary w-full mt-2"
				disabled={isSubmitting}
			>
				Request link
			</button>
		</form>
	);
}
