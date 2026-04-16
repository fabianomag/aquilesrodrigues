"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface SliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalPointerUp = () => setIsDragging(false);
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    window.addEventListener("pointerup", handleGlobalPointerUp);
    window.addEventListener("pointermove", handleGlobalPointerMove);
    return () => {
      window.removeEventListener("pointerup", handleGlobalPointerUp);
      window.removeEventListener("pointermove", handleGlobalPointerMove);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative h-full w-full cursor-ew-resize overflow-hidden bg-[#d9c1a7] object-cover select-none group"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="absolute inset-0">
        <Image src={afterImage} alt="Depois" fill className="object-cover" />
      </div>

      <div 
        className="absolute inset-0 right-0 overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={beforeImage} alt="Antes" fill className="object-cover" />
      </div>

      <div 
        className="absolute bottom-0 top-0 w-[2px] cursor-ew-resize bg-[#17110e] opacity-70"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#17110e]/30 bg-[#fbf4ec] shadow-sm transition-transform duration-200 group-hover:scale-110">
          <div className="h-3 w-[1px] border-l border-r border-[#17110e]/40 opacity-60"></div>
        </div>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 border border-black/10 bg-[#fbf4ec]/92 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-[#17110e]">
        Antes
      </span>
      <span className="pointer-events-none absolute right-4 top-4 border border-black/10 bg-[#fbf4ec]/92 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-[#17110e]">
        Depois
      </span>
    </div>
  );
}
