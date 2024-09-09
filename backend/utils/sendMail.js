const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        secure: true, // true cho port 465
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD,
        },
    });

    const mailOptions = {
        from: options.email,
        to: process.env.SMPT_MAIL,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
