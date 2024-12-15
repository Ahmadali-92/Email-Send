const nodemailer = require("nodemailer");
const { MailtrapClient } = require("mailtrap");

const sendGmail = async (req, res) => {
  const { from, text, subject } = req.body;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "da95ce8a64be3e",
      pass: "152d14b6d2f82f",
    },

  });
  const mailOptions = {
    from: `${from}@demomailtrap.com`,
    to: "sheikhahmadali24@gmail.com",
    subject: subject,
    text: text,
  };

  const responce = await transport.sendMail(mailOptions);
  if (!responce) return res.status(404).json({ message: "Something Error" });

  res.status(200).json({ message: "Sent Successfully", data: responce });
};
module.exports = sendGmail;
