const nodemailer=require("nodemailer");
require("dotenv").config();
const send=async(people, notificationashtml, subject)=>{
    const transport=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const mail=await transport.sendMail({
        name:"mail.google.com",
        from: process.env.EMAIL_ADDRESS,
        to:people,
        subject,
        html:notificationashtml
    });
};
module.exports={send:send};