const mongoose = require('mongoose')

const { Schema } = mongoose;


const bank = new Schema({
    name: String
})

module.exports = mongoose.model('Bank', bank);