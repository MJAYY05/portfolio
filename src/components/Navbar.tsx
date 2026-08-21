"use client";

import type { MouseEvent } from "react";

type NavLink = {
  href: string;
  short: string;
  full: string;
  heroView?: "about";
};

const NAV_LINKS: NavLink[] = [
  { href: "#about", short: "About", full: "About Me", heroView: "about" },
  { href: "#skills", short: "Skills", full: "Skills & Certificates" },
  { href: "#project", short: "Project", full: "Project" },
  { href: "#activity", short: "Activity", full: "Activity" },
];

export default function Navbar() {
  const openHeroView = (
    event: MouseEvent<HTMLAnchorElement>,
    view: "profile" | "about",
  ) => {
    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent("portfolio:hero-view", { detail: view }),
    );
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="site-navbar fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-5 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-7">
        <a
          href="#top"
          onClick={(event) => openHeroView(event, "profile")}
          className="group flex items-center gap-3 font-kanit text-xs font-semibold tracking-[0.3em] text-white sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
            <span className="relative h-2 w-2 rounded-full bg-white" />
          </span>
          PORTFOLIO
        </a>
        <ul className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-widest text-zinc-400 sm:gap-8 sm:text-[11px]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={
                  link.heroView
                    ? (event) => openHeroView(event, "about")
                    : undefined
                }
                className="nav-link relative block px-1 py-1.5 text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span className="sm:hidden">{link.short}</span>
                <span className="hidden sm:inline">{link.full}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
