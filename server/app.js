// mongodb+srv://m001-student:<password>@sandbox.f4hhl.mongodb.net/<dbname>?retryWrites=true&w=majority
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());

app.listen(5000, () => console.log("Server is listening on port 5000..."));
