"use client";

import React, { useState } from "react";
import { MdFullscreen } from "react-icons/md";
import { type CarouselApi } from "@/components/ui/carousel";
import ImgSlider from "@/components/ImgSlider";
import overflowHiddenBody from "@/utility/helpers";
import SimpleImgSlider from "@/components/SimpleImgSlider";

export default function RoomInner({
  images,
  room,
}: {
  images: string[];
  room: Room;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const openModal = (index: number = 0): void => {
    setIsModalOpen(true);
    overflowHiddenBody(true);

    setTimeout(() => {
      api?.scrollTo(index, true);
    });
  };

  return (
    <div className="container mx-auto overflow-x-hidden px-2">
      <h2 className="mb-6 animate-slideInFromTop text-4xl font-thin">
        {room.name}
      </h2>

      <div className="grid grid-cols-1 pb-6 md:grid-cols-3">
        <div className="relative col-span-2 row-span-1 mb-14">
          <SimpleImgSlider images={images} />

          <button
            className="absolute bottom-1 right-1 rounded-full p-3 active:bg-white active:bg-opacity-10"
            onClick={() => openModal()}
          >
            <MdFullscreen size={30} />
          </button>
        </div>

        <div className="row-span-2 grid-cols-1 rounded-xl border bg-gray-600 bg-opacity-95 p-4 font-thin md:ml-2">
          <h4 className="mb-4 pl-5 text-xl font-bold text-yellow-400">
            Description:
          </h4>
          <p className="mb-3">{room.description}</p>
          {room.description2 && <p className="mb-3">{room.description2}</p>}

          <h4 className="mb-4 pl-5 text-xl font-bold text-yellow-400">
            Room Features:
          </h4>
          <ul className="pl-5">
            {room.features.map((feature, i) => (
              <li key={i} className="mb-1 list-disc">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ImgSlider
        setIsModalOpen={setIsModalOpen}
        setApi={setApi}
        setCurrent={setCurrent}
        api={api}
        current={current}
        images={images}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}
