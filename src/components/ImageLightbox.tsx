"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
  const closeTimerRef = useRef<number | null>(null);

  const open = () => setMounted(true);

  const close = () => {
    setEntered(false);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setMounted(false),
      TRANSITION_MS,
    );
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

  useEffect(
    () => () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    },
    [],
  );

  const lightbox = mounted
    ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${alt}`}
          onClick={close}
          className={`fixed inset-0 z-[120] flex min-h-dvh items-center justify-center overflow-hidden bg-black/90 p-4 backdrop-blur-md transition-opacity duration-300 ease-out sm:p-8 ${
            entered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            aria-label="Close"
            className={`absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 ease-out hover:rotate-90 hover:bg-white/10 sm:top-7 sm:right-7 ${
              entered ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <div className="pointer-events-none flex h-full w-full items-center justify-center">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority
              onClick={(event) => event.stopPropagation()}
              className={`h-auto max-h-[calc(100dvh-3rem)] w-auto max-w-[calc(100vw-2rem)] rounded-2xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out sm:max-h-[calc(100dvh-4rem)] sm:max-w-[calc(100vw-4rem)] ${
                entered
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-5 scale-[0.97] opacity-0"
              } pointer-events-auto`}
            />
          </div>
        </div>,
        document.body,
      )
    : null;

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
      {lightbox}
    </>
  );
}
