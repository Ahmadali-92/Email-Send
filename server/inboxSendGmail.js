const nodemailer = require("nodemailer");

const sendGmail = async (req, res) => {
  const transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "api",
      pass: "94d4932255d746947574fa9a6c304b1d",
    },
  });

  const mailOptions = {
    from: "info@demomailtrap.com",
    to: "sheikhahmadali24@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  await transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log("Sending Error", error);
      res
        .status(500)
        .json({ error: "Failed to send email", error: error.message });
    } else {
      console.log("Email Sent successfully", response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
};
module.exports = sendGmail;


const sendGmail2 = async (req, res) => {
  const client = new MailtrapClient({
    token: "94d4932255d746947574fa9a6c304b1d",
  });

  client
    .send({
      from: { email: "info@demomailtrap.com" },
      to: [{ email: "sheikhahmadali24@gmail.com" }],
      subject: "Hello from Mailtrap!",
      text: "Welcome to Mailtrap Sending!",
    })
    .then(console.log)
    .catch(console.error);
};