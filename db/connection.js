const mongoose = require('mongoose')
const connection = "mongodb+srv://test:test@cluster0.qq5go.mongodb.net/carsdb?retryWrites=true&w=majority"
mongoose.connect(connection)

module.exports = mongoose