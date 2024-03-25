"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

export default function Navbar() {
  const { status, data } = useSession();
  return (
    <nav className="w-full h-20 bg-zinc-950 text-white flex flex-row justify-between items-center px-10 py-3">
      <h1>GIZIKU</h1>
      <div className="flex flex-row gap-5 items-center">
        <p>{data?.user?.name || "Guest"}</p>
        {status == "authenticated" ? (
          <Button onClick={() => signOut()}>signOut</Button>
        ) : (
          <Button onClick={() => signIn()}>signIn</Button>
        )}
      </div>
    </nav>
  );
}
