import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const MIN_PASSWORD_LENGTH = 8;

export const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is required"),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, `Minimum ${MIN_PASSWORD_LENGTH} characters`),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
