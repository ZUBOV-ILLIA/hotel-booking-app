import Link from "next/link";
// import UserAuth from "@/components/UserAuth";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 overflow-hidden bg-opacity-60 py-3">
      <div className="absolute bottom-1/3 left-0 right-0 top-0 bg-gray-600" />
      <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-opacity-70 bg-gradient-to-b from-gray-600 to-transparent" />

      <nav className="container relative mx-auto px-5">
        <ul className="flex justify-between">
          <li className="flex animate-slideInFromLeft items-center">
            <Link
              href="/"
              className="-mb-2 flex items-center font-corinthia text-4xl text-yellow-400 md:text-5xl"
            >
              Sky Haven
            </Link>
          </li>
          <li className="animate-slideInFromRight">
            <Link
              href="/profile"
              className="text-md t-shadow flex h-full items-center px-2 font-thin text-white transition-colors hover:text-yellow-400 md:text-xl"
            >
              My Bookings
            </Link>
            {/* <UserAuth /> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
