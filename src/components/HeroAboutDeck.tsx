"use client";

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
            className={`hero-deck-panel flex min-h-[calc(100vh-12rem)] items-center ${
              view === "profile" ? "is-active" : "is-inactive"
            }`}
          >
            <div className="grid w-full items-center gap-16 md:grid-cols-2 md:pr-14">
              <div className="hero-copy flex flex-col gap-10">
                <div data-enter="1">
                  <p className="mb-4 text-xs font-medium tracking-[0.4em] text-zinc-500 uppercase">
                    Portfolio
                  </p>
                  <NameHover />
                </div>
                <div data-enter="2">
                  <BibleVerse />
                </div>
                <div data-enter="3">
                  <SocialLinks />
                </div>
              </div>

              <div
                data-enter="4"
                className="hero-profile flex justify-center md:justify-end"
              >
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-br from-white/20 via-transparent to-white/10 blur-2xl"
                  />
                  <div className="relative aspect-square w-64 overflow-hidden rounded-[2rem] border border-white/15 sm:w-80 lg:w-96">
                    <ProfileCarousel />
                  </div>
                  <button
                    type="button"
                    onClick={() => changeView("about")}
                    aria-label="Open About Me"
                    className="profile-about-rail group absolute top-1/2 left-full z-20 flex h-36 w-11 -translate-y-1/2 flex-col items-center justify-between rounded-r-2xl border border-l-0 border-white/20 bg-white px-2 py-4 text-black shadow-[16px_0_45px_rgba(255,255,255,0.12)] transition-all duration-500 hover:w-13 hover:bg-zinc-200 sm:h-44 sm:w-12"
                  >
                    <span className="font-mono text-[8px] tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
                      About me
                    </span>
                    <ArrowIcon
                      direction="right"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
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
