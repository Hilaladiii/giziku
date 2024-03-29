import { z } from "zod";

export const compositionSchema = z.object({
  name: z.string().min(5, "min characters 5").max(50, "max characters 50"),
  ingredientCode: z
    .string()
    .max(5, "max character 5")
    .min(5, "min charachter 5"),
  air: z.coerce.number().nonnegative(),
  energi: z.coerce.number().nonnegative(),
  protein: z.coerce.number().nonnegative(),
  lemak: z.coerce.number().nonnegative(),
  kh: z.coerce.number().nonnegative(),
  serat: z.coerce.number().nonnegative(),
  abu: z.coerce.number().nonnegative(),
  kalsium: z.coerce.number().nonnegative(),
  fosfor: z.coerce.number().nonnegative(),
  besi: z.coerce.number().nonnegative(),
  natrium: z.coerce.number().nonnegative(),
  kalium: z.coerce.number().nonnegative(),
  tembaga: z.coerce.number().nonnegative(),
  seng: z.coerce.number().nonnegative(),
  vitC: z.coerce.number().nonnegative(),
  bKar: z.coerce.number().nonnegative(),
  karTot: z.coerce.number().nonnegative(),
  thiamin: z.coerce.number().nonnegative(),
  riboflavin: z.coerce.number().nonnegative(),
  niasin: z.coerce.number().nonnegative(),
});

export type compositionType = z.infer<typeof compositionSchema>;
