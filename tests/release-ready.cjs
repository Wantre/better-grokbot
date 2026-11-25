"use strict";
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { releaseFilesReady, releaseReady } = require("../updates.cjs");

const manifest = {
  version: "1.5.2",
  sha256: "e1a449bc33bfd638c3b11faf015d941439cfa95bfdc76eaed7ba1540a1d9b887",
  url: "https://github.com/Wantre/better-grokbot/releases/download/v1.5.2/better-grokbot-patch.zip",
  full: "https://github.com/Wantre/better-grokbot/releases/download/v1.5.2/Better-GrokBot-1.5.2-Windows.zip",
  fullSha256: "fc7cf5d8a7266ec2d7988f417897a41680e18721536005550feb71bd7eb25e4d",
  patcher: "https://github.com/Wantre/better-grokbot/releases/latest/download/Patch-GrokBot.exe",
};
const sums = [
  "0d98588e771a884b897536aa3005de7fe57b48dffd936efcbc5c25e42e112b9f  Patch-GrokBot.exe",
  "fc7cf5d8a7266ec2d7988f417897a41680e18721536005550feb71bd7eb25e4d  Better-GrokBot-1.5.2-Windows.zip",
  "e1a449bc33bfd638c3b11faf015d941439cfa95bfdc76eaed7ba1540a1d9b887  better-grokbot-patch.zip",
].join("\n");
const assets = ["better-grokbot-patch.zip", "Better-GrokBot-1.5.2-Windows.zip", "Patch-GrokBot.exe", "SHA256SUMS"]
  .map((name) => ({ name, state: "uploaded", size: 100 }));

assert.equal(releaseFilesReady(manifest, assets, sums), true);
assert.equal(releaseFilesReady(manifest, assets.filter((item) => item.name !== "Patch-GrokBot.exe"), sums), false);
assert.equal(releaseFilesReady(manifest, assets.map((item) => item.name === "SHA256SUMS" ? { ...item, state: "starter" } : item), sums), false);
assert.equal(releaseFilesReady(manifest, assets.map((item) => item.name === "better-grokbot-patch.zip" ? { ...item, size: 0 } : item), sums), false);
assert.equal(releaseFilesReady({ ...manifest, sha256: "a".repeat(64) }, assets, sums), false);
assert.equal(releaseFilesReady({ ...manifest, url: "https://github.com/Wantre/better-grokbot/releases/download/v1.5.1/better-grokbot-patch.zip" }, assets, sums), false);
assert.equal(releaseFilesReady({ ...manifest, patcher: "http://example.com/Patch-GrokBot.exe" }, assets, sums), false);

const published = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "update-2.json"), "utf8"));
releaseReady(published, true).then((ready) => {
  if (!ready) {
    console.error("la 1.5.2 publiée n’est pas reconnue comme complète");
    process.exit(1);
  }
  console.log("fichiers exigés avant notification : paquet, archive complète, patcher, empreintes");
}).catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
