"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = Array.from(Array(29).keys());

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number): void => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setCurrentIndex(null);
    document.body.style.overflow = "auto";
  };

  const showPreviousImage = (): void => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  const showNextImage = (): void => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "a") {
      showPreviousImage();
    } else if (
      e.key === "ArrowRight" ||
      e.key === "ArrowDown" ||
      e.key === "d"
    ) {
      showNextImage();
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
            width={450}
            height={280}
            onClick={() => openModal(i)}
          />
        ))}
      </div>

      {/*{isModalOpen && currentIndex !== null && (*/}
      <div
        className={`fixed inset-0 z-50 items-center justify-center bg-black text-white ${isModalOpen ? "flex" : "hidden"}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <span className="t-shadow-b absolute left-8 top-10 z-50 font-corinthia text-4xl underline-offset-4">
          <span className="mr-2">Photo</span> {Number(currentIndex) + 1}
        </span>

        <button
          onClick={closeModal}
          className="t-shadow-b absolute right-4 top-4 z-50 p-4 text-2xl"
          aria-label="Close modal"
        >
          ✖
        </button>

        <div className="relative">
          <Image
            src={`/gallery/${currentIndex}.webp`}
            className="rounded object-contain"
            alt={`Zoomed image ${currentIndex}`}
            width={1200}
            height={800}
          />

          <button
            onClick={showPreviousImage}
            className="absolute left-0 top-1/2 z-50 flex h-full w-1/2 -translate-y-1/2 transform items-center p-3 text-2xl outline-none"
            aria-label="Previous image"
          >
            ◀
          </button>

          <button
            onClick={showNextImage}
            className="absolute right-0 top-1/2 z-50 flex h-full w-1/2 -translate-y-1/2 transform flex-row-reverse items-center p-3 text-2xl outline-none"
            aria-label="Next image"
          >
            ▶
          </button>
        </div>
      </div>
      {/*)}*/}
    </div>
  );
}
