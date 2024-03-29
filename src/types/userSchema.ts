import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

export type userType = z.infer<typeof userSchema>;
