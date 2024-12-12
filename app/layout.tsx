import type { Metadata } from "next";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Here is Booking",
  description:
    "Here is Booking is a website where you can book rooms in the our hotel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} flex min-h-dvh flex-col bg-gray-600`}
        >
          <ClerkLoaded>
            <Header />

            <main className="container mx-auto grow text-white">
              {children}
            </main>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
