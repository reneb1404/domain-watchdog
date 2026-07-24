import { DomainWithChecks } from "../types";
import { DomainTableRow } from "./DomainTableRow";

interface DomainsTableProps {
	domains: DomainWithChecks[];
	onRecheckDomain?: (domainId: string) => void;
	onDeleteDomain?: (domainId: string) => void;
}

export function DomainTable({
	domains,
	onRecheckDomain,
	onDeleteDomain,
}: DomainsTableProps) {
	return (
		<div className="overflow-x-auto rounded-box bg-base-100 m-4">
			{/*border-t border-x border-base-content/25 */}
			<table className="table w-full">
				<thead>
					<tr className="text-xs uppercase tracking-wider text-base-content/60 border-b border-base-200">
						<th className="py-3 px-4 text-left">Domain</th>
						<th className="py-3 px-4 text-left">SSL Status</th>
						<th className="py-3 px-4 text-left">DNS Status</th>
						<th className="py-3 px-4 text-center w-48">Actions</th>
					</tr>
				</thead>
				<tbody>
					{domains.map((domain) => (
						<DomainTableRow
							key={domain.id}
							domain={domain}
							onRecheck={
								onRecheckDomain ?? ((id) => console.log("recheck", id))
							}
							onDelete={onDeleteDomain ?? ((id) => console.log("delete", id))}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}
