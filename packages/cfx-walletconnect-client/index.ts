import SessionStorage from './storage'
import WalletConnect from "@walletconnect/core";
import { IWalletConnectOptions } from "@walletconnect/types";
import * as cryptoLib from "@walletconnect/browser-crypto";
import { parseTransactionData } from "@walletconnect/utils";

const ERROR_SESSION_DISCONNECTED = "Session currently disconnected";

class WalletConnectCfx extends WalletConnect {
  constructor(connectorOpts: IWalletConnectOptions) {
    const sessionStorage = new SessionStorage();
    super({
      connectorOpts,
      cryptoLib,
      sessionStorage
    })
  }

   async sendTransaction(tx) {
    if (!this.connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }

    const parsedTx = parseTransactionData(tx);
    const request = this._formatRequest({
      method: "cfx_sendTransaction",
      params: [parsedTx],
    });

    const result = await this._sendCallRequest(request);
    return result;
  }

  async signTransaction(tx) {
    if (!this.connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }

    const parsedTx = parseTransactionData(tx);
    const request = this._formatRequest({
      method: "cfx_signTransaction",
      params: [parsedTx],
    });

    const result = await this._sendCallRequest(request);
    return result;
  }

  async signMessage(msg) {
    if (!this.connected) {
      throw new Error(ERROR_SESSION_DISCONNECTED);
    }

    const request = this._formatRequest({
      method: "cfx_sign",
      params: msg,
    });

    const result = await this._sendCallRequest(request);
    return result;
  }
}

export default WalletConnectCfx;