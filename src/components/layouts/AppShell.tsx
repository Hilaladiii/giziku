"use client";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { MenuProvider } from "@/contexts/MenuContext";
import { MenuUserProvider } from "@/contexts/MenuUserContext";
import { Toaster } from "@/components/ui/toaster";

const disableNavbar = ["/login", "/register", "/404"];
export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main>
      <NextAuthProvider>
        <MenuProvider>
          <MenuUserProvider>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            <Toaster />
          </MenuUserProvider>
        </MenuProvider>
      </NextAuthProvider>
    </main>
  );
}
