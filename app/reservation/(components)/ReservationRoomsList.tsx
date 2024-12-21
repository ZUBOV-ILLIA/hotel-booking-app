import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import rooms from "@/public/rooms.json";
import { CustomSelect } from "@/components/CustomSelect";
import { getFromLocalStorage } from "@/utility/helpers";

export function ReservationRoomsList({
  reservList,
  addToReservList,
}: {
  reservList: Room[];
  addToReservList: (room: Room) => void;
}) {
  return (
    <div className="w-full md:w-1/2">
      <div className="rounded-xl border bg-slate-300 p-5 text-black md:mr-2">
        {rooms.map((room) => (
          <div
            key={room.name}
            className="mb-3 flex items-stretch border-b border-black pb-3"
          >
            <div className="w-3/5">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <h3 className="absolute left-0 right-0 top-0 bg-black bg-opacity-80 p-1 text-center text-xl font-thin text-white">
                  {room.name}
                </h3>
                <Image
                  className="h-40 w-full object-cover"
                  src={room.img}
                  alt="room image"
                  height={160}
                  width={450}
                />
                <Link
                  href={`/rooms/${room.link}`}
                  className="absolute bottom-0 left-0 right-0 top-0 transition-colors hover:bg-white hover:bg-opacity-10"
                />
              </div>
              <p className="line-clamp-2">{room.description}</p>
            </div>

            <div className="flex grow flex-col justify-between pl-2">
              <CustomSelect
                options={["2people", "3people"]}
                val="select"
                setVal={() => {}}
              />

              <Button
                variant={
                  reservList.some((el) => el.id === room.id)
                    ? "destructive"
                    : "destructive"
                }
                onClick={() => addToReservList(room)}
                disabled={reservList.some((el) => el.id === room.id)}
              >
                Select
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
