import Link from "next/link";
import UserAuth from "@/components/UserAuth";

function Header() {
  return (
    <header className="container mx-auto overflow-hidden py-3">
      <nav className="px-5">
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

export default Header;
