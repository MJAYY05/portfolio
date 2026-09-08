"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type SVGProps } from "react";
import AboutText from "@/components/AboutText";
import BibleVerse from "@/components/BibleVerse";
import EducationTimeline from "@/components/EducationTimeline";
import NameHover from "@/components/NameHover";
import ProfileCarousel from "@/components/ProfileCarousel";
import SocialLinks from "@/components/SocialLinks";

type HeroView = "profile" | "about";

function ArrowIcon({
  direction,
  ...props
}: SVGProps<SVGSVGElement> & { direction: "left" | "right" }) {
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
      {direction === "right" ? (
        <path d="m9 18 6-6-6-6" />
      ) : (
        <path d="m15 18-6-6 6-6" />
      )}
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3 4.5 6v5.2c0 4.6 3.2 7.9 7.5 9.3 4.3-1.4 7.5-4.7 7.5-9.3V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const CERT_PREVIEWS = [
  "/certs/crta.webp",
  "/certs/htb.png",
  "/certs/cert1.webp",
  "/certs/cert4.webp",
  "/certs/meettheyouth.webp",
  "/certs/ncsaxcisco.webp",
];

const CERT_PREVIEW_INTERVAL_MS = 3000;

function CertPreviewCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CERT_PREVIEWS.length);
    }, CERT_PREVIEW_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {CERT_PREVIEWS.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Certificate preview"
          fill
          priority
          loading="eager"
          sizes="(min-width: 1024px) 22rem, 45vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}

function CornerMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className="absolute top-4 right-4 h-3.5 w-3.5 text-white/25"
    >
      <path
        d="M1 8V1h7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpinBadge() {
  return (
    <div className="absolute -right-1.5 -bottom-1.5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.55)] sm:h-16 sm:w-16">
      <svg
        viewBox="0 0 100 100"
        className="badge-spin absolute inset-0 h-full w-full text-zinc-400"
      >
        <defs>
          <path
            id="hero-badge-ring"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text fontSize="7.4" letterSpacing="1.6" fill="currentColor">
          <textPath href="#hero-badge-ring">
            CYBERSECURITY • BANGKOK UNIVERSITY •
          </textPath>
        </text>
      </svg>
      <ShieldIcon className="relative h-4.5 w-4.5 text-red-400" />
    </div>
  );
}

function StatCard({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: "red" | "lime";
}) {
  const styles =
    accent === "lime"
      ? "border-lime-400/30 bg-lime-400/5"
      : "border-red-500/30 bg-red-500/[0.05]";

  return (
    <div
      className={`relative flex flex-1 flex-col justify-center overflow-hidden rounded-[1.75rem] border px-5 py-4 ${styles}`}
    >
      <CornerMark />
      <p className="font-kanit text-3xl font-bold text-white sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
        {label}
      </p>
    </div>
  );
}

const SIDE_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Project" },
  { href: "#activity", label: "Activity" },
  { href: "#contact", label: "Contact" },
];

export default function HeroAboutDeck() {
  const [view, setView] = useState<HeroView>("profile");
  const touchStartX = useRef<number | null>(null);

  const changeView = (nextView: HeroView) => {
    setView(nextView);
    window.history.replaceState(
      null,
      "",
      nextView === "about" ? "#about" : "#top",
    );
  };

  useEffect(() => {
    if (window.location.hash === "#about") setView("about");

    const handleViewRequest = (event: Event) => {
      const requestedView = (event as CustomEvent<HeroView>).detail;
      if (requestedView === "profile" || requestedView === "about") {
        changeView(requestedView);
      }
    };

    window.addEventListener("portfolio:hero-view", handleViewRequest);
    return () =>
      window.removeEventListener("portfolio:hero-view", handleViewRequest);
  }, []);

  return (
    <section
      id="hero"
      data-section="01"
      aria-label="Profile and about me"
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
        const distance = touchStartX.current - endX;
        touchStartX.current = null;
        if (Math.abs(distance) < 60) return;
        changeView(distance > 0 ? "about" : "profile");
      }}
      className="hero-section relative min-h-screen scroll-mt-24 overflow-hidden px-6 pt-32 pb-16 text-white sm:px-10 lg:px-16"
    >
      <span id="about" className="absolute top-0" />
      <div aria-hidden className="hero-halo" />

      <div className="hero-deck-viewport mx-auto w-full max-w-6xl overflow-hidden">
        <div
          className={`hero-deck-track ${view === "about" ? "is-about" : ""}`}
        >
          <div
            aria-hidden={view !== "profile"}
            className={`hero-deck-panel flex min-h-[calc(100vh-12rem)] items-center py-10 ${
              view === "profile" ? "is-active" : "is-inactive"
            }`}
          >
            <div className="w-full lg:flex lg:items-stretch lg:gap-8">
              <nav
                aria-label="Section shortcuts"
                className="hidden shrink-0 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10"
              >
                {SIDE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase transition-colors duration-300 hover:text-white [writing-mode:vertical-rl]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="grid flex-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(8rem,auto)]">
                {/* About Me */}
                <div
                  data-enter="1"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-red-500/25 bg-linear-to-br from-red-500/[0.07] via-black to-black p-6 sm:col-span-2 sm:p-7 lg:col-span-2 lg:row-span-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.3em] text-zinc-400 uppercase">
                      <span className="text-red-400">◆</span> About Me
                    </p>
                    <button
                      type="button"
                      onClick={() => changeView("about")}
                      aria-label="Open About Me and Education"
                      className="group/btn flex shrink-0 items-center gap-1.5 rounded-full border border-white bg-white px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-black uppercase shadow-[0_4px_18px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105"
                    >
                      Full Story
                      <ArrowIcon
                        direction="right"
                        className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      />
                    </button>
                  </div>

                  <div className="my-7 flex justify-center">
                    <div className="relative">
                      <div
                        aria-hidden
                        className="absolute -inset-3 -z-10 rounded-full bg-red-500/20 blur-2xl"
                      />
                      <div className="relative aspect-square w-36 overflow-hidden rounded-full border-2 border-white/15 sm:w-44">
                        <ProfileCarousel />
                      </div>
                      <SpinBadge />
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-medium tracking-[0.3em] text-zinc-500 uppercase">
                      I&apos;m,
                    </p>
                    <NameHover />
                    <div className="mt-5 flex flex-wrap items-center gap-2.5">
                      <SocialLinks />
                    </div>
                  </div>
                </div>

                {/* Portfolio wordmark */}
                <div
                  data-enter="2"
                  className="relative flex flex-col justify-center overflow-hidden rounded-4xl border border-white/10 bg-white/2 px-7 py-8 sm:col-span-2 sm:px-9 lg:col-span-2 lg:row-span-1"
                >
                  <CornerMark />
                  <p className="mb-2 font-mono text-[10px] tracking-[0.35em] text-zinc-600 uppercase">
                    Cybersecurity · CS Student
                  </p>
                  <h2 className="font-kanit text-5xl leading-none font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Portfolio<span className="text-red-400">.</span>
                  </h2>
                </div>

                {/* Certificates preview */}
                <a
                  href="#skills"
                  data-enter="3"
                  className="group relative flex min-h-[9.5rem] flex-col justify-end overflow-hidden rounded-4xl border border-white/10 bg-black lg:col-span-1 lg:row-span-1"
                >
                  <CertPreviewCarousel />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"
                  />
                  <CornerMark />
                  <div className="relative flex flex-col gap-1 p-5">
                    <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-300 uppercase">
                      Certifications
                    </p>
                    <p className="font-kanit text-base font-semibold text-white">
                      10+ Verified Credentials
                    </p>
                  </div>
                </a>

                {/* Stat stack */}
                <div
                  data-enter="3"
                  className="flex flex-col gap-5 lg:col-span-1 lg:row-span-1"
                >
                  <StatCard value="10+" label="Certificates" accent="red" />
                  <StatCard value="04" label="Projects Built" accent="lime" />
                </div>

                {/* Bible verse */}
                <div
                  data-enter="4"
                  className="relative flex flex-col justify-center overflow-hidden rounded-4xl border border-white/10 bg-white/2 p-6 lg:col-span-1 lg:row-span-1"
                >
                  <CornerMark />
                  <p className="mb-3 text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
                    Hover for Thai
                  </p>
                  <BibleVerse />
                </div>

                {/* Certification progress */}
                <a
                  href="#skills"
                  data-enter="4"
                  className="group relative flex flex-col justify-center overflow-hidden rounded-4xl border border-red-500/30 bg-red-500/5 p-6 transition-colors duration-300 hover:border-red-400/60 lg:col-span-1 lg:row-span-1"
                >
                  <CornerMark />
                  <p className="text-[10px] font-medium tracking-[0.22em] text-red-300/80 uppercase">
                    CompTIA Security+ · Progress
                  </p>
                  <div className="mt-2 flex items-baseline justify-between">
                    <p className="font-kanit text-3xl font-bold text-white sm:text-4xl">
                      70%
                    </p>
                    <p className="text-[10px] tracking-[0.15em] text-zinc-500 uppercase">
                      Studying
                    </p>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-red-500 to-white"
                      style={{ width: "70%" }}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            aria-hidden={view !== "about"}
            className={`hero-deck-panel flex min-h-[calc(100vh-12rem)] items-center py-12 ${
              view === "about" ? "is-active" : "is-inactive"
            }`}
          >
            <div className="w-full">
              <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/10 pb-7">
                <div>
                  <p className="mb-4 text-xs font-medium tracking-[0.4em] text-zinc-500 uppercase">
                    01 / Story
                  </p>
                  <h2 className="font-kanit text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    About Me &amp; Education
                  </h2>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-4">
                  <p className="hidden max-w-48 text-right font-mono text-[9px] leading-relaxed tracking-[0.18em] text-zinc-600 uppercase sm:block">
                    Hover the story to read in Thai
                  </p>
                  <button
                    type="button"
                    onClick={() => changeView("profile")}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[9px] font-medium tracking-[0.18em] text-zinc-400 uppercase backdrop-blur transition-all duration-300 hover:border-white/40 hover:text-white"
                  >
                    <ArrowIcon
                      direction="left"
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                    />
                    Profile
                  </button>
                </div>
              </div>

              <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
                <AboutText />
                <EducationTimeline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
