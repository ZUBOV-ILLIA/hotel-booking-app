"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaTimesCircle } from "react-icons/fa";
import Image from "next/image";
import { overflowHiddenBody } from "@/utility/helpers";
import { useEffect } from "react";

export default function ImgSlider({
  setIsModalOpen,
  setApi,
  setCurrent,
  api,
  current,
  images,
  isModalOpen,
}: {
  setIsModalOpen: (val: boolean) => void;
  setApi: (api: CarouselApi) => void;
  setCurrent: (val: number) => void;
  api: CarouselApi;
  current: number;
  images: string[];
  isModalOpen: boolean;
}) {
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, setCurrent]);

  const closeModal = (): void => {
    setIsModalOpen(false);
    overflowHiddenBody(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 items-center justify-center bg-black text-white ${isModalOpen ? "flex" : "hidden"}`}
      onKeyDown={handleKeyDown}
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
  );
}
