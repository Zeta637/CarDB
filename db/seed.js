const Cars = require('../models/car-models')
const seedData = require('./seed.json')

Cars.deleteMany({})
    .then(() => {
        return Cars.insertMany(seedData)
            .then(console.log)
            .catch(console.error)

    })
    // .finally(() => process.exit())
    // END