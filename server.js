const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques (tout le contenu du dossier 'build')
app.use(express.static(path.join(__dirname, 'build')));

// Toute autre route renvoie 'index.html' pour gérer le routage côté client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
