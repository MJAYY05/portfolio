"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "hero", number: "01", label: "Home / About" },
  { id: "skills", number: "02", label: "Skills" },
  { id: "project", number: "03", label: "Projects" },
  { id: "activity", number: "04", label: "Activity" },
  { id: "contact", number: "05", label: "Contact" },
];

export default function PortfolioHUD() {
  const [activeSection, setActiveSection] = useState("hero");
  const progressRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLAnchorElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollFrame = 0;
    let pointerFrame = 0;
    let pointerX = -500;
    let pointerY = -500;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const updateScrollUI = () => {
      scrollFrame = 0;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        documentHeight > 0
          ? Math.min(1, Math.max(0, window.scrollY / documentHeight))
          : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleY(${progress})`;
      }

      if (scrollHintRef.current) {
        const isVisible = window.scrollY < 140;
        scrollHintRef.current.style.opacity = isVisible ? "1" : "0";
        scrollHintRef.current.style.transform = isVisible
          ? "translate(-50%, 0)"
          : "translate(-50%, 12px)";
        scrollHintRef.current.style.pointerEvents = isVisible ? "auto" : "none";
      }

      const viewportMarker = window.innerHeight * 0.52;
      let current = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.getBoundingClientRect().top <= viewportMarker
        ) {
          current = section.id;
        }
      }

      // The final section can be shorter than the viewport plus footer.
      // Force the last route active near the page end so it never remains on 05.
      if (progress >= 0.985) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }

      setActiveSection((previous) => (previous === current ? previous : current));
    };

    const requestScrollUpdate = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(updateScrollUI);
      }
    };

    const updatePointer = () => {
      pointerFrame = 0;
      if (!cursorGlowRef.current) return;
      cursorGlowRef.current.style.transform = `translate3d(${pointerX - 192}px, ${pointerY - 192}px, 0)`;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion || event.pointerType === "touch") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (cursorGlowRef.current) cursorGlowRef.current.style.opacity = "1";
      if (!pointerFrame) pointerFrame = requestAnimationFrame(updatePointer);
    };

    const hidePointerGlow = () => {
      if (cursorGlowRef.current) cursorGlowRef.current.style.opacity = "0";
    };

    updateScrollUI();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", hidePointerGlow);

    return () => {
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        hidePointerGlow,
      );
    };
  }, []);

  return (
    <>
      <div
        ref={cursorGlowRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-10 hidden h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),rgba(255,255,255,0.025)_38%,transparent_70%)] opacity-0 mix-blend-screen transition-opacity duration-500 md:block"
      />

      <nav
        aria-label="Section progress"
        className="site-chrome fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 lg:block xl:right-8"
      >
        <p className="mb-5 text-right font-mono text-[9px] tracking-[0.24em] text-zinc-600 uppercase">
          Route // 05
        </p>

        <div className="relative">
          <div
            aria-hidden
            className="absolute top-2 right-[5px] bottom-2 w-px bg-white/10"
          />
          <div
            ref={progressRef}
            aria-hidden
            className="absolute top-2 right-[5px] bottom-2 w-px origin-top scale-y-0 bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.45)]"
          />

          <ol className="relative flex flex-col gap-5">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className="group flex items-center justify-end gap-3"
                  >
                    <span
                      className={`translate-x-2 font-mono text-[10px] tracking-[0.18em] uppercase opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                        isActive
                          ? "translate-x-0 text-white opacity-100"
                          : "text-zinc-500"
                      }`}
                    >
                      {section.number} / {section.label}
                    </span>
                    <span
                      className={`relative flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-white bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                          : "border-white/25 bg-black group-hover:border-white/70"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute h-5 w-5 animate-ping rounded-full border border-white/20" />
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>

      <a
        ref={scrollHintRef}
        href="#about"
        className="fixed bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[9px] tracking-[0.32em] text-zinc-500 uppercase transition-all duration-500 hover:text-white sm:flex"
      >
        <span>Scroll to explore</span>
        <span className="relative h-8 w-px overflow-hidden bg-white/15">
          <span className="absolute top-0 left-0 h-3 w-px animate-bounce bg-white" />
        </span>
      </a>
    </>
  );
}
