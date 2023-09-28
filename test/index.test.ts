import { publicKey } from "@metaplex-foundation/umi";
import { getPassportAddress } from "../src";

const email = "kevin@underdogprotocol.com";

describe("getPassportAddress", () => {
  it("should return the correct address", () => {
    const address = getPassportAddress({ namespace: "underdog", identifier: email });

    expect(address).toEqual(
      publicKey("F5CUQacfam93ou1i76MYja659vX3og8DekHviYyzCjjy")
    );
  });
});
