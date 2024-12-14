import { FaBed } from "react-icons/fa";
import Link from "next/link";
import UserAuth from "@/components/UserAuth";

function Header() {
  return (
    <header className="container mx-auto border-b border-gray-400 py-2">
      <nav className="px-5">
        <ul className="flex justify-between">
          <li>
            <Link href="/" className="flex items-center gap-4 text-yellow-400">
              <FaBed size={48} className="" />
              <span className="font-lavishly text-4xl">Here is Booking</span>
            </Link>
          </li>
          <li className="flex items-center">
            <UserAuth />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
