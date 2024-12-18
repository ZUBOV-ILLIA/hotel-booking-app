import React, { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function SimpleImgSlider({
  images,
  className,
  navDots = true,
}: {
  images: string[];
  className?: string;
  navDots?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function goToSlide(index: number) {
    setCurrentIndex(index);
  }

  return (
    <>
      <div
        className={`relative w-full overflow-hidden rounded-md border ${className}`}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex w-full flex-shrink-0 items-center">
              <Image
                src={image}
                alt="room photo"
                width={800}
                height={450}
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute bottom-0 left-0 right-1/2 top-0 flex items-center justify-start bg-white bg-opacity-0 p-3 text-white outline-none active:bg-opacity-10"
        >
          <FaArrowAltCircleLeft size={30} className="" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute bottom-0 left-1/2 right-0 top-0 flex items-center justify-end bg-white bg-opacity-0 p-3 text-white outline-none active:bg-opacity-10"
        >
          <FaArrowAltCircleRight size={30} className="" />
        </button>
      </div>
      {navDots && (
        <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full outline-none ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      )}
    </>
  );
}
