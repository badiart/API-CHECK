
const mongoose=require('mongoose')
const { Schema } = mongoose;
// define a schema
const personSchema = new Schema({
    name: {type:String,required:true },
    age:{type:Number,required:true},
    job:{type:String},
     phonenumber:{type:Number,required:false},
  });
  // compile our model
  const Person = mongoose.model('Person', personSchema);
  
  module.exports=Person
