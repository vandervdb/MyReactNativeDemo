# 📓 MyReactNativeDemo

Application de prise de notes construite avec **React Native** et un ensemble de librairies modernes. Le projet est pensé pour être typé, modulaire et facilement extensible.

## 🚀 Aperçu
Projet mobile basé sur :

- ⚛️ React Native (Metro)
- 🔗 React Navigation
- 📦 Redux Toolkit & Redux Persist
- 🧰 RTK Query pour les appels API
- 🎨 React Native Paper
- 💽 AsyncStorage
- 🌬️ NativeWind/TailwindCSS
- 🛠️ Reactotron pour le debug
- 📄 TypeScript
- 🧪 Tests via Jest

## 📁 Structure du projet
```
MyReactNativeDemo/
├── android/            # projet Android natif
├── ios/                # projet iOS natif
├── src/                # code source principal
│   ├── appTypes/       # types et interfaces
│   ├── components/     # composants UI et écrans
│   ├── debug/          # configuration Reactotron
│   ├── features/       # modules fonctionnels (reduxApi)
│   ├── store/          # configuration Redux
│   └── theme/          # styles partagés
├── lib/                # utilitaires (tailwind)
├── __tests__/          # tests Jest
└── index.js            # point d'entrée de l'application
```

## 🛠️ Installation & lancement
```bash
yarn install

# Démarrer le serveur Metro
yarn start

# Lancer l'application Android
yarn android

# Lancer l'application iOS
yarn ios
```

## 📦 Libs & Modules utilisés
- React Native
- React Navigation
- React Native Paper
- Redux Toolkit, Redux Persist, RTK Query
- AsyncStorage
- Reactotron
- NativeWind / TailwindCSS
- Jest

## 🧪 Tests
Exécuter la suite de tests avec :
```bash
yarn test
```

## 👨‍💻 Auteur
Développé par **Arnaud Vanderbecq**.

## 🪪 Licence
Projet distribué sous licence MIT.
