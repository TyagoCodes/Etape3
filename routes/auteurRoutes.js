const express = require('express');
const router = express.Router();
const auteurController = require('../controllers/auteurController');

router.get('/', auteurController.getAll);
router.get('/:id', auteurController.getById);
router.post('/', auteurController.create);
router.put('/:id', auteurController.update);
router.delete('/:id', auteurController.remove);

module.exports = router;
