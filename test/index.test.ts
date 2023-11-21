import { publicKey } from "@metaplex-foundation/umi";
import { activatePassportInstruction, getPassportAddress } from "../src";
import { Keypair, Transaction } from "@solana/web3.js";

const email = "kevin@underdogprotocol.com";

describe("getPassportAddress", () => {
  it("should return the correct address", () => {
    const address = getPassportAddress({
      namespace: "underdog",
      identifier: email,
    });

    expect(address).toEqual(
      publicKey("F5CUQacfam93ou1i76MYja659vX3og8DekHviYyzCjjy")
    );
  });
});

describe("activatePassportInstruction", () => {
  it("can add instruction to activate a Passport to a transaction", async () => {
    const domainAuthority = Keypair.generate();
    const passportAuthority = Keypair.generate();

    const instruction = activatePassportInstruction(
      { namespace: "underdog", identifier: email },
      domainAuthority.publicKey,
      passportAuthority.publicKey
    );

    new Transaction().add(instruction);
  });
});
