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