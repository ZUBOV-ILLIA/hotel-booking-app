import Link from "next/link";
import UserAuth from "@/components/UserAuth";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden bg-opacity-60 bg-gradient-to-b from-gray-600 via-gray-600 to-transparent py-3">
      <nav className="container mx-auto px-5">
        <ul className="flex justify-between">
          <li className="flex animate-slideInFromLeft items-center">
            <Link
              href="/"
              className="-mb-2 flex items-center font-corinthia text-4xl text-yellow-400 md:text-5xl"
            >
              Cave Hotel
            </Link>
          </li>
          <li className="flex animate-slideInFromRight items-center">
            <UserAuth />
          </li>
        </ul>
      </nav>
    </header>
  );
}
