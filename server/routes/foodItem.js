const express = require("express");

const {
  createNewFoodItem,
  getAllFoodItems,
} = require("../controllers/foodItem");

const router = express.Router();

router.get("/", getAllFoodItems);

router.post("/new", createNewFoodItem);

module.exports = router;
