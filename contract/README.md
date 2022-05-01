# Sample

This repository includes a complete project structure for AssemblyScript contracts targeting the NEAR platform.

The example here is very basic.  It's a simple contract demonstrating the following concepts:
- a single contract
- the difference between `view` vs. `change` methods
- basic contract storage

The goal of this repository is to make it as easy as possible to get started writing unit tests for AssemblyScript contracts built to work with NEAR Protocol.

## Usage

### Getting started

1. clone this repo to a local folder
2. run `yarn`
3. run `yarn install`
4. run `yarn test`

### Top-level `yarn` commands

- run `yarn test` to run all tests
  - (!) be sure to run `yarn build:release` at least once before:
    - run `yarn test:unit` to run only unit tests
- run `yarn build` to quickly verify build status
- run `yarn deploy` to quickly run the `./scripts/1.deploy.sh` command to deploy smart contract
- run `yarn clean` to clean up build folder

### Other documentation

- announcement contract and test documentation
  - see `/src/announcement/README` for contract interface
  - see `/src/announcement/__tests__/README` for announcement unit testing details


### Contracts and Unit Tests

```txt
src
├── announcement                        <-- announcement contract
│   ├── README.md
│   ├── __tests__
│   │   ├── README.md
│   │   └── index.unit.spec.ts
│   └── assembly
│       └── index.ts
|       └── model.ts
└── utils.ts                      <-- shared contract code
```

### Helper Scripts

```txt
scripts
├── 1.deploy.sh
├── 2.create_announcement.sh
├── 3.get_announcement.sh
├── 4.get_announcements.sh
├── 5.delete_announcement.sh
├── 6.like_announcement.sh
├── 6.dislike_announcement.sh
└── README.md                     <-- instructions
```
## Deployed Contract Link
[Check out the deployed Smart Contract on explorer.testnet.near.org](https://explorer.testnet.near.org/transactions/2mK3h69Qsd2fyB2ZcAPzAvHMFsNsGeboTcZGSqgPx1AV)