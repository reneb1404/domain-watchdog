import { StatusBadge } from "@/components/ui/StatusBadge";
import { DomainWithChecks } from "../types";
import { getDnsBadgeProps, getSslBadgeProps } from "../utils";
import { DomainRowActions } from "./DomainRowActions";

interface DomainTableRowProps {
	domain: DomainWithChecks;
	onRecheck: (domainId: string) => void;
	onDelete: (domainId: string) => void;
}

export function DomainTableRow({
	domain,
	onRecheck,
	onDelete,
}: DomainTableRowProps) {
	const sslBadge = getSslBadgeProps(domain.ssl);
	const dnsBadge = getDnsBadgeProps(domain.dns);

	return (
		<tr className="hover:bg-base-300 transition-colors border-b border-base-200 last:border-none">
			<td className="align-middle font-mono text-sm font-medium py-3 px-4">
				{domain.hostname}
			</td>
			<td className="align-middle py-3 px-4">
				<StatusBadge {...sslBadge} />
			</td>

			<td className="align-middle py-3 px-4">
				<StatusBadge {...dnsBadge} />
			</td>
			<td className="align-middle text-right py-3 px-4">
				<DomainRowActions
					domainId={domain.id}
					onRecheck={onRecheck}
					onDelete={onDelete}
				/>
			</td>
		</tr>
	);
}
