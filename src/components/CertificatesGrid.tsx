import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

function ZoomIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

const CERTS = [
  {
    image: "/certs/crta.png",
    width: 10737,
    height: 7653,
    title: "Certified Red Team Analyst (CRTA)",
    issuer: "CyberWarfare Labs",
    date: "Jul 26, 2026",
    meta: undefined as string | undefined,
    highlight: true,
  },
  {
    image: "/certs/cert1.png",
    width: 1117,
    height: 793,
    title: "Penetration Test Specialist",
    issuer: "National Cyber Security Agency (NCSA)",
    date: "May 8, 2026",
    meta: "28-hour e-Learning course",
    highlight: false,
  },
  {
    image: "/certs/cert2.png",
    width: 1050,
    height: 812,
    title: "Machine Learning for Natural Language Processing",
    issuer: "AWS Academy Graduate",
    date: "May 12, 2026",
    meta: "20 hours",
    highlight: false,
  },
  {
    image: "/certs/cert3.png",
    width: 1036,
    height: 804,
    title: "Generative AI Foundations",
    issuer: "AWS Academy Graduate",
    date: "May 12, 2026",
    meta: "12 hours",
    highlight: false,
  },
  {
    image: "/certs/cert4.png",
    width: 998,
    height: 725,
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    date: "Oct 22, 2025",
    meta: "Valid until Oct 22, 2027",
    highlight: false,
  },
  {
    image: "/certs/cert5.png",
    width: 1226,
    height: 830,
    title: "Ethical Hacker",
    issuer: "NCSA × Cisco Networking Academy",
    date: "Jun 17, 2026",
    meta: undefined as string | undefined,
    highlight: false,
  },
];

function CertCard({ cert }: { cert: (typeof CERTS)[number] }) {
  const card = (
    <ImageLightbox
      src={cert.image}
      alt={cert.title}
      width={cert.width}
      height={cert.height}
      triggerClassName={
        cert.highlight
          ? "group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-red-500/40 bg-red-500/[0.03] text-left transition-colors duration-300 hover:border-red-400/70"
          : "group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left transition-colors duration-300 hover:border-white/30"
      }
    >
      <div className="relative aspect-3/2 overflow-hidden">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIcon className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
          {cert.issuer}
        </p>
        <h4 className="font-kanit text-base leading-snug font-semibold text-white">
          {cert.title}
        </h4>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3 text-xs text-zinc-500">
          <span>{cert.date}</span>
          {cert.meta && <span className="text-right">{cert.meta}</span>}
        </div>
      </div>
    </ImageLightbox>
  );

  if (!cert.highlight) return card;

  return (
    <div className="relative h-full">
      <div
        aria-hidden
        className="absolute -inset-1.5 -z-10 rounded-3xl bg-red-500/12 blur-lg"
      />
      {card}
    </div>
  );
}

export default function CertificatesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CERTS.map((cert) => (
        <CertCard key={cert.image} cert={cert} />
      ))}
    </div>
  );
}
