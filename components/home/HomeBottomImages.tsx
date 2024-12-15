import Image from "next/image";
import bgWaveImg2 from "@/public/bg-wave-2.svg";
import bgWaveImg4 from "@/public/bg-wave-4.svg";
import bgWaveImg5 from "@/public/bg-wave-5.svg";

export default function HomeBottomImages() {
  return (
    <>
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
