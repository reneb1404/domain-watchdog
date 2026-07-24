import z from "zod";

export const createDomainSchema = z.url({
	protocol: /^https?$/,
	hostname: z.regexes.domain,
});

export type CreateDomainInput = z.infer<typeof createDomainSchema>;
