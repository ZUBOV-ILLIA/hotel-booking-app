import React from "react";
import Link from "next/link";
import Image from "next/image";
// import img1 from "@/public/king-cave-room-with-jacuzzi/1.webp";

const rooms = [
  {
    name: "King Cave Room with Jacuzzi",
    description: `Gathering attention with its original designation, stone-dressings in the interior walls, and refreshing capaciousness, King Cave Room with jacuzzi Heated by a floor-heating system, King Cave Room’s size is 38 m2. The maximum number of guests available in the King Cave Room is 3 persons`,
    link: "king-cave-room-with-jacuzzi",
    img: "/king-cave-room-with-jacuzzi/1.webp",
    features: [
      "38 m2",
      "Access point for Internet",
      "Air Conditioning",
      "Bathroom",
      "Cable TV",
      "Complimentary Water",
      "Hairdryer",
      "Internet",
      "Jacuzzi",
      "Kettle",
      "Mini Bar",
      "Shower",
      "Sitting Area",
      "Smoke Detectors",
      "Tea-Coffee Facilities",
      "Telephone",
      "Toilet",
      "Towels and Toiletries",
      "TV",
      "Underfloor Heating System",
    ],
  },
  {
    name: "King Cave Room",
    description: `With its genuine design, and it’s historical past as being used as a cellar in ancient times, our stone-carved room’s interior catches the attention by its arches and spaciousness; Heated by a floor-heating system, King Cave Room’s size is 40 m2. The maximum number of guests available in the King Cave Room is 4 persons.`,
    link: "king-cave-room",
    img: "/king-cave-room/1.webp",
    features: [
      "40 m2",
      "Access point for Internet",
      "Air Conditioning",
      "Bathroom",
      "Cable TV",
      "Complimentary Water",
      "Hairdryer",
      "Internet",
      "Kettle",
      "Mini Bar",
      "Shower",
      "Sitting Area",
      "Smoke Detectors",
      "Tea-Coffee Facilities",
      "Telephone",
      "Toilet",
      "Towels and Toiletries",
      "TV",
      "Underfloor Heating System",
    ],
  },
  // {
  //   name: "",
  //   description: ``,
  //   link: "king-cave-room-with-jacuzzi",
  //   img: "/king-cave-room-with-jacuzzi/1.webp",
  //   features: [
  //   ],
  // },
  // {
  //   name: "",
  //   description: ``,
  //   link: "king-cave-room-with-jacuzzi",
  //   img: "/king-cave-room-with-jacuzzi/1.webp",
  //   features: [
  //   ],
  // },
  // {
  //   name: "",
  //   description: ``,
  //   link: "king-cave-room-with-jacuzzi",
  //   img: "/king-cave-room-with-jacuzzi/1.webp",
  //   features: [
  //   ],
  // },
  // {
  //   name: "",
  //   description: ``,
  //   link: "king-cave-room-with-jacuzzi",
  //   img: "/king-cave-room-with-jacuzzi/1.webp",
  //   features: [
  //   ],
  // },
  // {
  //   name: "",
  //   description: ``,
  //   link: "king-cave-room-with-jacuzzi",
  //   img: "/king-cave-room-with-jacuzzi/1.webp",
  //   features: [
  //   ],
  // },
  // {
  //   name: "",
  //   description: ``,
  //   link: "king-cave-room-with-jacuzzi",
  //   img: "/king-cave-room-with-jacuzzi/1.webp",
  //   features: [
  //   ],
  // },
  // {
  //   name: "",
  //   description: ``,
  //   link: "king-cave-room-with-jacuzzi",
  //   img: "/king-cave-room-with-jacuzzi/1.webp",
  //   features: [
  //   ],
  // },
  // {
  //   name: "",
  //   description: ``,
  //   link: "king-cave-room-with-jacuzzi",
  //   img: "/king-cave-room-with-jacuzzi/1.webp",
  //   features: [
  //   ],
  // },
];

export default function Rooms() {
  return (
    <div className="container mx-auto overflow-x-hidden px-5">
      <h2 className="mb-6 animate-slideInFromTop text-4xl font-thin">Rooms</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rooms.length > 0 &&
          rooms.map((room) => (
            <div
              className="flex flex-col rounded-lg border bg-gray-600 bg-opacity-50 p-4 backdrop-blur-xl"
              key={room.link}
            >
              <Image
                src={room.img}
                alt="room iage"
                className="mb-3 h-52 w-full rounded object-cover md:h-80"
                width="100"
                height="100"
              />

              <h3 className="mb-1 text-xl font-semibold">{room.name}</h3>
              <p className="text-gray-300">{room.description}</p>
              <Link
                href={`/rooms/${room.link}`}
                className="mt-4 inline-block self-end rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
              >
                View Room
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
