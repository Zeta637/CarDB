const { Timestamp } = require('bson')
const mongoose = require('../db/connection')
const CarSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: String,
    name: String,
    issue: String,

    complete: {
        type: Boolean,
        default: false,
    },
})

const cars = mongoose.model('cars', CarSchema)

module.exports = cars