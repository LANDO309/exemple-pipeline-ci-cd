# Exemple de Pipeline CI/CD avec GitHub Actions

Ce dépôt montre un pipeline CI/CD simple avec 3 étapes :
1. **Build** : Compilation/préparation de l'application
2. **Test** : Exécution des tests
3. **Deploy** : Déploiement automatique

## 🚀 Comment utiliser

1. Forkez ce dépôt
2. Allez dans l'onglet **Actions** de votre dépôt GitHub
3. Le pipeline se déclenche automatiquement à chaque `push` sur `main`

## 📁 Structure
- `.github/workflows/` : Configuration du pipeline
- `src/` : Code source
- `tests/` : Tests automatisés