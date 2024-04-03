import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold">Not Found</h2>
      <p className="text-sm text-zinc-600">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
