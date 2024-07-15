const express = require("express");
const userController = require("../controllers/userController.js")
const nodemailer = require("nodemailer");

const router = express.Router();
router.post("/register",userController.registerUser)
router.post("/login",userController.loginUser)
router.get("/logout",userController.logoutUser)
router.get("/getuser",userController.getUser)



// send mail
router.post("/contect",  (req, res) => {
    const {email ,name,message }  = req.body;
    // console.log(email,name,message);
    // console.log(process.env.PASSWORD);
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Sending Email for Cybrom  connet project contect us",
            html:`
            
            <h1> castumer Name :${name} Castumer email : <email>${email} </email>  <br/>castumer message:${message} </h1>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json("Email sent thank you ")
            }
        })
    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
})

module.exports= router;