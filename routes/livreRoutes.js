const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livreController');

router.get('/', livreController.getAll);
router.get('/:id', livreController.getById);

//livres par auteur
router.get('/auteur/:auteurId', livreController.getByAuteur);
router.post('/', livreController.create);
router.put('/:id', livreController.update);
router.delete('/:id', livreController.remove);

module.exports = router;