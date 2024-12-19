import rooms from "@/public/rooms.json";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default async function Reservation() {
  return (
    <div className="container mx-auto px-2">
      <h2 className="slideInFromTop mb-6 animate-slideInFromTop text-4xl font-thin">
        Reservation
      </h2>

      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 rounded-xl border bg-slate-300 p-5 text-black md:col-span-1">
          {rooms.map((room) => (
            <div key={room.name} className="mb-3 border-b border-black pb-3">
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
                  href={room.link}
                  className="absolute bottom-0 left-0 right-0 top-0 transition-colors hover:bg-white hover:bg-opacity-10"
                />
              </div>
              <p className="line-clamp-2">{room.description}</p>
            </div>
          ))}
        </div>

        <div className="col-span-2 rounded-xl border bg-slate-300 p-5 text-black md:col-span-1">
          <div className="overflow-hidden rounded-xl border border-black bg-white">
            {/* <h3 className="bg-black bg-opacity-80 p-1 text-center text-lg font-thin text-white">
              RESERVATION SUMMARY
            </h3> */}

            <Accordion
              type="single"
              collapsible
              className="w-full outline-none"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="custom-accordion bg-black bg-opacity-80 p-1 text-lg font-thin text-white hover:no-underline">
                  <h3 className="w-full text-center">RESERVATION SUMMARY</h3>
                </AccordionTrigger>
                <AccordionContent className="p-5">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    deleniti nesciunt repellat, quis explicabo sequi nisi
                    praesentium corrupti consectetur dolorem fugit aliquid, in
                    quam amet tenetur? Eius voluptatum veniam illo.
                  </p>

                  <div className="flex flex-col items-center">
                    <p className="text-center">
                      Total: <b>$ 130.50</b>
                    </p>
                    <div className="my-1 h-0.5 w-full border-b border-t" />
                    <p className="mb-4 text-center text-xs">
                      *All taxes and service fees included in the total price
                    </p>

                    <Button size="sm">Continue to Pay</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
