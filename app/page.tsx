import Image from "next/image";
import mainImage from "@/images/main-image.webp";

export default function Home() {
  return (
    <div className="relative flex grow items-center">
      <Image
        src={mainImage}
        alt="main image"
        className="mx-auto w-full max-w-screen-2xl opacity-80 brightness-50"
      />
      <h3 className="font-corinthia inthia absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-20 items-center text-3xl text-yellow-400 md:-translate-y-32 md:text-6xl xl:-translate-y-56 xl:text-8xl">
        Here is Booking
      </h3>
    </div>
  );
}
