let mongoose = require('mongoose')
  express = require('express')
  router = express.Router()
// paquete Model
let paqSchema = require('../models/paquete')

//CRUD

//create entonces POST
//endpoint  localhost:5000/paquetes/create
router.route('/create').post((req, res, next) => {
    paqSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//read paquetes entonces GET
//endpoint  localhost:5000/paquetes?userId=1
router.route('/').get((req, res, next) => {
    paqSchema.find({userId: req.query.userId}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// get single paquete
//endpoint  localhost:5000/paquete/1
router.route('/:id').get((req, res) => {
    paqSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// update paquetes
// endpoint localhost:5000/paquetes/edit/1
router.route('/edit/:id').put((req, res, next) => {
    paqSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, 
        (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
})

//delete paquetes
//endpoint  localhost:5000/paquete/delete/1
router.route('/delete/:id').delete((req, res, next) => {
    paqSchema.findByIdAndRemove(req.params.id,
        (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.status(200).json({
                    msg:data
                })
            }
        })
})


module.exports = router


