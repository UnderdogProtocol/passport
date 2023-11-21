# @underdog-protocol/passport

A package to retrieve the passport address with specified namespace + identifier and activate Passports within a Domain.

## Installation

To install the package, run the following command:

```bash
npm install @underdog-protocol/passport
```

or with Yarn:

```bash
yarn add @underdog-protocol/passport
```

## Usage

Basic examples of how to use the `@underdog-protocol/passport` package

### `getPassportAddress`

```javascript
import { getPassportAddress } from "@underdog-protocol/passport";

const seeds = {
  identifier: "your@email.com", // required
  namespace: "underdog", // optional
};

const address = getPassportAddress(seeds);
console.log(address);
```

### `activatePassport`

```javascript
import { Keypair, Transaction } from "@solana/web3.js";
import { activatePassportInstruction } from "@underdog-protocol/passport";

const seeds = {
  identifier: "your@email.com", // required
  namespace: "underdog", // optional
};

// Keypair for your Domain authority
const domainAuthority = Keypair.generate();

// User's wallet needs to sign the transaction
const passportAuthority = Keypair.generate();

const instruction = activatePassportInstruction(
  seeds,
  domainAuthority.publicKey,
  passportAuthority.publicKey
);

new Transaction().add(instruction);
```

## Parameters

- `seeds`: An object containing the following properties:
  - `identifier` (required): The identifier for the passport address (i.e. email, Reddit username, Twitter handle).
  - `namespace` (optional): The namespace for the address (e.g. Solarplex, Sporting, Sphere). It can default to process.env.NEXT_PUBLIC_NAMESPACE for Next.js projects, process.env.NAMESPACE, or you can override it each time. If not provided, it will default to "public".

## Environment Variables

- `NEXT_PUBLIC_NAMESPACE`: Set this environment variable in Next.js projects to specify the default namespace.
- `NAMESPACE`: Alternatively, set this environment variable to specify the default namespace.

## Contributing

For any issues, questions, or suggestions, please open an issue in the GitHub repository.
