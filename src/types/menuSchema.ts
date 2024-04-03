import { z } from "zod";

export const menuSchema = z.object({
  berat: z.coerce.number().nonnegative().optional(),
  code: z.coerce.number().nonnegative().optional(),
  nama: z.string().min(5, "min characters 5").max(50, "max characters 50"),
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
  retinol: z.coerce.number().nonnegative(),
  bKaroten: z.coerce.number().nonnegative(),
  karotenTotal: z.coerce.number().nonnegative(),
  thiamin: z.coerce.number().nonnegative(),
  riboflavin: z.coerce.number().nonnegative(),
  niasin: z.coerce.number().nonnegative(),
  vitaminC: z.coerce.number().nonnegative(),
  bdd: z.coerce.number().nonnegative(),
});

export const addMenuSchema = z.object({
  username: z.string(),
  code: z.number(),
  name: z.string(),
});

export type MenuType = z.infer<typeof menuSchema>;
export type AddMenuType = z.infer<typeof addMenuSchema>;
