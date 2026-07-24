"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  { src: "/activity/itexpoday1.jpg", alt: "IT Expo Day" },
  { src: "/activity/itexpoday2.jpg", alt: "IT Expo Day" },
  { src: "/activity/itexpoday3.png", alt: "IT Expo Day" },
];

const INTERVAL_MS = 4000;

export default function ActivityCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (IMAGES.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {IMAGES.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 16rem"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
