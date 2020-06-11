import superagent from 'superagent';

const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export default class HttpProvider {

  public url: string

  public connector: any

  /**
   * @param url {string} - Full json rpc http url
   * @param [options] {object} - See `BaseProvider.constructor`
   * @return {HttpProvider}
   *
   * @example
   * > const provider = new HttpProvider('http://testnet-jsonrpc.conflux-chain.org:12537', {logger: console});
   */
  constructor(url: string, connector) {
    this.url = url;
    this.connector = connector;
  }

  /**
   * Gen a random json rpc id.
   * It is used in `call` method, overwrite it to gen your own id.
   *
   * @return {string}
   */
  public requestId() {
    const date = new Date().getTime() * Math.pow(10, 3);
    const extra = Math.floor(Math.random() * Math.pow(10, 3));
    return date + extra;
  }

  public close() {
    console.log('close')
  }

  /**
   * Call a json rpc method with params
   *
   * @param method {string} - Json rpc method name.
   * @param [params] {array} - Json rpc method params.
   * @return {Promise<*>} Json rpc method return value.
   *
   * @example
   * > await provider.call('cfx_epochNumber');
   * > await provider.call('cfx_getBlockByHash', blockHash);
   */
  public async call(method: string, ...params: any): Promise<any> {
    const data = { jsonrpc: '2.0', id: this.requestId(), method, params };

    if (method === 'cfx_sendTransaction') {
      const customRequest = {
        id: this.requestId(),
        jsonrpc: "2.0",
        method: 'cfx_signTransaction',
        params,
      };
      // sign typed data
      const signResult = await this.connector.sendCustomRequest(customRequest);
      return await this.call('cfx_sendRawTransaction', signResult);
    }

    let res: any = await superagent
      .post(this.url)
      .send(data);

    if (method.match(/^cfx_get/)) {
      //retry
      if (res.body.result === null) {
        await wait(1500)
        res = await superagent
          .post(this.url)
          .send(data);
      }
      if (res.body.result === null) {
        await wait(1500)
        res = await superagent
          .post(this.url)
          .send(data);
      }
      if (res.body.result === null) {
        await wait(1500)
        res = await superagent
          .post(this.url)
          .send(data);
      }
    }

    if (res.body.result) {
      return res.body.result
    } else {
      if (res.body.error) {
        throw new Error(res.body.error)
      } else {
        throw new Error('res.body is null')
      }
    }

  }
}