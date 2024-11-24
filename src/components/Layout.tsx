"use client";
import { ReactNode, useEffect, useRef } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (circleRef.current) {
        circleRef.current.style.left = `${event.clientX - 250}px`;
        circleRef.current.style.top = `${event.clientY - 250}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
