import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(5, "minimum username is 5 characters").max(50),
  email: z.string().email(),
  password: z.string().min(8, "minimum password is 8 characters"),
});

export type userType = z.infer<typeof userSchema>;
