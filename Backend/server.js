require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000
const mongoose = require("mongoose");
const dashboardRoutes = require("./routes/dashboard.Router")
mongoose
  .connect(process.env.DataBase)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/dashboard',dashboardRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
