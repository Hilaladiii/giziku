import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="w-full min-h-screen flex">
      <div className="m-auto w-full max-w-md shadow-lg p-10">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-sm text-zinc-400 mb-5 mt-3">
          Please fill all data correctly
        </p>
        <RegisterForm />
        <div className="flex flex-row mt-5 justify-center items-center gap-1">
          <p className="text-sm">Already have an account?</p>
          <Link
            href="/login"
            className="text-sm text-zinc-700 hover:text-zinc-500"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
