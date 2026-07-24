import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { AuthLayout } from "./AuthLayout";

export function InvalidResetLink() {
	return (
		<AuthLayout>
			<Card title="Invalid link">
				<p className="text-sm text-base-content/70 mb-4">
					This password reset link is invalid or has expired. Please request a
					new link.
				</p>
				<Link href="/forgot-password" className="btn btn-primary w-full">
					Request new link
				</Link>
			</Card>
		</AuthLayout>
	);
}
