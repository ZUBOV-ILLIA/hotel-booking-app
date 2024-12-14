import type { Metadata } from "next";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import { Inter, Corinthia } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bgWaveImg1 from "@/images/bg-wave-1.svg";
import bgWaveImg2 from "@/images/bg-wave-2.svg";
import bgWaveImg3 from "@/images/bg-wave-3.svg";
import bgWaveImg4 from "@/images/bg-wave-4.svg";
import bgWaveImg5 from "@/images/bg-wave-5.svg";
import Image from "next/image";

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
            src={bgWaveImg1}
            alt="background img"
            className="absolute left-0 top-0 -z-10 w-full opacity-30"
          />
          <Image
            src={bgWaveImg3}
            alt="background img"
            className="absolute left-0 top-0 -z-10 w-full opacity-30"
          />
          <Image
            src={bgWaveImg5}
            alt="background img"
            className="absolute left-0 top-0 -z-10 w-full rotate-180 opacity-30"
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
            className="absolute bottom-0 left-0 -z-10 w-full opacity-30"
          />
          <Image
            src={bgWaveImg4}
            alt="background img"
            className="absolute bottom-0 left-0 -z-10 w-full opacity-30"
          />
          <Image
            src={bgWaveImg5}
            alt="background img"
            className="absolute bottom-0 left-0 -z-10 w-full opacity-30"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
