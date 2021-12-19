//Rutas para usuarios
const express = require('express');
const rutas = express.Router();
const usuarioController = require('../controladores/usuarioController')

//api/facturas
rutas.post('/', usuarioController.crearUsuario)

module.exports = rutas;
