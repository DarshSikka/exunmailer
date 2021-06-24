const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const bodyParser=require("body-parser");
require("dotenv").config();
const port=process.env.PORT || 3000;
const details={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD
}
const conn=mysql.createConnection(details); 
conn.query('USE emails');
const app=express();
app.use(cors());
app.use(express.static("Public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/addmail", cors(), (req, res)=>{
    const {email}=req.query;
    conn.query(`INSERT INTO contents(email) values("${email}");`, (err, result)=>{
        if(err) throw err;
        res.send("CREATED");
    })
});
app.use("/notify", require("./Notify/router.js"))
app.listen(port, console.log(`API started on port ${port}`))