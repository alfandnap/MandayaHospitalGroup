const express = require('express')
const ControllerProduct = require('../controllers/product')
const errorHandler = require('../middlewares/errorhandler')
const router = express.Router()

router.get('/categories', ControllerProduct.getAll)
router.get('/categories/:id', ControllerProduct.getById)

router.use(errorHandler)

module.exports = router