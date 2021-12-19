//Rutas para facturas
const express = require('express');
const rutas = express.Router();
const facturaController = require('../controladores/facturaController')

//api/facturas
rutas.post('/', facturaController.crearFactura)

module.exports = rutas;
