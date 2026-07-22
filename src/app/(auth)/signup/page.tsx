import { Card } from "@/components/ui/Card";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import SignupForm from "@/features/auth/components/SignupForm";

export default function SignupPage() {
	return (
		<AuthLayout>
			<Card>
				<SignupForm />
			</Card>
		</AuthLayout>
	);
}
