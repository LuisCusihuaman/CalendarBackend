const express = require('express');
require('dotenv').config();
require('pretty-error').start();
const { dbConnection } = require('./database/config');
const app = express();

//Base de datos
dbConnection();
//Public directory
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
