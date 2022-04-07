const express = require('express')
const CarrosController = require('../controllers/CarrosController')

const router = express.Router()

// Buscar carros
router.get('/', CarrosController.get)

// Buscar um carro
router.get('/:id', CarrosController.getOne)

// Criar um carro
router.post('/', CarrosController.post)

// Atualizar um carro
router.put('/:id', CarrosController.put)

// Deletar um carro
router.delete('/:id', CarrosController.delete)

module.exports = router