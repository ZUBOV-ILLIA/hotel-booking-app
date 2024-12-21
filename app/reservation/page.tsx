"use client";

import { use, useState } from "react";

import useWindowWidth from "@/components/useWindowWidth";
import { ReservationBookList } from "./(components)/ReservationBookList";
import { ReservationRoomsList } from "./(components)/ReservationRoomsList";

export default function Reservation() {
  const width = useWindowWidth();
  const [reservList, setReservList] = useState<[] | Room[]>([]);
  const [step, setStep] = useState(1);

  function addToReservList(room: Room) {
    if (!reservList.some((el) => el.id === room.id)) {
      setReservList([...reservList, room]);
    }
  }

  function removeFromReservList(roomId: number) {
    setReservList(reservList.filter((room) => room.id !== roomId));
  }

  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-wrap-reverse md:flex-wrap">
        {step === 1 && (
          <ReservationRoomsList
            reservList={reservList}
            addToReservList={addToReservList}
          />
        )}

        {step === 2 && (
          <div className="w-full md:w-1/2">
            <h2>step 2</h2>
          </div>
        )}

        <ReservationBookList
          reservList={reservList}
          removeFromReservList={removeFromReservList}
          setStep={setStep}
        />
      </div>
    </div>
  );
}
