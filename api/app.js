const express = require('express');
const app = express();
const mainRoutes = require('../routes/main');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views'); // 👈 muy importante

app.use(express.static(__dirname + '/../public')); // 👈 muy importante

app.use('/', mainRoutes);

// 🔁 No uses app.listen en Vercel
module.exports = app;
