# @underdog-protocol/passport

A package to retrieve the passport address with specified namespace and identifier.

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

Below is a basic example of how to use the @underdog-protocol/passport package:

```javascript
import { getPassportAddress } from "@underdog-protocol/passport";

const seeds = {
  identifier: "your@email.com", // required
  namespace: "underdog", // optional
};

const address = getPassportAddress(seeds);
console.log(address);
```

## Parameters

- `seeds`: An object containing the following properties:
  - `identifier` (required): The identifier for the passport address (i.e. email, Reddit username, Twitter handle).
  - `namespace` (optional): The namespace for the address (e.g. Solarplex, Sporting, Sphere). It can default to process.env.NEXT_PUBLIC_NAMESPACE for Next.js projects, process.env.NAMESPACE, or you can override it each time. If not provided, it will default to "public".

## Example

```javascript
import { getPassportAddress } from "@underdog-protocol/passport";

const seeds = {
  identifier: "your@email.com",
};

const address = getPassportAddress(seeds);
console.log(address);
```

In this example, the namespace will default to "public" if no environment variable is set.

## Environment Variables

- `NEXT_PUBLIC_NAMESPACE`: Set this environment variable in Next.js projects to specify the default namespace.
- `NAMESPACE`: Alternatively, set this environment variable to specify the default namespace.

## Contributing

For any issues, questions, or suggestions, please open an issue in the GitHub repository.
