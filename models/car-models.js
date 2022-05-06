const { Timestamp } = require('bson')
const mongoose = require('../db/connection')
const CarSchema = new mongoose.Schema({
    year: String,
    make: String,
    model: String,
    name: String,
    issue: String,

    complete: {
        type: Boolean,
        default: true,
    },
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car;
// END