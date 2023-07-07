const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html}) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: MAIL_USER,
              pass: MAIL_PASSWORD
            }
          });

        // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `FilesMob <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}