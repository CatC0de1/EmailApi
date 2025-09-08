import type { Request, Response } from 'express';
import transporter from "../utils/mailer";
import renderTemplate from '../utils/renderTemplate';
import { emailPrivateSchema, emailPublicSchema } from '../validators/emailSchema';

export const sendEmailPrivate = async (req: Request, res: Response) => {
  const parseResult = emailPrivateSchema.safeParse(req.body);
  
  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues.map(issue => ({
      field: issue.path[0],
      message: issue.message
    }));
    res.status(400).json({ success: false, error: errorMessages });
    return;
  }

  const { user_name_sender, user_email_sender, message } = parseResult.data;

  try {
    const htmlContent = renderTemplate('emailTemplate', {
      public: false,
      user_name_sender,
      user_email_sender,
      message
    });

    await transporter.sendMail({
      from: `"${user_name_sender}" <${user_email_sender}>, Portfolio Message`,
      to: process.env.MAIL_RECEIVER,
      subject: `Portfolio Message from ${user_name_sender}`,
      html: htmlContent,
      replyTo: user_email_sender
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send failed: ', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
};

export const sendEmailPublic = async (req: Request, res: Response) => {
  const parseResult = emailPublicSchema.safeParse(req.body);

  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues.map(issue => ({
      field: issue.path[0],
      message: issue.message
    }));
    res.status(400).json({ success: false, error: errorMessages });
    return;
  }

  const { user_name_sender, user_email_sender, message, user_name_receiver, user_email_receiver } = parseResult.data;

  try {
    const htmlContent = renderTemplate('emailTemplate', {
      public: true,
      user_name_sender,
      user_email_sender,
      message,
      user_name_receiver,
      user_email_receiver
    });

    await transporter.sendMail({
      from: `"${user_name_sender}" <${user_email_sender}>`,
      to: user_email_receiver,
      subject: `Hello ${user_name_receiver}, you have message from ${user_name_sender}`,
      html: htmlContent,
      replyTo: user_email_sender
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send failed: ', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
};
