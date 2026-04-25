"use client";

import { useEffect, useRef } from "react";

export default function SquareWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src =
      "https://square.site/appointments/buyer/widget/ynucw55saaqyzu/L6HJXT32GFZEE.js";
    script.async = true;
    container.appendChild(script);

    return () => {
      if (container.contains(script)) container.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ minHeight: 600, width: "100%" }}
    />
  );
}
