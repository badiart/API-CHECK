
const express=require('express')
const mongoose=require('mongoose')
const Person = require('../models/User')
const router=express.Router()
//get methode
 router.get('/',async (req,res)=>{
     try{
     let result= await Person.find()
    res.send({response:result,message:"this is the list of users"})}
    catch(error){res.status(400).send("can not get the list of users")}
 })
//add newuser
router.post('/',async (req,res)=>{
    try{ 
        const newperson=new Person(req.body);
        const result=await newperson.save();
    res.send('the user is added succesfully"')}
    catch(error){ res.status(400).send("can't save it")}
})

//get one user
router.get("/:id", async (req, res) => {
    try {
      let result = await Person.findOne({ _id: req.params.id });
      res.send({ response: result, message: "get one user succesfully" });
    } catch (error) {
      res.status(400).send("no user found with this id");
    }
  });

//delete one users
router.delete('/:id',async (req,res)=>{
    try{
    let result= await Person.findOneAndDelete({_id:req.params.id});
        res.send({response:result,message:'the user is deleted succesfully'})
    }
        catch(error){res.status(400).send("can not delet it")}
    })
        //update users
        router.put('/:id',async(req,res)=>{
            try{
            let result= await Person.findOneAndUpdate({_id:req.params.id},{ $set: { ...req.body } });
                res.send(result)
            }
            catch(error){res.status(400).send("can not update user")}})
    
module.exports=router;