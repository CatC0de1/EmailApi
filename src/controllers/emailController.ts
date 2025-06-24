import type { Request, Response } from 'express';
import transporter from "../utils/mailer";
import { emailSchema } from '../validators/emailSchema';

export const sendEmail = async (req: Request, res: Response) => {
  const parseResult = emailSchema.safeParse(req.body);
  
  if (!parseResult.success) {
    const errorMessages = parseResult.error.errors.map(e => e.message);
    res.status(400).json({ success: false, error: errorMessages });
    return;
  }

  const { user_name, user_email, message } = parseResult.data;

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