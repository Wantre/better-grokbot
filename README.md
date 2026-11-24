<p align="center">
  <a href="https://wantre.github.io/better-grokbot/"><img src="og-image.png" alt="Better GrokBot : Grok Bot, avec tout ce qui lui manquait." width="100%"></a>
</p>

<h1 align="center">Better GrokBot</h1>

<p align="center">
  Grok Bot, avec un châssis complet : rail de navigation, palette <kbd>Ctrl</kbd> <kbd>K</kbd>, barre Répond vers d’autres IA et quotas en direct.<br>
  <a href="https://wantre.github.io/better-grokbot/"><b>Voir le site</b></a> · <a href="https://github.com/Wantre/better-grokbot/releases/latest">Versions</a>
</p>

---

Ce dépôt contient la page de présentation de Better GrokBot, publiée avec GitHub Pages.

Better GrokBot est une **copie privée** de Grok Bot. L’installation d’origine, dans `Programs\Grok Bot`, est lue sans jamais être modifiée. La copie vit à part et se retire en un clic.

## Ce que la copie ajoute

| | |
|---|---|
| **Châssis** | Une barre de titre propre, un rail illustré à gauche avec huit entrées, des panneaux qui glissent depuis la droite. Échap referme. |
| **Palette Ctrl K** | Les huit catégories, les trois palettes de couleurs et les gestes du fil, au clavier. |
| **Répond** | Une barre au-dessus du champ de saisie pour confier un message à Cursor, Claude ou Codex. Grok reste l’agent qui vous parle. |
| **Pont** | L’état du serveur local, les CLI trouvées sur le PC et le modèle assigné à chaque agent. Les clés collées restent chiffrées. |
| **Quotas** | Le pourcentage Grok et la date de réinitialisation, puis la jauge de chaque pont lié quand sa CLI publie un chiffre. |
| **Palettes** | Braise, Aube et Nuit, appliquées tout de suite. Grain, décor et animations se règlent à part. |

Seuls les ponts dont la CLI est vraiment installée apparaissent : Cursor, Claude Code, Codex, Gemini CLI, Copilot et OpenCode. Pas de clé API nécessaire pour eux.

<p align="center"><img src="docs/capture-site.webp" alt="Haut de la page de présentation de Better GrokBot" width="100%"></p>

## La page

- Un seul fichier `index.html`, sans dépendance ni étape de build.
- Démo animée en six chapitres, sections par fonction, palettes interactives qui changent la capture et la couleur de la page.
- Animations douces, coupées quand le système demande de réduire les animations.
- Lisible au clavier, testée sur ordinateur et sur mobile, sans défilement horizontal.

Pour la voir en local :

```bash
python -m http.server 8000
# puis http://localhost:8000
```

## Publication

GitHub Pages sert la branche `main`, dossier racine. Le fichier `.nojekyll` empêche tout traitement Jekyll.

## Licence

Le code et les visuels originaux du site sont sous licence MIT (voir `LICENSE`). Les polices sont sous SIL Open Font License, les icônes viennent de Simple Icons (CC0). Grok Bot et les autres noms de produits appartiennent à leurs propriétaires. Better GrokBot est un projet indépendant, sans lien avec xAI.

---

<p align="center"><sub>Conçu par <a href="https://github.com/Wantre">Wantre</a>, région lyonnaise.</sub></p>
