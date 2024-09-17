# Thrombinoscope React Native

## Description

Ce projet est une application mobile React Native qui affiche un thrombinoscope (dans mon cas c'est l'api des étudiant harry potter). L'application utilise Axios pour récupérer les données des membres depuis une API et les affiche dans une grille responsive.

## Fonctionnalités

- Affichage d'une grille de portraits avec les noms des membres
- Récupération des données depuis une API en utilisant Axios
- Interface utilisateur responsive s'adaptant à différentes tailles d'écran
- Gestion des zones sûres pour les appareils iOS avec encoche
- Système de bar de recherche des noms

## Prérequis

- Node.js (version 12 ou supérieure)
- npm ou yarn
- React Native CLI
- Xcode (pour iOS) ou Android Studio (pour Android)

## Installation

1. Clonez ce dépôt :
   ```
   git clone https://github.com/PokSoul/thrombinoscopeReactNative.git
   cd thrombinoscopeReactNative
   ```

2. Installez les dépendances :
   ```
   npm install
   # ou
   yarn install
   ```

3. Installez les pods pour iOS (si vous développez pour iOS) :
   ```
   cd ios && pod install && cd ..
   ```

## Configuration de l'API

1. Ouvrez le fichier `src/api/api.js` (ou créez-le s'il n'existe pas).
2. Configurez Axios avec l'URL de base de votre API :

   ```javascript
   import axios from 'axios';

   const api = axios.create({
     baseURL: 'https://votre-api.com/v1',
     timeout: 10000,
     headers: {'X-Custom-Header': 'foobar'}
   });

   export default api;
   ```

3. Remplacez `'https://votre-api.com/v1'` par l'URL réelle de votre API.

## Utilisation

1. Démarrez le serveur de développement :
   ```
   npx react-native start
   ```

2. Lancez l'application sur un émulateur ou un appareil :
   
   Pour iOS :
   ```
   npx react-native run-ios
   ```
   
   Pour Android :
   ```
   npx react-native run-android
   ```



## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.
