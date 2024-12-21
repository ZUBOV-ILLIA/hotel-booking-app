import CustomAccordion from "@/components/CustomAccordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

export function ReservationBookList({
  reservList,
  removeFromReservList,
  setStep,
}: {
  reservList: Room[];
  removeFromReservList: (roomId: number) => void;
  setStep: (step: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const totalPrice = reservList.reduce((acc, room) => acc + +room.price, 0);

  function handleRemoveFromReservList(
    e: React.MouseEvent<SVGElement, MouseEvent>,
    roomId: number
  ) {
    const parent = e.currentTarget.parentElement;

    if (parent) {
      parent.classList.remove("animate-slideInFromLeft");
      parent.classList.add("animate-removeFromRight");
      setTimeout(() => {
        removeFromReservList(roomId);
      }, 250);
    }
  }

  return (
    <CustomAccordion
      title="RESERVATION SUMMARY"
      className="sticky top-2 z-50 h-min w-full md:top-14 md:w-1/2"
      titleClassName={`w-full rounded-t-xl ${isOpen ? "" : "mb-2 rounded-b-xl"} bg-black p-2 text-center text-lg font-thin text-white hover:no-underline md:mb-0`}
      outsideIsOpen={isOpen}
      setOutsideIsOpen={setIsOpen}
    >
      <div className="mb-2 rounded-b-xl border border-black bg-white py-5">
        <div className="mb-2 max-h-[calc(100vh-150px)] overflow-y-scroll p-5 text-black md:mb-0">
          <ul>
            {reservList.map((room) => (
              <li
                key={room.id}
                className="relative mb-4 animate-slideInFromLeft rounded border border-black bg-slate-100 p-2"
              >
                <FaRegTimesCircle
                  size={24}
                  className="absolute -right-2 -top-2 cursor-pointer rounded-full bg-white text-red-500"
                  onClick={(e) => handleRemoveFromReservList(e, room.id)}
                />
                <h4>{room.name}</h4>
                <p className="text-end text-sm font-bold">{room.price} EUR</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center">
            <div className="mb-1 h-1 w-full border-b border-t" />
            <p className="text-center">
              Total: <b>$ {totalPrice}</b>
            </p>
            <div className="my-1 h-1 w-1/3 border-b border-t" />
            <p className="mb-3 text-center text-xs opacity-40">
              *All taxes and service fees included in the total price
            </p>

            <Button size="sm" onClick={() => setStep(2)}>
              Continue to Pay
            </Button>
          </div>
        </div>
      </div>
    </CustomAccordion>
  );
}
