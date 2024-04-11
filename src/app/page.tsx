import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[[...nextauth]]/option";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="w-full min-h-screen flex">
      <div className="m-auto flex flex-row items-center">
        <Image
          src="/healty-food.gif"
          alt="health-food picture"
          width={400}
          height={400}
          priority
        />
        <div>
          <h1 className="text-3xl font-bold">Giziku for nutrition student</h1>
          <p className="text-zinc-600">
            Easy to use, Simple, Accurate results, Complete data
          </p>
          {session?.user ? (
            <Button size="lg" className="mt-5">
              <Link href="/list-menu">Haii {session.user.name} lets begin</Link>
            </Button>
          ) : (
            <Button size="lg" className="mt-5">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
