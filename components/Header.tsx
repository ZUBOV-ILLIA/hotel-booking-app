import { FaBed } from "react-icons/fa";
import Link from "next/link";
import UserAuth from "@/components/UserAuth";

function Header() {
  return (
    <header className="container mx-auto py-2">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link
              href="/"
              className="font- flex items-center gap-4 text-yellow-400"
            >
              <FaBed size={48} className="" />
              Here is Booking
            </Link>
          </li>
          <li className="flex">
            <UserAuth />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
