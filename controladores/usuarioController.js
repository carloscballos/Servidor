const Usuario = require("../modelos/Usuario");

exports.crearUsuario = async (req,res) => {
    try {
        let usuario;
        //crear usuario
        usuario = new Usuario(req.body);
        await usuario.save();
        res.send(usuario)
        
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')
    }
}
exports.obtenerUsuarios = async (req,res) =>{
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios)
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')
    }
}
exports.actualizarUsuario = async (req,res) =>{
    try {
        const{nombre,correo,contrasena,permiso} = (req.body);
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'no existe el usuario'})
        }
        usuario.nombre = nombre;
        usuario.correo = correo;
        usuario.contrasena = contrasena;
        usuario.permiso = permiso
        usuario = await Usuario.findOneAndUpdate({_id: req.params.id},usuario,{new: true});
        res.json(usuario);
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')
    }
}
exports.obtenerUsuario = async (req,res) =>{
    try {
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'});
        }
        res.json(usuario);
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')        
    }
}
exports.eliminarUsuario = async (req,res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'});
        }
        await Usuario.findByIdAndRemove({_id: req.params.id});
        res.json({msg: 'usuario eliminado con exito'})
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')        
    }
}