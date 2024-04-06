import { userType } from "@/types/userSchema";

const api = process.env.API_ROOT;
export async function signUp(userData: userType) {
  const res = await fetch(`${api}/api/auth/register`, {
    method: "POST",
    body: JSON.stringify(userData),
  });
  return res.json();
}
