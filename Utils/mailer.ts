import nodemailer = require('nodemailer');
import html  = require("./html");
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noviamsg@gmail.com',
        pass: 'Mama72446699$'
    }
});

let email_arr = [];

const mailer = (req,res, emails)=>{
    console.log(emails);
    
    emails.forEach(element => {
        email_arr.push(element.email)
    });
    console.log(req.body);
    
    transporter.sendMail({
    from: "noviamsg@gmail.com", // sender address
    subject: req.body.subject, // Subject line
    // text: "Hello This is an auto generated Email for testing  from node please ignore it", /
    html: html.default.html(req.body.message),
    to: email_arr
}, (error, info)=> {
    if (error) {
        res.status(400);
        res.json({
            success: false,
            message: "Mails not sent"
        })
         console.log(error);
    }
    else{
        res.status(200);
       
        res.json({
            success: true,
            message:"Mails sent"
        });
    }
});
}
// send mail with defined transport object
export default{
    mailer
}
