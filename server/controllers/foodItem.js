const FoodItem = require("../models/foodItem");

const createNewFoodItem = ({ body: { brand = null, group, name } }, res) => {
  const newFoodItem = new FoodItem({
    brand,
    group,
    name,
  });
  newFoodItem
    .save()
    .then((result) =>
      res.status(201).json({
        message: "New food item created successfully.",
        newFoodItem: result,
      })
    )
    .catch((err) => console.log(err));
};

const getAllFoodItems = (req, res) => {
  FoodItem.find()
    .then((result) =>
      res.status(200).json({ foodItems: result, message: "Food items fetched" })
    )
    .catch((err) => console.log(err));
};

module.exports = { createNewFoodItem, getAllFoodItems };
