const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    name:String,
    cedula: String,
    direccion: String,
    empresa: String,
    dirEmpresa:String,
    i_mensual: String,
    email: String,
    date:Date,
    Zona: String
})


const model = mongoose.model('Clientes',mySchema)
module.exports = model