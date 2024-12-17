"use client";

import React, { useState } from "react";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import ImgSlider from "@/components/ImgSlider";
import overflowHiddenBody from "@/utility/helpers";

const images = Array.from({ length: 29 }, (_, i) => `/gallery/${i}.webp`);

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const openModal = (index: number): void => {
    setIsModalOpen(true);
    overflowHiddenBody(true);

    setTimeout(() => {
      api?.scrollTo(index, true);
    });
  };

  return (
    <div className="container mx-auto overflow-x-hidden px-5 outline-none">
      <h2 className="slideInFromTop mb-6 animate-slideInFromTop text-4xl font-thin">
        Gallery
      </h2>

      <div className="grid grid-cols-2 gap-2 rounded bg-gray-600 bg-opacity-95 p-3 md:grid-cols-3 xl:grid-cols-4">
        {images.map((el, i) => (
          <Image
            key={i}
            src={el}
            className="h-auto w-full rounded object-contain"
            alt="image"
            width={270}
            height={180}
            onClick={() => openModal(i)}
          />
        ))}
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
