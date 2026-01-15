# 🎮 Games API – NestJS

## Description

Ce projet est une API REST développée avec NestJS.
Elle permet de gérer une liste de jeux vidéo à l’aide d’un CRUD complet (Create, Read, Update, Delete).

Les données sont stockées localement dans un fichier JSON (aucune base de données n’est utilisée).

Une interface web simple ainsi qu’une documentation Swagger permettent de tester facilement l’API.

---

## Installation

Installer les dépendances du projet :

```bash
npm install
```
## Lancer l’application
Lancer l’application en mode développement :

```bash
npm run start:dev
```
L’application est accessible à l’adresse : http://localhost:3000/interface.html


## Documentation Swagger
La documentation Swagger est disponible à la racine du projet :
http://localhost:3000/

Elle permet de tester toutes les routes de l’API et de fournir des corps de requêtes JSON pour les opérations POST et PUT.

## Interface Web

Une interface web simple est disponible pour effectuer les opérations CRUD sans utiliser Postman :

- ajout d’un jeu

- modification d’un jeu

- suppression d’un jeu

- affichage de la liste des jeux

## Routes disponibles
- GET /games

- GET /games/:id

- POST /games

- PUT /games/:id

- DELETE /games/:id

## Tests unitaires
Des tests unitaires ont été mis en place.

Pour lancer les tests :

```bash
npm run test
```

## Stockage des données
Les données sont stockées localement dans le fichier :
games.json


## Conclusion
Ce projet met en œuvre une API REST simple avec NestJS, un CRUD fonctionnel, une documentation Swagger, une interface web et des tests unitaires.