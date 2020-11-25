const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodItemSchema = new Schema(
  {
    brand: { required: false, type: String },
    group: { required: true, type: String },
    name: { required: true, type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FoodItem", foodItemSchema);
