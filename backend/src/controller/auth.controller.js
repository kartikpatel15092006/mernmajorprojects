const Usermodle = require("../Models/usermodel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function UserRegistered(req,res) {
  const {fullName,email,password} = req.body;

const isuseralreadyexists = await Usermodle.findOne
({email})

if(isuseralreadyexists){
  return  res.status(400).json({
    message: "User already exists"
  })
}

const hashedpassword= await bcrypt.hash(password,10);
const user = await Usermodle.create({
    fullName,
    email,
    password:hashedpassword,
})

const token = jwt.sign(
  {id: user._id


  },
  process.env.jwt_secret
)
res.cookie("token",token)
res.status(201).json({
  message: "User registered successfully",
  user: {
id: user._id,
email: user.email,
fullName: user.fullname
  }
})
};

async function Userloggedin(req,res) {

const {email,password} = req.body
const Userthere = await Usermodle.findOne({email})
if(!Userthere){
  return res.status(400).json({
    message:"Invaild email or password"
  })
}
  
const isvalid = await bcrypt.compare(password,Userthere.password)
if(!isvalid){
    return res.status(400).json({
    message:"Invaild email or password"
  })
}
const token = jwt.sign(
  {id: Userthere._id


  },
  process.env.jwt_secret
)
res.cookie("token",token)
res.status(200).json({
  message:"User logged in successfully",
  user: {
id: Userthere._id,
email: Userthere.email,
fullName: Userthere.fullName
  }
})

}

async function Userlogout(req,res) {
  res.cookie("token","")
  res.status(200).json({
    message: "logged out success"
  })
}

module.exports = {
  UserRegistered,
  Userloggedin,
Userlogout
}
