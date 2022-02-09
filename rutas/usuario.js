//Rutas para usuarios
const express = require('express');
const rutas = express.Router();
const usuarioController = require('../controladores/usuarioController')

//api/facturas
rutas.post('/', usuarioController.crearUsuario);
rutas.get('/', usuarioController.obtenerUsuarios);
rutas.put('/:id', usuarioController.actualizarUsuario);
rutas.get('/:id', usuarioController.obtenerUsuario);
rutas.delete('/:id', usuarioController.eliminarUsuario);

module.exports = rutas;
