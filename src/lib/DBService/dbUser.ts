import { userType } from "@/types/userSchema";
import { prisma } from "../prisma";
import bcryptjs from "bcryptjs";
import { generateRandomPassword } from "../utils";

export async function signUp(userData: userType) {
  try {
    const email = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
      select: {
        email: true,
      },
    });
    const username = await prisma.user.findUnique({
      where: {
        username: userData.username,
      },
      select: {
        username: true,
      },
    });
    if (email) {
      return {
        status: 400,
        message: "User with this email already exists ",
      };
    }
    if (username) {
      return {
        status: 400,
        message: "Username already in used",
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
          name: user.username,
          email: user.email,
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function signInWithGoogle(userData: {
  email: string;
  username: string;
  image: string;
}) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });
    if (user) {
      await prisma.user.update({
        where: {
          email: userData.email,
        },
        data: {
          image: userData.image,
        },
      });
      return {
        status: 200,
        message: "succes to signUp with google",
        data: userData,
      };
    } else {
      const passwordHash = await generateRandomPassword(10);
      await prisma.user.create({
        data: {
          email: userData.email,
          username: userData.username,
          password: passwordHash,
          image: userData.image,
        },
      });
      return {
        status: 201,
        message: "succes to signUp with google",
        data: userData,
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: (error as TypeError).name,
    };
  }
}
