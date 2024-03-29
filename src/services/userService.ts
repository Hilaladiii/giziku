import { userType } from "@/types/userSchema";

export async function signUp(userData: userType) {
  console.log(userData);
  const res = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  return res.json();
}
