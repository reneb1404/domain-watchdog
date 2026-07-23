"use client";

import { Input } from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { passwordReset } from "../lib/auth-actions";
import { ResetPasswordInput, resetPasswordSchema } from "../lib/schema";

export function ResetPasswordForm() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ResetPasswordInput>({
		resolver: zodResolver(resetPasswordSchema),
	});

	async function onSubmit(input: ResetPasswordInput) {
		if (!token) return;
		const { error } = await passwordReset(input);
		if (error) return;
		router.push("/login");
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="New password"
				type="password"
				error={errors.password?.message}
				{...register("password")}
			/>
			<Input
				label="Confirm password"
				type="password"
				error={errors.confirmPassword?.message}
				{...register("confirmPassword")}
			/>
			<button
				type="submit"
				className="btn btn-primary w-full mt-2"
				disabled={isSubmitting}
			>
				Reset password
			</button>
		</form>
	);
}
