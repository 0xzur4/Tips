"use client";

import { useEffect, useRef } from "react";


export default function DVDBounce() {
  const logoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current!;
    const container = containerRef.current!;

    let x = 20;
    let y = 20;

    let dx = 2; 
    let dy = 2; 

    function animate() {
      const cw = container.clientWidth;
      const ch = container.clientHeight;

      const lw = logo.clientWidth;
      const lh = logo.clientHeight;

      x += dx;
      y += dy;

      if (x + lw >= cw || x <= 0) {
        dx = -dx;
      }


      if (y + lh >= ch || y <= 0) {
        dy = -dy;
      }

      logo.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "400px",
        background: "black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={logoRef}
        style={{
          width: "120px",
          height: "60px",
          background: "white",
          color: "black",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          userSelect: "none",
        }}
      >
        DVD
      </div>
    </div>
  );
}
