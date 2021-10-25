const transporter=require("../config/mail")


// send mail with defined transport object

const sendmail = async ({to,subject,text,html})=>{
    await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
        // attachments: [{
        //     filename: 'license.txt',
        //     path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
        // }]
    });
}

module.exports=sendmail;
