"use server";

import { CreateDomainInput, createDomainSchema } from "./schema";

export async function addDomain(url: CreateDomainInput) {
	const parsed = createDomainSchema.safeParse(url);

	if (!parsed.success) {
		return { data: null, error: { message: parsed.error.issues[0].message } };
	}
	//Write to DB
	return null;
}

export async function getDomain() {
	// Read from DB
	return null;
}

export async function removeDomain() {
	//Delete from DB
	return null;
}
