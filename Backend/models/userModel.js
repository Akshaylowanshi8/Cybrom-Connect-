// const mongoose = require("mongoose");

// const UserSchema  = mongoose.Schema({
//     Uname: String,
//     Unumber:Number,
//     Uaddres:String,
//     Ueducation:String,
//     Uemail: { type: String, unique: true, required: true },
//     Upass: { type: String,  unique: true, required: true },


// })
// module.exports = mongoose.model("user",UserSchema)
const mongoose = require("mongoose");

const UserSchema  = mongoose.Schema({
    // Uname: String,
    // // Unumber:Number,
    // Uemail: { type: String, required: true },
    // Upassword: { type: Number },

    Uname: { type: String, required: true },
    Uemail: { type: String, required: true },
    Upassword: { type: String, required: true },


})
module.exports = mongoose.model("user",UserSchema)