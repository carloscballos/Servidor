//Rutas para facturas
const express = require('express');
const rutas = express.Router();
const facturaController = require('../controladores/facturaController')

//api/facturas
rutas.post('/', facturaController.crearFactura);
rutas.get('/', facturaController.obtenerFacturas);
rutas.put('/:id', facturaController.actualizarFactura);
rutas.get('/:id', facturaController.obtenerFactura);
rutas.delete('/:id', facturaController.eliminarFactura);

module.exports = rutas;
