"use client";

import { Button } from "@/components/ui/Button";

interface DomainPageHeaderProps {
	onAddDomainClick?: () => void;
}

export function DomainsPageHeader({ onAddDomainClick }: DomainPageHeaderProps) {
	return (
		<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 m-4 mb-6">
			<div>
				<h2 className="text-2xl font-bold tracking-tight">Monitored domains</h2>
				<p className="text-sm text-base-content/70 mt-1">
					Overview of your SSL certificates and DNS
				</p>
			</div>
			<Button size="sm" className="self-start sm:self-auto">
				+ Add domain
			</Button>
		</div>
	);
}
