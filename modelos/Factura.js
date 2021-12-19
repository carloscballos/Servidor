const mongoose = require('mongoose');

const FacturaSchema = mongoose.Schema({
    factura:{
        type: Number,
        require: true
    },
    producto:{
        type: String,
        require: true
    },
    producto1:{
        type: String
    },
    producto2:{
        type: String
    },
    producto3:{
        type: String
    },
    producto4:{
        type: String
    },
    cantidad:{
        type: Number,
        require: true
    },
    cantidad1:{
        type:Number
    },
    cantidad2:{
        type:Number
    },
    cantidad3:{
        type:Number
    },
    cantidad4:{
        type:Number
    },
    precio:{
        type: Number,
        require: true
    },
    precio1:{
        type: Number
    },
    precio2:{
        type: Number
    },
    precio3:{
        type: Number
    },
    precio4:{
        type: Number
    },
    /*iva:{
        type: Number,
        default: function(cantidad,precio){
            let iva = ((cantidad * precio) * 0.19);
            return iva
        }
    },
    iva1:{
        type: Number,
        default: function(){
            let iva1 = ((cantidad1 * precio1) * 0.19);
            return iva1
        }
    },
    iva2:{
        type: Number,
        default: function(){
            let iva2 = ((cantidad2 * precio2) * 0.19);
            return iva2
        }
    },
    iva3:{
        type: Number,
        default: function(){
            let iva3 = ((cantidad3 * precio3) * 0.19);
            return iva3
        }
    },
    iva4:{
        type: Number,
        default: function(){
            let iva4 = ((cantidad4 * precio4) * 0.19);
            return iva4
        }
    },
    ivaTotal:{
        type: Number,
        require: true,
        default: function(){
            let ivaTotal = (iva + iva1 + iva2 + iva3 + iva4);
            return ivaTotal
        }        
    },
    valorTotal:{
        type: Number,
        require: true,
        default: function(){
            let valorTotal = (((cantidad * precio) + iva) + ((cantidad1 * precio1) + iva1) + ((cantidad2 * precio2) + iva2) +
            ((cantidad3 * precio3) + iva3) + ((cantidad4 * precio4) + iva4));
            return valorTotal
        }           
    },*/
    pagada: {
        type: String,
        require: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Factura',FacturaSchema);