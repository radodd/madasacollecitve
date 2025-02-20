import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .max(100, "Sorry, name is too long."),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  message: z.string().min(1, "Briefly explain how we can help you"),
});
