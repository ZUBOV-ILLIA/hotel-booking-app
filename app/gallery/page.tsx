"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimesCircle } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const images = Array.from({ length: 29 }, (_, i) => `/gallery/${i}.webp`);

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const openModal = (index: number): void => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      api?.scrollTo(index, true);
    });
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div
      className="container mx-auto overflow-x-hidden px-5 outline-none"
      onKeyDown={handleKeyDown}
    >
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

      {/* modal photo slider */}
      <div
        className={`fixed inset-0 z-50 items-center justify-center bg-black text-white ${isModalOpen ? "flex" : "hidden"}`}
      >
        <span className="t-shadow-b absolute left-4 top-4 z-50 font-corinthia text-4xl underline-offset-4">
          <span className="mr-3">Photo </span>
          {current} | {images.length}
        </span>

        <button
          onClick={closeModal}
          className="t-shadow-b absolute right-0 top-0 z-50 p-4 text-2xl"
        >
          <FaTimesCircle
            size={30}
            className="rounded-full border border-black bg-black"
          />
        </button>

        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {images.map((el, i) => (
              <CarouselItem key={i}>
                <Image
                  key={i}
                  src={el}
                  className="max-h-full w-full rounded object-contain"
                  alt="image"
                  width={500}
                  height={300}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="fixed left-0 top-1/2 z-30 flex h-full w-1/2 items-center justify-start rounded-none border-none bg-transparent p-4 shadow-none outline-none hover:bg-transparent focus-visible:ring-opacity-0" />
          <CarouselNext className="fixed right-0 top-1/2 z-30 flex h-full w-1/2 items-center justify-end rounded-none border-none bg-transparent p-4 shadow-none outline-none hover:bg-transparent focus-visible:ring-opacity-0" />
        </Carousel>
      </div>
    </div>
  );
}
