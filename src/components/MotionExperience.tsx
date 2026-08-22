"use client";

import { useEffect, useRef, useState } from "react";

const INTRO_DURATION = 6200;
const EXIT_DURATION = 1100;

type TrailPoint = {
  x: number;
  y: number;
  life: number;
};

export default function MotionExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const introCursorRef = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("motion-enabled");
    document.body.style.overflow = "hidden";

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealTargets.forEach((target) => observer.observe(target));

    const startExit = window.setTimeout(
      () => {
        setIntroLeaving(true);
        root.classList.add("site-ready");
        document.body.style.overflow = "";
      },
      reducedMotion ? 3200 : INTRO_DURATION,
    );

    const removeIntro = window.setTimeout(
      () => setIntroVisible(false),
      reducedMotion ? 3300 : INTRO_DURATION + EXIT_DURATION,
    );

    const skipIntro = (event: KeyboardEvent) => {
      if (!["Enter", " ", "Escape"].includes(event.key)) return;
      setIntroLeaving(true);
      root.classList.add("site-ready");
      document.body.style.overflow = "";
      window.setTimeout(() => setIntroVisible(false), EXIT_DURATION);
    };

    window.addEventListener("keydown", skipIntro);

    return () => {
      observer.disconnect();
      window.clearTimeout(startExit);
      window.clearTimeout(removeIntro);
      window.removeEventListener("keydown", skipIntro);
      root.classList.remove("motion-enabled", "site-ready");
      document.body.style.overflow = "";
    };
  }, []);

  const dismissIntro = () => {
    if (introLeaving) return;
    setIntroLeaving(true);
    document.documentElement.classList.add("site-ready");
    document.body.style.overflow = "";
    window.setTimeout(() => setIntroVisible(false), EXIT_DURATION);
  };

  useEffect(() => {
    if (!introVisible) return;

    const cursor = introCursorRef.current;
    if (!cursor || !window.matchMedia("(any-pointer: fine)").matches) return;

    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.style.opacity = "1";
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
    };
  }, [introVisible]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(any-pointer: fine)").matches;
    if (reducedMotion || !finePointer) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let targetX = -100;
    let targetY = -100;
    let headX = -100;
    let headY = -100;
    let active = false;
    let lastMove = 0;
    const points: TrailPoint[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!active) {
        headX = targetX;
        headY = targetY;
      }
      active = true;
      lastMove = performance.now();
    };

    const onPointerLeave = () => {
      active = false;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      if (active) {
        headX += (targetX - headX) * 0.34;
        headY += (targetY - headY) * 0.34;
        const previous = points[0];
        const distance = previous
          ? Math.hypot(headX - previous.x, headY - previous.y)
          : 99;

        if (distance > 1.25) {
          points.unshift({ x: headX, y: headY, life: 1 });
        }

        if (time - lastMove > 80) active = false;
      }

      for (const point of points) point.life -= 0.045;
      while (points.length > 0 && points[points.length - 1].life <= 0) {
        points.pop();
      }
      if (points.length > 32) points.length = 32;

      if (points.length > 2) {
        context.save();
        context.lineCap = "round";
        context.lineJoin = "round";
        context.shadowColor = "rgba(255,255,255,0.5)";
        context.shadowBlur = 9;

        for (let index = 0; index < points.length - 2; index += 1) {
          const current = points[index];
          const next = points[index + 1];
          const after = points[index + 2];
          const opacity = Math.max(0, current.life) * (1 - index / points.length);

          context.beginPath();
          context.moveTo(current.x, current.y);
          context.quadraticCurveTo(
            next.x,
            next.y,
            (next.x + after.x) / 2,
            (next.y + after.y) / 2,
          );
          context.strokeStyle = `rgba(255,255,255,${opacity * 0.72})`;
          context.lineWidth = Math.max(0.35, 2.25 * opacity);
          context.stroke();
        }
        context.restore();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <>
      {introVisible && (
        <div
          role="dialog"
          aria-label="Opening verse"
          aria-modal="true"
          className={`intro-screen ${introLeaving ? "is-leaving" : ""}`}
          onPointerDown={dismissIntro}
        >
          <div className="intro-art" aria-hidden />
          <div className="intro-shade" aria-hidden />
          <div className="intro-light" aria-hidden />
          <div className="intro-fog intro-fog-one" aria-hidden />
          <div className="intro-fog intro-fog-two" aria-hidden />
          <div className="intro-grain" aria-hidden />

          <div className="intro-index" aria-hidden>
            <span>PSALM</span>
            <span>034</span>
          </div>

          <blockquote className="intro-verse">
            <p>
              The Lord is close to the brokenhearted and saves those who are
              crushed in spirit.
            </p>
            <footer>Psalm 34:18</footer>
          </blockquote>

          <p className="intro-skip" aria-hidden>
            Press Enter to continue
          </p>

          <div ref={introCursorRef} className="intro-cursor" aria-hidden>
            <span className="intro-cursor-dot" />
            <span className="intro-cursor-label">Click to enter</span>
          </div>

          <div className="intro-loading" aria-hidden>
            <span className="intro-loading-bar" />
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] hidden mix-blend-difference md:block"
      />
    </>
  );
}
