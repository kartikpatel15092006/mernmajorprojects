const foodpartnermodel = require("../Models/foodpartnermodel")
const jwt = require("jsonwebtoken")
const usermodel = require("../Models/usermodel")

async function auth(req,res,next) {
    const token = req.cookies.token
    if(!token){

        res.status(400).json({
message:"Invaild request please login first"

        })
    }
    try {
       const decoded= jwt.verify(token,process.env.jwt_secret)
const foodpartner = await foodpartnermodel.findById(decoded.id)
req.foodpartner = foodpartner

next()

    } catch (err) {
        res.status(401).json({
            message:"invaild token"
        })
    }
    
}

async function authusermiddleware(req,res,next) {
     const token = req.cookies.token
    if(!token){

        res.status(400).json({
message:"please login first"

        })
    }
    try {
       const decoded= jwt.verify(token,process.env.jwt_secret)
const user = await usermodel.findById(decoded.id)
req.user = user

next()

    } catch (err) {
        res.status(401).json({
            message:"invaild token"
        })
    }
    
}
module.exports= {
    auth, 
    authusermiddleware,
}