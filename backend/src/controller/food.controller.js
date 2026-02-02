const fooditem = require("../Models/fooditem")
const {uploadFile}=require("../services/storage.service")
const {v4:uuid}= require("uuid")


async function createfood(req,res) {
   

const fileuploadresult = await uploadFile(req.file.buffer,uuid())
console.log(fileuploadresult)

const fooditemcreate = await fooditem.create({
    name:req.body.name,
    video:fileuploadresult.url,
    description:req.body.description,
    foodpartner:req.foodpartner._id,
})

 res.status(200).json({
        message:"item created success",
        user:{

            name:fooditemcreate.name,
            video:fooditemcreate.video,
            description:fooditemcreate.description,
            foodpartner:fooditemcreate.foodpartner,

        }
    })
  


}

async function getfooditems(req,res) {

    const fooditems = await fooditem.find({


    })
    res.status(200).json({
        message:"fooditems fetch success",
        fooditems
    })
}

module.exports = {
    createfood,
    getfooditems,
}