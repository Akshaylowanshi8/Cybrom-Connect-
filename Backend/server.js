require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000
const mongoose = require("mongoose");
const dashboardRoutes = require("./routes/dashboard.Router")
const userRoutes = require("./routes/userRoute.js")
mongoose
<<<<<<< HEAD
  .connect(process.env.DataBase,{useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => console.log("💻 Mondodb Connected"))
=======
  .connect(process.env.DataBase)
  .then(() => console.log("💻 Mondodb Server Connected"))
>>>>>>> 871a5b4e8f793cb0a568e1ff8b6f0bf28be1d658
  .catch(err => console.error(err));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/dashboard',dashboardRoutes)
app.use('/user',userRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

