// Annonce une release de Better GrokBot dans le salon Discord « mises-à-jour ».
// Jeton du bot : secret DISCORD_BOT_TOKEN (jamais affiché). Ne reposte pas une release déjà annoncée.
const { DISCORD_BOT_TOKEN: token, DISCORD_CHANNEL_ID: channel, GITHUB_TOKEN: gh, REPO: repo, TAG: tag } = process.env;
if (!token || !channel || !repo || !tag) throw new Error("Variables manquantes (DISCORD_BOT_TOKEN, DISCORD_CHANNEL_ID, REPO, TAG).");
const SITE = "https://wantre.github.io/better-grokbot/";
const DISCORD = "https://discord.com/api/v10";
const headers = { Authorization: "Bot " + token, "Content-Type": "application/json", "User-Agent": "DiscordBot (" + SITE + ", 1.0)" };

const ghHeaders = { Accept: "application/vnd.github+json", "User-Agent": "better-grokbot-release" };
if (gh) ghHeaders.Authorization = "Bearer " + gh;
const res = await fetch(`https://api.github.com/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`, { headers: ghHeaders });
if (!res.ok) throw new Error("Release introuvable : " + tag + " (" + res.status + ")");
const release = await res.json();
const version = String(release.tag_name).replace(/^v/, "");

// Nouveautés : les puces de la première section des notes, sans le détail technique.
const lines = String(release.body || "").split(/\r?\n/);
const bullets = [];
for (const line of lines) {
  const m = /^\s*[-*]\s+(.*)$/.exec(line);
  if (m) bullets.push("• " + m[1].replace(/\*\*(.+?)\*\*/g, "**$1**").trim());
  else if (bullets.length && /^#{1,3}\s/.test(line)) break;
  if (bullets.length >= 9) break;
}
const description = (bullets.length ? bullets.join("\n") : "Les nouveautés sont dans les notes de version.").slice(0, 3800);

// Image : media/release-<version>.png si elle existe sur le site, sinon l'image de partage.
let image = `https://raw.githubusercontent.com/${repo}/main/media/release-${version}.png`;
try { if (!(await fetch(image, { method: "HEAD" })).ok) image = `https://raw.githubusercontent.com/${repo}/main/og-image.png`; } catch { image = `https://raw.githubusercontent.com/${repo}/main/og-image.png`; }

const download = `https://github.com/${repo}/releases/latest/download/Patch-GrokBot.exe`;
const embed = {
  title: `Better GrokBot ${version}`,
  url: release.html_url,
  color: 0xff8a2b,
  description,
  fields: [
    { name: "Télécharger", value: `[Patch-GrokBot.exe](${download}) : installe ou met à jour en un clic.`, inline: false },
    { name: "Notes de version", value: `[Sur GitHub](${release.html_url})`, inline: true },
    { name: "Site", value: `[wantre.github.io/better-grokbot](${SITE})`, inline: true },
  ],
  image: { url: image },
  footer: { text: "Better GrokBot, par Wantre" },
  timestamp: release.published_at || new Date().toISOString(),
};

// Déjà annoncée ? (relance du workflow, release republiée)
const recent = await fetch(`${DISCORD}/channels/${channel}/messages?limit=30`, { headers });
if (recent.ok) {
  const list = await recent.json();
  const found = list.find((m) => (m.embeds || []).some((e) => e.url === release.html_url));
  if (found) { console.log("Déjà annoncée : https://discord.com/channels/" + (found.guild_id || "@me") + "/" + channel + "/" + found.id); process.exit(0); }
}

const post = await fetch(`${DISCORD}/channels/${channel}/messages`, {
  method: "POST",
  headers,
  body: JSON.stringify({
    content: `**Better GrokBot ${version}** est disponible.`,
    embeds: [embed],
    components: [{ type: 1, components: [
      { type: 2, style: 5, label: "Télécharger", url: download },
      { type: 2, style: 5, label: "Notes de version", url: release.html_url },
      { type: 2, style: 5, label: "Site", url: SITE },
    ] }],
    allowed_mentions: { parse: [] },
  }),
});
if (!post.ok) throw new Error("Discord a refusé le message (" + post.status + ") : " + (await post.text()).slice(0, 300));
const message = await post.json();
// Salon d'annonces : on le publie aussi pour les serveurs abonnés.
const cross = await fetch(`${DISCORD}/channels/${channel}/messages/${message.id}/crosspost`, { method: "POST", headers });
const guild = (await (await fetch(`${DISCORD}/channels/${channel}`, { headers })).json()).guild_id;
console.log("Annonce publiée" + (cross.ok ? " et diffusée" : "") + " : https://discord.com/channels/" + guild + "/" + channel + "/" + message.id);
