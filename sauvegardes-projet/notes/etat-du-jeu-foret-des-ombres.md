# État du jeu « Forêt des ombres » : fichier d'état unique (mis à jour le 27/11/2026)

Ce fichier remplace `contexte/etat-final-2026-11-10.md` (fusionné ici le 27/11/2026) et l'ancienne version de ce même fichier. Les détails par sujet sont dans les notes listées plus bas. Les parties les plus anciennes (écran d'accueil, menus, vie ambiante, options) datent du 06 et 07/11/2026.

## Où est la bonne version (27/11/2026)
- **Page publiée (à utiliser)** : https://claude.ai/artifact/F9RpZV5r2h4NESKH32NT3D — privée (propriétaire seulement). Version en ligne : 1795737094-95d0.
- **Copie dans le projet** : `jeu/foret-des-ombres.html` (≈ 3,3 Mo, un seul fichier HTML ; elle contient les ajouts du 27/11 : maison de la ferme agrandie, creusage animé, passe pixel art). Elle fonctionne hors ligne ; seule la police « MedievalSharp » vient de Google Fonts (sans internet, une police de secours s'affiche).
- **Dépôt GitHub** `Luciole1990/foret-des-ombres` : PAS à jour par rapport aux changements récents (dernière mise à jour le 25/11/2026). Hébergement durable : GitHub Pages (Mél a luciole1990.github.io).
- Partage : un lien OneDrive vers un .html ne lance pas le jeu (téléchargement ou aperçu texte). Pistes : GitHub Pages, Netlify Drop, itch.io, ou envoi du fichier à ouvrir dans un navigateur.
- Historique récent : Accueil/Grimoire (07/11) → panneaux → ennemis → secrets de l'accueil → compétences actives (10/11) → boss Sylvestris → plaines et ferme (13/11) → tableau des niveaux (13/11) → jeu remis en mode normal (13/11) → boss refait, intro Hedera, arcade Boss (26/11) → ferme agrandie, pelle animée, passe pixel art (27/11).

## Règle de travail
- Repartir de la page publiée la plus récente (`read_file` sur l'artefact, `paths:["index.html"]`) ou de `jeu/foret-des-ombres.html`, appliquer les changements par scripts de patch, tester avec un navigateur sans interface, publier avec `publish_files` (slug 728d2ff0-ddf5-4c1e-ba48-39a42f838bc0, `base_version` = version en ligne), puis réécrire `jeu/foret-des-ombres.html` (faire d'abord un `project_read` du doc pour pouvoir l'écraser).
- Après chaque lot, republier puis noter ici et dans `contexte/`.
- Tenir le tableau des niveaux à jour (voir la mise à jour du 13/11 « fin de journée »).

## Où trouver quoi (notes du projet)
| Sujet | Fichier |
|---|---|
| Fiche de chaque niveau (tableau .ods en texte) | `contexte/tableau-niveaux.md` |
| Niveau 3 : herbes hautes, pièges, ferme, PNJ, pelle et cœur | `contexte/niveau3-plaines-ferme.md` |
| Passe pixel art sur tous les niveaux (arbres, sol…) | `contexte/niveau3-plaines-ferme.md` (dernière section) |
| Boss Sylvestris | `contexte/boss-sylvestris.md` |
| Les 10 types d'ennemis | `contexte/ennemis.md` |
| Panneaux en bois | `contexte/panneaux.md` |
| Secrets de l'accueil (triches, boutique, niveau bonus, lune) | `contexte/secrets-accueil.md` |
| Compétences actives codées (mana, recharges) | `contexte/competences-actives.md` |
| Nouvelle répartition items/compétences voulue (pas codée) | `contexte/progression-items-competences.md` |
| HUD et menu pause | `contexte/hud-et-menu-pause.md` |
| Boutons d'action, simulateur, menus parchemin, pièces | `contexte/boutons-action-et-menus.md` |
| Menu Lucifer (équipement, stats) | `contexte/menu-lucifer.md` |
| Histoire, légende du Solstice, potions | `10_histoire_du_jeu.txt`, `La légende du Solstice`, `11_potions.json` |
| Dialogues et animations (méthode, notice du sage) | `13_dialogue_et_animation.md` |
| Anciens plans des compétences par niveau | `12_niveaux_cristaux_competences.txt`, `compétences ou items déverrouillable par niveaux.docx` |

## Mise à jour du 27/11/2026
- Niveau 3 : maison agrandie, lumières réduites, creusage animé (la refonte du décor de la ferme en pixel art et les PNJ datent du 26/11) : voir `contexte/niveau3-plaines-ferme.md`.
- Passe pixel art sur les arbres et le sol de tous les niveaux : voir la dernière section de `contexte/niveau3-plaines-ferme.md`.
- Version publiée : 1795737094-95d0.

## Mise à jour du 26/11/2026 (nuit)
- **Fichier de référence** : la page publiée https://claude.ai/artifact/F9RpZV5r2h4NESKH32NT3D (version 1795655408-3290 à cette date). La copie du projet **`jeu/foret-des-ombres.html`** est alors À JOUR (identique à la page publiée) ; elle remplace l'ancienne `jeu/foret-des-ombres-potions.html`, périmée. Le dépôt GitHub Luciole1990/foret-des-ombres n'a PAS été mis à jour avec ces changements.
- **Mode arcade : section Boss** (Sylvestris jouable directement, sans épée, avec toute la cinématique ; niveaux 5, 8, 9, 10 grisés « bientôt »).
- **Boss Sylvestris** refait (scènes, sortie de terre, yeux rouges, rire synthétisé GBA/N64, caméra qui recule, bulles style parchemin, chêne et chevalier en pixel art, coffre, bourse de cuir, règle des pièces) : voir `contexte/boss-sylvestris.md`.
- **Intro du jeu** : fond noir avec le seul logo **Hedera Game** (nouvelle image fournie par Mél, fond transparent, `LOGO_HEDERA_PROD`), plus de texte « Hedera Game » ni de halo ; logo à 0,5 s, fondu à 3,7 s. Sons d'intro conservés (carillon, éclat, vent), à changer plus tard si Mél le souhaite.

## Mise à jour du 13/11/2026 (nuit) : jeu remis en mode normal
- `UNLOCK_ALL_MAPS` = false : l'arcade n'ouvre que les cartes gagnées. La lune de l'accueil (oui/non) reste le moyen de tout ouvrir pour tester.
- Les triches (lanterne de l'accueil) restent des Easter eggs : toujours en mémoire seulement, remises à zéro à chaque démarrage. Rien n'est actif par défaut.
- Boutons de compétences : un bouton n'apparaît que si la compétence est déjà acquise AVANT le niveau joué (`Jeu.lvl >= lv`), même en rejouant un ancien niveau en arcade. Sans triche, niveau 1 = aucun bouton.
- Remise à zéro unique au premier chargement de cette version (clé `foretReset1`) : sauvegardes d'histoire (`foretSlots`, `foretHistoire`), cartes débloquées (`foretCartes`) et choix de la lune (`foretAllMaps`). Scores, boutique et options sont gardés.
- Nouvelle version publiée à ce moment : 1794598855-2fef. Copie du projet mise à jour.
- Nouvelle répartition items/compétences voulue par Mél (pas encore codée) : `contexte/progression-items-competences.md`.

## Mise à jour du 13/11/2026 (fin de journée) : tableau des niveaux + fichier jouable
- **Tableau des niveaux** : fichier .ods « Tableau_des_NIVEAUX_remplis.ods » (10 onglets « Niveau 1 » à « Niveau 10 » + « Modèle de Niveau » vierge, une page paysage par niveau, 21 lignes de paramètres, colonnes Contenu et Notes). Version texte dans `contexte/tableau-niveaux.md`. Règle : à chaque changement dans le jeu, mettre à jour les cases concernées dans le .ods ET dans `contexte/tableau-niveaux.md`, et dire à Mél lesquelles. Pour modifier, Mél indique l'onglet + la ligne ou la case (ex. « Niveau 5, ligne Ennemi », colonne C = contenu, colonne E = notes).
- **Fichier du jeu à partager** : `jeu/foret-des-ombres.html` (≈ 1,8 Mo à cette date, un seul fichier HTML, même contenu que la page publiée 1794576174-311b). L'ancienne copie `jeu/foret-des-ombres-potions.html` a été supprimée du projet le 13/11.

## Mise à jour du 13/11/2026 (soir) : niveau 3 plaines + ferme
- Herbes hautes dynamiques, 5 pièges à loups, ferme entrable avec 3 PNJ, pelle et cœur : voir `contexte/niveau3-plaines-ferme.md`.
- Objets au sol ÷2 à partir du niveau 4, plus d'épée au sol.
- Version publiée à ce moment : 1794576174-311b (même page, même slug), remplacée depuis.

## Mise à jour du 13/11/2026 : boss Sylvestris
- Boss n°1 codé au niveau 3, détails dans `contexte/boss-sylvestris.md`. Le coffre laisse un cristal de la Lanterne (3e sur 10).
- Règle ajoutée : l'épée de métal (récupérée sur le soldat mort de la clairière) ne se casse jamais ; aux niveaux 4 à 10 et au niveau bonus, le joueur l'a d'office et il n'y a plus d'épées au sol.

## Ce qui a été ajouté le 10/11/2026 (détails dans les notes liées)
| Sujet | Résumé | Note |
|---|---|---|
| Panneaux en bois | Pixel-art, 5 styles, textes lore/aide, quantité croissante (niv. 1 : 3, niv. 2+ : 5), lecture via « 📖 Lire » | `contexte/panneaux.md` |
| Nouveaux ennemis | Un type par niveau, 1 à 3 coups d'épée, difficulté graduelle | `contexte/ennemis.md` |
| Secrets de l'accueil | Lanterne = 7 triches ; personnage = boutique ; château = niveau bonus 11 ; lune = débloquer toutes les cartes (oui/non) | `contexte/secrets-accueil.md` |
| Compétences actives | Saut, Dash, Prisme, Rayon de lumière, Éclair, Soin, Mini-carte | `contexte/competences-actives.md` |

## Reste à faire / points ouverts
- Niveau 3 : cœur = +1 vie plafonnée à 5 (à confirmer), quête de la ferme facultative (le boss reste à 100 % d'exploration).
- Boss : équilibrage, fiche Grimoire.
- **S'aplatir** : pas codé (message « bientôt disponible »).
- Compétences d'après le fichier 12 non faites : Ponte (niv. 8), Téléportation (niv. 9), Boss (niv. 10), mini-boss.
- Nouvelle progression items/compétences/coûts à valider puis coder : `contexte/progression-items-competences.md`.
- Éclats de la Lanterne : quel niveau donne lequel, et comment (sage au niveau 1, aigle au niveau 4, coffre de Sylvestris au niveau 3, les autres à définir). Question ouverte reprise de l'ancien dossier des niveaux du 05/11.
- Tableau des niveaux : beaucoup de « À définir » (PNJ, animations, boss des niveaux 4 à 10, ennemis propres à chaque niveau) à décider au fil du jeu.
- Équilibrage à ajuster à l'usage : coûts de mana, recharges, portées (constantes en tête du module `Skills`), prix et catalogue de la boutique, niveau bonus « Le château » (provisoire).
- Les triches ne bloquent pas les scores (option possible : les désactiver pendant les triches).
- Non testé : vrai téléphone, vraie manette, performances sur téléphone modeste (le niveau 3 dessine ~450 touffes d'herbe par image ; tests faits en navigateur sans interface, aucune erreur console).
- Textes de l'image d'accueil en français seulement.

## Points à trancher repérés lors du rangement du 27/11/2026
- **Tranché par Mél le 27/11/2026** : le coffre de Sylvestris contient la **bourse de cuir** ; le **cristal** est donné par le mage (PNJ) à la fin du niveau 1. À revoir plus tard (la note du 13/11 et le tableau des niveaux disaient encore « cristal dans le coffre »).
- **Plan des compétences par niveau : trois versions, gardées toutes les trois pour l'instant** (Mél ne sait pas encore laquelle fera foi) : `12_niveaux_cristaux_competences.txt` (06/11), `compétences ou items déverrouillable par niveaux.docx` (09/11) et `contexte/progression-items-competences.md` (13/11, la plus récente, pas codée). Ce qui est codé = `contexte/competences-actives.md` (10/11).
- **Fichiers supprimés le 27/11/2026** (sauvegarde envoyée à Mél) : les modèles vides `01` à `09`, `00_instructions_projet.txt`, `consignes_developpement_jeu_isometrique.txt`, `Light_Story.txt` (copies des instructions et de la description du projet), `14_jeux_code_fragment_css.txt` (ancien début du CSS, déjà dans le HTML), `contexte/jeu-foret-isometrique.md` et `contexte/jeu-lumiere-carte.md` (copies de la mémoire), `contexte/reponse-ennemis.md` (doublon de `ennemis.md`), `claude/12_niveaux_du_jeu.md` (remplacé par `contexte/tableau-niveaux.md`), `contexte/etat-final-2026-11-10.md` (fusionné ici).

## Écran d'accueil « Lucifer : Le porteur de lumière » (refait le 07/11/2026 après-midi, demandé par Mél)
- Fond = **image pixel-art 1024×1536** (WebP en base64, `#hwi`) dont les boutons dessinés et le drapeau ont été **effacés** (remplissage flou, caché derrière un panneau sombre `#hpn`). Titre « Lucifer », guimauve au bâton magique, parchemin « Partez à l'aventure… » conservés.
- **Vrais boutons HTML** (`.hb`, générés par `renderHome()` dans `#hui`, textes traduits FR/EN/ES), plus grands et espacés qu'avant : Jouer l'histoire (→ sauvegardes si une partie existe, sinon nouvelle), Jouer arcade, Options, Succès, **Grimoire** (remplace Score), Multijoueur ; lien « Crédits » en bas. Réglages : constantes `HB_TOP` / `HB_STEP` (JS) et `.hb` (CSS, hauteur 5,6 %, largeur 54 %, tailles en `cqw`).
- **Drapeau en bas à droite** (`.hf`, drapeaux dessinés en SVG dans `HOME_FLAGS`) : un clic change la langue, sans menu. Ordre FR → ES → EN → FR. Il appelle `Opt.set('lang',…)` ; `applyLang()` rafraîchit l'accueil.
- **Langue supprimée** du menu Options (onglet) et de l'onglet Options du sac.
- **Succès** (accueil) : ouvre le cadre du sac en mode `ach` (`Bag.open(1,'ach')`) avec 4 onglets : Succès, Avancée (niveaux de l'histoire terminés, noms cachés tant que verrouillés, records), Objets (grille des 22 objets, grisés tant que jamais ramassés, compteur et détail), Score (meilleur score, records, top). « Fermer » revient à l'accueil.
- **Grimoire** : même cadre, mode `grim`, 7 onglets : Histoire (texte de `10_histoire_du_jeu.txt` + légende du Solstice), Indices, PNJ (sage, moine magicien, 2 inconnus), Ennemis (Ombres + nombre/vitesse par niveau débloqué), Potions (nom et effet révélés seulement une fois la potion ramassée), Pouvoirs (halo, saut, épée, couronne), Aide (commandes selon le mode). Textes FR/EN/ES via `G(fr,en,es)`. Contenu dans `Bag.pg`.
- **Progression conservée** (module `Prog`, localStorage `foretProg`) : objets ramassés (compteurs), meilleure part de lieux découverts sur une carte, et depuis le 26/11 la **bourse de cuir** (`Prog.purse`) ; les succès lisent les records `Sc`.
- Menu Options > Commandes (tactile) : le cadre « Système de déplacement » (sol / joystick / croix) a été retiré ; le mode reste celui déjà enregistré (`ctrl`).
- Limite connue : le texte de l'image (titre, parchemin) est en français seulement.
- L'ancien titre « Mystic Forest » (`#tt`, `setTitle`) existe encore dans le code mais n'est plus affiché. Le bouton Score a quitté l'accueil (les scores restent dans Succès > Score et dans le menu pause).

## Style des menus (06/11/2026, d'après des images de référence de Mél)
- **Menu pause** : cadre PNG 262×390 intégré en base64 (bois sombre, liseré doré, cristaux, lianes, épées et boucliers), titre « Pause » doré, boutons « planche de bois » à bordure dorée. Classe `.pc.pz`, contenu dans `<div class="pzi">` ; tailles en `cqw`.
- **Sac** : parchemin craquelé (tuile PNG 64×64), cadre 9-slice PNG 80×80 via `border-image`, onglets en bois à bordure dorée, cases sombres à bordure dorée, aperçu 3D dans un cadre doré, bouton « Fermer » large avec losange violet.
- **Onglets du sac** (en pause) : Équipement, Fiche personnage, **Succès 🏆** et **Options ⚙️**.
- Succès : Premier pas, Explorateur (100 %), Chasseur d'ombres (5), Cartographe, Collectionneur (5 sortes d'objets), Vainqueur (localStorage `foretCartes`).
- Les autres panneaux `.pc` (options, victoire, sauvegardes, cartes…) gardent l'ancien habillage parchemin simple : pas encore restylés.
- Le menu Options complet a 9 onglets défilables (Commandes, Audio, Graphismes, Performance, Affichage, Vibrations, Accessibilité, Interface, Réinitialisation).

## Vie ambiante (06/11/2026)
- Module `Life` (avant « HISTOIRE »), réglé par biome dans `LIFE_THEMES`, types d'animaux dans `LIFE_KINDS`, silhouettes en canvas dans `LIFE_SPR`. Animaux hors de la lumière qui traversent le halo, oiseaux posés qui s'envolent, chauves-souris, **lucioles** (clignotantes, couleur et nombre par biome). Respecte l'option « Décor » et l'intensité météo ; remis à zéro à chaque nouvelle carte.

## Options (06/11/2026)
- Onglet **Commandes** : option `cm` = mode (0 Tactile, 1 Clavier & souris, 2 Manette), touches réglables (7 actions × 3 cases), manette réglable, simulateur d'écran (`Edit`), 3 presets par mode (localStorage `foretOpt`).
- Onglet **Audio** : volumes général, musique, bruitages & UI, ambiances.

## Tests effectués (navigateur sans interface)
- 26/11/2026 : séquence complète du boss (épée, silence, séisme, éveil, rire, bulles, combat, joie, coffre, ouverture, bourse), règle des pièces, « Rejouer » après défaite, carte normale non affectée, intro avec logo seul ; aucune erreur console.
- 07/11/2026 : accueil portrait/paysage, drapeau de langue, Succès, Grimoire, Options.
- 06/11/2026 : menus, vie ambiante sur les 10 biomes.
- Non testé : vrai téléphone, vraie manette, plein écran réel, performances sur téléphone modeste, « Jouer l'histoire » avec une sauvegarde existante.
