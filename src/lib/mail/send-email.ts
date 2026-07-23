import { resend } from "@/helpers/email/resend";

interface SendEmailParams {
	to: string;
	subject: string;
	react?: React.ReactElement;
	text?: string;
}

export async function sendEmail({ to, subject, react, text }: SendEmailParams) {
	const { data, error } = await resend.emails.send({
		from: "Watchdog <no-reply@rbucher.io>",
		to: [to],
		subject,
		react,
		text,
	});

	if (error) {
		console.error("Failed to send email.", error);
		throw new Error("Failed to send email.");
	}

	return data;
}
