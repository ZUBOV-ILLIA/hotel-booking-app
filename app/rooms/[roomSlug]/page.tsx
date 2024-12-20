import fs from "fs";
import path from "path";
import RoomInner from "@/app/rooms/[roomSlug]/(inner)/RoomInner";
import rooms from "@/public/rooms.json";

const PUBLIC_DIR = path.join(process.cwd(), "public");

export async function generateStaticParams() {
  const items = fs.readdirSync(PUBLIC_DIR);
  const folders = items.filter((item) => {
    const itemPath = path.join(PUBLIC_DIR, item);
    return fs.statSync(itemPath).isDirectory() && item !== "gallery";
  });

  return folders.map((folder) => ({
    roomSlug: folder,
  }));
}

export default async function Room({
  params: { roomSlug },
}: {
  params: { roomSlug: string };
}) {
  const roomPath = path.join(PUBLIC_DIR, roomSlug);
  const roomExists = fs.existsSync(roomPath);
  let images: string[] = [];

  if (roomExists) {
    try {
      const files = fs.readdirSync(roomPath);
      images = files.map((img) => `/${roomSlug}/${img}`);
    } catch (error) {
      const err = error as Error;

      console.error("Error reading the folder:", err.message);
    }
  }

  const room = (await rooms.find((room) => room.link === roomSlug)) as Room;

  if (!room) {
    return <div>Room not found</div>;
  }

  return <RoomInner images={images} room={room} />;
}
