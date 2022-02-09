const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//creacion de servidor
const app = express();

//conexion BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/facturas', require('./rutas/factura'));
app.use('/api/usuarios', require('./rutas/usuario'));

app.listen(4000,() => {
    console.log('El servidor corre sin problemas')
})