require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const foodItemRoutes = require("./routes/foodItem");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/food", foodItemRoutes);

mongoose
  .connect(
    "mongodb+srv://m001-student:BetterBeSomeGoodShit911@sandbox.f4hhl.mongodb.net/food?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connection established successfully...");
    app.listen(8080, () => console.log("Server is listening on port 8080..."));
  })
  .catch((err) => console.log(err));
