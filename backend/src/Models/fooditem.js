const mongoose = require("mongoose")


const fooditem = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
video:{
type:String,
required:true,
},
description:{
    type:String,
    required:true,
},
foodpartner:{
    type:mongoose.Schema.ObjectId,
    ref:"foodmodle"
}
});


const fooditemS = mongoose.model("fooditem",fooditem)

module.exports = fooditemS