const express=require("express");
const port=process.env.PORT||5001
const cors=require("cors");
const bodyParser=require("body-parser");
const User=require("./Models/User");
require("dotenv").config();
const mongoose=require("mongoose");
mongoose.connect(process.env.DB_URI, {useUnifiedTopology:true, useNewUrlParser:true}).then((err, result)=>{
    if(err) throw err 
    console.log("connection established");
})
const app=express();
app.use(cors());
app.use(express.static("Public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/addmail", cors(), (req, res)=>{
    const {email}=req.query;
    User.findOne({email}, (err, result)=>{
        if(result){
            console.log(result);
            res.send("already there");
        }
        else{
            const NewMail=new User({email});
            NewMail.save().then(re=>console.log(re));  
            res.send("saved")
        }
    }
    ).then(result=>console.log(result)).catch(console.error);
}
    );
app.use("/notify", require("./Notify/router.js"));
app.listen(port, console.log(`API started on port ${port}`))