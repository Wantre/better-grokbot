"use strict";
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const http = require("node:http");
const { spawn } = require("node:child_process");
const root = path.join(__dirname, "..");
const bundled = path.join(root, "companion", "BetterGrokBot.exe");
if (!fs.existsSync(bundled) || fs.statSync(bundled).size < 1e6) {
  console.error("companion/BetterGrokBot.exe absent du paquet");
  process.exit(1);
}
const home = fs.mkdtempSync(path.join(os.tmpdir(), "bg-pont-"));
const real = process.env.LOCALAPPDATA || "";
const realExe = path.join(real, "BetterGrokBot", "BetterGrokBot.exe");
const realHash = fs.existsSync(realExe) ? hash(realExe) : "";
process.env.LOCALAPPDATA = home;
const updates = require(path.join(root, "updates.cjs"));
const api = fs.readFileSync(path.join(root, "main", "better-api.cjs"), "utf8");
if (!api.includes('require("./updates.cjs").installCompanion()')) {
  console.error("better-api ne place pas le pont avant de signaler son absence");
  process.exit(1);
}
const installed = path.join(home, "BetterGrokBot", "BetterGrokBot.exe");
let child = null;
(async () => {
  try {
    const first = updates.installCompanion(root);
    if (!first.ok || !first.copied || !fs.existsSync(installed)) throw new Error("premier placement échoué");
    if (hash(installed) !== hash(bundled)) throw new Error("le programme placé diffère du paquet");
    const cfg = path.join(home, "BetterGrokBot", "config.json");
    const marker = JSON.parse(fs.readFileSync(cfg, "utf8"));
    marker.pollMs = 700;
    fs.writeFileSync(cfg, JSON.stringify(marker));
    const second = updates.installCompanion(root);
    if (!second.ok || second.copied) throw new Error("un programme identique a été recopié");
    if (JSON.parse(fs.readFileSync(cfg, "utf8")).pollMs !== 700) throw new Error("le réglage déjà présent a été remplacé");
    fs.rmSync(installed, { force: true });
    const third = updates.installCompanion(root);
    if (!third.ok || !third.copied || !fs.existsSync(installed)) throw new Error("le programme manquant n'a pas été reposé");
    const port = await listen(installed, path.dirname(installed));
    const health = await get(port, "/api/health");
    if (health.status !== 200) throw new Error("santé " + health.status);
    const list = await get(port, "/api/plugins");
    const plugins = JSON.parse(list.body);
    if (!Array.isArray(plugins)) throw new Error("la liste des boutons n'est pas une liste");
    const created = await post(port, "/api/plugins", { id: "essai-pont", name: "Essai" });
    if (created.status < 200 || created.status >= 300) throw new Error("création " + created.status + " " + created.body.slice(0, 180));
    const again = JSON.parse((await get(port, "/api/plugins")).body);
    if (!again.some((item) => item && (item.id === "essai-pont" || item.Manifest && item.Manifest.id === "essai-pont"))) throw new Error("le bouton créé est absent");
    if (realHash && hash(realExe) !== realHash) throw new Error("l'installation de ce PC a été modifiée");
    console.log("PONT installé dans un profil vide, santé " + health.status + ", bouton essai-pont créé, profil réel intact");
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  } finally {
    if (child) await kill(child.pid);
    try { fs.rmSync(home, { recursive: true, force: true }); } catch { /* profil d'essai */ }
  }
})();

function hash(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function listen(exe, cwd) {
  return new Promise((resolve, reject) => {
    const port = 18750;
    let settled = false;
    let log = "";
    child = spawn(exe, ["-serve", "-listen", "127.0.0.1:" + port], { cwd, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
    child.stdout.on("data", (chunk) => { log += chunk; });
    child.stderr.on("data", (chunk) => { log += chunk; });
    child.on("exit", (code) => { if (!settled) reject(new Error("le pont s'est arrêté (" + code + ") " + log.slice(-400))); });
    const started = Date.now();
    const poll = () => {
      get(port, "/api/health").then(() => { settled = true; resolve(port); }).catch(() => {
        if (Date.now() - started > 8000) reject(new Error("le pont ne répond pas " + log.slice(-400)));
        else setTimeout(poll, 200);
      });
    };
    setTimeout(poll, 200);
  });
}

function get(port, pathname) {
  return call(port, "GET", pathname, null);
}

function post(port, pathname, body) {
  return call(port, "POST", pathname, JSON.stringify(body));
}

function call(port, method, pathname, body) {
  return new Promise((resolve, reject) => {
    const request = http.request({ host: "127.0.0.1", port, path: pathname, method, headers: body ? { "content-type": "application/json", "content-length": Buffer.byteLength(body) } : {} }, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve({ status: response.statusCode || 0, body: Buffer.concat(chunks).toString("utf8") }));
    });
    request.setTimeout(4000, () => request.destroy(new Error("délai")));
    request.on("error", reject);
    if (body) request.write(body);
    request.end();
  });
}

function kill(pid) {
  return new Promise((resolve) => {
    const killer = spawn("taskkill", ["/PID", String(pid), "/T", "/F"], { windowsHide: true, stdio: "ignore" });
    killer.on("exit", () => resolve());
    killer.on("error", () => resolve());
  });
}
