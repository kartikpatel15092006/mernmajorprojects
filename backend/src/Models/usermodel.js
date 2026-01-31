const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({

fullName: {
    type:String,
    required:true
},
email: {
    type:String,
    required:true,
    unique:true
},
password: {
    type:String,
    required:true
},

},{
    timestamps:true
})

const Usermodle = mongoose.model("User",Userschema)
module.exports = Usermodle