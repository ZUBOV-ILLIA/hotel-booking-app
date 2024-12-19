import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function CustomAccordion({
  children,
  title,
  className = "",
  titleClassName = "",
  outsideIsOpen,
  setOutsideIsOpen,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  titleClassName?: string;
  outsideIsOpen?: boolean;
  setOutsideIsOpen?: (value: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isControlled =
    outsideIsOpen !== undefined && setOutsideIsOpen !== undefined;
  const openState = isControlled ? outsideIsOpen : isOpen;

  function toggleAccordion() {
    if (isControlled) {
      setOutsideIsOpen?.(!outsideIsOpen);
    } else {
      setIsOpen((prev) => !prev);
    }
  }

  return (
    <div className={className}>
      <div
        onClick={toggleAccordion}
        className="relative flex cursor-pointer items-center"
      >
        <h3 className={titleClassName}>{title}</h3>
        <FaAngleDown
          size={25}
          className={`absolute right-2 top-1/2 -translate-y-1/2 transition-transform ${openState ? "rotate-180" : ""}`}
        />
      </div>
      <div className={openState ? "" : "hidden"}>{children}</div>
    </div>
  );
}
