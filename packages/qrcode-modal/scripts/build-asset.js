const path = require("path");
const fs = require('fs')

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}


const PKG_DIR = path.join(__dirname, "../");

const ASSETS_DIR = path.join(PKG_DIR, "src", "browser", "assets");

async function buildAsset({ assetFile, targetFile, targetVar, loader }) {
  const assetFilePath = path.join(ASSETS_DIR, assetFile);
  const input = await readFile(assetFilePath);
  const targetFilePath = path.join(ASSETS_DIR, targetFile);
  const output = loader ? loader(input) : input;
  await writeFile(targetFilePath, "export const " + targetVar + " = `" + output + "`;");
}

module.exports = buildAsset;
