import * as z from "zod";

// export const formSchema = z.object({
//   prompt: z.string().min(1, {
//     message: "Prompt is required."
//   }),
// });

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
    email: z.string().email().min(2, { message: "Invalid email address" }),
    terms: z.boolean().refine(value => value === true, {
        message: "You must agree to the terms and conditions.",
    }),
  })