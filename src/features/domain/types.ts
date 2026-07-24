export type CheckStatus = "ok" | "warning" | "critical" | "error" | "unknown";

export interface SslCheckSummary {
	status: CheckStatus;
	daysRemaining: number | null;
	validTo: string | null; // ISO-Date
	checkedAt: string;
}

export interface DnsCheckSummary {
	status: CheckStatus;
	changed: boolean;
	changedFields?: string[]; // z.B. ["A", "MX"]
	checkedAt: string;
}

export interface DomainWithChecks {
	id: string;
	hostname: string;
	createdAt: string;
	ssl: SslCheckSummary;
	dns: DnsCheckSummary;
}
