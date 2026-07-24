const NAV_LINKS = [
  { href: "#about", short: "About", full: "About Me" },
  { href: "#skills", short: "Skills", full: "Skills & Certificates" },
  { href: "#project", short: "Project", full: "Project" },
  { href: "#activity", short: "Activity", full: "Activity" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="font-kanit text-sm font-semibold tracking-[0.35em] text-white"
        >
          PORTFOLIO
        </a>
        <ul className="flex items-center gap-5 text-[11px] font-medium uppercase tracking-widest text-zinc-400 sm:gap-10 sm:text-xs">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-white/70 transition-colors hover:text-white"
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
