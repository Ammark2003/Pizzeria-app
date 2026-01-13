const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['veg', 'nonveg'],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  topping: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

const Pizza = mongoose.model('pizzas', pizzaSchema);

module.exports = Pizza;
