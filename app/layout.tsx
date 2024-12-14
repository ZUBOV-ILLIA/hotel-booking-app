import type { Metadata } from "next";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import { Inter, Corinthia } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mainBg from "@/public/main-bg.webp";
import bgWaveImg2 from "@/public/bg-wave-2.svg";
import bgWaveImg3 from "@/public/bg-wave-3.svg";
import bgWaveImg4 from "@/public/bg-wave-4.svg";
import bgWaveImg5 from "@/public/bg-wave-5.svg";

const inter = Inter({ subsets: ["latin"] });
const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-corinthia",
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
          className={`${inter.className} ${corinthia.variable} flex min-h-dvh flex-col bg-gray-600`}
        >
          <Image
            src={bgWaveImg3}
            alt="background img"
            className="fixed left-0 top-0 -z-10 w-full opacity-40"
          />
          <Image
            src={bgWaveImg5}
            alt="background img"
            className="fixed left-0 top-0 -z-10 w-full rotate-180 opacity-50"
          />
          <Image
            src={mainBg}
            alt="main image"
            className="fixed -z-20 h-full w-full object-cover brightness-50"
            placeholder="blur"
          />

          <ClerkLoaded>
            <Header />

            <main className="flex grow flex-col py-6 text-white">
              {children}
            </main>

            <Footer />
          </ClerkLoaded>

          <Image
            src={bgWaveImg2}
            alt="background img"
            className="fixed bottom-0 left-0 -z-10 w-full opacity-60"
          />
          <Image
            src={bgWaveImg4}
            alt="background img"
            className="fixed bottom-0 left-0 -z-10 w-full opacity-40"
          />
          <Image
            src={bgWaveImg5}
            alt="background img"
            className="fixed bottom-0 left-0 -z-10 w-full opacity-70"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
