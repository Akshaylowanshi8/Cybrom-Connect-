const mongoose = require("mongoose");

const TechSchema  = mongoose.Schema({
    Tname: String,
    Taplydate:Date,
    Tdescription:String,
    Tprice:Number,
    Tvedio:String,
    Timages: { type: [String], required: true }, 
    defaultImage: String

})
module.exports = mongoose.model("technologies",TechSchema)