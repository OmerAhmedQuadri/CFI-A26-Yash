import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config()

// console.log(process.env);
let pass = process.env.app_pass

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
    service : 'gmail',
  auth: {
    user: "dumpyashwanth@gmail.com",
    pass: process.env.app_pass,
  },
});

// Send an email using async/await
const mailOperations ={
    from: 'dumpyashwanth@gmail.com',
    to: "byashwanthreddy9036@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // Plain-text version of the message
    html: "<b>Hello world?</b>", // HTML version of the message
}

transporter.sendMail(mailOperations, (err, info) => {
if (err) {
        console.error('Error sending mail: ',err);
    
}    else {
    console.log('Email sent sucessfully');
    console.log('msg id:',info.messageId);
    
}
})