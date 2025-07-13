import { z } from 'zod';

export const baseEmailSchema = z.object({
  user_name_sender: z.string().trim().min(1, 'Sender name is required'),
  user_email_sender: z.string().trim().min(6, 'Sender email is required').email('Invalid email address'),
  message: z.string().trim().min(1, 'Message is required'),
})

export const emailPrivateSchema = baseEmailSchema;
export type EmailPrivateImput = z.infer<typeof emailPrivateSchema>;

export const emailPublicSchema = baseEmailSchema.extend({
  user_name_receiver: z.string().trim().min(1, 'Receiver name is required'),
  user_email_receiver: z.string().trim().min(6, 'Receiver email is required').email('Invalid email address'),
});
export type EmailPublicImput = z.infer<typeof emailPublicSchema>;