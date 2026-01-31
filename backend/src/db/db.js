const mongoose = require('mongoose');
const ConnectDb = ()=>{
 mongoose.connect(process.env.mongo_db).then(()=>{
    console.log("database working well")
 }).catch((err)=>{
    console.log(err)
 });
}

module.exports = ConnectDb
