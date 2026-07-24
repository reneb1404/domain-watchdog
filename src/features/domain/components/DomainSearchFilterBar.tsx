"use client";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { CheckStatus } from "../types";

interface DomainSearchFilterBarProps {
	searchValue?: string;
	onSearchChange?: (value: string) => void;
	statusFilter?: CheckStatus | "all";
	onStatusFilterChange?: (status: CheckStatus | "all") => void;
}

export function DomainSearchFilterBar({
	searchValue,
	onSearchChange,
	statusFilter,
	onStatusFilterChange,
}: DomainSearchFilterBarProps) {
	const filterOptions = [
		{ label: "All statuses", value: "all" },
		{ label: "Warning", value: "warning" },
		{ label: "Error", value: "error" },
	];

	return (
		<div className="flex flex-col sm:flex-row items-start gap-3 m-4">
			<div className="flex-1 w-full">
				<Input
					label=""
					placeholder="Search domains..."
					value={searchValue}
					onChange={(e) => onSearchChange?.(e.target.value)}
				/>
			</div>

			<div className="w-full sm:w-48">
				<Select
					label=""
					options={filterOptions}
					value={statusFilter}
					onChange={(e) =>
						onStatusFilterChange?.(e.target.value as CheckStatus | "all")
					}
				/>
			</div>
		</div>
	);
}
