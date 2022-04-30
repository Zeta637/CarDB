const Cars = require('../models/car-model')
const seedData = require('./seed.json')

Cars.deleteMany({})
    .then(() => {
        Cars.instertMany(seedData)
            .then(console.log)
            .catch(console.error)

    })
    .finally(() => process.exit())