import Link from "next/link";

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
    link: "/contacts",
  },
];

export default function MainLinks() {
  return (
    <div className="t-shadow container mx-auto mb-2 flex flex-wrap justify-center gap-x-8 gap-y-3 px-2 font-corinthia text-4xl text-white">
      {pages.map((page) => (
        <Link
          key={page.link}
          href={page.link}
          className="transition-colors hover:text-yellow-400"
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
}
