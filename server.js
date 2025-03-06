const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route principale
app.get('/', (req, res) => {
  res.send('API de comptage de calories en cours d\'exécution');
});

// Simuler une analyse d'image et retourner des calories
app.post('/analyze', (req, res) => {
  const { imageUrl } = req.body;

  // Vérification basique
  if (!imageUrl) {
    return res.status(400).json({ error: 'Veuillez fournir une URL d\'image' });
  }

  // Exemple : Simulation d'une analyse d'image
  const detectedItems = [
    { name: 'Pomme', calories: 52 },
    { name: 'Banane', calories: 89 },
    { name: 'Pain', calories: 265 },
  ];

  const totalCalories = detectedItems.reduce((sum, item) => sum + item.calories, 0);

  res.json({
    message: 'Analyse réussie',
    items: detectedItems,
    totalCalories,
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
