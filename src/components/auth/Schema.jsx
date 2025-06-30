import { z } from "zod";

export const registerSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .min(5, "Email must be at least 5 characters")
      .email("Email must be a valid email address")
      .regex(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "Email must be a valid Gmail address"
      )
      .transform((email) => email.toLowerCase())
      .refine((email) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const allEmail = users.map((user) => user.email.toLowerCase());
        return !allEmail.includes(email);
      }, {
        message: "Email already exists",
      }),
    password: z
      .string()
      .min(1, "Password is required")
      .min(5, "Password must be at least 5 characters"),
    passwordConfirmation: z
      .string()
      .min(1, "Password confirmation is required")
      .min(5, "Password confirmation must be at least 5 characters")
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"]
  });

export const loginSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .min(5, "Email must be at least 5 characters")
      .email("Email must be a valid email address")
      .regex(/^[^\s@]+@gmail\.com$/, "Email must be a valid Gmail address")
      .transform((email) => email.toLowerCase())
      .refine(email => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        return users.find(user => user.email.toLowerCase() === email)
      }, {
        message: "Email not registered",
      }),
    password: z
      .string()
      .min(1, "Password is required")
      .min(5, "Password must be at least 5 characters")
  })
  .refine(data => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email.toLowerCase() === data.email);
    if (!user) return true; 
    return data.password === user.password;
  }, {
      message: "Incorrect password",
      path: ["password"],
  })