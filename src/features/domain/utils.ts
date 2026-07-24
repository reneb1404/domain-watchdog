import type { DnsCheckSummary, SslCheckSummary } from "./types";

export function getSslBadgeProps(ssl: SslCheckSummary) {
	if (ssl.status === "error" || ssl.status === "unknown") {
		return { label: "Unknown", tone: "neutral" as const };
	}
	if (ssl.daysRemaining === null) {
		return { label: "Unknown", tone: "neutral" as const };
	}

	if (ssl.daysRemaining <= 0) {
		return { label: "Expired", tone: "error" as const };
	}

	if (ssl.daysRemaining <= 7) {
		return {
			label: `Expires (${ssl.daysRemaining}d)`,
			tone: "error" as const,
			pulse: true,
		};
	}
	if (ssl.daysRemaining <= 30) {
		return {
			label: `Expires (${ssl.daysRemaining}d)`,
			tone: "warning" as const,
		};
	}
	return { label: `Valid (${ssl.daysRemaining}d)`, tone: "success" as const };
}

export function getDnsBadgeProps(dns: DnsCheckSummary) {
	if (dns.status === "error") {
		return { label: "Check failed", tone: "neutral" as const };
	}
	return dns.changed
		? { label: "Changed!", tone: "error" as const, pulse: true }
		: { label: "No Change", tone: "success" as const };
}
