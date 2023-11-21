import {
  createNoopSigner,
  createUmi,
  publicKey,
} from "@metaplex-foundation/umi";
import { web3JsEddsa } from "@metaplex-foundation/umi-eddsa-web3js";
import { defaultProgramRepository } from "@metaplex-foundation/umi-program-repository";
import { PublicKey } from "@solana/web3.js";
import {
  activatePassportV0,
  createUnderdogIdentityProgram,
  findLinkPda,
} from "@underdog-protocol/underdog-identity-sdk";

import { toWeb3JsTransaction } from "@metaplex-foundation/umi-web3js-adapters";

const context = createUmi();

context.use(defaultProgramRepository());
context.use(web3JsEddsa());

context.programs.add(createUnderdogIdentityProgram());

type SeedsInput = {
  namespace?: string;
  identifier: string;
};

const getNamespaceFromSeeds = (seeds: SeedsInput) => {
  return (
    seeds.namespace ||
    process.env.NAMESPACE ||
    process.env.NEXT_PUBLIC_NAMESPACE ||
    "public"
  );
};

export const getPassportAddress = (seeds: SeedsInput) => {
  const namespace = getNamespaceFromSeeds(seeds);

  return findLinkPda(context, { ...seeds, namespace })[0];
};

export const activatePassport = (
  seeds: SeedsInput,
  domainAuthority: PublicKey,
  passportAuthority: PublicKey
) => {
  const namespace = getNamespaceFromSeeds(seeds);

  return toWeb3JsTransaction(
    activatePassportV0(context, {
      ...seeds,
      namespace,
      domainAuthority: createNoopSigner(publicKey(domainAuthority)),
      passportAuthority: createNoopSigner(publicKey(passportAuthority)),
    }).build(context)
  );
};
