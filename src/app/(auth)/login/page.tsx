import { Card } from "@/components/ui/Card";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
	return (
		<AuthLayout>
			<Card>
				<LoginForm />
			</Card>
		</AuthLayout>
	);
}
