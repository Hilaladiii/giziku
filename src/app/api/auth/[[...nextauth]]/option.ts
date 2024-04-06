import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import { signIn, signInWithGoogle } from "@/lib/DBService/dbUser";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60,
  },
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn({ email, password });
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.name = user.name;
      }
      if (account?.provider === "google") {
        const res = await signInWithGoogle({
          username: user.name || "",
          email: user.email || "",
          image: user.image || "",
        });
        if (res.status == 200 || res.status == 201) {
          token.email = res.data?.email;
          token.name = res.data?.username;
          token.picture = res.data?.image;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user = session.user || {};
      if (session && "email" in token) {
        session.user.email = token.email;
      }
      if (session && "name" in token) {
        session.user.name = token.name;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
