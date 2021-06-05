const mongoose = require('mongoose')

const { Schema } = mongoose;


const typeDocument = new Schema({
    name: String
})

module.exports = mongoose.model('TypeDocument', typeDocument);