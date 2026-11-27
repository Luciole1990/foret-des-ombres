# HUD en jeu et menu pause (07/11/2026, après-midi) : complète `etat-du-jeu-foret-des-ombres.md`

Version publiée à cette date : « HUD parchemin : cœurs, mana, effets, pause médiévale, menu pause » ; la version à jour est indiquée dans `contexte/etat-du-jeu-foret-des-ombres.md`. Page publiée : https://claude.ai/artifact/F9RpZV5r2h4NESKH32NT3D.

## Cadres en parchemin
- Les textures du sac (tuile de parchemin + cadre 9-slice) sont partagées par des variables CSS `--pt` (tuile) et `--pf` (cadre) ; la classe `.hp` donne l'habillage parchemin (bordure fine 7 px) aux cadres du HUD.
- **Haut gauche `#tl`** : cœurs (nouveaux cœurs rubis : dégradé `#hf`, contour sombre, liseré clair, reflets ; cœur vide creusé), « Lieux x/y » (préfixe « Niv. n · » en mode histoire), **jauge de mana** 0–100 % (`#mana`).
- **Haut centre `#tcf`** (visible seulement s'il y a quelque chose) : 3 groupes séparés par un trait : potions actives (nom + durée + fine barre), armes (épée : nombre de coups ; épée incassable : durée), autres objets (lanterne ×, couronne, fiole maudite, éclat). Sur écran étroit (< 560 px) le cadre occupe la place entre le cadre gauche et le bouton pause (légèrement décalé à droite du centre).
- **Bouton pause `#pause`** : plus de texte « Pause », médaillon doré avec deux barres (SVG) dans un petit cadre parchemin, 46×46 px (`LAY_BOX.pause`, position par défaut x .925 / y .05 ; une disposition déjà enregistrée dans « Personnalisation de l'écran » garde son ancienne position). Le libellé accessible (`aria-label`) est traduit dans `applyLang`.
- **Message de lieu `#msg`** : plus bas (124 px du haut), police « MedievalSharp » (Google Fonts, repli Georgia) avec contour sombre.
- `body.no2` (option « infos secondaires » désactivée) cache le cadre central.

## Mana
- `Jeu.mana` (0 à `MANA_MAX` = 100), remis à 100 à chaque nouvelle carte, se recharge de `MANA_REGEN` = 4 par seconde. **Depuis le 10/11/2026, les compétences actives consomment du mana** : voir `contexte/competences-actives.md` (le 07/11, aucune compétence ne le consommait encore).

## Menu pause
- Boutons : Reprendre, **Lucifer** (ouvre le sac : équipement, fiche, succès, options rapides), Options, **Succès** (même menu que l'accueil : Succès, Avancée, Objets, Score), **Grimoire** (même que l'accueil), Retour à l'écran d'accueil. « Fermer » dans ces menus revient au menu pause.
- Les anciennes vues « Commandes » (`cmd`) et « Scores » (`sc`) restent dans le code mais ne sont plus atteignables depuis le menu ; les commandes sont dans Grimoire > Aide.

## Tests (navigateur sans interface, 07/11/2026)
- Portrait 440×860 et paysage 900×420 : cadres du HUD avec effets simulés, message de lieu, menu pause, parcours pause → Succès / Grimoire / Lucifer → Fermer → Reprendre : aucune erreur console.
- Non testé : police MedievalSharp (non chargeable dans l'environnement de test, repli Georgia vu), vrai téléphone, effets réels ramassés en partie.
