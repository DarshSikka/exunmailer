const express=require("express");
require("dotenv").config();
const router=express.Router();
const bodyParser=require("body-parser");
const User=require("../Models/User");
const {send}=require('../Models/Notify')
router.post("/message", (req, res)=>{
  const {pass, subject, notificationsashtml}=req.body;
  if(pass!=process.env.PASSWORD){
      return res.send("INCORRECT PASS");
  }
  else{
    User.find({}, (err, result)=>{
        console.log(err, result);
       const arr=[];
       result.forEach(item=>{
           console.log(item)
           arr.push(item.email);
       });
       console.log(arr);send(arr, notificationsashtml, subject).then(resul=>{
           res.send("SENT");
       }).catch(console.error);
    }).then(result=>console.log(result)).catch(console.error);
  }
})
module.exports=router; 