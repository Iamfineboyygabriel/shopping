// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const sendMail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMPT_HOST,
//     port: process.env.SMPT_PORT,
//     secure: true, //true for 465 and false for any other port
//     auth: {
//       user: process.env.SMPT_MAIL,
//       pass: process.env.SMPT_PASSWORD,
//     },
//     tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false,
//       },
//   });

//   const mailOptions = {
//     from: process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
//   console.log("Email sent successully")
// }

// module.exports = sendMail;

const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true, //true for 465 and false for any other port
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: "tundegabriel999@gmail.com",
        pass: "tuojlkrrlgwqwekd",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "tundegabriel999@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
  console.log("Email sent successully");
};

module.exports = sendMail;
