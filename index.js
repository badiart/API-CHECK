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

app.use('/api/users',require('./routes/routes'))
//server creation 
app.listen(5003,(error)=>{
  if(error){console.log(error)}
  else
{console.log("server is running")}})

