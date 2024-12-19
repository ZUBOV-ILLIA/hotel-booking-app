import Image from "next/image";
import { FaFeatherAlt } from "react-icons/fa";
import turkishNight from "@/public/turkish-night.webp";
import balloonTours from "@/public/from-balloon.webp";
import dailyTours from "@/public/walks.webp";
import safari from "@/public/safari.webp";
import quadro from "@/public/quadro.webp";
import horse from "@/public/horses.webp";
import { Fragment } from "react";

const activities = [
  {
    name: "Turkish Night",
    description:
      "The Turkish Night Show highlights the dance traditions of various regions of Turkey, complete with traditional costumes and of course, exhilarating belly dancers. This lively performance is a great way to enjoy traditional Turkish music, dancing and join in the festivities during audience participation.",
    image: turkishNight,
  },
  {
    name: "BALLOON TOURS",
    description:
      "Cappadocia is known around the world as one of the best places to fly with hot air balloons. The spectacular surrealistic landscapes combined with excellent flying conditions allow the balloons to gently drift over and between fairy chimneys, pigeon houses hewn into the unique rock formations, orchards and vineyards – through impressive valleys, each with distinctive rock formations, colors and features – and then float up over rippled ravines for breathtaking views over the region.",
    image: balloonTours,
  },
  {
    name: "DAILY TOURS",
    description:
      "We offer 3 daily group tours offering the best of the best in Cappadocia. The new tours, reorganized to suit our guest’s preferences and interests are the Cappadocia Tour 1, Cappadocia Tour 2 and Cappadocia Tour 3. Please contact us for more details.",
    image: dailyTours,
  },
  {
    name: "ATV (QUAD BIKE) TOURS",
    description:
      "Explore the off-the-beaten-paths around Goreme on a sturdy ATV (quad) bike. Our half or full-day escorted tours provide an exciting adventure over and through the beautiful hills, valleys, dunes and trails of the extraordinary Cappadocia landscape.",
    image: quadro,
  },
  {
    name: "HORSE RIDING",
    description:
      "Cappadocia, known as the “Land of Beautiful Horses” is the ideal place to explore on horseback. Horses have held a distinctive place in Cappadocia history for thousands of years and the unique landscapes around Goreme are perfect for exploring on a native Anatolian or Arabic horse – with a real Turkish cowboy!",
    image: horse,
  },
  {
    name: "JEEP SAFARI",
    description:
      "One of the most exciting adventures in Cappadocia is exploring the region in an off-road vehicle. Our Jeep Safari tour offers you the best of the best: open-top jeep vehicles for unobstructed views of the valleys, churches and other cultural highlights. We take you to the hard-to-find places and away from the crowds for spectacular views and the excitement of traveling off-road in the unique landscapes of Cappadocia – all in one day.",
    image: safari,
  },
];

export default function Activities() {
  return (
    <div className="container mx-auto flex flex-col overflow-hidden px-2">
      <div className="flex flex-col overflow-hidden rounded-xl border bg-gray-600 bg-opacity-95 p-4">
        {activities.map((el) => (
          <Fragment key={el.name}>
            <h4 className="my-2 animate-slideInFromLeft pb-2 text-center text-2xl font-thin text-yellow-400">
              {el.name}
            </h4>
            <div>
              <Image
                src={el.image}
                alt="description img"
                className="mb-3 w-full rounded-xl border"
              />

              <p>{el.description}</p>

              <div className="my-6 flex items-center justify-center gap-4 md:gap-12">
                <div className="h-2 w-2 rounded-full bg-white" />
                <FaFeatherAlt size={30} />
                <div className="h-2 w-2 rounded-full bg-white" />
                <FaFeatherAlt size={30} />
                <div className="h-2 w-2 rounded-full bg-white" />
                <FaFeatherAlt size={30} />
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
