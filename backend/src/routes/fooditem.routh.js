const express = require("express")
const router = express.Router(
)
const {createfood} = require("../controller/food.controller")
const {auth}=require("../middlewares/auth.middleware")
const  multer = require("multer")
const upload = multer({
    storage: multer.memoryStorage(),
})


router.post("/",auth,upload.single("mama"),createfood)


module.exports = router