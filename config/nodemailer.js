import nodemailer from "nodemailer"
require("dotenv").config()
const email = process.env.EMAIL
const pass = process.env.PASS
export const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:email,
        pass:pass
    }
})

export const mailOptions= {
    from:email,
    to:email
}