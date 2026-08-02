"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type ActivityImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  position?: string;
};

const INTERVAL_MS = 4000;

export default function ActivityCarousel({
  images,
}: {
  images: ActivityImage[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <>
      {images.map((image, imageIndex) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 38vw, 90vw"
          style={{ objectPosition: image.position }}
          className={`transition-opacity duration-1000 ease-in-out ${
            image.fit === "contain" ? "object-contain" : "object-cover"
          } ${imageIndex === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute right-0 bottom-4 left-0 z-10 flex justify-center gap-2">
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(imageIndex)}
              aria-label={`Show image ${imageIndex + 1} of ${images.length}`}
              aria-current={imageIndex === index ? "true" : undefined}
              className={`h-1 rounded-full shadow-sm transition-all duration-300 ${
                imageIndex === index
                  ? "w-8 bg-white"
                  : "w-3 bg-white/35 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}
