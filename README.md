# Forêt des ombres — Lucifer : Le porteur de lumière

Jeu mobile 2D isométrique (Hedera Prod / Hedera Game). Un seul fichier HTML, installable en PWA.

## Fichiers
- `index.html` : le jeu complet (intro Hedera, légende du Solstice, menu avec musique, jeu). C'est le seul fichier nécessaire.
- `sw.js`, `manifest.json`, `icon-*.png` : installation et mode hors ligne. **Changer le numéro de `CACHE` dans `sw.js` à chaque mise à jour de `index.html`**, sinon les téléphones gardent l'ancienne version.
- `sources/legende-solstice.html` : la cinématique de la légende seule, pour la tester et la retoucher (elle est aussi intégrée dans `index.html`).
- `sources/musique-menu.js` : la musique épique du menu (copie lisible du code intégré).

## Déroulé au lancement
1. Intro Hedera (logo, reflet, vent).
2. Légende du Solstice : 3 panneaux de bois gravé, texte qui s'écrit (rester appuyé = plus vite, toucher le point clignotant = page suivante), descente dans les nuages, village vu d'en haut 5 s, fondu au noir de 3,5 s.
3. Menu principal avec musique épique (synthétisée, aucun fichier audio).
4. « Jouer l'histoire » lance la vidéo « La nuit du Solstice » (passable), puis la partie.

Adresses utiles : `?legende=0` saute la légende, `?cine=0` supprime la vidéo de l'histoire.

## Réglages de la légende (début du script, `sources/legende-solstice.html`)
`CPS` vitesse d'écriture · `HOLD_MULT` accélération en restant appuyé · `DESCENT_DUR` durée de la descente · `READ_CAP` hauteur de descente pendant la lecture du dernier panneau · `VILLAGE_HOLD` secondes sur le village · `FINAL_FADE` fondu final.

## Choix de conception (à garder)
- Le logo Hedera n'est jamais redessiné.
- Textes de la légende repris mot pour mot, 3 pages, un seul panneau par page.
- Panneaux : vieux bois gravé, lierre, léger balancement ; vers luisants minuscules ; la luciole jaune (le personnage) rebondit en écrivant puis se pose sur le point clignotant.
- Le navigateur bloque le son tant qu'on n'a pas touché l'écran : la musique démarre alors au premier toucher.
