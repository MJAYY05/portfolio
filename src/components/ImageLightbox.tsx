"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TRANSITION_MS = 300;

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  children,
  triggerClassName,
  triggerLabel,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  children: React.ReactNode;
  triggerClassName?: string;
  triggerLabel?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);

  const open = () => setMounted(true);

  const close = () => {
    setEntered(false);
    window.setTimeout(() => setMounted(false), TRANSITION_MS);
  };

  useEffect(() => {
    if (!mounted) return;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(raf2);
    });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf1);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mounted]);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={triggerLabel ?? `Zoom in on ${alt}`}
        className={triggerClassName}
      >
        {children}
      </button>

      {mounted && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className={`fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            entered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className={`absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 ease-out hover:bg-white/10 ${
              entered ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={(e) => e.stopPropagation()}
            className={`h-auto max-h-[90vh] w-auto max-w-[92vw] rounded-2xl object-contain shadow-2xl transition-all duration-300 ease-out ${
              entered
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 scale-95 opacity-0"
            }`}
          />
        </div>
      )}
    </>
  );
}
