const mongoose=require("mongoose");
const schema=mongoose.Schema({
   email:{
       type:String,
       required:true
   }
});
const User=mongoose.model("User", schema, "emails");
module.exports=User;