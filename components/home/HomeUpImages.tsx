import Image from "next/image";
import bgWaveImg3 from "@/public/bg-wave-3.svg";
import bgWaveImg5 from "@/public/bg-wave-5.svg";
import mainBg from "@/public/main-bg.webp";

export default function HomeUpImages() {
  return (
    <>
      <Image
        src={bgWaveImg3}
        alt="background img"
        className="fixed left-0 top-0 -z-10 w-full opacity-40"
      />
      <Image
        src={bgWaveImg5}
        alt="background img"
        className="fixed left-0 top-0 -z-10 w-full rotate-180 opacity-50"
      />
      <Image
        src={mainBg}
        alt="main image"
        className="fixed -z-20 h-full w-full object-cover opacity-70"
        placeholder="blur"
      />
    </>
  );
}
