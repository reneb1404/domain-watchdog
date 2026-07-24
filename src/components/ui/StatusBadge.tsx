type BadgeTone = "success" | "warning" | "error" | "neutral";

interface StatusBadgeProps {
	label: string;
	tone: BadgeTone;
	pulse?: boolean;
}

const toneClasses: Record<BadgeTone, string> = {
	success: "badge-success",
	warning: "badge-warning",
	error: "badge-error",
	neutral: "badge-neutral",
};

export function StatusBadge({ label, tone, pulse = false }: StatusBadgeProps) {
	return (
		<span className={`badge ${toneClasses[tone]} gap-1.5 font-medium`}>
			{pulse && (
				<span className="relative flex h-2 w-2">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
					<span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
				</span>
			)}
			{label}
		</span>
	);
}
