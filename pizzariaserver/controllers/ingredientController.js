const Ingredient = require('../models/Ingredient');
const { ingredientsData } = require('../data/seedData');

const seedIngredients = async (req, res) => {
  try {
    await Ingredient.deleteMany({});
    await Ingredient.insertMany(ingredientsData);
    res.status(200).json({ message: 'Ingredients seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  seedIngredients,
  getIngredients,
};
