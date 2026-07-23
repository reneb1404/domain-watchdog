"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signupWithEmail } from "../lib/auth-actions";
import { SignupInput, signupSchema } from "../lib/schema";

export default function SignupForm() {
	const router = useRouter();
	const [serverError, setServerError] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupInput>({
		resolver: zodResolver(signupSchema),
	});

	async function onSubmit(input: SignupInput) {
		setServerError(null);

		const { error } = await signupWithEmail(input);

		if (error) {
			setServerError(error.message || null);
			return;
		}

		router.push("/dashboard");
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Input
				label="Name"
				type="text"
				placeholder="John Doe"
				error={errors.name?.message}
				{...register("name")}
			/>
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
			<Input
				label="ConfirmPassword"
				type="password"
				placeholder="••••••••"
				error={errors.confirmPassword?.message}
				{...register("confirmPassword")}
			/>

			{serverError && (
				<p role="alert" className="text-error text-sm mt-2">
					{serverError}
				</p>
			)}

			<Button type="submit" className="w-full mt-4" loading={isSubmitting}>
				Register
			</Button>
			<p className="text-center text-sm text-base-content/70 mt-6">
				Already have an account?{" "}
				<Link
					href="/login"
					className="link link-primary font-medium no-underline hover:underline"
				>
					Log in.
				</Link>
			</p>
		</form>
	);
}
