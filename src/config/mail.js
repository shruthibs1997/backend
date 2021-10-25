const nodemailer=require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "c9d351b26dbeda", // generated ethereal user
      pass: "a158d342b144ec", // generated ethereal password
    },
});


module.exports=transporter;