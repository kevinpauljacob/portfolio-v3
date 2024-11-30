"use client";
import { ReactNode, useEffect, useRef } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCirclePosition = (x: number, y: number) => {
      if (circleRef.current) {
        circleRef.current.style.left = `${x - 250}px`;
        circleRef.current.style.top = `${y - 250}px`;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateCirclePosition(
        event.clientX + window.scrollX,
        event.clientY + window.scrollY
      );
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      updateCirclePosition(
        touch.clientX + window.scrollX,
        touch.clientY + window.scrollY
      );
    };

    // Add listeners for both mouse and touch events
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="bg-[#d2afff]/30 rounded-full w-[30vmax] h-[30vmax] fixed transition-all duration-150 ease-linear"
        style={{ pointerEvents: "none" }}
      ></div>
      <div className="absolute top-0 left-0 bg-[#1A1A1A]/15 backdrop-blur-[12vmax] w-full min-h-screen z-20">
        {children}
      </div>
    </>
  );
}
