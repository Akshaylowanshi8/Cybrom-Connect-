const express = require('express')
const app = express()
const port = 8000
const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  .connect(process.env.DataBase)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))