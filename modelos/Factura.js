const mongoose = require('mongoose');

const FacturaSchema = mongoose.Schema({
    factura:{
        type: Number,
        require: true,
        unique: true
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
        require: true,
    },
    cantidad1:{
        type:Number,
        default: 0
    },
    cantidad2:{
        type:Number,
        default: 0
    },
    cantidad3:{
        type:Number,
        default: 0
    },
    cantidad4:{
        type:Number,
        default: 0
    },
    precio:{
        type: Number,
        require: true
    },
    precio1:{
        type: Number,
        default: 0
    },
    precio2:{
        type: Number,
        default: 0
    },
    precio3:{
        type: Number,
        default: 0
    },
    precio4:{
        type: Number,
        default: 0
    },
    iva:{
        type: Number,
        default: function(){
            return ((this.cantidad * this.precio) * 0.19);
        }
    },
    iva1:{
        type: Number,
        default: function(){
            if (this.producto1 != null){
                return ((this.cantidad1 * this.precio1) * 0.19);
            }else{
                return 0
            }
        }
    },
    iva2:{
        type: Number,
        default: function(){
            if (this.producto2 != null){
                return ((this.cantidad2 * this.precio2) * 0.19);
            }else{
                return 0
            }
        }
    },
    iva3:{
        type: Number,
        default: function(){
            if (this.producto3 != null){
                return ((this.cantidad3 * this.precio3) * 0.19);
            }else{
                return 0
            }
        }
    },
    iva4:{
        type: Number,
        default: function(){
            if (this.producto4 != null){
                return ((this.cantidad4 * this.precio4) * 0.19);
            }else{
                return 0
            }
        }
    },
    ivaTotal:{
        type: Number,
        require: true,            
    },
    valorTotal:{
        type: Number,
        require: true    
    },
    pagada: {
        type: String,
        require: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
})

FacturaSchema.pre("save", function (next) {
    this.ivaTotal = (this.iva + this.iva1 + this.iva2 + this.iva3 + this.iva4);    
    this.valorTotal = (((this.cantidad * this.precio) + this.iva) + ((this.cantidad1 * this.precio1) + 
    this.iva1) + ((this.cantidad2 * this.precio2) + this.iva2) + ((this.cantidad3 * this.precio3) + 
    this.iva3) + ((this.cantidad4 * this.precio4) + this.iva4));
    next();
  });
module.exports = mongoose.model('Factura',FacturaSchema);