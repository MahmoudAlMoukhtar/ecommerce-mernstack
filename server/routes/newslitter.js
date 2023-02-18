const express = require("express");
const nodemailer = require("nodemailer");
let Mailgen = require("mailgen");
let hbs = require("nodemailer-express-handlebars");
const path = require("path");

const router = express.Router();

router.post("/", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD_EMAIL, // generated ethereal password
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));

  // Configure mailgen by setting a theme and your product info
  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Furni Ecommerce",
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
    template: "index",
    context: {
      title: "TESTTTTTTTTTTT",
    },

    // html: mail,
  });
  res.status(200).json({message: "you should recive email"});
});

module.exports = router;
