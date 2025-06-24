import type { Request, Response } from 'express';
import transporter from "../utils/mailer";

export const sendEmail = async (req: Request, res: Response) => {
  const { user_name, user_email, message } = req.body;

  if (!user_name || !user_email || !message) {
    res.status(400).json({ success: false, error: 'Missing fields' });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"${user_name}", Portfolio Message`,
      to: process.env.MAIL_RECEIVER,
      subject: `Portfolio Message from ${user_name}`,
      text: message,
      replyTo: user_email
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send failed: ', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
};