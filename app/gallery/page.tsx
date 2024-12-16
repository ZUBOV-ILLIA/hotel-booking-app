"use client";

import React, {useEffect, useRef, useState} from "react";
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

const images = Array.from(Array(29).keys());

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const openModal = (index: number): void => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      api?.scrollTo(index, true);
    })
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
      tabIndex={0} // Makes the div focusable to handle key events
    >
      <h2 className="mb-6 animate-slideInFromTop text-4xl font-thin">
        Gallery
      </h2>

      <div className="grid grid-cols-2 gap-2 rounded bg-gray-600 bg-opacity-95 p-3 md:grid-cols-3 xl:grid-cols-4">
        {images.map((_, i) => (
          <Image
            key={i}
            src={`/gallery/${i}.webp`}
            className="h-auto w-full rounded object-contain"
            alt="image"
            width={270}
            height={180}
            onClick={() => openModal(i)}
          />
        ))}
      </div>

      <div
        className={`fixed inset-0 z-50 items-center justify-center bg-black text-white ${isModalOpen ? "flex" : "hidden"}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <span className="t-shadow-b absolute left-4 top-4 z-50 font-corinthia text-4xl underline-offset-4">
          <span className="mr-3">Slide </span>{current} | {images.length}
        </span>

        <button
          onClick={closeModal}
          className="t-shadow-b absolute right-0 top-0 z-50 p-4 text-2xl"
          aria-label="Close modal"
        >
          <FaTimesCircle size={30} className="border border-black bg-black rounded-full" />
        </button>

        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent >
            {images.map((_, i) => (
                <CarouselItem key={i} >
                  <Image
                      key={i}
                      src={`/gallery/${i}.webp`}
                      className="max-h-full w-full rounded object-contain"
                      alt="image"
                      width={450}
                      height={280}
                  />
                </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="fixed left-0 top-1/2 z-30 h-full w-1/2 rounded-none flex items-center justify-start p-4 bg-transparent border-none hover:bg-transparent shadow-none outline-none focus-visible:ring-opacity-0" />
          <CarouselNext className="fixed right-0 top-1/2 z-30 h-full  w-1/2 rounded-none flex items-center justify-end p-4 bg-transparent border-none hover:bg-transparent shadow-none outline-none focus-visible:ring-opacity-0" />
        </Carousel>
      </div>
    </div>
  );
}
