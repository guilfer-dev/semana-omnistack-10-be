const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require('./routes');
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const app = express();

mongoose.connect(process.env.MONGO_AUTH).then(console.log("Connected to DB!"))

app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(routes);

app.listen(PORT)