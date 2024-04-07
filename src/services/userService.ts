import { userType } from "@/types/userSchema";

const api = process.env.NEXT_PUBLIC_BASE_URL;

export async function signUp(userData: userType) {
  try {
    const res = await fetch(`${api}api/auth/register`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const response = await res.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error in signUp:", error);
    throw error;
  }
}
