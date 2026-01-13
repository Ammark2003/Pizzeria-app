const Pizza = require('../models/Pizza');
const { pizzasData } = require('../data/seedData');

const seedPizzas = async (req, res) => {
  try {
    await Pizza.deleteMany({});
    await Pizza.insertMany(pizzasData);
    res.status(200).json({ message: 'Pizzas seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  seedPizzas,
  getPizzas,
};
