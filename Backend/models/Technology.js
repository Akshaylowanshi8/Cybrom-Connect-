const mongoose = require("mongoose");

const TechSchema  = mongoose.Schema({
    Tname: String,

})
module.exports = mongoose.model("technologies",TechSchema)