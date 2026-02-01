const express = require("express")
const router = express.Router(
)
const {UserRegistered} = require("../controller/auth.controller")
const{Userloggedin} = require("../controller/auth.controller")
const{Userlogout} = require("../controller/auth.controller")
const{FoodPartnermodel} = require("../controller/auth.controller")
const{Foodpartnerlogin} = require("../controller/auth.controller")


router.post("/user/signup",UserRegistered);

router.post("/user/login",Userloggedin);

router.get("/user/logout",Userlogout);

router.post("/user/foodpartner/signup",FoodPartnermodel);

router.post("/user/foodpartner/login",Foodpartnerlogin);

router.get("/user/foodpartner/logout",Userlogout);

module.exports = router