const mongoose = require("mongoose");

const TechSchema  = mongoose.Schema({
    Tname: String,
    Tdescription:String,
    Tprice:Number,
    Tvedio:String,
    Timages: [String], 
    defaultImage: String

})
module.exports = mongoose.model("technologies",TechSchema)