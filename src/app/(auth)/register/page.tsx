import RegisterForm from "@/components/RegisterForm";

export default function LoginPage() {
  return (
    <main className="w-full min-h-screen flex">
      <div className="m-auto w-full max-w-md shadow-lg p-10">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-sm text-zinc-400 mb-5 mt-3">
          masukkan data anda dengan benar
        </p>
        <RegisterForm />
      </div>
    </main>
  );
}
