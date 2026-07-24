import { StatCard } from "@/components/ui/StatCard";

export function DomainStatsRow() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 m-4">
			<StatCard label="Total" value={12} />
			<StatCard label="Error" value={4} variant="error" />
			<StatCard label="Issues" value={6} variant="warning" />
		</div>
	);
}
