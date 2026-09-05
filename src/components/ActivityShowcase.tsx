"use client";

import { useEffect, useRef, useState } from "react";
import ActivityCarousel, {
  type ActivityImage,
} from "@/components/ActivityCarousel";

const ACTIVITIES: Array<{
  title: string;
  tag: string;
  meta: string;
  en: string;
  th: string;
  images: ActivityImage[];
  aspect: string;
  badges: string[];
}> = [
  {
    title: "IT RERU CYBER HACKATHON 2026 #2",
    tag: "Cybersecurity Competition",
    meta: "Senior Level · Capture The Flag",
    en: "I participated in the second IT RERU Cyber Hackathon 2026 in the Senior division, a hands-on Capture The Flag competition. The event challenged our team to investigate and solve cybersecurity problems across multiple disciplines under time pressure. It strengthened my technical thinking, teamwork, communication, and ability to stay focused while approaching unfamiliar systems.",
    th: "ผมได้เข้าร่วมการแข่งขัน IT RERU CYBER HACKATHON 2026 ครั้งที่ 2 ในระดับ Senior ซึ่งเป็นการแข่งขันรูปแบบ Capture The Flag ที่ให้ผู้เข้าแข่งขันลงมือวิเคราะห์และแก้โจทย์ด้านความมั่นคงปลอดภัยไซเบอร์จากหลายหมวดภายใต้เวลาที่จำกัด ประสบการณ์นี้ช่วยพัฒนาทั้งกระบวนการคิดเชิงเทคนิค การทำงานเป็นทีม การสื่อสาร และความสามารถในการรับมือกับระบบหรือโจทย์ที่ไม่คุ้นเคยครับ",
    images: [
      {
        src: "/activity/reru1.webp",
        alt: "Team competing at IT RERU Cyber Hackathon 2026",
        position: "center",
      },
      {
        src: "/activity/reru2.webp",
        alt: "Participants at IT RERU Cyber Hackathon 2026",
        position: "center 58%",
      },
      {
        src: "/activity/reru3.webp",
        alt: "Thanakorn at IT RERU Cyber Hackathon 2026",
        fit: "contain",
        position: "center",
      },
    ],
    aspect: "aspect-4/3",
    badges: ["Senior Level", "CTF", "Cybersecurity", "Team Competition"],
  },
  {
    title: "IT Expo Day",
    tag: "Industry & Technology Event",
    meta: "AI · Cybersecurity · Inspiration",
    en: "A truly inspiring experience — I got to see real projects from several teams applying AI to cybersecurity, and talked with professionals who were generous with their time and advice. It made me realize that what I'm studying is genuinely valuable and applicable in the real world. I came back with real motivation to keep pushing myself and grow even further.",
    th: "เป็นงานที่ประทับใจมาก ได้เห็นทั้งโปรเจคจริงของหลายๆ กลุ่มที่นำ AI มาใช้ใน Cybersecurity และได้คุยกับพี่ๆ ที่เปิดโอกาสและให้คำแนะนำดีมาก ทำให้รู้สึกว่าสิ่งที่เรียนอยู่มีคุณค่าและนำไปใช้ได้จริง กลับมาพร้อมแรงบันดาลใจที่อยากขวนขวายและพัฒนาตัวเองมากขึ้นกว่าเดิม",
    images: [
      { src: "/activity/itexpoday1.webp", alt: "IT Expo Day" },
      { src: "/activity/itexpoday2.webp", alt: "IT Expo Day" },
      { src: "/activity/itexpoday3.webp", alt: "IT Expo Day" },
    ],
    aspect: "aspect-3/4",
    badges: ["AI", "Cybersecurity", "Technology Showcase"],
  },
  {
    title: "Meet The Youth: Cyber Guardians & White Hat Thailand 2026",
    tag: "National Cyber Defense Program",
    meta: "Cyber Command · Royal Thai Armed Forces HQ",
    en: 'Attended "Meet The Youth: Cyber Guardians & White Hat Thailand 2026," hosted by Cyber Command, Royal Thai Armed Forces HQ. Great session on cyber defense awareness and ethical hacking fundamentals — always valuable to hear directly from people actively working in national-level cyber defense.',
    th: "ผมได้เข้าร่วมงาน \"Meet The Youth: Cyber Guardians & White Hat Thailand 2026\" ซึ่งจัดโดยหน่วยบัญชาการไซเบอร์ กองบัญชาการกองทัพไทย เป็นช่วงเวลาที่ดีมากในการเรียนรู้เรื่องความตระหนักด้านการป้องกันภัยไซเบอร์และพื้นฐานของ Ethical Hacking การได้ฟังประสบการณ์ตรงจากผู้ที่ทำงานด้านการป้องกันภัยไซเบอร์ระดับประเทศถือเป็นสิ่งที่มีคุณค่ามากเสมอครับ",
    images: [
      {
        src: "/activity/mty1.webp",
        alt: "Group photo at Meet The Youth: Cyber Guardians & White Hat Thailand 2026",
      },
      {
        src: "/activity/mty2.webp",
        alt: "Presentation session at Meet The Youth: Cyber Guardians & White Hat Thailand 2026",
      },
    ],
    aspect: "aspect-3/4",
    badges: ["Cyber Defense", "Ethical Hacking", "National Security"],
  },
];

export default function ActivityShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(
            (entry.target as HTMLElement).dataset.activityIndex,
          );
          if (!Number.isNaN(index)) setActiveIndex(index);
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute top-1 bottom-1 left-4 w-px bg-linear-to-b from-transparent via-white/12 to-transparent sm:left-5"
      />

      <div className="flex flex-col gap-20 sm:gap-24">
        {ACTIVITIES.map((activity, index) => {
          const isActive = index === activeIndex;
          return (
            <article
              key={activity.title}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-activity-index={index}
              className="relative grid gap-8 pl-11 sm:pl-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14"
            >
              <span
                aria-hidden
                className={`absolute top-0.5 left-0 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur transition-all duration-500 sm:h-10 sm:w-10 ${
                  isActive
                    ? "border-red-400/70 bg-red-500/15 shadow-[0_0_26px_rgba(239,68,68,0.4)]"
                    : "border-white/15 bg-black/60"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                    isActive ? "bg-red-400" : "bg-white/25"
                  }`}
                />
              </span>

              <div className="flex flex-col gap-5">
                <div>
                  <p
                    className={`mb-2 flex flex-wrap items-center gap-x-2 font-mono text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                      isActive ? "text-red-400" : "text-zinc-600"
                    }`}
                  >
                    <span>LOG_{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-zinc-700">/</span>
                    <span className={isActive ? "" : "text-zinc-500"}>
                      {activity.tag}
                    </span>
                  </p>
                  <h3 className="font-kanit text-2xl font-semibold text-white sm:text-3xl">
                    {activity.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs tracking-[0.18em] text-zinc-500 uppercase">
                    {activity.meta}
                  </p>
                </div>

                <div className="group relative grid cursor-default select-none">
                  <p className="col-start-1 row-start-1 text-sm leading-relaxed text-zinc-300 transition-opacity duration-500 ease-out group-hover:opacity-0 sm:text-base">
                    {activity.en}
                  </p>
                  <p className="font-kanit pointer-events-none col-start-1 row-start-1 text-sm leading-relaxed text-zinc-300 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 sm:text-base">
                    {activity.th}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {activity.badges.map((badge) => (
                    <li
                      key={badge}
                      className="rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-400"
                    >
                      {badge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div
                  aria-hidden
                  className={`absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-br blur-2xl transition-colors duration-500 ${
                    isActive
                      ? "from-red-500/20 via-transparent to-white/5"
                      : "from-white/15 via-transparent to-white/5"
                  }`}
                />
                <div
                  className={`relative ${activity.aspect} w-full overflow-hidden rounded-3xl border bg-black/60 transition-colors duration-500 ${
                    isActive ? "border-red-400/40" : "border-white/15"
                  }`}
                >
                  <ActivityCarousel images={activity.images} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
