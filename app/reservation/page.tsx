"use client";

import rooms from "@/public/rooms.json";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useWindowWidth from "@/components/useWindowWidth";
import CustomAccordion from "@/components/CustomAccordion";

export default function Reservation() {
  const width = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container mx-auto px-2">
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
                    href={`/rooms/${room.link}`}
                    className="absolute bottom-0 left-0 right-0 top-0 transition-colors hover:bg-white hover:bg-opacity-10"
                  />
                </div>
                <p className="line-clamp-2">{room.description}</p>
              </div>
            ))}
          </div>
        </div>

        <CustomAccordion
          title="RESERVATION SUMMARY"
          className="sticky top-2 z-50 h-min w-full md:top-14 md:w-1/2"
          titleClassName={`w-full rounded-t-xl ${isOpen ? "" : "mb-2 rounded-b-xl"} bg-black p-2 text-center text-lg font-thin text-white hover:no-underline md:mb-0`}
          outsideIsOpen={isOpen}
          setOutsideIsOpen={setIsOpen}
        >
          <div className="rounded-b-xl border border-black bg-white py-5">
            <div className="mb-2 max-h-[calc(100vh-150px)] overflow-y-scroll p-5 text-black md:mb-0">
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>

              <div className="flex flex-col items-center">
                <div className="mb-1 h-1 w-full border-b border-t" />
                <p className="text-center">
                  Total: <b>$ 130.50</b>
                </p>
                <div className="my-1 h-1 w-1/3 border-b border-t" />
                <p className="mb-3 text-center text-xs opacity-40">
                  *All taxes and service fees included in the total price
                </p>

                <Button size="sm">Continue to Pay</Button>
              </div>
            </div>
          </div>
        </CustomAccordion>
      </div>
    </div>
  );
}
