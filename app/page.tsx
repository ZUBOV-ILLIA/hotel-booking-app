import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed left-0 top-1/2 flex w-full -translate-y-1/2 flex-col items-center justify-center gap-7">
        <h3 className="t-shadow animate-slideInFromTop text-center font-corinthia text-5xl text-yellow-400 md:text-6xl xl:text-8xl">
          Welcome to Cappadocia
        </h3>
      </div>
      <div className="fixed bottom-[15%] left-0 flex w-full justify-center">
        <Link
          href="/rooms"
          className="w-max animate-slideInFromBottom rounded border border-white p-4 text-xl text-white backdrop-blur-sm transition-shadow hover:shadow-2xl md:text-4xl"
        >
          Make Reservation
        </Link>
      </div>
    </>
  );
}
