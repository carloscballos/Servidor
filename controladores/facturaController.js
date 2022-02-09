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
exports.obtenerFacturas = async (req,res) =>{
    try {
        const facturas = await Factura.find();
        res.json(facturas)
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')
    }
}
exports.actualizarFactura = async (req,res) =>{
    try {
        const{factura,producto,producto1,producto2,producto3,producto4,cantidad,cantidad1,cantidad2,cantidad3,
            cantidad4,precio,precio1,precio2,precio3,precio4,iva,iva1,iva2,iva3,iva4,pagada,
            fechaCreacion} = (req.body);
        let fac = await Factura.findById(req.params.id);
        if(!fac){
            res.status(404).json({msg: 'no existe la factura'})
        }
        fac.factura = factura;
        fac.producto = producto;
        fac.producto1 = producto1;
        fac.producto2 = producto2;
        fac.producto3 = producto3;
        fac.producto4 = producto4;
        fac.cantidad = cantidad;
        fac.cantidad1 = cantidad1;
        fac.cantidad2 = cantidad2;
        fac.cantidad3 = cantidad3;
        fac.cantidad4 = cantidad4;
        fac.precio = precio;
        fac.precio1 = precio1;
        fac.precio2 = precio2;
        fac.precio3 = precio3;
        fac.precio4 = precio4;
        fac.iva = iva;
        fac.iva1 = iva1;
        fac.iva2 = iva2;
        fac.iva3 = iva3;
        fac.iva4 = iva4;
        fac.pagada = pagada;
        fac.fechaCreacion = fechaCreacion;
        fac = await Factura.findOneAndUpdate({_id: req.params.id},fac,{new: true});
        res.json(fac);
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')
    }
}
exports.obtenerFactura = async (req,res) => {
    try {
        let factura = await Factura.findById(req.params.id);
        if(!factura){
            res.status(404).json({msg: 'No existe la factura'});
        }
        res.json(factura)
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')        
    }
}
exports.eliminarFactura = async (req,res) => {
    try {
        let factura = await Factura.findById(req.params.id);
        if(!factura){
            res.status(404).json({msg: 'No existe la factura'});
        }
        await Factura.findByIdAndRemove({_id: req.params.id});
        res.json({msg: 'factura eliminada con exito'})
    } catch (error) {
        console.log(Error);
        res.status(500).send('Hubo un error')        
    }
}