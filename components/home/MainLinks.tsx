"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    name: "Reservation",
    link: "/reservation",
  },
  {
    name: "Activities",
    link: "/activities",
  },
  {
    name: "Contact Us",
    link: "/contacts",
  },
  {
    name: "About Us",
    link: "/about",
  },
];

export default function MainLinks() {
  const pathname = usePathname();

  return (
    <div className="t-shadow container mx-auto mb-2 flex flex-wrap justify-around gap-x-4 gap-y-3 px-2 font-corinthia text-4xl text-white">
      {pages.map((page) => (
        <Link
          key={page.link}
          href={page.link}
          className={`transition-colors ${pathname === page.link ? "text-yellow-400" : "hover:text-yellow-400"}`}
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
}
