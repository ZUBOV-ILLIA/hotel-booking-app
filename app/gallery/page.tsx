import React from "react";
import Image from "next/image";

const images = Array.from(Array(29).keys());

export default function Gallery() {
  return (
    <div className="container mx-auto overflow-x-hidden px-5">
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
          />
        ))}
      </div>
    </div>
  );
}
