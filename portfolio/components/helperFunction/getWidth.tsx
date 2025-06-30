import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);

    window.addEventListener("resize", update);

    // Set width once on mount
    update();

    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}
