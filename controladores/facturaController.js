const Factura = require("../modelos/Factura");

exports.crearFactura = async (req,res) => {
    try {
        let factura;
        //crear factura
        factura = new Factura(req.body);
        await factura.save();
        res.send(factura)
        
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')
    }
}