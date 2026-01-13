const Pizza = require('../models/Pizza');
const Ingredient = require('../models/Ingredient');
const { pizzasData, ingredientsData } = require('../data/seedData');

const autoSeed = async () => {
  try {
    const pizzaCount = await Pizza.countDocuments();
    const ingredientCount = await Ingredient.countDocuments();

    if (pizzaCount === 0) {
      await Pizza.insertMany(pizzasData);
      console.log('Pizzas collection seeded automatically');
    }

    if (ingredientCount === 0) {
      await Ingredient.insertMany(ingredientsData);
      console.log('Ingredients collection seeded automatically');
    }
  } catch (error) {
    console.error('Auto-seed failed:', error.message);
  }
};

module.exports = autoSeed;
