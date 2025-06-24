import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.post('/api/sendEmail', async (req, res) => {
  const { user_name, user_email, message } = req.body;

  if (!user_name || !user_email || !message) {
    res.status(400).json({ success: false, error: 'Missing fields' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: `"${user_name}" <${user_email}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `Portfolio Message from ${user_name}`,
      text: message,
      replyTo: user_email
    });

    res.status(200).json({ success: true });
    return;
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.get('/', (_, res) => {
  res.send('Email API server is online');
});

app.listen(PORT, () => {
  console.log(`\nEmail API server running on http://localhost:${PORT}\n`);
});
