"use client";

import { Button } from "@/components/ui/Button";

interface DomainRowActionsProps {
	domainId: string;
	onRecheck: (id: string) => void;
	onDelete: (id: string) => void;
}

export function DomainRowActions({
	domainId,
	onRecheck,
	onDelete,
}: DomainRowActionsProps) {
	return (
		<div className="flex items-center justify-center gap-1.5">
			<Button variant="primary" size="xs" onClick={() => onRecheck(domainId)}>
				Check now
			</Button>
			<Button variant="error" size="xs" onClick={() => onDelete(domainId)}>
				Delete
			</Button>
		</div>
	);
}
