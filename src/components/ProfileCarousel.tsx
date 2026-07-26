"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  { src: "/profile.webp", alt: "Thanakorn Jamnongprakhon" },
  { src: "/profile2.webp", alt: "Thanakorn Jamnongprakhon" },
  { src: "/profile3.webp", alt: "Thanakorn Jamnongprakhon" },
];

const INTERVAL_MS = 4000;

export default function ProfileCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
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
