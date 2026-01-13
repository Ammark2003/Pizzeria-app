const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  tname: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Ingredient = mongoose.model('ingredients', ingredientSchema);

module.exports = Ingredient;
