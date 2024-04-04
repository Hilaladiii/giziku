import { authOptions } from "@/app/api/auth/[[...nextauth]]/route";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full flex">
      <p className="mx-auto text-3xl font-bold mt-10">
        Hello {session?.user?.name} semangat mengisi datanya yaa
      </p>
    </div>
  );
}
