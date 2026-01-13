const express = require('express');
const router = express.Router();
const { seedIngredients, getIngredients } = require('../controllers/ingredientController');

router.get('/seed', seedIngredients);
router.get('/', getIngredients);

module.exports = router;
