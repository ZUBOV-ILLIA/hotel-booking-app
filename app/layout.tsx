import type { Metadata } from "next";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import { Inter, Corinthia } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import HomeUpImages from "@/components/home/HomeUpImages";
import HomeBottomImages from "@/components/home/HomeBottomImages";
import balloonImg from "@/public/balloon.webp";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-corinthia",
});

export const metadata: Metadata = {
  title: "Sky Haven Hotel",
  description:
    "Sky Haven Hotel - official website",
};

const pages = [
  {
    name: "Rooms",
    link: "/rooms",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Activities",
    link: "/activities",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${corinthia.variable} flex min-h-svh flex-col bg-gray-600`}
        >
          <HomeUpImages />
          <ClerkLoaded>
            <Header />
            <main className="flex grow flex-col py-6 text-white">
              <Image
                src={balloonImg}
                className="balloon -z-20 h-1/6 w-auto brightness-75"
                alt="img of balloon"
              />
              <div className="t-shadow container mx-auto mb-2 flex flex-wrap justify-center gap-x-8 gap-y-3 font-corinthia text-4xl text-white">
                {pages.map((page) => (
                  <Link key={page.link} href={page.link}>
                    {page.name}
                  </Link>
                ))}
              </div>

              {children}
            </main>

            <Footer />
          </ClerkLoaded>
          <HomeBottomImages />
        </body>
      </html>
    </ClerkProvider>
  );
}
