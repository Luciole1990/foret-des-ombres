# Boss n°1 : Sylvestris — état au 26/11/2026 (nuit, 3 retouches successives)

Boss au **niveau 3** (Les plaines silencieuses), en 3 actes. Code : module `Boss` (juste avant `Sage`). Réglages : constantes `BOSS_*` en tête du module ; sons dans le module `Snd` (`bossMusic`, `victory`, `tada`, `rumble`, `thud`, `crack`, `rustle`, `growl`, `laugh`, `creak`, `setHush`).
Version de référence : voir `contexte/etat-du-jeu-foret-des-ombres.md` (section « Où est la bonne version ») ; copie complète dans `jeu/foret-des-ombres.html`.

## Accès direct depuis l'arcade
- Menu « Jouer arcade » : section **Boss**, toujours accessible. « Niv. 3 : Sylvestris » rejoue toute la séquence, **sans épée de métal** au départ. Niv. 5, 8, 9, 10 : boutons grisés (`BOSS_SOON`).
- « Rejouer » après une défaite ramène dans la clairière (barrière déjà ouverte) : la scène repart quand on reprend l'épée.
- Drapeau `Boss.arc`, remis à 0 par une carte normale.

## Déroulé (scènes, durées dans `BOSS_T`)
1. Fondu noir « La barrière s'ouvre… », puis la clairière. Derrière le joueur, **barrière à deux battants qui s'ouvre** (grincement).
2. **Sylvestris est un vieux chêne massif immobile**, éclairé doucement dans la clairière pour qu'on le remarque. À côté, le **chevalier mort** avec l'épée de métal plantée.
3. `sword` : on retire l'épée → carte d'objet « Épée de métal ! Elle ne se brise jamais. » (jingle). Objet gardé pour la partie.
4. `hush` : **silence total** ; bulle « … » au-dessus du joueur.
5. `quake` (3,4 s) : gros tremblement, fissures qui rayonnent du pied de l'arbre, feuilles et terre qui jaillissent, vignettage noir. `susp` (2,4 s) : silence et suspense.
6. `rise` (8,4 s) : l'arbre s'éveille (flash orangé, craquements), **la jambe droite arrache le sol** (trou), pas droit, **jambe gauche**, pas gauche : debout. Chaque pas = secousse, poussière, bruit sourd. Il secoue la terre et grogne, puis les **yeux rouges s'allument en clignotant**. Technique : la planche de sprite est découpée (jambes / buste) et les jambes sont enfoncées puis relevées, coupées au niveau du sol.
7. `laugh` (3,2 s) : il se tourne vers le joueur, yeux rouges, **rire vocal synthétisé** (trois « hé » graves puis grand « HAAAH ») ; l'arbre se penche et secoue les épaules. `talk1` / `talk2` : **les deux répliques sont dites par Sylvestris** (bulle au-dessus de l'arbre) : « C'est quoi ? … » puis « C'est qui ? … » (running gag des trois points).
8. `fight` : **la musique du boss démarre**, le combat commence.

## Caméra et bulles
- La caméra **recule pendant les scènes** (`BOSS_ZOOM` : 0,74 pour l'éveil, 0,82 en combat, 0,88 avant la scène…) et se cadre entre le joueur et l'arbre (`Boss.zm`, appliqué dans `Jeu.render` et `Jeu.goto`).
- **Bulles = même style que la bulle de dialogue du jeu** (`#sage`) : parchemin `#f3e2b8`, bordure brune, police Georgia 17 px, petite pointe. Une seule sorte de bulle dans tout le jeu. Bulle du joueur au-dessus du joueur, bulle de Sylvestris au-dessus de l'arbre (`say(texte,'b')`). Elle reste dans l'écran, avec une animation d'apparition.

## Graphismes
- **Sprite de Sylvestris** : planches a1/a2/a3 (cellules 80×96) agrandies ×4 au chargement par **Scale2x** (`Boss.up4`) puis réduites avec lissage : contours nets au lieu du flou. Pas de nouveau détail : pour plus de richesse il faut redessiner les planches ou fournir un asset.
- **Chêne** (`oakBuild` / `drawOak`) : pixel art procédural (tronc creusé d'un trou sombre, mousse, racines, branches) + 34 touffes de feuilles qui bougent avec le vent (rafales) ; feuilles qui tombent (particules `fall`). Fonction utilitaire `Boss.pix` (dessin basse résolution, seuil, recoloration, contour d'1 pixel).
- **Chevalier mort** (`knightBuild` / `drawSoldier`) : squelette à genoux en armure d'acier rouillée, casque à visière ouverte et panache rouge fané, cape cramoisie déchirée, côtes visibles dans la cuirasse fendue, mousse et fleurs, main sur le pommeau de l'épée plantée. L'épée est une image à part (disparaît quand on la prend, scintille).
- **Yeux rouges** : fentes obliques à cœur clair, placées sur le visage, lueur additive qui pulse.
- **Coffre** (`drawChest`) : bois à planches, ferrures et rivets, couvercle voûté qui **se relève vers le haut** (bug d'unités corrigé), serrure dorée, lueur dorée et étincelles à l'ouverture. Asset définitif à fournir par Mél plus tard.

## Combat
- 3 actes (3, 3, 4 coups). **Vitesse du boss : ×1, ×1,5, ×2** (`BOSS_SPEED`).
- Musique synthétisée (ré mineur) : plus rapide et plus chargée à chaque acte, plus pressante quand le boss est près de mourir.
- Attaques inchangées : griffes (acte 1), boules d'énergie (acte 2), racines (acte 3). Mort des ennemis : animation + petit bruit déjà en place.

## Victoire
- `joy` : jingle, le joueur saute de joie. `morph` : flash, l'arbre **se change en coffre**. Coffre : **la bourse de cuir** (carte d'objet « Bourse de cuir ! Elle garde les pièces que tu récoltes. »). Puis fin du niveau.
- **Règle des pièces** : sans bourse (`Prog.purse`), les ennemis laissent des pièces qu'on ne peut pas garder (message : « il te faut une bourse »). Avec la bourse, elles sont comptées et sauvegardées. Les anciennes sauvegardes qui avaient déjà des pièces sont considérées comme ayant la bourse.

## À confirmer / reste à faire
- Écouter le nouveau rire (jugé trop « ancien » avant : cible = entre Game Boy Advance et Nintendo 64) ; les autres sons et musiques plaisent à Mél, ne pas les changer. Inspirations citées : Zelda, Golden Sun 1 et 2, Secret of Mana.
- Juger sur téléphone : taille de l'arbre et du chevalier, rythme des pas, zoom de la caméra.
- L'épée est gardée pour la partie en cours, pas d'un lancement de l'arcade à l'autre.
- Aucun son n'est un fichier : tout est synthétisé, remplaçable.
- Équilibrage (délais, vitesses). Compétence liée au niveau 3 (« S'aplatir »), fermier PNJ, fiche Grimoire, test sur vrai téléphone.
