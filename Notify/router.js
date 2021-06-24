const express=require("express");
require("dotenv").config();
const router=express.Router();
const bodyParser=require("body-parser");
const mysql=require("mysql");
const {send}=require("../Models/Notify.js")
const details={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD
}
const conn=mysql.createConnection(details); 
conn.query(`USE emails`)
router.post("/message", (req, res)=>{
  const {pass, subject, notificationsashtml}=req.body;
  if(pass!=process.env.PASSWORD){
      return res.send("INCORRECT PASS");
  }
  else{
       conn.query(`SELECT email FROM contents`, (err, result)=>{
           const arr=[];
           result.forEach(em=>{
             arr.push(em.email);
           });
           console.log(arr);
           send(arr, notificationsashtml, subject).then(result=>res.send("Sent"));
       })
  }
})
module.exports=router; 