# Stellar Escrow Smart Contract

## Setup

This is an example of how to create a smart contract in Stellar Network, just follow the instructions below:

1. Install NodeJS
2. Clone git repository
3. In project folder run `npm install`
4. Copy .env.example into a .env
5. Go to [Stellar Laboratory](https://laboratory.stellar.org/#account-creator?network=test) and create 2 accounts, copy their public and secret keys to .env for Bob and Alice
6. Fund those accounts using Stellar Friendbot
7. Create a third account for the Escrow and copy it into the .env

At this point, you can run `npm start` to interact with the smart contract.

## How To use

To show how it works, run the scripts in the following order and after each operation check account status and transactions on https://stellar.expert/explorer

### Alice

1. Create the escrow account
2. Setup multisignature 
3. Punt money into escrow
4. Prepare trasaction to pay Bob
5. Sign trasaction to unlock money into the escrow.

### Bob

1. Sign transaction ad get money

## Credits

Based on [https://github.com/ernestognw/stellar-escrow](https://github.com/ernestognw/stellar-escrow) repository and video tutorial [https://www.youtube.com/watch?v=75GDzoslesE](https://www.youtube.com/watch?v=75GDzoslesE) by Ernesto Garcia.
