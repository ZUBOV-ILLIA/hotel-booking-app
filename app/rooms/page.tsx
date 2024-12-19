import React from "react";
import RoomCard from "@/components/RoomCard";
import rooms from "@/public/rooms.json";

export default async function Rooms() {
  return (
    <div className="container mx-auto overflow-x-hidden px-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rooms.length > 0 &&
          rooms.map((room) => <RoomCard key={room.link} room={room} />)}
      </div>
    </div>
  );
}
