"use client";

import { useRef, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; scrollLeft: number; dragging: boolean } | null>(null);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    setIndex(i);
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { startX: e.clientX, scrollLeft: track.scrollLeft, dragging: true };
    track.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !drag.current?.dragging) return;
    track.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  }

  function endDrag() {
    if (drag.current) drag.current.dragging = false;
  }

  return (
    <div className="absolute inset-0 bg-muted">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            draggable={false}
            className="h-full w-full object-cover object-top flex-shrink-0 snap-start select-none"
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                i === index ? "bg-foreground/60" : "bg-foreground/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
