const express = require("express")
const { route } = require('express/lib/application')
const Cars = require("../models/car-models.js")
const router = express.Router()


router.get('/cars', (req, res) => {
    Cars.find({})
        .then((cars) => res.render('cars/index', {
            customer: cars
        }))
        .catch(console.error)
})
router.get('/new', (req, res) => {
    res.render('cars/new')
})
router.post('/cars', (req, res) => {
    Cars.create(req.body)
        .then(() => {
            res.redirect('/cars')
        })
        .catch(console.error)
})
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    Cars.findById(id)
        .then((cars) => {
            res.render('edit', cars);
        })
        .catch(console.error);
});
router.put("/:id", (req, res) => {
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
router.delete('/:id', (req, res) => {
    Cars.findOneAndDelete({
            _id: req.params.id
        })
        .then(() => {
            res.redirect('/cars')
        })
})

module.exports = router;