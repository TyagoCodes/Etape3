require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const monMiddleware = require('./middlewares/monMiddleware');
const routes = require('./routes');

connectDB();

const app = express();

app.use(express.json());
app.use(monMiddleware);

//assets statiques (favicon)
app.use(express.static(path.join(__dirname, 'public')));
//verifier que serveur est actif
app.get('/', (req, res) => res.send('API Bibliothèque en ligne'));
//toutes les resources dans /api
app.use('/api', routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Serveur sur le port ${PORT}`);
});