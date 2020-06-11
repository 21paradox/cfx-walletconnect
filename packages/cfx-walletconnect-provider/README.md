# cfx-walletconnect-Provider

**[WalletConnect]** js-conflux-sdk provider for Conflux Network.

---

### Install

``` bash
npm install cfx-walletconnect-provider --save

# or
yarn add cfx-walletconnect-provider
```

### Usage

``` javascript
import WalletConnectCfx from 'cfx-walletconnect-client'
import WalletConnectProviderCfx from 'cfx-walletconnect-provider'
import * as Cfx from 'js-conflux-sdk/dist/js-conflux-sdk.umd.min.js';

const connector = new WalletConnectCfx({ bridge: "https://bridge.walletconnect.org" }); 
const wcProviderCfx = new WalletConnectProviderCfx('http://fullnode-api', connector)

const cfx = new Cfx.Conflux();
cfx.provider = wcProviderCfx;

// send txn
const txnPromise = cfx.sendTransaction({
  chainId: 0,
  from: address,
  to: '0x1...',
  value: Cfx.util.unit.fromCFXToDrip(0.1),
});

// wallet side need implement cfx_signTransaction to sign

await txnPromise.confirmed({ delta: 3000 });

```

### Changelog

### License

[MIT]