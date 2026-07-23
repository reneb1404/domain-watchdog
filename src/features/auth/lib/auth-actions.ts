import {
	requestPasswordReset,
	resetPassword,
	signIn,
	signOut,
	signUp,
	useSession,
} from "./auth-client";
import {
	ForgotPasswordInput,
	forgotPasswordSchema,
	LoginInput,
	loginSchema,
	ResetPasswordInput,
	resetPasswordSchema,
	SignupInput,
	signupSchema,
} from "./schema";

export async function loginWithEmail(formData: LoginInput) {
	const parsed = loginSchema.safeParse(formData);

	if (!parsed.success) {
		return { data: null, error: { message: parsed.error.issues[0].message } };
	}

	const { data, error } = await signIn.email(parsed.data);

	if (error) {
		return {
			data: null,
			error: { message: error.message ?? "Login failed" },
		};
	}

	return { data, error };
}

export async function signupWithEmail(input: SignupInput) {
	const parsed = signupSchema.safeParse(input);

	if (!parsed.success) {
		return { data: null, error: { message: parsed.error.issues[0].message } };
	}

	const { data, error } = await signUp.email({
		email: parsed.data.email,
		password: parsed.data.password,
		name: parsed.data.name,
	});

	if (error) {
		return {
			data: null,
			error: { message: error.message ?? "Failed to register" },
		};
	}

	return { data, error };
}

export async function forgetPassword(input: ForgotPasswordInput) {
	const parsed = forgotPasswordSchema.safeParse(input);

	if (!parsed.success) {
		return { data: null, error: { message: parsed.error.issues[0].message } };
	}

	const { data, error } = await requestPasswordReset({
		email: input.email,
		redirectTo: "/reset-password",
	});

	if (error) {
		return {
			data: null,
			error: {
				message: error.message ?? "Failed to send reset password email",
			},
		};
	}

	return { data, error };
}

export async function passwordReset(input: ResetPasswordInput) {
	const parsed = resetPasswordSchema.safeParse(input);

	if (!parsed.success) {
		return { data: null, error: { message: parsed.error.issues[0].message } };
	}

	const { data, error } = await resetPassword({ newPassword: input.password });

	if (error) {
		return {
			data: null,
			error: { message: error.message ?? "Failed to reset password" },
		};
	}

	return { data, error };
}

export async function logout() {
	return signOut();
}
