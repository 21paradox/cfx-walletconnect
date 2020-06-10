# cfx-walletconnect-client

**[WalletConnect](https://swiperjs.com)** client for Conflux Network.


### Example
- [test Wallet](https://test-cfx-webwallet-connect.now.sh/)
- [test dapp](https://test-cfx-walletconnect-dapp.now.sh/)
- [test Wallet code](https://github.com/21paradox/walletconnect-test-wallet)
- [test dapp code](https://github.com/21paradox/walletconnect-example-dapp)

---

### Install

``` bash
npm install  @walletconnect/browser-crypto @walletconnect/utils @walletconnect/core cfx-walletconnect-client --save

# or
yarn add  @walletconnect/browser-crypto @walletconnect/utils @walletconnect/core cfx-walletconnect-client
```

### Usage

``` javascript
import WalletConnectCfx from 'cfx-walletconnect-client'

const bridge = "https://bridge.walletconnect.org";
// same api with @walletconnect/client
const connector = new WalletConnectCfx({ bridge }); 
```

### methods

#### connector.sendTransaction(tx)
call cfx_sendTransaction to remote wallet

#### connector.signTransaction(tx)
call cfx_signTransaction to remote wallet

#### connector.signMessage(params)
call cfx_sign to remote wallet


### Changelog

### License

[MIT]