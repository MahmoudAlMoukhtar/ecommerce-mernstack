const nodemailer = require("nodemailer");
let Mailgen = require("mailgen");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.PASSWORD_EMAIL, // generated ethereal password
  },
});

// Configure mailgen by setting a theme and your product info
let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

let response = {
  body: {
    name: "Daily Tuition",
    intro: "Your bill has arrived!",
    table: {
      data: [
        {
          item: "Nodemailer Stack Book",
          description: "A Backend application",
          price: "$10.99",
        },
      ],
    },
    outro: "Looking forward to do more business",
  },
};

let mail = MailGenerator.generate(response);
transporter.sendMail({
  from: process.env.EMAIL,
  to: "mahmoudalmoukhtar544@gmail.com",
  subject: "test email with nodemailer",
  html: mail,
});

/* 
const sgMail = require("@sendgrid/mail");
const sendGridApiKey =
  "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";

sgMail.setApiKey(sendGridApiKey);
sgMail.send({
  to: "mahmoudalmoukhtar544@gmail.com",
  from: "mahmoudalmoukhtar10@gmail.com",
  subject: "This is test email!",
  text: "test email withsendGrid from ecimmerce project",
});
 */
