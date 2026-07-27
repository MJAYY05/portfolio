import { SOCIALS } from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center sm:px-10 lg:px-16">
      <ul className="mb-6 flex items-center justify-center gap-3">
        {SOCIALS.map(({ label, icon: Icon, href, target }) => (
          <li key={label}>
            <a
              href={href}
              target={target}
              rel={target ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110" />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-zinc-500">
        © 2026 Thanakorn Jamnongprakhon. All Rights Reserved.
      </p>
      <p className="mt-1 text-xs text-zinc-600">Thank you for visiting</p>
    </footer>
  );
}
