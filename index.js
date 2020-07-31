const express = require('express');
require('dotenv');
const app = express();
//Public directory
app.use(express.static('public'));
//Rutas

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
