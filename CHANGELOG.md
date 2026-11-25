# Better GrokBot 1.4.0

Note des changements depuis 1.3.0. Better GrokBot est conçu et développé par Wantre. Tout reste sur ce PC : rien de ce qui suit n’envoie de données ailleurs.

## Composer

Le rond « Répond » à gauche et la barre de droite (Second avis, file, épingle, micro) restent à 8 px au-dessus du bord visible du compositeur, alignés, même quand le texte devient long et défile à l’intérieur, avec ou sans image, en fenêtre étroite comprise. Avant, ils montaient avec la hauteur totale du texte et laissaient un grand vide sur le fil.

## Quotas : le rythme

La carte Quotas de l’accueil et la vue Quotas montrent la part de la semaine écoulée, l’heure exacte de remise à zéro, un compte à rebours quand le quota est épuisé, et si l’usage est dans le rythme.

## Historique

Nouvelle entrée « Historique » (Ctrl+Maj+F) : chaque fil ouvert est indexé sur ce PC, avec un titre automatique (modèle réglable : {agent}, {sujet}, {date}, {heure}). Recherche dans les titres, agents, étiquettes et contenus, avec extraits surlignés, filtres par période et par dossier. Dossiers, étiquettes, renommer, archiver (le fil peut aussi disparaître de la liste Grok, rien n’est effacé), relier deux fils.

## Branches

« Continuer d’ici » dans la bulle de sélection : le passage choisi part, avec son contexte, vers un autre agent ou le Chat IA. Le fil d’origine et la branche restent reliés dans l’Historique.

## Mémoire « Me connaître »

Un coffre local chiffré avec votre compte Windows : qui vous êtes, vos préférences, des souvenirs (ajoutés à la main, depuis la bulle « Retenir » ou proposés à partir de vos messages). Profils de consignes, profil par espace, import et export. Un court contexte se joint au premier message d’un fil, automatiquement ou avec Ctrl+Maj+J, et reste visible avant l’envoi.

## Espaces devenus projets

Chaque espace a son projet : conversations rattachées, consignes, fichiers (texte, code, Markdown, PDF, ZIP) et un dépôt GitHub cloné sur ce PC, dont on choisit les fichiers à joindre. Git doit être installé ; les dépôts privés utilisent vos identifiants Git habituels.

## Document

Un volet d’écriture pour les textes longs (Ctrl+Maj+O) : enregistrement automatique, ouvrir un fichier, enregistrer en .md, .txt ou PDF, aperçu Markdown, recherche, retouche d’une sélection par Grok, insertion de la dernière réponse.

## Fichiers

Les ZIP se lisent sur place et se joignent au fil. Un très long collage devient une pièce jointe .txt. La dernière réponse s’enregistre en Markdown, texte, PDF, ou un bloc de code avec la bonne extension.

## Confort

Lecture à voix haute des réponses (voix installées sur Windows seulement, Ctrl+Maj+L, Échap arrête). Notification « Réponse prête » quand Grok finit pendant que la fenêtre est en arrière-plan. Les vidéos ne se lancent plus seules. Entrée pendant une saisie IME (japonais, chinois, coréen…) ne valide plus le message.

## Prompts

Les prompts s’exportent et s’importent en paquets, avec ou sans les extraits.

## Fiabilité

Le serveur du Pont est lancé à part de Grok Bot : il n’hérite plus de ses fichiers ouverts. Mises à jour : la version gardée pour le retour arrière va dans un dossier horodaté, copié avec nouvelles tentatives, sans renommer ni effacer un dossier encore ouvert ; Grok ne verrouille plus ce dossier. Si une mise à jour échoue, l’écran indique l’étape et une raison lisible. La notification de bilan se ferme au clic, avec Échap, ou seule après 8 s.

Depuis la 1.3 : la mise à jour intégrée de la 1.3 peut échouer avec « EPERM » quand une version de retour arrière est gardée (Grok tient ce fichier ouvert). Rien n’est changé dans ce cas. Installez alors le paquet complet : vos réglages restent. Les paquets publiés contiennent du JavaScript minifié. Ligne Licence dans À propos.

## Pour plus tard

Le client MCP est préparé pour la 1.5.

# Better GrokBot 1.3.0

Note des changements depuis 1.2.0. Better GrokBot est conçu et développé par Wantre.

## Chat IA

Un volet de chat complet à côté de Grok, pour parler aux IA reliées dans Pont. Il s’ouvre depuis l’entrée « Chat IA » du rail, la palette ou Ctrl+Maj+A.

Le bouton du haut choisit l’IA et le modèle, avec les logos des fournisseurs. Les IA prêtes passent en premier, celles à relier ensuite.

Les conversations restent sur ce PC : liste, recherche, renommer, supprimer. Alt+N en ouvre une nouvelle, Alt+L montre la liste, Alt+M change de modèle.

Les réponses s’affichent en Markdown, avec les blocs de code et un bouton Copier. Chaque réponse se copie, part à Grok, se compare avec une autre IA côte à côte ou se régénère.

Le Pont ne diffuse pas les réponses mot à mot : un état « en cours » avec le temps écoulé les remplace. Stop, ou Échap, arrête la réponse.

On joint un fichier texte, une image, un élément du volet Web, la page Web ou la dernière réponse de Grok. Des idées de départ attendent dans une conversation vide. Le quota du fournisseur s’affiche quand il est connu.

## Rail

En mode Simple, le nom de chaque entrée reste toujours sous son icône. En mode Compact, il n’y a jamais de nom : une info-bulle accessible le donne au survol ou au focus.

L’icône et le nom sont centrés, rien n’est coupé, et la pastille active entoure les deux.

Quand les entrées ne tiennent plus, le rail défile : barre fine au survol, fondus en haut et en bas, molette et clavier (flèches, Début, Fin).

## Composer

La barre au-dessus du compositeur, « Second avis », « File vide »…, suit le compositeur sans délai ni saut.

La carte « Répond » ne se déplace plus : elle reste au-dessus du compositeur, le suit quand il grandit et ne cache pas le texte. Elle prend du grain.

La liste des IA est refaite : logos, groupes « Prêtes » et « À relier », recherche et navigation au clavier.

## Mises à jour

Corrigé : la mise à jour fermait Better GrokBot et plus rien ne se passait. Le travail tourne maintenant dans un processus vraiment détaché, et l’app revient toujours, même en cas d’échec.

La chaîne complète : téléchargement, vérification sha256, fermeture, installation du dernier Grok Bot s’il est téléchargé, patch, relance. En cas d’échec, la version précédente est remise.

Un voile braise montre la fermeture : progression, étape en cours. Au retour, une carte dit ce qui s’est passé. Le journal est dans GrokBotPatcher\update.log.

Système propose la mise à jour automatique, coupée par défaut. Elle attend un moment calme : aucun agent qui répond, file vide, pas de frappe depuis 5, 10 ou 30 minutes. Une alerte prévient 60 s avant.

Les copies de test ne prennent plus les liens sand:// et grokbot:// de Windows.

## Corrections

Chat IA et Second avis répondent à la vraie question. Avec Cursor, le message était coupé à la première ligne quand il passait par le lanceur cmd. Il part maintenant entier, sauts de ligne et accents compris. Le message actuel, l’historique et les pièces jointes sont transmis dans un ordre clair, sous une consigne courte.

Les réponses de Codex n’affichent plus le journal brut de l’outil, seulement le texte de la réponse.

Corrigé : l’alerte « clé de stockage inconnue » à l’ouverture du Chat IA et des réglages de mise à jour. Un test vérifie maintenant chaque clé avant la construction.

Les menus au-dessus du compositeur restent au-dessus de tout son contenu, y compris les images collées. Ils gardent un petit écart, ne débordent pas, et la barre et la carte « Répond » partagent la même ligne.

La barre de défilement du rail flotte au-dessus des entrées et ne laisse plus de marge à droite.

Quand le compositeur devient très étroit, petite fenêtre avec un volet ouvert, la barre d’outils se retire et « Répond » passe en pastille. Rien ne déborde.

Codex et Claude Code étaient parfois donnés « non installés » alors qu’ils l’étaient : le Pont lancé au démarrage de Windows ne voyait pas leurs programmes. Better GrokBot le relance maintenant avec le bon chemin dès qu’il le remarque.

Le retour arrière ne laissait plus Grok Bot fermé quand l’archive était encore verrouillée : il réessaie, note chaque étape dans update.log et rouvre toujours Grok Bot.

Better GrokBot est conçu et développé par Wantre.

# Better GrokBot 1.2.0

Note des changements depuis 1.1.0. Better GrokBot est conçu et développé par Wantre. Le site de présentation n’a pas changé.

## Rangement

Le rail se range. Places liste toutes les entrées : épingler en haut, monter, descendre, masquer. Alt+↑ et Alt+↓ déplacent l’entrée qui a le focus. Le rail se resserre pour tout montrer sans défiler.

Le volet de droite a des onglets : Web, Prompts, Notes, File, Épingles. Maj+clic ou le bouton « côte à côte » en met deux l’un à côté de l’autre. Flèches et Suppr marchent sur les onglets.

Les espaces de travail gardent les volets ouverts, l’agent et les prompts d’un projet. La pastille Espaces de la barre les ouvre, les enregistre et les rappelle.

Ctrl+. passe en mode focus : rail, barre et volets s’effacent, la conversation reste. Ctrl+. ou Échap pour ressortir.

Thèmes ajoute un thème clair et une densité compacte. Ils touchent le châssis Better, pas Grok.

Accueil ouvre la journée : agents récents, rappels du jour, quotas, usage et dernières notes.

## Web

Le volet Web a des onglets et des favoris. L’étoile de la barre d’adresse garde la page. Ctrl+T, Ctrl+W et Ctrl+Tab marchent quand le volet a le focus.

« Plusieurs », ou Ctrl+Maj+M, choisit jusqu’à 12 éléments, envoyés en un seul message avec leurs captures.

« Markdown » envoie la page en Markdown propre : titre, texte, liens, listes et code, sans menus, pieds de page ni formulaires.

« Avant / Après » prend deux captures de la page et les montre côte à côte, prêtes à partir au chat.

« 390 px » passe la page en vue mobile, avec l’agent utilisateur d’un téléphone.

« Console » montre les journaux et erreurs de la page. Un clic envoie les erreurs, ou tout, au chat.

## Chat

Alt+Entrée met le message en file. La file part un message à la fois, quand l’agent a fini. Elle se met en pause.

Le brouillon de chaque conversation est gardé et revient quand on la rouvre.

Les snippets : « ;plan » puis Tab ou Espace dans le compositeur devient le texte entier. Trois sont fournis, d’autres s’ajoutent dans Prompts.

Un fichier ou un dossier glissé sur la zone « Déposer ici pour Better » entre dans le compositeur. Le texte des PDF est extrait par le lecteur PDF de Grok. Le dépôt natif de Grok reste intact.

Ctrl+Maj+D dicte dans le compositeur avec la reconnaissance vocale de Windows, en français ou en anglais, sur ce PC.

Le volet Épingles garde des réponses ou des passages. Ctrl+Maj+K épingle la dernière réponse. La bulle de sélection épingle, cite, note ou demande un second avis.

## IA liées

« Comparer » pose la dernière question à une autre IA et montre les deux réponses côte à côte.

« Second avis » fait relire la dernière réponse de Grok par une autre IA.

Le quota Grok déclenche une alerte au seuil choisi (70, 80 ou 90 %), puis à 95 %. Elle propose de faire répondre l’IA reliée.

L’usage des 7 derniers jours est un graphique : messages à Grok, délégations, actions Better, quota.

## Système

Sauvegarder garde réglages, notes, prompts, snippets, épingles et espaces dans un fichier. Restaurer montre le contenu avant de l’appliquer.

La mise à jour se fait en un clic. Avant chaque nouvelle version, l’ancienne est gardée. « Revenir à la version précédente » la remet.

Le diagnostic vérifie le patch installé, le pont local, le dossier de données, les réglages, les rappels, la dictée et le retour arrière. Chaque problème a son bouton de réparation.

## Châssis

La carte « Répond » s’élargit pour montrer le nom entier de l’IA.

Les icônes du rail sont en trait. L’entrée active porte un filet braise.

Le titre devient « Better GrokBot », avec le symbole Wantre.

À propos, dans le rail et la palette, présente Better GrokBot, conçu et développé par Wantre : version, liens GitHub et site, bibliothèques et polices tierces. Les exports Markdown et PDF portent « par Wantre ».

Le code des systèmes est découpé en modules dans elements/shell/sys.

## 1.1.0

Note des changements depuis 1.0.2. Le site de présentation n’a pas changé. Le plan est dans docs/plan-1.1.md.

### Web

Une entrée Web dans le rail, ou Ctrl+Maj+B. Un volet s’ouvre à droite et la conversation se resserre. On règle sa largeur en glissant son bord, ou avec les flèches. Elle est gardée.

La barre a retour, suivant, recharger et un champ qui accepte une adresse ou une recherche. Ctrl+L y place le curseur. Les serveurs locaux comme localhost:5173 s’ouvrent aussi. Les sites récents attendent sur la page d’accueil du volet.

La page tourne dans une vraie vue Chromium, dans une session à part. Les connexions restent d’une fois à l’autre. Pas de Node, pas d’accès aux fichiers, seulement http et https. Les fenêtres surgissantes s’ouvrent dans le volet.

### Sélecteur d’éléments

Le bouton cible, ou Ctrl+Maj+E. On survole : l’élément s’entoure de braise avec sa balise et sa taille. Flèche haut pour le parent, flèche bas pour l’enfant, Entrée ou clic pour choisir, Échap pour annuler.

L’élément part dans la zone d’écriture de Grok, après ce qui y est déjà : la page et son adresse, un sélecteur CSS unique, la taille, le texte, les styles calculés utiles et le HTML réduit. Sa capture est jointe en image.

Le clic droit sur la page envoie la sélection au chat, en citation avec sa source. Le bouton appareil photo envoie la page visible.

### Capture

Ctrl+Maj+S. La fenêtre s’efface, l’écran est saisi, on cadre une zone à la souris. Entrée l’envoie, « Tout l’écran » envoie tout, Échap annule.

### Prompts

Une entrée Prompts dans le rail, ou Ctrl+Maj+P. Cinq prompts de départ, modifiables. Les variables {{selection}}, {{url}}, {{agent}} et {{date}} sont remplies à l’envoi. Les prompts sont aussi dans la palette Ctrl+K.

L’onglet Envoyés garde les 50 derniers textes que Better a collés dans le chat. Un clic les recolle, l’épingle en fait un prompt. Les images ne sont pas gardées. Le presse-papiers de Windows n’est pas écouté.

### Notes

Une entrée Notes, ou Ctrl+Maj+N. Le bloc-notes s’enregistre seul sur ce PC. Il envoie la note ou sa partie sélectionnée au chat, ajoute un passage du fil en citation, copie, ou exporte en Markdown.

### Outils

Rechercher dans le fil avec Ctrl+F : occurrence n sur N, Entrée et Maj+Entrée.

Exporter la conversation en Markdown ou en PDF. Seule la partie du fil chargée à l’écran est incluse.

Les rappels : un texte, une durée, une notification Windows à l’heure dite. Ils tiennent après un redémarrage de la fenêtre.

Ctrl+/ affiche tous les raccourcis.

### Châssis

Quand le panneau et le volet Web sont ouverts dans une fenêtre étroite, le panneau passe par-dessus la conversation. Les annonces se centrent sur la conversation. Le compositeur Grok est retrouvé même quand il grandit.

## 1.0.2

Note des changements depuis 1.0.1. Le site de présentation n’a pas changé.

### Pont

Le menu s’ouvre sur les fournisseurs. Un champ cherche par nom. Chaque IA a son logo. Les prêts sont au-dessus, les autres sous « À relier ».

Un fournisseur déjà relié n’affiche une action que s’il reste quelque chose à faire : installer, lier, mettre à jour, ou enregistrer une clé. La clé reste chiffrée avec la session Windows.

Les programmes que l’on peut installer : Cursor, Claude, ChatGPT, OpenCode, GitHub Copilot, Grok CLI, Gemini, Cline, Kimi, Devin, Mistral, Pi et Muse. DeepSeek, OpenRouter et Inception passent par Pi, puis une clé. Une version plus récente publiée propose « Mettre à jour ».

« Donner une IA à un agent » choisit l’agent, le fournisseur et le modèle. L’agent Grok reçoit la demande, puis la fait faire par cette IA. « Connecter Grok » explique où coller la commande du connecteur : dans Grok, Connect apps.

### Quotas

Le panneau n’affiche un pourcentage que lorsqu’il est vraiment lu. Grok vient de la session. Cursor et ChatGPT viennent du compte ouvert sur ce PC. Un fournisseur sans chiffre ne remplit pas le catalogue.

### Répond

La réponse de l’autre IA est une carte au-dessus de la zone d’écriture, avec le fournisseur, le modèle et la durée. Le compositeur reste libre. La barre se déplace et se réduit.

## 1.0.1

Le quota Cursor affiche le pourcentage du compte.
