const express = require ('express')
const router = express.Router()

const empregadosController = require ('../controllers/empregadosControllers')

router.get('/empregados', empregadosController.indexAll)

router.post('/empregados', empregadosController.store)

router.get('/departamentos/:departamento_id/empregados', empregadosController.index)

router.put('/empregados/:empregado_id', empregadosController.update)

router.delete('/empregados/:empregado_id', empregadosController.delete)

module.exports = router