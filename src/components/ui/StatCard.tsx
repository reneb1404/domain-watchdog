// components/ui/StatCard.tsx
import { Card } from "./Card";

type StatVariant = "neutral" | "warning" | "error";

interface StatCardProps {
	label: string;
	value: number | string;
	variant?: StatVariant;
}

const variantBg: Record<StatVariant, string> = {
	neutral: "bg-base-200",
	warning: "bg-warning/10",
	error: "bg-error/10",
};

const variantText: Record<StatVariant, string> = {
	neutral: "text-base-content",
	warning: "text-warning",
	error: "text-error",
};

export function StatCard({ label, value, variant = "neutral" }: StatCardProps) {
	return (
		<Card className={`${variantBg[variant]} shadow-none card-compact`}>
			<p className="text-sm opacity-70">{label}</p>
			<p className={`text-2xl font-semibold ${variantText[variant]}`}>
				{value}
			</p>
		</Card>
	);
}
