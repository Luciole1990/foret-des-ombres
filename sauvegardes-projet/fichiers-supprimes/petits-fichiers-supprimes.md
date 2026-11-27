# Petits fichiers supprimés du projet « JEUX-Light story » le 27/11/2026 (copie mot pour mot)

Chaque section = un fichier du projet. Pour restaurer : recréer le fichier avec le chemin indiqué.

---
## 00_instructions_projet.txt
(`consignes_developpement_jeu_isometrique.txt` était une copie identique ; ce texte est aussi celui des « Instructions » du projet.)

Tu es un développeur senior spécialisé en jeux 2D isométriques.

### Rôle et attitude
- Tu agis comme un co-développeur expérimenté et pragmatique.
- Tu priorises toujours la simplicité, la clarté et la maintenabilité.
- Tu évites le sur-engineering.
- Tu proposes d’abord la solution la plus simple qui fonctionne, puis tu proposes des améliorations si pertinent.

### Style de code
- Langage et conventions selon le stack du projet (indiqué dans la connaissance).
- Noms de variables, fonctions et classes en anglais.
- Commentaires en français uniquement quand c’est utile (formules complexes, décisions non évidentes).
- Code propre, bien indenté, sans code mort.
- Sépare clairement la logique de jeu du rendu.
- Évite les magic numbers → utilise des constantes nommées.

### Spécificités isométriques
- Quand tu manipules des coordonnées, précise toujours si tu es en coordonnées cartésiennes ou isométriques.
- Montre les formules de conversion (cartésien ↔ isométrique) clairement.
- Gère correctement le tri de profondeur (z-order / y-sorting).
- Prends en compte le placement des tuiles et le décalage isométrique.

### Format de tes réponses
- Quand tu modifies ou crées du code :
  1. Explique brièvement ce que tu vas faire.
  2. Donne le code complet du fichier (ou de la partie modifiée).
  3. Indique clairement ce que je dois faire ensuite (assets à ajouter, tests à faire, etc.).
- Si plusieurs approches sont possibles, présente-les avec leurs avantages/inconvénients et recommande-en une.
- Si une information manque dans la connaissance du projet, demande-la avant de coder.

### Ce que tu ne fais pas
- Tu n’inventes pas de fonctionnalités non demandées.
- Tu ne changes pas l’architecture existante sans me le proposer d’abord.
- Tu ne donnes pas de code incomplet ou avec des “…” sauf si le fichier est très long et que tu indiques clairement les parties inchangées.

---
## Light_Story.txt

Light Story

Je développe un jeu 2D isométrique de A à Z.

Objectif principal :

Créer un prototype jouable avec :
- Une grille isométrique fonctionnelle
- Le déplacement du joueur
- L’interaction avec l’environnement
- Un système de base (combat / construction / exploration selon le genre)

Je veux que tu m’aides à :
- Écrire et structurer le code proprement
- Résoudre les problèmes liés à l’isométrie (coordonnées, profondeur, placement)
- Proposer des solutions simples et maintenables
- Avancer étape par étape sans sur-complexifier

Je préfère progresser par petites fonctionnalités complètes plutôt que d’avoir beaucoup de code incomplet.

---
## 01_concept_vision.txt

1. Concept & vision (très important)
Jeu : [nom]
Genre : [action RPG / city builder / strategy / rogue-like / etc.]
Thème / univers : [fantasy médiéval, cyberpunk, post-apo…]
Tone : [sérieux, cartoon, dark…]
Objectif principal du joueur : [quoi faire]
Plateforme cible : [navigateur, desktop, mobile…]

---
## 02_stack_technique.txt

Stack technique (à être très précis)
Moteur / framework : [Godot 4 / Phaser 3 / PixiJS / Unity 2D / custom Canvas/WebGL…]
Langage : [GDScript / TypeScript / C# / JavaScript…]
Rendu isométrique : [tileset isométrique, projection diamant, hauteur des tuiles…]
Taille des tuiles : [ex: 64x32 ou 128x64]
Système de coordonnées : [cartésien → isométrique, formule de conversion]
Gestion de la profondeur (z-order) : [comment tu gères le tri des sprites]

---
## 03_architecture_code.txt

Architecture du code
Architecture : [ECS / composant / scènes Godot / classes…]
Organisation des dossiers :
- scenes/
- entities/
- systems/
- tiles/
- ui/
- data/
Règles de code :
- Noms en anglais
- Commentaires en français ou anglais
- Pas de magic numbers
- Séparation claire logique / rendu

---
## 04_gameplay_mecaniques.txt

Gameplay & mécaniques principales

Liste les systèmes importants :
Déplacement isométrique (clavier + souris)
Pathfinding (A* sur grille isométrique ?)
Combat / interactions
Inventaire
Construction / placement d’objets
Caméra (zoom, suivi, limites)
Sauvegarde / chargement
5. Art & assets

---
## 05_art_assets.txt

Art & assets
Style artistique : [pixel art, hand-drawn, clean vector…]
Résolution des sprites : [ex: 64x64]
Tileset : [comment les tuiles sont découpées]
Animations : [idle, walk, attack…]
Palette de couleurs principale

---
## 06_contraintes_decisions.txt

. Contraintes & décisions déjà prises
- Pas de physique réaliste (mouvement sur grille)
- Pas de multiplayer pour l’instant
- Performance cible : 60 FPS sur [machine]
- On évite les dépendances lourdes
- Priorité : jouabilité > graphismes

---
## 07_etat_actuel_projet.txt

État actuel du projet (à mettre à jour régulièrement)
Ce qui est déjà fait :
- Grille isométrique fonctionnelle
- Déplacement du joueur
- Chargement de map

Ce qui est en cours :
- Système de combat

Prochaines étapes prioritaires :
1. ...
2. ...

---
## 08_style_reponse.txt

Style de réponse que tu veux de Claude
Quand tu codes :
- Montre le code complet des fichiers modifiés
- Explique les formules isométriques si tu en utilises
- Propose toujours la version la plus simple d’abord
- Signale clairement les endroits où je dois ajouter des assets

---
## 09_exemple_minimal.txt

Exemple minimal prêt à coller
Je développe un jeu 2D isométrique.

Stack : Godot 4 + GDScript
Tuiles : 128x64 (projection isométrique classique)
Architecture : scènes + composants simples
Style : pixel art

Mécaniques principales :
- Déplacement en 8 directions isométriques
- Pathfinding A*
- Placement d’objets
- Caméra libre avec zoom

Conventions :
- Code en anglais
- Commentaires en français
- Un fichier = une responsabilité

État actuel : grille + déplacement joueur OK.
Prochaine priorité : système de construction.

---
## 14_jeux_code_fragment_css.txt
(Début du CSS d'une ancienne version du jeu ; le CSS actuel est dans `jeu/foret-des-ombres.html`.)

<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"><title>Forêt des ombres</title><style>
html,body{margin:0;height:100%;background:#000;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;font-family:Georgia,serif;color:#ffcf8a}
canvas{position:fixed;inset:0;width:100%;height:100%;display:block}
.h{position:fixed;z-index:2;pointer-events:none;text-shadow:0 1px 3px #000;font-size:15px;top:calc(8px + env(safe-area-inset-top,0px))}
#tl{left:calc(10px + env(safe-area-inset-left,0px))}#pause{position:fixed;z-index:3;top:calc(8px + env(safe-area-inset-top,0px));right:calc(10px + env(safe-area-inset-right,0px));padding:7px 12px;font-size:14px}#pct{top:auto;bottom:calc(12px + env(safe-area-inset-bottom,0px));right:calc(12px + env(safe-area-inset-right,0px));font-size:12px;color:#c9a06a;opacity:.85}#hearts{display:flex;gap:3px;align-items:center}#hearts svg{filter:drop-shadow(0 0 3px rgba(255,70,130,.55))}#hearts svg.e{filter:none}
#fx{margin-top:4px;font-size:13px;color:#c9a6ff;line-height:1.5}
#msg{left:0;right:0;top:calc(64px + env(safe-area-inset-top,0px));text-align:center;font-size:17px;opacity:0;transition:opacity .4s;color:#ffd9a0}
button{background:#1a0f2a;color:#ffbf6b;border:1px solid #7a4fc0;border-radius:8px;padding:9px 14px;font:inherit;font-size:15px}
.sl{border:1px solid #7a5230;border-radius:8px;padding:6px 8px;margin:6px 0;text-align:left;font-size:15px}.sl span{display:block;margin:2px 0 4px;font-size:13px}.sl .r{display:grid;grid-template-columns:1fr 1fr;gap:6px}.sl button{margin:2px 0;padding:6px 4px;font-size:14px}.sl button::before,.sl button::after{display:none}
.pc.m{max-height:92vh;overflow:auto}.mp{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:8px 0}.mp button{margin:0;padding:8px 4px;font-size:13px;line-height:1.15}.mp button::before,.mp button::after{display:none}.pc button:disabled{opacity:.45}

#bag{position:fixed;inset:0;z-index:5;background:rgba(0,0,0,.6);display:none;align-items:center;justify-content:center;padding:12px;box-sizing:border-box}
#bagp{width:min(420px,92vw);max-height:92vh;overflow:auto;box-sizing:border-box;padding:12px 14px}
#bagt{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px}
#bagt button{margin:0;padding:6px 3px;font-size:13px;line-height:1.15;min-height:36px}#bagt button::before,#bagt button::after{display:none}
#bagt button.on{background:#3b2410;color:#ffe7a8;border-color:#ffd27a}
#bagi{min-height:130px;font-size:14px;line-height:1.5;text-align:left}#bagi h3{margin:0 0 6px;font-size:16px}
.br{display:flex;justify-content:space-between;gap:12px;border-bottom:1px dotted #7a5230;padding:3px 0}.br span:first-child{flex:1}.it{align-items:center}.it .ic{flex:0 0 34px!important;text-align:center}.it .tx{flex:1}.it small{display:block;font-weight:normal;opacity:.8;font-size:11px;line-height:1.25}
@media(max-height:450px){#bagp{width:min(560px,94vw);padding:8px 12px}#bagt{grid-template-columns:repeat(4,1fr)}#bagt button{font-size:12px}#bagi{min-height:60px}}
#over{position:fixed;inset:0;z-index:5;background:rgba(0,0,0,.85);display:none;flex-direction:column;align-items:center;justify-content:center;gap:20px;text-align:center;font-size:22px;padding:20px}
.pc{background:radial-gradient(ellipse at center,#f3e2b8,#e2c88f 70%,#c9a463);color:#3b2410;border:3px solid #7a5230;border-radius:14px;padding:18px 22px;min-width:230px;max-width:86vw;text-align:center;box-shadow:inset 0 0 0 2px #b78f56,0 8px 30px #000a}
.pc h2{margin:0 0 12px;font-size:26px;letter-spacing:1px}.pc button{display:block;width:100%;margin:8px 0;background:#8a5a34;color:#fbecc8;border:1px solid #4a2c14}
.pc p{font-size:14px;line-height:1.5;text-align:left;margin:6px 0}
