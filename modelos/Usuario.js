const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    contrasena:{
        type: String
    },
    permiso:{
        type: String
    }
})
module.exports = mongoose.model('Usuario',UsuarioSchema);