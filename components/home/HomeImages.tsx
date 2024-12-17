import Image from "next/image";
import mainBg from "@/public/main-bg.webp";
import bgWaveImg2 from "@/public/bg-wave-2.svg";
import bgWaveImg3 from "@/public/bg-wave-3.svg";
import bgWaveImg4 from "@/public/bg-wave-4.svg";
import bgWaveImg5 from "@/public/bg-wave-5.svg";
import balloonImg from "@/public/balloon.webp";

export default function HomeImages() {
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
      <Image
        src={balloonImg}
        className="balloon -z-20 h-1/6 w-auto brightness-75"
        alt="img of balloon"
      />
      <Image
        src={bgWaveImg2}
        alt="background img"
        className="fixed bottom-0 left-0 -z-10 w-full opacity-60"
      />
      <Image
        src={bgWaveImg4}
        alt="background img"
        className="fixed bottom-0 left-0 -z-10 w-full opacity-40"
      />
      <Image
        src={bgWaveImg5}
        alt="background img"
        className="fixed bottom-0 left-0 -z-10 w-full opacity-70"
      />
    </>
  );
}
