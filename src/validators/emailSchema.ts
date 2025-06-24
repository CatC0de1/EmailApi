import { z } from 'zod';

export const emailSchema = z.object({
  user_name: z.string().trim().min(1, 'Name is required'),
  user_email: z.string().trim().email('Invalid email address'),
  message: z.string().trim().min(1, 'Message is required'),
})

export type EmailImput = z.infer<typeof emailSchema>;