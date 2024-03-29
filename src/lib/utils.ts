import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isTokenExpired(exp: number): boolean {
  const currentTime = new Date().getDate();
  const expiredTime = new Date(Number(exp) * 1000).getDate();
  console.log(currentTime);
  console.log(expiredTime);
  return expiredTime < currentTime;
}
