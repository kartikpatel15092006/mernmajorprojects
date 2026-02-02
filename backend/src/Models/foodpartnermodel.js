const mongoose = require("mongoose")

const foodpartnerschema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
contactname:{
    type:String,
    required:true,
},
phonenumber:{
    type:Number,
    required:true,
},
address:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
}




})

const foodmodel = mongoose.model("foodmodle",foodpartnerschema)
module.exports = foodmodel