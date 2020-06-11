import * as nodeLib from "./node";
import * as browserLib from "./browser";
import { mRegistry } from './browser/components/DeepLinkDisplay'

const isNode = () =>
  typeof process !== "undefined" &&
  typeof process.versions !== "undefined" &&
  typeof process.versions.node !== "undefined";

function open(uri: string, cb: any) {
  if (isNode()) {
    nodeLib.open(uri);
  } else {
    browserLib.open(uri, cb);
  }
}

function close() {
  if (isNode()) {
    nodeLib.close();
  } else {
    browserLib.close();
  }
}

function updateMobileRegistry(registry: any) {
  mRegistry.splice(0, mRegistry.length);
  registry.forEach((v: any) => {
    mRegistry.push(v);
  })
}

export default { open, close, updateMobileRegistry };
