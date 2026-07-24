"use client";

import { DomainsPageHeader } from "@/features/domain/components/DomainPageHeader";
import { DomainSearchFilterBar } from "@/features/domain/components/DomainSearchFilterBar";
import { DomainStatsRow } from "@/features/domain/components/DomainStatsRow";
import { DomainTable } from "@/features/domain/components/DomainTable";
import { DomainWithChecks } from "@/features/domain/types";

export default function DomainsPage() {
	const mockDomains: DomainWithChecks[] = [
		{
			id: "1",
			hostname: "example.com",
			createdAt: "2026-01-01T00:00:00Z",
			ssl: {
				status: "ok",
				daysRemaining: 84,
				validTo: "2026-10-13",
				checkedAt: "2026-07-21T06:00:00Z",
			},
			dns: { status: "ok", changed: false, checkedAt: "2026-07-21T06:00:00Z" },
		},
		{
			id: "2",
			hostname: "my-app.de",
			createdAt: "2026-01-01T00:00:00Z",
			ssl: {
				status: "critical",
				daysRemaining: 5,
				validTo: "2026-07-26",
				checkedAt: "2026-07-21T06:00:00Z",
			},
			dns: {
				status: "critical",
				changed: true,
				changedFields: ["A"],
				checkedAt: "2026-07-21T06:00:00Z",
			},
		},
		{
			id: "3",
			hostname: "staging.example.com",
			createdAt: "2026-01-01T00:00:00Z",
			ssl: {
				status: "warning",
				daysRemaining: 21,
				validTo: "2026-08-11",
				checkedAt: "2026-07-21T06:00:00Z",
			},
			dns: { status: "ok", changed: false, checkedAt: "2026-07-21T06:00:00Z" },
		},
	];
	return (
		<>
			<DomainsPageHeader />
			<DomainSearchFilterBar />
			<DomainStatsRow />
			<DomainTable domains={mockDomains} />
		</>
	);
}
