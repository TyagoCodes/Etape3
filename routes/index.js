const express = require('express');
const router = express.Router();

router.use('/auteurs', require('./auteurRoutes'));
router.use('/livres', require('./livreRoutes'));
router.use('/utilisateurs', require('./utilisateurRoutes'));

module.exports = router;