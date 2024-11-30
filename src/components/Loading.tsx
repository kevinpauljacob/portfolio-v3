"use client";
import { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[#1A1A1A] flex items-center justify-center transition-transform duration-1000 ${
        isVisible ? "translate-y-0" : "-translate-y-[200%]"
      } z-50`}
    >
      <div className="bg-[#d2afff]/30 rounded-full w-[30vmax] h-[30vmax] fixed transition-all duration-150 ease-linear"></div>
      <div className="flex items-center justify-center text-center gap-4 absolute top-0 left-0 bg-[#1A1A1A]/15 backdrop-blur-[12vmax] w-full min-h-screen z-20">
        <h1 className="text-2xl font-bold">
          kevinpaul<span className="text-[#d2afff]">.</span>xyz
        </h1>
        <div className="animate-spin">
          <LoaderCircle size={25} className="text-[#d2afff]" />
        </div>
      </div>
    </div>
  );
}
