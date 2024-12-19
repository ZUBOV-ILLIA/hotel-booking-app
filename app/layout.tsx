import type { Metadata } from "next";
import { Inter, Corinthia } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import HomeImages from "@/components/home/HomeImages";
import MainLinks from "@/components/home/MainLinks";

const inter = Inter({ subsets: ["latin"] });
const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-corinthia",
});

export const metadata: Metadata = {
  title: "Sky Haven Hotel",
  description: "Sky Haven Hotel - official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${corinthia.variable} flex min-h-svh flex-col bg-gray-600`}
      >
        <HomeImages />
        <Header />

        <main className="flex grow flex-col py-4 text-white">
          <MainLinks />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
