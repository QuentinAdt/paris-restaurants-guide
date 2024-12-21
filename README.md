# Guide des Restaurants du 2ème Arrondissement de Paris

Application web interactive permettant de découvrir et filtrer les meilleurs restaurants du 2ème arrondissement de Paris.

## 📋 Table des matières
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux (Ubuntu)](#linux-ubuntu)
- [Déploiement sur VPS](#déploiement-sur-vps)
- [Utilisation](#utilisation)
- [Tests](#tests)
- [Contribution](#contribution)
- [Licence](#licence)

## ✨ Fonctionnalités

- 🔍 Recherche en temps réel
- 🏷️ Filtrage par type de cuisine
- ⭐ Filtrage par note
- 📱 Interface responsive
- 🎨 Design moderne et intuitif

## 🔧 Prérequis

- Node.js (version 16.x ou supérieure)
- npm (version 8.x ou supérieure)
- Git

## 💻 Installation

### Windows

1. Installez Node.js
   ```powershell
   # Avec winget
   winget install OpenJS.NodeJS
   # OU téléchargez depuis https://nodejs.org/
   ```

2. Installez Git
   ```powershell
   winget install Git.Git
   # OU téléchargez depuis https://git-scm.com/download/win
   ```

3. Clonez et installez l'application
   ```powershell
   git clone https://github.com/QuentinAdt/paris-restaurants-guide.git
   cd paris-restaurants-guide
   npm install
   ```

### macOS

1. Installez Homebrew si ce n'est pas déjà fait
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Installez Node.js et Git
   ```bash
   brew install node git
   ```

3. Clonez et installez l'application
   ```bash
   git clone https://github.com/QuentinAdt/paris-restaurants-guide.git
   cd paris-restaurants-guide
   npm install
   ```

### Linux (Ubuntu)

1. Mettez à jour votre système
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. Installez Node.js, npm et Git
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt install -y nodejs git
   ```

3. Clonez et installez l'application
   ```bash
   git clone https://github.com/QuentinAdt/paris-restaurants-guide.git
   cd paris-restaurants-guide
   npm install
   ```

## 🚀 Déploiement sur VPS (Ubuntu 22.04)

1. Connectez-vous à votre VPS
   ```bash
   ssh utilisateur@votre_ip
   ```

2. Mettez à jour le système
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. Installez les dépendances
   ```bash
   # Installez Node.js
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt install -y nodejs

   # Installez nginx
   sudo apt install -y nginx

   # Installez PM2 pour la gestion des processus
   sudo npm install -g pm2
   ```

4. Configurez nginx
   ```bash
   sudo nano /etc/nginx/sites-available/paris-restaurants
   ```
   
   Ajoutez cette configuration :
   ```nginx
   server {
       listen 80;
       server_name votre_domaine.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. Activez la configuration
   ```bash
   sudo ln -s /etc/nginx/sites-available/paris-restaurants /etc/nginx/sites-enabled
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. Clonez et déployez l'application
   ```bash
   cd /var/www
   git clone https://github.com/QuentinAdt/paris-restaurants-guide.git
   cd paris-restaurants-guide
   npm install
   npm run build
   pm2 start npm --name "paris-restaurants" -- start
   ```

7. Configurez le démarrage automatique
   ```bash
   pm2 startup
   pm2 save
   ```

## 🖥️ Utilisation

### Développement local

1. Lancez le serveur de développement
   ```bash
   npm run start
   ```

2. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

### Production (VPS)

1. Accédez à votre site via
   ```
   http://votre_domaine.com
   # OU
   http://votre_ip
   ```

2. Gérez l'application avec PM2
   ```bash
   # Voir les logs
   pm2 logs paris-restaurants

   # Redémarrer
   pm2 restart paris-restaurants

   # Arrêter
   pm2 stop paris-restaurants
   ```

## 🧪 Tests

```bash
# Lancer les tests unitaires
npm test

# Lancer les tests avec couverture
npm run test:coverage
```

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amazing_feature`)
3. Committez vos changements (`git commit -m 'feat: add amazing feature'`)
4. Pushez vers la branche (`git push origin feature/amazing_feature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
