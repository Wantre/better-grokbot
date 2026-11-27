# Better GrokBot 1.7.8

- **Nouveau bloqueur de publicités** dans le volet Web : il utilise de vraies listes de filtres (EasyList, EasyPrivacy, Peter Lowe, Liste FR, HaGeZi Light), mises à jour automatiquement. Il coupe les requêtes publicitaires et masque les encarts sur les pages. Sur adblock.turtlecute.org, notre essai passe de 41 à 125 éléments bloqués sur 130.
- **Extensions** : les scripts de page des extensions s’exécutent bien sur les sites (vérifié avec une extension de test). Les bloqueurs de type uBlock Origin Lite ne peuvent pas bloquer dans Better, faute d’une fonction qu’Electron ne fournit pas : Better le signale désormais et uBlock Origin Lite est retiré de la liste proposée.
- **Chrome Web Store** : un bouton « Installer dans Better » apparaît sur la page d’une extension (le bouton « Ajouter à Chrome » de la page ne fonctionne pas dans Better).
- **Tuiles** : la notification de changement de disposition s’affiche en haut, dans la barre de Better, au lieu d’être cachée derrière les applications.

# Better GrokBot 1.7.7

- **Plus de clignotement blanc** (Roblox et autres) : quand une application n’acceptait pas exactement la taille de sa tuile, Better la redimensionnait sans fin, environ 21 fois par seconde, en effaçant son fond. Il propose maintenant la taille pendant un court instant puis accepte celle de l’application. Au repos, une application accrochée ne reçoit plus rien.
- Le fond n’est plus jamais effacé par un redessin, et les images floutées sont découpées dans une capture de l’écran, sans interroger les applications.
- **Disposition mémorisée** : à la réouverture de Better, les applications que vous aviez accrochées et qui sont ouvertes sur le PC reprennent leur espace, leur ordre, leurs proportions et leur état (flottante, réduite). Rien n’est lancé ; une application fermée reste retenue pour la fois suivante. Réglable dans Apps > Bureau.
- Une mise à jour n’écrase plus un dossier de travail suivi par Git.

# Better GrokBot 1.7.6

- **Plus de vide gris ni de débordement** : la découpe est supprimée. Better lit la taille minimale de chaque application dès l’accrochage et la disposition la respecte, en prenant la place sur les voisines ou en réarrangeant les tuiles. Les onglets n’arrivent que si rien ne tient. Quand un volet ou une petite fenêtre ne laisse pas assez de place, la tuile l’indique au lieu de laisser l’application dépasser.
- **Étirer et déplacer** : pendant le geste, les applications sont remplacées par leur image floutée et ne prennent leur nouvelle taille qu’une fois, au relâchement. Les tuiles flottantes s’agrandissent de nouveau par leur coin (la poignée avait disparu depuis la 1.7.1).
- **Menus et volets** : les applications reculent immédiatement et leur image floutée reste à leur place. Au retour, elles sont redessinées, contre les fenêtres blanches.
- Une tuile flottante ne fait reculer que la tuile qu’elle recouvre.
- **Extensions** : la page du volet Web se recharge après une installation, une activation ou un retrait ; les extensions actives ont leur icône dans la barre ; le résultat reste affiché dans le menu ; les échecs sont notés dans extensions.log.

# Better GrokBot 1.7.5

- **Onglets en plein cadre** : un clic sur Grok ou sur une autre application change maintenant de fenêtre. Les onglets étaient reconstruits en continu et disparaissaient avant la fin du clic.
- Le même défaut est corrigé pour les numéros d’espace et les fenêtres réduites dans la barre des tuiles.

# Better GrokBot 1.7.4

- **Les fenêtres accrochées ne disparaissent plus quand vous cliquez sur Better** : le moteur essayait de les poser au-dessus de la fenêtre active, ce que Windows refuse. Une application réduite par Windows est aussi rouverte au retour sur Better.
- **Plein cadre et redimensionnement** : Better laisse à l’application le temps de changer de taille avant de la découper, et lui demande de redessiner son contenu une fois la taille posée.
- **Bloqueur de publicités et de pisteurs** dans le volet Web, activé par défaut. Il bloque les régies connues, pas les publicités vidéo intégrées au site (YouTube).
- **Menu Extensions** refait comme dans un navigateur : protection, extensions installées avec icône, interrupteur, options et retrait, puis ajout avec recherche, Chrome Web Store et import.

# Better GrokBot 1.7.3

- **Better ne passe plus derrière les autres fenêtres** : quand une application accrochée avait la main, Better pouvait être rangé au fond de la pile.
- **Plus de plein cadre imposé** : la taille minimale d’une application ne bloque plus les dispositions ; ce qui dépasse est découpé à la tuile. Le double-clic sur une barre ne met plus en plein cadre, et tous les onglets restent accessibles.
- Une tuile d’un autre espace ne repasse plus devant Better.
- **Bouton Extensions** dans le volet Web : liste avec recherche et installation en un clic, lien du Chrome Web Store, import d’un .crx ou d’un dossier, recherche sur le Web Store. Discord s’ouvre comme application Web.

# Better GrokBot 1.7.2

## Corrections

- **Entrées du rail en double** (Saisie, IA liées, Historique… aussi dans Places) : le glisser-déposer du rail remplaçait de mauvaises cases quand les entrées du bas (Système, Thèmes, Places, À propos) étaient mêlées aux autres dans l’ordre enregistré. Corrigé, et les doublons déjà enregistrés sont nettoyés au démarrage.
- **Rien ne sort de l’interface** : une application qui impose une taille minimale plus grande que sa tuile (OpenBot, CineVR…) est découpée à la taille de la tuile, sans toucher à son contenu. Sa taille minimale est retenue : si la disposition ne peut pas la respecter, les tuiles passent en plein cadre avec onglets.
- **Fermer une application depuis sa propre fenêtre** la retire aussi de Better, y compris quand l’application se cache au lieu de se fermer. Sa place d’origine est rendue.
- Une application trop grande n’est plus redimensionnée en boucle.

## Nouveau

- Bouton **Fenêtre** dans la barre du haut, à gauche d’« Espaces » : ajoute une fenêtre en tuile depuis n’importe où.

# Better GrokBot 1.7.1

Les tuiles, revues dans le détail : à leur place, dans le thème, et pilotables sans passer par un menu.

## Tuiles

- **Barres de titre au bon endroit** : elles passaient sous les fenêtres. Le cadre d’une tuile héritait du style des vignettes du panneau Outils ; il a désormais le sien, et chaque fenêtre se place exactement sous la barre dessinée.
- **Dans le thème** : barres de titre, anneau braise sur la tuile active, vraie icône de chaque application, titre qui suit celui de la fenêtre.
- **Barre des tuiles** au-dessus de la zone (elle remplace le bouton « Maître » isolé en haut à droite) : espaces 1 à 9 et nouvel espace, cinq dispositions, fenêtres réduites, ajouter une fenêtre, terminal, réaligner, tout réduire, raccourcis, quitter les tuiles. En place étroite, elle se compacte : un clic sur la disposition active passe à la suivante.
- **Réduire** chaque tuile, Grok compris ; elle se retrouve dans la barre, un clic la rétablit. « Tout réduire » vide l’espace et « Tout rétablir » le remplit.
- **Quatre boutons par tuile** (vision IA, réduire, plein cadre, fermer) et un menu ⋯ : piloter avec l’agent, capture au Chat IA, flottante, envoyer vers un espace, décrocher.
- **Glisser** la barre d’une tuile sur une autre pour les échanger, ou sur un numéro d’espace pour l’y envoyer.
- **Ajouter une fenêtre** (bouton +, Alt+Maj+A ou Ctrl+Maj+G) : une seule liste avec recherche pour les fenêtres ouvertes, les terminaux et les applications installées ; elle se ferme après le choix.
- Pendant un menu de Better, chaque tuile montre sa dernière image au lieu d’un cadre vide.
- Colonnes et grille restent visibles plus longtemps ; quand la place manque vraiment, un message explique le passage en plein cadre avec onglets.
- Panneau Apps simplifié : vos espaces, Bureau, sessions, règles avancées repliées, extensions.

## Agent dans le Chat IA

- L’agent n’a plus de volet à part : un bouton « Mode agent » dans la zone de saisie du Chat IA, la cible (page Web ou tuile) et le niveau juste au-dessus, les étapes et les confirmations dans le fil. Il utilise l’IA choisie dans le chat.

# Better GrokBot 1.7.0

Better devient un poste de travail : vos applications en tuiles à côté de Grok, un terminal, un explorateur de fichiers, des extensions Chrome et un agent IA qui agit sous votre contrôle.

## Tuiles, façon Hyprland

- Plusieurs applications accrochées en même temps, avec Grok, rangées automatiquement : spirale, maître, colonnes, grille ou plein cadre avec onglets.
- Neuf espaces de travail (Alt+Maj+1 à 9) ; Ctrl+Alt+Maj+chiffre envoie la tuile active vers un autre espace.
- Clavier : Alt+Maj+flèches pour changer de tuile, avec Ctrl pour les échanger ; F plein cadre, Espace flottante, L disposition, Q fermer, Entrée terminal, S tiroir, R redimensionner, G réaligner. Ces raccourcis marchent aussi quand une tuile a le focus.
- Glisser la barre d’une tuile pour l’échanger avec une autre, tirer les séparations pour changer les proportions (double-clic pour revenir à l’égal).
- Tuiles flottantes déplaçables et redimensionnables, tiroir (scratchpad) pour un terminal qui apparaît et disparaît.
- Règles de fenêtres (espace et flottante selon le programme), écart réglable, sessions enregistrées et restaurées.
- Lancer une application installée directement dans une tuile, depuis le panneau Apps ou la palette.

## Stabilité et tailles

- Le moteur des fenêtres replace et redessine les tuiles dès votre retour sur Better, sans attendre l’interface, et Better n’est plus ralenti en arrière-plan tant que des tuiles sont ouvertes.
- Bouton et raccourci « Réaligner ».
- Une application qui ne répond plus est signalée sur sa tuile.
- Quand la place manque, les tuiles passent en plein cadre avec onglets au lieu de se tasser.

## Terminal et fichiers

- Terminal en tuile : PowerShell, PowerShell 7, invite de commandes, Git Bash, WSL, et Claude Code, Codex ou Cursor s’ils sont reliés.
- Explorateur de fichiers dans le volet de droite (Ctrl+Maj+X) : favoris et lecteurs, aperçu des textes et images, recherche, renommer, nouveau dossier, copier, couper, coller, terminal ici, joindre au Chat IA. Une suppression va toujours dans la Corbeille.

## Extensions Chrome

- Le volet Web accepte des extensions : lien du Chrome Web Store, fichier .crx ou dossier décompressé. Options et page de l’extension s’ouvrent dans le volet. Electron ne prend en charge qu’une partie des fonctions d’extension ; pour toutes, accrochez votre navigateur habituel en tuile.

## Agent IA

- Une IA (celle choisie dans le Chat IA) voit une tuile ou la page du volet Web, propose une action à la fois, et agit : clic, saisie, touche, défilement, adresse.
- Niveau Assisté : vous confirmez chaque action. Niveau Encadré : 15 actions au plus, les actions sensibles (envoyer, publier, supprimer, payer…) restent à confirmer.
- Cadre rouge autour de la tuile pilotée, arrêt avec Alt+Maj+X ou Échap, journal sur ce PC.
- L’agent ne remplit jamais un mot de passe, refuse les sites de banque et de paiement et les gestionnaires de mots de passe, et traite le contenu vu comme une donnée, jamais comme un ordre.

## Mode Bureau

- Plein écran, démarrage avec Windows en option, processeur et mémoire dans la barre des espaces.

# Better GrokBot 1.6.0

Votre application au centre de Better GrokBot, et la connexion de compte des fournisseurs.

## Apps

- Nouvelle entrée « Apps » dans le rail, ou Ctrl+Maj+G : choisissez une fenêtre ouverte, elle prend la place de Grok au centre et reste utilisable. « Décrocher » rend Grok et remet la fenêtre à sa place d’origine.
- La fenêtre est seulement déplacée et suivie. Quand un menu de Better s’ouvre, elle passe derrière ; quand Grok est réduit, elle l’est aussi. Si Grok se ferme, sa place d’origine est rendue.
- Vision IA coupée par défaut. Une fois activée, indicateur rouge visible : chaque message du Chat IA emporte une capture de cette fenêtre, et d’elle seule. « Capture au Chat IA » en joint une à la demande.
- La lecture des captures marche avec Cursor, Claude et Codex. Pour Claude et Codex, le programme officiel est appelé directement, dans un dossier temporaire qui ne contient que les captures jointes.
- Les applications lancées en administrateur ne peuvent pas être accrochées.

## Fournisseurs

- Bouton « Connexion du compte » dans le Pont : lien à ouvrir, code à copier ou à coller, compte à rebours de 10 minutes. Better ne voit aucun mot de passe : c’est le programme officiel qui se connecte.
- L’état du compte s’affiche sur la carte quand le programme sait le dire (Claude, Cursor, Codex).
- Corrigé : le bouton « Installer » restait affiché après l’installation.

## Rail

- Les entrées se réordonnent par glisser-déposer.

## Fiabilité

- Le test des clés de stockage contrôle de nouveau le code : il passait sans rien vérifier.
- release.mjs prépare les fichiers d’une version, contrôle les versions et refuse tout secret.

# Better GrokBot 1.5.2

Le pont local manquait lorsqu’un autre ordinateur n’avait reçu que le patcher. L’écran Plugins affichait « BetterGrokBot.exe est introuvable ».

- **Pont local** : BetterGrokBot.exe voyage avec le paquet. La mise à jour le place dans le dossier personnel, sans remplacer un réglage, une clé ou un plugin déjà là. Les boutons du pont, le bac à sable et le connecteur ne demandent plus de copie manuelle.
- **Notification de mise à jour** : elle n’apparaît que lorsque le paquet, l’archive complète, Patch GrokBot et les empreintes de cette version sont tous en ligne. Une version annoncée trop tôt n’est plus installée à la place.

# Better GrokBot 1.5.1

Correctif de 1.5.0.

- **Plugins désactivés à tort** : quand la fenêtre de Grok restait réduite ou en arrière-plan, Windows et Chromium ralentissent les minuteries ; le chien de garde prenait ce ralentissement pour un plugin bloqué, l’arrêtait « par sécurité » et le désactivait. Il n’attend plus qu’un seul signe de vie à la fois et n’arrête un plugin que si ce signe reste sans réponse pendant au moins 12 secondes et trois contrôles. Une vraie boucle infinie est toujours arrêtée. Si vos plugins ont été désactivés par 1.5.0, réactivez-les dans l’onglet Plugins.

# Better GrokBot 1.5.0

Note des changements depuis 1.4.0. Better GrokBot est conçu et développé par Wantre. Tout reste sur ce PC.

## Huit langues

L’interface entière de Better existe en français, anglais, espagnol, allemand, italien, portugais, néerlandais et polonais (1 495 textes). La langue de Windows est choisie au premier lancement ; on peut la changer dans Système > Langue. Les dates, heures et nombres suivent la langue. Les messages d’erreur du processus principal sont traduits à l’affichage, sans le préfixe technique d’Electron. Les libellés longs (allemand, polonais) se coupent proprement au lieu de déborder. Les traductions sont des fichiers JSON simples, dans elements/shell/i18n.

## Plugins, version 2

- **Isolés** : chaque plugin tourne dans son propre Worker, sans accès à la page, au pont local, au réseau ni au stockage de Grok. Il ne fait que ce que déclare son plugin.json (notifications, lecture ou écriture du message, lecture de la conversation, stockage privé, presse-papiers, sites https listés). Clés, jetons et fichiers ne sont jamais accessibles.
- **Créateur** : modèles, nom qui remplit l’identifiant, validation pendant la saisie, icône, version, permissions expliquées, éditeur de code et aperçu en direct avec console (Ctrl+Entrée).
- **Paquets** : glisser un dossier, un .zip ou un .bgbplugin sur la fenêtre, ou importer avec un bouton. Better vérifie chaque manifeste, montre les permissions et la version (nouveau, mise à jour, plus ancienne), puis demande confirmation. Bouton « Redémarrer maintenant ».
- **Galerie** : compteur de mots, réponses types, minuteur focus, météo (Open-Meteo, sans clé), conversation en Markdown.
- **Gestion** : activer, désactiver, modifier, exporter un plugin ou tout exporter, retirer (le dossier va dans une corbeille, rien n’est effacé), anciennes versions gardées.
- **Sécurité** : un plugin qui ne répond plus ou accumule les erreurs est arrêté et désactivé ; si un démarrage n’aboutit pas, mode sans échec.
- **Documentation** complète dans l’app et sur le site (API, manifeste, permissions, exemples, bonnes pratiques).

## Corrections

- « identifiant de plugin invalide » : l’identifiant des boutons du pont est créé depuis le nom et vérifié pendant la saisie, avec un message clair.
- Détection du bouton Partager et du nom de l’agent aussi avec une interface Grok en anglais.
- Compteur de mots : « 0 min » pour un message vide.

## Reporté

Le client MCP n’est pas dans cette version : il n’était pas assez fiable pour être publié.

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

Depuis la 1.3 : la mise à jour intégrée de la 1.3 ne peut pas passer en 1.4 (verrou sur la version gardée, arrêt de Grok trop strict, relance absente). Rien n’est changé quand elle échoue. Installez le paquet complet : vos réglages, notes et prompts restent. À partir de la 1.4, les mises à jour intégrées sont corrigées. Les paquets publiés contiennent du JavaScript minifié. Ligne Licence dans À propos.

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
