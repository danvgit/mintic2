const mongoose = require('mongoose')
const Schema = mongoose.Schema

let paqSchema = new Schema({
    id: {
        type:Number,
        min: 1,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    hour: {
        type: Number,
        required: true,
    },
    length: {
        type: Number,
        min: 1,
        max: 200,
        required: true,
    }, 
    width: {
        type: Number,
        min: 1,
        max: 200,
        required: true,
    },
    heigth: {
        type: Number,
        min: 1,
        max:200,
        required: true,
    },
    weigth: {
        type: Number,
        min: 150,
        required: true,
    },
    dirRecogida: {
        type: String,
        required: true,
    },
    ciuRecogida: {
        type: String,
        required: true,
    },
    nomEntrega: {
        type: String,
        required: true,
    },
    dirEntrega: {
        type: String,
        required: true,
    },
    ciuEntrega: {
        type: String,
        required: true,
    }
}, {
    collection: 'paquetes'
})

module.exports = mongoose.model('paquete', paqSchema)