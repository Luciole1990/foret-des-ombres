# Niveau 3 — Les plaines silencieuses (herbes, pièges, ferme)

Version publiée : 1795737094-95d0 (27/11). Module `Plaine` (fichier source plaine.js, injecté avant la section Sage). Actif uniquement à `Jeu.lvl===2`, coupé dans l'arène du boss (`Plaine.reset()` dans `Boss.enter`).

## Objets au sol (niveau 4 et suivants)
- `lvl>BOSS_LEVEL` : objets ÷2 (lanternes 5→3, pièges 8→4, couronnes 3→2, potions 14→7). Plus d'épée au sol (épée de métal permanente).

## Herbes hautes
- Densité continue `gw(i,j)` (bruit) : taches de sol normal, rien sur la clairière de départ, les chemins ni la ferme.
- Sol peint par pixel (fond sombre strié) + brins statiques + fleurs sauvages ; ~2500 touffes dynamiques triées en profondeur (sprites en cache, cisaillées par le vent).
- Vent = `Weather.cfg.wind`. Le joueur couche les touffes autour de lui (rayon 1,5 case), secousse + brins qui volent à chaque atterrissage.

## Pièges à loups (5)
- 2 cachés dans l'herbe, 2 visibles sur sol nu (case bloquée : le chemin les évite), 1 caché dans les blés.
- Cachés : presque invisibles, éclat qui apparaît à moins de 3,2 cases. Déclenchement < 0,6 case, pas pendant un saut : −1 cœur (via `Boss.harm`), immobilisation 1,3 s, piège reste refermé.

## Ferme (repère local a,b ; origine fi aléatoire, fj=4, bord nord-est, porte vers le centre)
- Maison a0-6 / b0-5 (porte (3,5)), cour b6-9, céréales a8-11 / b0-6 (cachent le joueur), champ labouré a8-11 / b7-11 avec épouvantail (10,9).
- Maison entrable : murs par case, toit qui s'efface et murs de devant abaissés quand on entre. Fenêtres éclairées, trous dans le brouillard (la ferme se devine au loin), fumée de cheminée.

## Décor de la ferme : pixel art (refonte 26/11, version 1795735447-b6ea)
Abandon du dessin vectoriel lissé : tout le décor de la ferme utilise désormais le moteur pixel art du jeu (classe `Art`, volumes `solid()` par distances signées, rampes de couleur, `stoneSh`, contour d'un pixel), même rendu que les cabanes, ruines et cryptes.
- Accessoires (`FA.*`, constantes `FA_*`, cache `FA_CACHE`, fonctions `faSpr(clé,build,…)` / `faBlit`) : tonneau cerclé, puits de pierres avec eau, toit de bardeaux, poulie et seau, bottes de paille liées, tas de bûches, tabouret, panier de pommes, sac de grain, table à nappe à carreaux (bol, pain, cruche, bougie), lit (avec ou sans tête de lit), buffet vitré, épouvantail avec corbeau, clôture (4 variantes). Sprites construits une fois puis mis en cache, posés par `Plaine.drawCell`.
- Murs (`faWallSh`, `faWallCell`) : une case = un sprite, deux hauteurs (plein et abaissé `PL_WLOW`). Soubassement de moellons, colombage (poteaux, sablières, croix), crépi taché, fenêtres (volets et jardinière dehors, rideaux dedans, vitre qui reflète), étagères à bocaux, casseroles, tableau, outils, âtre en pierre. `Plaine.wallPx` fait un fondu entre les deux hauteurs quand le joueur entre.
- Toit de chaume (`faRoof`, sprite unique 496×290, `FR_*`) : 4 pans calculés par pixel (rangées de bottes, brins, frange irrégulière, mousse), faîtage, cheminée en briques. Fondu d'opacité selon `cut`.
- Effets dynamiques conservés en vectoriel par-dessus : flammes de l'âtre (`hearthFx`), marmite, fumée, lueur des fenêtres allumées, lanterne.
- Perdu par rapport à la version vectorielle : balancement de l'épouvantail et du chaume au vent.
- Performance : au moins aussi bonne que la version précédente (test headless : ~43 fps contre ~39).
- Le sol (cour, labour, blé, parterres) reste peint sur le canevas du sol (`paint`) : c'est la prochaine cible si on veut encore plus de pixels.
- Rappel : `Plaine` possède déjà une méthode `glow` (autre usage) ; mes lueurs utilisent `warm`.

## Maison agrandie, lumières, pelle (27/11)
- Maison : cases a −1…6, b −1…5 (pièce intérieure 6×5 au lieu de 5×4). Les murs arrière et gauche sont aux cases b=−1 et a=−1 ; la porte (3,5), la cour et les champs n'ont pas bougé. Toit : `faRoof` paramétré par `FW_RW=8`, `FW_RD=7` (affiché depuis `pt(-1,-1,0)`). `inside()` couvre a 0…6, b 0…5. Mobilier : lits (0,0)(0,1), buffet (5,0), tonneaux (0,4)(5,4), sacs (5,3)(0,2), tabouret (1,0), âtre sur le mur arrière (case (3,−1)).
- Lumières réduites (fenêtres, âtre, bougie, lanterne) ; trou dans le brouillard élargi dans la pièce (rayon 190, opacité 1) pour bien voir l'intérieur.
- Creusage animé : `Joueur.pose()` suit un cycle `PL_DIG_CYC` (0,44 s : levée, coup, rebond) et `Plaine.shovelDraw()` dessine la pelle tenue par la guimauve, tournée vers le trou. Poussière aux coups (t = 0,27 / 0,71 / 1,15 / 1,59). L'ancienne pelle autonome du trou est supprimée.

## PNJ de la ferme (mis à jour 26/11)
- Sprites pixel art 48×72 (style des villageois de l'intro, rendu GBA/N64), planche PNG base64 `PL_SHEET` (5 col × 4 lignes : fermier, fermière, fils, chien), affichés à l'échelle `PL_SPR_SCALE` (.75), pieds à la ligne 68. Dessin dans `Plaine.npc()`.
- Fermier (2,2) : statique, chapeau de paille, appuyé sur sa fourche (case bloquée). Fermière (4,1) : statique, foulard rouge, robe bleue, remue un bol (animation 2 images) dans la cuisine, sous le toit. Case bloquée.
- Fils et chien : patrouille dans la cour (`PL_NPC_PATH`, points en cases de la ferme), vitesse `PL_NPC_SPEED`, pause 0,8–2,2 s à chaque point, arrêt si on leur parle ou si le joueur est à moins de `PL_NPC_STOP_DIST` (2,2). Non bloquants. Logique dans `moveNpcs(dt)`, appelée depuis `upd`.
- Sprites de face seulement : retournés horizontalement selon le sens du déplacement à l'écran (dx−dy). Le chien marche en trottinant (petit saut) avec son sprite assis ; pas de vues de dos / de profil.
- Dialogues (bulle du sage, FR/EN/ES) : fermière (faire revenir la lumière, pièges), fils (présences autour de nous, piège dans les blés), fermier (délivrer les ombres, donne la pelle), chien : « Waf ! » (`PL_TXT.dog`).

## Pelle et cœur
- Après le fermier : « ⛏ Pelle » dans le HUD. Le cœur est enterré en haut à droite de la carte, juste derrière la petite ruine : position = panneau n°3 + décalage `PL_DIG_SIGN=3`, `PL_DIG_OFF=[-1.5,.3]` (`Plaine.spot()`). Le panneau n°3 donne un indice énigmatique (« j'entends d'ici le cœur battre »), le fermier indique l'ouest, derrière la vieille ruine.
- Bouton « ⛏ Creuser » à moins de `PL_DIG_DIST` du point (`canDig()`, prioritaire sur le bouton « Lire » du panneau voisin). Creuser 1,7 s → trou + cœur qui monte, ramassé automatiquement : « Cœur enterré : +1 cœur » (plafonné à 5).
- La quête est facultative : le boss se déclenche toujours à 100 % d'exploration.

## À décider / reste à faire
- Cœur : +1 vie plafonnée à MAX_LIVES (5) ; pas de cœur permanent en plus.
- Compétence « S'aplatir » (cristal niveau 3), entrée Grimoire de Sylvestris, équilibrage.
- Sprites de profil / de dos et vraie marche du chien (quadrupède) si on veut plus de vie.
- Sol de la ferme en pixel art (cour, labour, parterres) ; cabanes, ruines, cryptes et tour sont déjà en pixel art mais pourraient recevoir plus de détails.

## Graphismes de tous les niveaux : passe pixel art (27/11)

Références visuelles : Golden Sun 1 et 2, Zelda, Secret of Mana (en moins pixelisé). Règle : beau pixel art cohérent, sans en mettre plein la vue.

### Ce qui est en pixel art (moteur `Art`)
- Bâtiments (`BLD` : cabane, ruine, crypte, tour), décors (tombes, rochers, souches, champignons), ferme complète (voir plus haut).
- **Arbres (nouveau)** : `Spr.pine` (conifères à 5 étages de branches tombantes, neige sur les étages au niveau 4), `Spr.roundTree` (feuillus à lobes de feuillage, quand le thème est `round`), `Spr.dead` (arbres morts sinueux). Dessin 2D par pixel (pas de lancer de rayon : rapide), contour d'un pixel, mis en cache par variante (`SpriteCache`). Tampon `TREE_W×TREE_H` (130×190, ancre 65,168).
- **Sol (nouveau)** : couleurs quantifiées avec tramage ordonné (`GROUND_Q=11`), grain plus doux, gravillons sur les chemins, brins d'herbe / fleurs / cailloux / feuilles dessinés en pixels francs (`Terrain.build`). Le sol est recopié sans lissage (`imageSmoothingEnabled=false` dans `render`). Les sprites du cache (`SpriteCache`) sont aussi recopiés sans lissage.

### Reste en vectoriel
- Touffes d'herbe haute et blés du niveau 3 (sprites cisaillés par le vent), joueur (guimauve), ennemis, effets de lumière, météo.

### Pistes suivantes
- Plus de détails sur cabane / ruine / crypte / tour (toits, fumée de cheminée, éléments autour).
- Herbe haute et blés en pixels, sol de la ferme en pixel art, eau, rochers du marais, décors propres à chaque niveau.
- Outils de test (dans /home/claude/work) : `treesheet.js` (planche d'arbres), `bldsheet.js` (bâtiments), `lv.js` / `zoom.js` (captures des niveaux), `perf.js` (fps).
