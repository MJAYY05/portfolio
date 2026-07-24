import type { SVGProps } from "react";

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.6v1.7h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.55 2.5 4.55 5.75V21h-4v-5.5c0-1.3-.02-3-1.85-3-1.85 0-2.15 1.4-2.15 2.9V21H9z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/thanakorn-jamnongprakhon-5517a9393",
    target: "_blank",
  },
  {
    label: "@mj.wyvx",
    icon: InstagramIcon,
    href: "https://www.instagram.com/mj.wyvx/",
    target: "_blank",
  },
  {
    label: "macvrtyuj@gmail.com",
    icon: MailIcon,
    href: "mailto:macvrtyuj@gmail.com",
    target: undefined,
  },
  {
    label: "064 694 1552",
    icon: PhoneIcon,
    href: "tel:+66646941552",
    target: undefined,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {SOCIALS.map(({ label, icon: Icon, href, target }) => (
        <li key={label}>
          <a
            href={href}
            target={target}
            rel={target ? "noopener noreferrer" : undefined}
            className="group flex h-11 items-center overflow-hidden rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center">
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium tracking-wide opacity-0 transition-all duration-300 ease-out group-hover:max-w-xs group-hover:pr-5 group-hover:opacity-100">
              {label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
