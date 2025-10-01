// Import des différents libraries. 
const cors = require("cors");
const dotenv = require('dotenv');
const express = require('express')
const mongoose = require('mongoose');

// Import des différentes Routes.
const userRoutes = require('./Routes/User.route')


dotenv.config();
const app = express(); 
app.use(express.json());


// Chaine de connexion à la base de donnée.
const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=ClusterChronoStudio`;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connecté à MongoDB 🚀"))
  .catch(err => console.error("Erreur de connexion MongoDB : 🤮 🖕🏽", err));


// ✅ Active CORS 
app.use(cors({
  origin: "http://localhost:4200", // autoriser uniquement Angular
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


// Les différentes Middleware Backend
app.get("/api/sauces", (req, res) => {
  res.json([]); // renvoie une liste vide
});

app.use('/api/auth', userRoutes);


// Module permettant d'exporter tout le contenant de la page App.
module.exports = app;