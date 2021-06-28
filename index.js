const express=require('express')
const mongoose=require('mongoose')
const dotenv = require('dotenv')
const router=require('./routes/routes')
dotenv.config()
const app=express()
app.use(express.json());
//data base connection
mongoose.connect(process.env.mongoString, {useNewUrlParser: true,useUnifiedTopology:true})
mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})
//server 
app.listen(process.env.Port,(error)=>{
  if(error){console.log(error)}
{console.log("server is running")}})

// app.get('/',(req,res)=>{
//   Person.find().then((el)=>res.json(el))
// .catch((err)=>console.log(err)) 
// })

app.use('/api/users',require('./routes/routes'))