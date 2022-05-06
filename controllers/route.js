const express = require("express")
const { route } = require('express/lib/application')
const Cars = require("../models/car-models.js")
const router = express.Router()



router.get('/cars', (req, res) => {
    Cars.find({})
        .then((cars) => {
            console.log(cars)
            res.render('cars/index', {
                customer: cars
            })
        })
        .catch(console.error)
})
router.get('/new', (req, res) => {
    res.render('cars/new')
})
router.post('/cars', (req, res) => {
    console.log('hello', req.body)
    Cars.create(req.body)
        .then(() => {
            res.redirect('/cars')
        })
        .catch(console.error)
})
router.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    Cars.findById(id)
        .then((cars) => {
            res.render('show', cars);
        })
        .catch(console.error);
})
router.get('/cars/:id/edit', (req, res) => {
    const id = req.params.id;
    Cars.findById(id)
        .then((cars) => {
            res.render('cars/edit', cars);
        })
        .catch(console.error);
});

router.put("/cars/:id", (req, res) => {
    Cars.findOneAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
        }, {
            new: true
        })
        .then(() => {
            res.redirect('/cars')
        })
});
router.delete('/cars/:id', (req, res) => {
    Cars.findOneAndDelete({
            _id: req.params.id
        })
        .then(() => {
            res.redirect('/cars')
        })
})

module.exports = router;
// END