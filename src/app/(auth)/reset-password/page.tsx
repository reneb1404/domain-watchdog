import { Card } from "@/components/ui/Card";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { InvalidResetLink } from "@/features/auth/components/InvalidResetLink";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";

export default async function ResetPasswordPage({
	searchParams,
}: {
	searchParams: Promise<{ token?: string }>;
}) {
	const { token } = await searchParams;

	if (!token) return <InvalidResetLink />;

	return (
		<AuthLayout>
			<Card title="Reset Password">
				<ResetPasswordForm token={token} />
			</Card>
		</AuthLayout>
	);
}
