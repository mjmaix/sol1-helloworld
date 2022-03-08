# Guide

## Local Development

truffle develop

## Local Development using Ganache

NOTE: We can reuse the same dev ERC20 addresses on different networks.

1. Generate passphrase `npx mnemonics`.
1. Create `secrets.json` from `secrets.json.template`
1. Install and run Ganache.
1. Setup Ganache workspace using the same mnemonics on secrets.json

### Commands

    truffle compile
    truffle test

    truffle console --network ropsten
    > migrate --reset
    > await web3.eth.getAccounts()
    > await web3.eth.getBalance("...")

## Migration (deployment to public networks)

NOTE: This should be scripted inside `package.json` `scripts` section and saved to `deploy.log` so that we can easily get back to the output.

Example for network `bsctestnet`: `npm run deploy:bsctestnet`

## Verify

NOTE: Verify is still done manually after deployment. (Not yet aware how to autmate this.)

Take the contract / token names address after deployment. HINT: in `deploy.log` if previous guide was used.

    truffle run verify HelloWorld@0x1d17.... HelloWorldPermanent@0x3973... --network bsctestnet  2>&1 | tee -a deploy.log
    

## Useful Links

https://trufflesuite.com/ganache/index.html - Ganache

https://bscscan.com/apis - api keys for bscscan.com
