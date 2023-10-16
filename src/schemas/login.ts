import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required"
    }),
    password: z.string({
      required_error: "Password is required"
    }).min(6).max(32)
  })
})