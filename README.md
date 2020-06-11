# cfx-walletconnect


## cfx-walletconnect-client

**[WalletConnect](https://swiperjs.com)** client for Conflux Network.

### Example
- [test Wallet](https://test-cfx-webwallet-connect.now.sh/)
- [test dapp](https://test-cfx-walletconnect-dapp.now.sh/)
- [test Wallet code](https://github.com/21paradox/walletconnect-test-wallet)
- [test dapp code](https://github.com/21paradox/walletconnect-example-dapp)

---

### Install

``` bash
npm install cfx-walletconnect-client --save

# or
yarn add cfx-walletconnect-client
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


<br/>
<br/>

## WalletConnect QR Code Modal in Conflux Network

QR Code Modal for WalletConnect in Conflux network

```js
import WalletConnectQRCodeModal from "test-cfx-walletconnect-qrcode-modal";

/**
 *  Get URI from WalletConnect object
 */
const uri = connector.uri;

WalletConnectQRCodeModal.updateMobileRegistry({
  // custom wallet registry
})

/**
 *  Open QR Code Modal
 */
WalletConnectQRCodeModal.open(uri);

/**
 *  Close QR Code Modal
 */
WalletConnectQRCodeModal.close();
```
