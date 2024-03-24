import { UserType } from "@/types/user.type";
import { prisma } from "./prisma";
import bcryptjs from "bcryptjs";

export async function Register(userData: UserType) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
      select: {
        email: true,
      },
    });
    if (user) {
      return {
        status: 400,
        message: "User with this email already exists ",
      };
    }
    userData.password = await bcryptjs.hash(userData.password, 10);
    await prisma.user.create({
      data: {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      },
    });
    return {
      message: "User registered successfully",
      status: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to register your account",
      status: 500,
    };
  }
}
