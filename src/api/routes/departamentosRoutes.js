const express = require('express')
const router = express.Router()

const departamentosControllers = require('../controllers/departamentosControllers')

router.get('/', departamentosControllers.indexAll)

router.post('/', departamentosControllers.store)

router.put('/:departamento_id', departamentosControllers.update)

router.delete('/:departamento_id', departamentosControllers.delete)

module.exports = router