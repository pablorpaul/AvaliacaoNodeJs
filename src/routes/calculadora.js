const express = require('express')
const ControllerCalculadora = require('../controllers/calculadora')

const controller = new ControllerCalculadora()
const router = express.Router()

router.post('/api/calculadora', controller.Calculadora)

router.get('/api/calculadora/oper', controller.Operacoes)



module.exports = router