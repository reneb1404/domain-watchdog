// features/auth/emails/ResetPasswordEmail.tsx
import { Button, Container, Html, Text } from "react-email";

interface ResetPasswordEmailProps {
	resetUrl: string;
}

export function ResetPasswordEmail({ resetUrl }: ResetPasswordEmailProps) {
	return (
		<Html>
			<Container>
				<Text>CLick on the link to reset your password:</Text>
				<Button href={resetUrl}>Reset password</Button>
			</Container>
		</Html>
	);
}
