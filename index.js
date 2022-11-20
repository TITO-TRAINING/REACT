const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan());

dotenv.config();

// Connect DB
mongoose.connect(process.env.DB_URL, () => {
  console.log("Connected DB");
});

const initAPIs = require("./routes/api");
/// set root api
initAPIs(app);

app.listen(8000, () => {
  console.log("Server is running...");
});
