import type { Metadata } from "next";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import { Inter, Lavishly_Yours } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const lavishly = Lavishly_Yours({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lavishly",
});

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
          className={`${inter.className} ${lavishly.variable} flex min-h-dvh flex-col bg-gray-600`}
        >
          <ClerkLoaded>
            <Header />

            <main className="container mx-auto flex grow flex-col py-6 text-white">
              {children}
            </main>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
