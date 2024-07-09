const mongoose = require("mongoose");

const UserSchema  = mongoose.Schema({
    Uname: String,
    Unumber:Number,
    Uaddres:String,
    Ueducation:String,
    Uemail: { type: String, unique: true, required: true },
    Upass: { type: String,  unique: true, required: true },


})
module.exports = mongoose.model("user",UserSchema)