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
      className="relative w-full h-full object-cover overflow-hidden select-none cursor-ew-resize bg-brand-900 group"
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
        className="absolute top-0 bottom-0 w-[2px] bg-gold-400 cursor-ew-resize opacity-80"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-950 border border-gold-400 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
          <div className="w-[1px] h-3 border-l border-r border-gold-400/50 opacity-60"></div>
        </div>
      </div>

      <span className="absolute top-4 left-4 bg-brand-950/80 backdrop-blur-sm text-gold-400 text-[10px] px-3 py-1.5 font-sans tracking-[0.2em] uppercase pointer-events-none rounded-sm border border-gold-500/20">Antes</span>
      <span className="absolute top-4 right-4 bg-brand-950/80 backdrop-blur-sm text-gold-400 text-[10px] px-3 py-1.5 font-sans tracking-[0.2em] uppercase pointer-events-none rounded-sm border border-gold-500/20">Depois</span>
    </div>
  );
}
