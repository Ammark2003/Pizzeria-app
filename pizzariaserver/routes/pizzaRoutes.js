const express = require('express');
const router = express.Router();
const { seedPizzas, getPizzas } = require('../controllers/pizzaController');

router.get('/seed', seedPizzas);
router.get('/', getPizzas);

module.exports = router;
