import { UserType } from "@/types/user.type";
import { prisma } from "./prisma";
import bcryptjs from "bcryptjs";

export async function signUp(userData: UserType) {
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

export async function signIn(userData: { email: string; password: string }) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
      select: {
        username: true,
        email: true,
        password: true,
      },
    });
    if (user) {
      const passwordVerified = await bcryptjs.compare(
        userData.password,
        user.password
      );
      if (passwordVerified) {
        return {
          username: user.username,
          email: user.email,
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
