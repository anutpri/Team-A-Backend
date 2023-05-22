import express from "express";
import nodemailer from 'nodemailer';

const serviceRouter = express.Router();
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email service provider
    auth: {
      user: 'your-email',
      pass: 'your-password',
    },
  });

  serviceRouter.post('/', (req, res) => {
    const { email, newPassword } = req.body;
  
    // Configure the email details
    const mailOptions = {
      from: 'your-email', // Sender's email address
      to: email, // Recipient's email address
      subject: 'Password Reset', // Email subject
      text: `Your new password is: ${newPassword}`, // Email content
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });

export default serviceRouter;