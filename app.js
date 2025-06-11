const express = require('express');
const app = express();
const mainRoutes = require('./routes/main');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', mainRoutes);

const PORT = process.env.PORT || 3000;
module.exports = app;

//app.listen(PORT, () => console.log(`Servidor activo en http://localhost:${PORT}`));
