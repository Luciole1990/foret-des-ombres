# Boutons d'action, simulateur compact, menus parchemin (09/11/2026) : complète `hud-et-menu-pause.md`

Version publiée à cette date : https://claude.ai/artifact/F9RpZV5r2h4NESKH32NT3D, « Forêt des ombres » (10/11/2026 : panneau de personnalisation repliable/déplaçable + pièces d'ennemis) ; la version à jour est indiquée dans `contexte/etat-du-jeu-foret-des-ombres.md`.

## Boutons d'action (schéma de Mél, écran portrait)
- 8 médaillons (`#act`, `.ab`, icônes SVG dans `SK_ICON`, constante `SKILLS`) : Saut, Carte (minimap), Dash, S'aplatir, Éclair, Rayon lumo, Prisme, Soin. « Saw » du schéma lu comme « Saut ». Parler = bouton existant (`#sagebtn`), replacé en bas au centre.
- Disponibilité : un bouton n'apparaît que si `Unlock.n > lv` (lv = niveau du cristal : Saut/Carte 1, Dash 2, S'aplatir 3, Éclair 4, Rayon 5, Prisme 6, Soin 7). Avec `UNLOCK_ALL_MAPS = true` (mode travail) tous sont visibles. (Règle modifiée le 13/11 : voir `contexte/etat-du-jeu-foret-des-ombres.md`, mise à jour « jeu remis en mode normal ».)
- **Effets de jeu branchés depuis le 10/11/2026** : voir `contexte/competences-actives.md` (le 09/11, `Skill.use(k)` affichait seulement « {nom} : bientôt disponible », sans coût de mana). S'aplatir n'est toujours pas codé.
- Affichés seulement en mode Tactile (`cm` 0) avec commandes visibles.

## Disposition / simulateur
- `LAY_KEYS` passe à 11 boutons ; positions par défaut tirées du schéma (`LAY_DEFAULT`). `layNorm` complète les clés manquantes avec les défauts.
- Défauts : mode tactile, commandes visibles, **joystick par défaut** (`ctrl` = 1 ; l'ancien mode « toucher le sol » `ctrl` 0 est migré vers 1).
- Simulateur : tous les boutons y figurent (verrouillés = gris + cadenas). Panneau `#cep.cp` compact.
- **Bouton −/+ (10/11)** dans l'en-tête du panneau (`.cp-f`, `Edit.fold`) : replié, il masque les 2 emplacements (Charger/Enregistrer) et la ligne Réinitialiser/Annuler/Valider ; déplié, tout revient. Remis à « déplié » à chaque ouverture.
- **Fenêtre déplaçable (10/11)** : on la glisse par son en-tête (`Edit.pdown/pmove/pup`, position `Edit.pos` bornée à l'écran). Une fois déplacée, le placement automatique haut/bas (ou gauche/droite) est désactivé ; position remise à zéro à l'ouverture.

## Pièces (10/11)
- `Jeu.drop()` appelé dans `Jeu.hit` à chaque ennemi tué : 60 % → 1 pièce, 20 % → 5, 10 % → 10, 10 % → 0 (constante `COIN_DROPS`, seuils cumulés ; vérifié sur 10 000 tirages).
- Total `Prog.coins`, sauvegardé dans `foretProg` (donc partagé entre parties). Message « Ombre terrassée ! +N 🪙 » + son. Affiché dans le menu Lucifer, « Bourse d'argent ».
- Pas encore de boutique/dépense ni d'icône de pièce dans le HUD.

## Menus
- Effet parchemin craquelé + cadre lierre sur tous les `.pc` (sauf menu pause en bois et sac) ; boutons en bois à liseré doré.
- Sauvegarde : 3 slots compacts (`.sv`) sur un seul écran.

## Mises à jour du 09/11 (soir)
- **Cadre central du HUD (`#tcf`)** : sur écran étroit il s'étire entre le cadre de gauche et le bouton pause (marge droite 54 px) ; sur grand écran `min-width` 230 px.
- **Onglets du sac** : `white-space:nowrap` + `Bag.fit()` réduit la police d'un onglet tant que son texte dépasse (« Équipement » rentre).
- **Personnage 3D (`Perso3D`)** : maillage 84×30, résolution jusqu'à ×3, éclairage enveloppant, ombre au sol, visage refait. Sommets mis en cache (`this.geo`).
- **Cristaux** : `crystalSvg(couleur, trouvé)` = grappe de 3 prismes à facettes. Le cristal de récompense (`Sage.drawCrystal`) reprend le même prisme (`CRYSTAL_COLORS`).
- **Animaux (`LIFE_SPR`)** : tous redessinés ; taille ×1,5. Outils : `shadeHex`, `lG`, `lEo`, `lP`, `lEye`, `lLn`.

## À faire plus tard
- Exploiter le document `compétences ou items déverrouillable par niveaux.docx` (demandé par Mél pour plus tard).

## Limites
- Défauts pensés pour le portrait ; en paysage, les boutons de gauche chevauchent le joystick.
- Testé en navigateur sans interface ; pas sur vrai téléphone (performances du 3D à ×3 non vérifiées sur téléphone modeste).
