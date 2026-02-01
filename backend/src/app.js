const express = require("express")
const app = express()
const cookieparser = require("cookie-parser")
const authroutes = require("../src/routes/auth.routh")
app.use(cookieparser()); 
app.use(express.json());
const foodroutes= require("../src/routes/fooditem.routh")


app.use("/api/auth",authroutes)
app.use("/api/food",foodroutes)


module.exports = app

app.get('/', (req, res) => {
  res.send('hello world')
})


