"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [landscape, setLandscape] = useState<Record<number, boolean>>({});
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; scrollLeft: number; dragging: boolean } | null>(null);

  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const checkOrientation = useCallback(() => {
    imgRefs.current.forEach((img, i) => {
      if (img && img.naturalWidth > img.naturalHeight) {
        setLandscape(prev => prev[i] ? prev : { ...prev, [i]: true });
      }
    });
  }, []);

  useEffect(() => {
    checkOrientation();
  }, [checkOrientation]);

  const handleImageLoad = useCallback(() => {
    checkOrientation();
  }, [checkOrientation]);

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
    <div className="absolute inset-0">
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
            ref={el => { imgRefs.current[i] = el; }}
            src={src}
            alt={`${alt} ${i + 1}`}
            draggable={false}
            onLoad={handleImageLoad}
            className={`h-full w-full flex-shrink-0 snap-start select-none ${
              landscape[i] ? "object-contain bg-muted" : "object-cover"
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                i === index ? "bg-background" : "bg-background/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
