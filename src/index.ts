import { createUmi } from "@metaplex-foundation/umi";
import { web3JsEddsa } from "@metaplex-foundation/umi-eddsa-web3js";
import { defaultProgramRepository } from "@metaplex-foundation/umi-program-repository";
import {
  createUnderdogIdentityProgram,
  findLinkPda,
} from "@underdog-protocol/underdog-identity-sdk";

const context = createUmi();

context.use(defaultProgramRepository());
context.use(web3JsEddsa());

context.programs.add(createUnderdogIdentityProgram());

type SeedsInput = {
  namespace?: string;
  identifier: string;
};

export const getPassportAddress = (seeds: SeedsInput) => {
  const namespace =
    seeds.namespace ||
    process.env.NAMESPACE ||
    process.env.NEXT_PUBLIC_NAMESPACE ||
    "public";

  return findLinkPda(context, { ...seeds, namespace })[0];
};
