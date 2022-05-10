const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    name:String,
    Pcredito: String,
    Ventrada: String,
    Vsemanal: String,
    Vquincenal:String,
    Vmensual: String,
    Pcontado: String,
    date:  Date
})


const model = mongoose.model('Articulos',mySchema)
module.exports = model