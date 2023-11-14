import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
  });
