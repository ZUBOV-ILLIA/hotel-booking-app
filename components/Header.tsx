import Link from "next/link";
import UserAuth from "@/components/UserAuth";

function Header() {
  return (
    <header className="container mx-auto overflow-hidden border-b border-gray-400 py-1">
      <nav className="px-5">
        <ul className="flex justify-between">
          <li className="animate-slideInFromLeft flex items-center">
            <Link
              href="/"
              className="font-corinthia flex items-center text-2xl text-yellow-400 md:text-5xl"
            >
              Booking
            </Link>
          </li>
          <li className="animate-slideInFromRight flex items-center">
            <UserAuth />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
