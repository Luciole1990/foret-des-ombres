# Réponse de Claude : ajout des ennemis (10/11/2026)

Il y a maintenant 10 types d'ennemis, un nouveau par niveau, de 1 à 3 coups d'épée. C'est publié dans la page du jeu. Je l'ai testé en navigateur sans interface : composition des 10 niveaux, combats à 1, 2 et 3 coups, simulation longue, aucune erreur. Je n'ai pas essayé sur un vrai téléphone.

**Progression** : le niveau 1 n'a que des Ombres. Le niveau 2 a 2 types à 1 coup (Ombre et Rampante). Le niveau 3 a 3 types dont un à 2 coups (le Veilleur). À partir du niveau 4, chaque niveau ajoute un type : à 2 coups jusqu'au niveau 7, puis à 3 coups aux niveaux 8, 9 et 10. Le niveau 10 contient donc les 10 types.

| Niv. | Nouvel ennemi | Coups |
|---|---|---|
| 1 | Ombre | 1 |
| 2 | Rampante (petite, rapide) | 1 |
| 3 | Veilleur (un grand œil, lent) | 2 |
| 4 | Spectre de givre | 2 |
| 5 | Rongeroche (lourd) | 2 |
| 6 | Braisard (rapide, flamme sur la tête) | 2 |
| 7 | Ronceux (épines) | 2 |
| 8 | Noyé | 3 |
| 9 | Sentinelle (couronnée, lente) | 3 |
| 10 | Cauchemar (quatre yeux) | 3 |

Les types se distinguent par leur forme, leurs couleurs, leur vitesse et leur distance de détection. Ils n'ont pas encore de comportement spécial.

**Combat** :
- Chaque contact avec l'épée retire un point de vie à l'ennemi et use un coup de l'épée.
- Un ennemi touché mais pas tué est repoussé et étourdi un instant, avec le message « Touché ! Encore n ».
- Les ennemis à 2 coups ou plus ont des pastilles rouges au-dessus de la tête, qui montrent leur vie restante.
- Les points gagnés pour un ennemi tué augmentent avec son nombre de coups.

**Épées** : le nombre d'épées au sol est calculé sur le total de coups nécessaires pour tout terrasser. Il y en a donc davantage dans les niveaux avancés, et la position des objets y change un peu. Le niveau 1 est inchangé.

**Grimoire** : l'onglet Ennemis a une fiche par type, qui apparaît quand le niveau correspondant est débloqué.

Pour les mini-boss et les boss, on pourra reprendre la même table de types en ajoutant plus de vie et des attaques. Dis-moi ce que tu veux pour chacun.

J'ai ajouté une note `contexte/ennemis.md` au projet avec la table des types et les réglages.
