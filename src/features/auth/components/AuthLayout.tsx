import { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
			<div className="w-full max-w-sm">{children}</div>
		</div>
	);
}
