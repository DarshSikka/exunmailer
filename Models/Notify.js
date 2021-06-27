const nodemailer=require("nodemailer");
require("dotenv").config();
const send=async(people, notificationashtml, subject)=>{
    const transport=nodemailer.createTransport({
        service:"mailgun",
        auth:{
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const mail=await transport.sendMail({
        name:"mailgun.com",
        from: process.env.EMAIL_ADDRESS,
        bcc:people,
        subject,
        html:notificationashtml
    });
};
module.exports={send:send};