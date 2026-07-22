import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(12, "At least 12 characters"),
});

export const signupSchema = loginSchema
	.extend({
		name: z.string().min(2),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do no match",
		path: ["confirmPassword"],
	});

export const forgotPasswordSchema = z.object({
	email: z.string().email("Invalid email address"),
});

export const resetPasswordSchema = z
	.object({
		password: z.string().min(12, "At least 12 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do no match",
		path: ["confirmPassword"],
	});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
