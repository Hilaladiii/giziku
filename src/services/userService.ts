import { userType } from "@/types/userSchema";

export async function signUp(userData: userType) {
  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  return res.json();
}
