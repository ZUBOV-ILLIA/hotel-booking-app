import { useState } from "react";

export function CustomSelect({
  options,
  val,
  setVal,
}: {
  options: string[];
  val: string;
  setVal: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <div
          className="flex cursor-pointer items-center justify-between rounded border border-black bg-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{val}</span>
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>

        <div
          className={`absolute z-10 mt-1 w-full rounded border border-black bg-white ${
            isOpen ? "" : "hidden"
          }`}
        >
          {options.map((el, i) => (
            <div
              key={i}
              className="cursor-pointer p-2 hover:bg-gray-100"
              onClick={() => {
                setVal(el);
                setIsOpen(false);
              }}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
