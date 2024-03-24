import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex">
      <div className="m-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold">Giziku for student nutrition</h1>
        <p>
          Giziku is platform that use to calculate the food menu for diet etc.
        </p>
        <Button size="lg" className="mt-3">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </main>
  );
}
