const mongoose = require('mongoose')

const toySchema = new mongoose.Schema({
    title: String, 
    description: String, 
    price: Number
})

module.exports = mongoose.model('toys', toySchema)