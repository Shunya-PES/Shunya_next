import nodemailer from 'nodemailer';
require('dotenv').config();
// const email = process.env.EMAIL;
// const pass = process.env.PASS;
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.PASS}`,
  },
});

export const mailOptions = {
  from: `${process.env.EMAIL}`,
  to: `${process.env.EMAIL}`,
};
