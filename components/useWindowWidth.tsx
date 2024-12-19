import { useState, useEffect } from "react";

export default function useWindowWidth(): "mob" | "tablet" | "pc" | null {
  const [device, setDevice] = useState<"mob" | "tablet" | "pc" | null>(null);

  useEffect(() => {
    let timeoutId: number;

    function updateDevice() {
      const width = window.innerWidth;

      if (width >= 1280) {
        setDevice("pc");
      } else if (width >= 768) {
        setDevice("tablet");
      } else {
        setDevice("mob");
      }
    }

    function debouncedResizeHandler() {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(updateDevice, 800);
    }

    updateDevice();

    window.addEventListener("resize", debouncedResizeHandler);

    return () => {
      window.removeEventListener("resize", debouncedResizeHandler);
      clearTimeout(timeoutId);
    };
  }, []);

  return device;
}
