"use client";

import React, { useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import ImgSlider from "@/components/ImgSlider";
import overflowHiddenBody from "@/utility/helpers";

export default function RoomInner({ images }: { images: string[] }) {
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
    <div>
      <button onClick={() => openModal(2)}>open</button>

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
