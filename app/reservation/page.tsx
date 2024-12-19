"use client";

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
import overflowHiddenBody from "@/utility/helpers";
import { useState } from "react";

export default function Reservation() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container mx-auto px-2">
      <h2 className="slideInFromTop mb-6 animate-slideInFromTop text-4xl font-thin">
        Reservation
      </h2>

      <div className="flex flex-wrap-reverse md:flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="rounded-xl border bg-slate-300 p-5 text-black md:mr-2">
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
        </div>

        <div className="sticky top-10 mb-2 h-min w-full md:top-16 md:w-1/2">
          <Accordion
            type="single"
            collapsible
            className="w-full overflow-hidden rounded-xl border bg-white outline-none"
            defaultValue="item-1"
            onClick={() => {
              setIsOpen((prev) => !prev);
              overflowHiddenBody(!isOpen);
            }}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="custom-accordion bg-black bg-opacity-80 p-1 text-lg font-thin text-white hover:no-underline">
                <h3 className="w-full text-center">RESERVATION SUMMARY</h3>
              </AccordionTrigger>
              <AccordionContent className="max-h-[calc(100vh-90px)] overflow-y-scroll p-5 text-black md:max-h-[calc(100vh-300px)]">
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>

                <div className="flex flex-col items-center pt-4">
                  <p className="text-center">
                    Total: <b>$ 130.50</b>
                  </p>
                  <div className="my-1 h-0.5 w-1/3 border-b border-t" />
                  <p className="mb-4 text-center text-xs opacity-40">
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
  );
}
