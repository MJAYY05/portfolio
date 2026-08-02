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
  reverse?: boolean;
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
    reverse: true,
    badges: ["AI", "Cybersecurity", "Technology Showcase"],
  },
];

export default function ActivityShowcase() {
  return (
    <div className="flex flex-col gap-24">
      {ACTIVITIES.map((activity, index) => (
        <article
          key={activity.title}
          className={`grid items-center gap-12 ${
            index > 0 ? "border-t border-white/10 pt-24" : ""
          } lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}
        >
          <div className={`relative ${activity.reverse ? "lg:order-2" : ""}`}>
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-br from-white/15 via-transparent to-white/5 blur-2xl"
            />
            <div
              className={`relative ${activity.aspect} w-full overflow-hidden rounded-3xl border border-white/15 bg-black/60`}
            >
              <ActivityCarousel images={activity.images} />
            </div>
          </div>

          <div
            className={`flex flex-col gap-7 ${activity.reverse ? "lg:order-1" : ""}`}
          >
            <div>
              <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-zinc-500">
                <span className="font-mono text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {activity.tag}
              </p>
              <h3 className="font-kanit text-3xl font-semibold text-white sm:text-4xl">
                {activity.title}
              </h3>
              <p className="mt-3 font-mono text-xs tracking-[0.18em] text-zinc-500 uppercase">
                {activity.meta}
              </p>
            </div>

            <div className="group relative grid cursor-default select-none">
              <p className="col-start-1 row-start-1 text-base leading-relaxed text-zinc-300 transition-opacity duration-500 ease-out group-hover:opacity-0 sm:text-lg">
                {activity.en}
              </p>
              <p className="font-kanit pointer-events-none col-start-1 row-start-1 text-base leading-relaxed text-zinc-300 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 sm:text-lg">
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
        </article>
      ))}
    </div>
  );
}
