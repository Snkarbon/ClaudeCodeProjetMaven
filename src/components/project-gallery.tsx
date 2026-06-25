"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/* Shared fullscreen lightbox. index === -1 means closed. */
function Lightbox({
  images,
  captions,
  index,
  setIndex,
}: {
  images: string[];
  captions: string[];
  index: number;
  setIndex: (updater: number | ((i: number) => number)) => void;
}) {
  const open = index >= 0;
  const multiple = images.length > 1;

  const go = useCallback(
    (dir: "prev" | "next") => {
      setIndex((i) => {
        const n = images.length;
        if (dir === "prev") return i > 0 ? i - 1 : n - 1;
        return i < n - 1 ? i + 1 : 0;
      });
    },
    [images.length, setIndex],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(-1);
      else if (e.key === "ArrowLeft" && multiple) go("prev");
      else if (e.key === "ArrowRight" && multiple) go("next");
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, multiple, go, setIndex]);

  if (!open) return null;
  const caption = captions[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
      onClick={() => setIndex(-1)}
    >
      <button
        aria-label="Close"
        className="absolute right-5 top-5 text-paper/70 transition-colors hover:text-paper"
        onClick={() => setIndex(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <figure
        className="flex max-h-[90vh] max-w-[92vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index]}
          alt={caption ?? ""}
          className="h-auto max-h-[80vh] w-auto max-w-full object-contain"
        />
        {caption && (
          <figcaption className="mt-5 max-w-2xl text-center text-sm text-paper/70">
            {caption}
          </figcaption>
        )}
      </figure>

      {multiple && (
        <>
          <button
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-paper/70 transition-colors hover:text-paper"
            onClick={(e) => {
              e.stopPropagation();
              go("prev");
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-paper/70 transition-colors hover:text-paper"
            onClick={(e) => {
              e.stopPropagation();
              go("next");
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export function HeroFigure({ src, alt }: { src: string; alt: string }) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <button
        className="mt-12 block w-full cursor-zoom-in overflow-hidden rounded-sm bg-card transition-opacity hover:opacity-95"
        onClick={() => setIndex(0)}
        aria-label="Open image"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-auto w-full object-cover" />
      </button>
      <Lightbox images={[src]} captions={[""]} index={index} setIndex={setIndex} />
    </>
  );
}

export function Gallery({
  images,
  captions,
}: {
  images: string[];
  captions: string[];
}) {
  const [index, setIndex] = useState(-1);
  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-sm border border-line bg-card"
            aria-label={captions[i] ?? `Image ${i + 1}`}
          >
            <Image
              src={src}
              alt={captions[i] ?? ""}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>
      <Lightbox images={images} captions={captions} index={index} setIndex={setIndex} />
    </>
  );
}
