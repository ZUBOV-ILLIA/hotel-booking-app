import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div
      className="flex flex-col rounded-xl border bg-gray-600 p-4"
      key={room.link}
    >
      <Image
        className="mb-3 h-52 w-full rounded object-cover md:h-80"
        src={room.img}
        alt="room image"
        width={450}
        height={320}
      />

      <h3 className="mb-1 text-xl font-semibold">{room.name}</h3>
      <p className="mb-3 text-gray-300">{room.description}</p>
      <Link
        href={`/rooms/${room.link}`}
        className="mt-auto inline-block self-end rounded border px-4 py-2 text-white hover:bg-gray-500"
      >
        View Room
      </Link>
    </div>
  );
}
