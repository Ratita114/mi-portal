const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('../routes/main');

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rutas
app.use('/', mainRoutes);

// Exportar app para Vercel
module.exports = app;
