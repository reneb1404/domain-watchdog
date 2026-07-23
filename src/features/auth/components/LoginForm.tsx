"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginWithEmail } from "../lib/auth-actions";
import { LoginInput, loginSchema } from "../lib/schema";

export default function LoginForm() {
	const router = useRouter();
	const [serverError, setServerError] = useState<string>("");
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
	});

	async function onSubmit(input: LoginInput) {
		setServerError("");

		const { error } = await loginWithEmail(input);

		if (error) {
			setServerError(error.message || "Failed to log in.");
			return;
		}

		router.push("/dashboard");
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Input
				label="Email"
				type="email"
				placeholder="name@company.com"
				error={errors.email?.message}
				{...register("email")}
			/>
			<Input
				label="Password"
				type="password"
				placeholder="••••••••"
				error={errors.password?.message}
				{...register("password")}
			/>
			<div className="flex justify-end mt-1">
				<Link
					href="/forgot-password"
					className="link link-primary text-xs font-medium no-underline hover:underline"
				>
					Forgot password?
				</Link>
			</div>

			{serverError && (
				<p role="alert" className="text-error text-sm mt-2">
					{serverError}
				</p>
			)}

			<Button type="submit" className="w-full mt-4" loading={isSubmitting}>
				Sign in
			</Button>
			<p className="text-center text-sm text-base-content/70 mt-6">
				Don't have an account?{" "}
				<Link
					href="/signup"
					className="link link-primary font-medium no-underline hover:underline"
				>
					Sign up.
				</Link>
			</p>
		</form>
	);
}
