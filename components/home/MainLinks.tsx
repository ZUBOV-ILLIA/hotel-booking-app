"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages1 = [
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
];
const pages2 = [
  {
    name: "Activities",
    link: "/activities",
  },
  {
    name: "Contacts",
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
    <div className="t-shadow-b container mx-auto mb-4 flex flex-wrap gap-2 px-2 text-lg font-thin text-white md:text-3xl">
      <div className="flex grow justify-around gap-2">
        {pages1.map((page) => (
          <Link
            key={page.link}
            href={page.link}
            className={`transition-colors ${pathname === page.link ? "font-normal text-yellow-400" : "hover:text-yellow-400"}`}
          >
            {page.name}
          </Link>
        ))}
      </div>
      <div className="flex grow justify-around gap-2">
        {pages2.map((page) => (
          <Link
            key={page.link}
            href={page.link}
            className={`transition-colors ${pathname === page.link ? "font-normal text-yellow-400" : "hover:text-yellow-400"}`}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
