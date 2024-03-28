import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layouts/AppShell";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giziku",
  description: "Platform for student majoring in nutrition",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
