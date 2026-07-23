import { ResetPasswordEmail } from "@/features/auth/email/ResetPasswordEmail";
import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { sendEmail } from "./mail/send-email";

export const auth = betterAuth({
	database: new Pool({
		connectionString: process.env.DATABASE_URL,
	}),
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({ user, url }) => {
			await sendEmail({
				to: user.email,
				subject: "Reset password",
				react: ResetPasswordEmail({ resetUrl: url }),
			});
		},
	},
});
