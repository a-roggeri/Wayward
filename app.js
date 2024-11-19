const express = require('express');
const path = require('path');
const searchRoutes = require('./routes/search');
const detailsRoutes = require('./routes/details');
const streamRoutes = require('./routes/stream');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Imposta il motore di template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotte principali
app.use('/', searchRoutes);
app.use('/details', detailsRoutes);
app.use('/stream', streamRoutes);

// Avvio server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});