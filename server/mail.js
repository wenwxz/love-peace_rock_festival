require('dotenv').config();

module.exports = {
    sendMail: (client,client64) => {
        const nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ACCOUNT,  // lab 3.2
                pass: process.env.EMAIL_PASSWORD // lab 3.2
            }
        });

        var mailOptions = {
            from: process.env.EMAIL_ACCOUNT,  
            to: client, 
            subject: "信箱驗證_Love&Peace", 
            html: `<h3>請點擊下方連結開通帳號</h3>
            <a href='http://localhost:3000/register/active/${client64}'>請點擊此連結前往認證</a>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("訊息發送: " + info.response);
            }
        });
    },

    codeMail: (client,code) => {
        const nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ACCOUNT,  
                pass: process.env.EMAIL_PASSWORD 
            }
        });

        var mailOptions = {
            from: process.env.EMAIL_ACCOUNT,  
            to: client, 
            subject: "密碼重置_Love&Peace", 
            html: `<h5>您的驗證碼為${code}</h5>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("訊息發送: " + info.response);
            }
        });
    },
    
    //寄送信用卡交易密碼
    sendVisaMail: (mailOptions) => {
        const nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ACCOUNT, 
                pass: process.env.EMAIL_PASSWORD 
            }
        });


        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("訊息發送: " + info.response);
            }
        });
    }

}