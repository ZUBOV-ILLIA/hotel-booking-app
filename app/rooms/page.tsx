import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  {
    name: "Superior Stone Room with Jacuzzi (View)",
    description: `Located at the terrace floor with the view and catching the eye by its structure made of indigenous stones, unique design with jacuzzi, and ceramics that are placed in the room; Heated by a floor-heating system, Superior Stone Room’s size is 25 m2. The maximum number of guests available in the Superior Stone Room is 2 persons :`,
    link: "superior-stone-room-view",
    img: "/superior-stone-room-view/1.webp",
    features: [
      "25 m2",
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
    name: "Superior Stone Room",
    description: `Located at the terrace floor and catching the eye by its structure made of indigenous stones, unique design, and ceramics that are placed in the room; Heated by a floor-heating system, Superior Stone Room’s size is 28 m2. The maximum number of guests available in the Superior Stone Room is 4 persons.`,
    link: "superior-stone-room",
    img: "/superior-stone-room/1.webp",
    features: [
      "28 m2",
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
  {
    name: "King Stone Room",
    description: `In this room, which is made of stones peculiar to the region, attracts attention with its unique design and width and overlooks our inner courtyard; Our room is heated by underfloor heating system. Our room size is 32 m2. Maximum occupancy capacity is 4 people.`,
    link: "king-stone-room",
    img: "/king-stone-room/1.webp",
    features: [
      "32 m2",
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
  {
    name: "Superior Cave Room",
    description: `Designated by the neat work of craftmanship, interior walls built of different kinds of regional stones and stonework that is meticulously-made, Superior Cave Room catches the attention by its decoration made out of pigeon lofts inside the room, interior traditional ceramics emplacements, and the Ottoman-style wooden ceiling; Heated by a floor-heating system, Superior Cave Room’s size is 25 m2. The maximum number of guests available in the Superior Cave Room is 3 persons.`,
    link: "superior-cave-room",
    img: "/superior-cave-room/1.webp",
    features: [
      "25 m2",
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
  {
    name: "Twin Stone Room",
    description: `Getting attention by its built of unique stones of the Cappadocia Region and interior room niches; Heated by a floor-heating system, Superior Stone Room’s size is 20 m2. The maximum number of guests available in the Twin Bed Stone Room are 2 persons.`,
    link: "twin-stone-room",
    img: "/twin-stone-room/1.webp",
    features: [
      "20 m2",
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
  {
    name: "Superior Cave Room – 203",
    description: `Walls that are designated by different regional stones, our stone-carved room where you can experience the reflection of light on the rock; Heated by a floor-heating system, Superior Cave Room’s size is 27 m2. The maximum number of guests available in the Superior Cave Room is 3 persons.`,
    link: "superior-cave-room-203",
    img: "/superior-cave-room-203/1.webp",
    features: [
      "27 m2",
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
  {
    name: "Superior Cave Room – 101",
    description: `Stone-carved cave room, with its unique design; Heated by a floor-heating system, Superior Cave Room’s size is 30 m2. The maximum number of guests available in the Superior Cave Room is 3 persons.`,
    link: "superior-cave-room–101",
    img: "/superior-cave-room–101/1.webp",
    features: [
      "30 m2",
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
  {
    name: "Stone Room with Balcony – 210",
    description: `Gathering the attention by the composition of special stones of the region, interior niches, colorful ceramics, and a big balcony; Heated by a floor-heating system, Stone Room With Balcony’s size is 22 m2. The maximum number of guests available in the Stone Room with Balcony is 3 persons.`,
    link: "stone-room-with-balcony–210",
    img: "/stone-room-with-balcony–210/1.webp",
    features: [
      "22 m2",
      "Access point for Internet",
      "Air Conditioning",
      "Balcony",
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
              {/*<div className="relative mb-3 h-52 w-full overflow-hidden rounded md:h-80">*/}
              <Image
                className="mb-3 h-52 w-full rounded object-cover md:h-80"
                src={room.img}
                alt="room iage"
                width={450}
                height={320}
              />
              {/*</div>*/}

              <h3 className="mb-1 text-xl font-semibold">{room.name}</h3>
              <p className="mb-2 text-gray-300">{room.description}</p>
              <Link
                href={`/rooms/${room.link}`}
                className="mt-auto inline-block self-end rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
              >
                View Room
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
