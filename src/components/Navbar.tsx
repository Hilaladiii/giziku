"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useMenuUser } from "@/contexts/MenuUserContext";

export default function Navbar() {
  const { status, data } = useSession();
  const menuUser = useMenuUser();
  return (
    <nav className="w-full h-20 bg-zinc-900 text-white flex flex-row justify-between items-center px-10 py-3">
      <Link href="/" className="text-lg font-semibold">
        Giziku
      </Link>
      <div className="flex gap-8">
        <Link href="/add-new-menu" className="focus:underline">
          Add new data
        </Link>
        <Link href="/list-menu" className="focus:underline">
          List Menu
        </Link>
        <div>
          <Link href="/my-menu" className="focus:underline">
            My menu
          </Link>
          <span>{menuUser.length > 0 && ` (${menuUser.length})`}</span>
        </div>
        <Link href="/result" className="focus:underline">
          Result
        </Link>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <p>Hello {data?.user?.name || "Guest"}👋</p>
        {status == "authenticated" ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn()}>Sign In</Button>
        )}
      </div>
    </nav>
  );
}
