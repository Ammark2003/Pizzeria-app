const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
    type: {
      type: String,
      required: true,
      enum: ["veg", "nonveg"],
    },
    image: {
      type: String,
      required: true,
    },
    toppings: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("shoppingcart", cartSchema);

module.exports = Cart;
