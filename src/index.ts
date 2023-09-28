import { createUmi } from "@metaplex-foundation/umi";
import { findLinkPda } from "@underdog-protocol/underdog-identity-sdk";

const context = createUmi();

type SeedsInput = {
  namespace?: string;
  identifier: string;
}

export const getPassportAddress = (seeds: SeedsInput) => {
  const namespace =
    seeds.namespace ||
    process.env.NAMESPACE ||
    process.env.NEXT_PUBLIC_NAMESPACE ||
    "public";

  return findLinkPda(context, { ...seeds, namespace })[0];
};