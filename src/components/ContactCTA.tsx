const ENGLISH = {
  eyebrow: "Open to opportunities",
  title: "Let’s strengthen what matters.",
  body: "I’m open to cooperative education placements and collaboration opportunities in SOC Analyst, Blue Team, and penetration testing roles. If your team is looking for someone curious, disciplined, and ready to grow through real-world security work, I’d be glad to connect.",
  closing:
    "Security is never finished — it grows stronger with every alert investigated, every lesson learned, and every action taken.",
};

const THAI = {
  eyebrow: "เปิดรับโอกาสร่วมงาน",
  title: "มาร่วมกันทำให้สิ่งสำคัญปลอดภัยยิ่งขึ้น",
  body: "ผมเปิดรับโอกาสฝึกงานสหกิจศึกษาและการร่วมงานในสาย SOC Analyst, Blue Team และ Penetration Testing หากทีมของคุณกำลังมองหาคนที่พร้อมเรียนรู้ มีวินัย และต้องการเติบโตผ่านงานด้านความปลอดภัยจริง ผมยินดีอย่างยิ่งที่จะได้พูดคุยกันครับ",
  closing:
    "ความปลอดภัยไม่มีวันเสร็จสมบูรณ์ แต่มันแข็งแกร่งขึ้นจากทุก Alert ที่ตรวจสอบ ทุกบทเรียนที่ได้รับ และทุกการลงมือป้องกัน",
};

function ContactCopy({
  content,
  thai = false,
}: {
  content: typeof ENGLISH;
  thai?: boolean;
}) {
  return (
    <div className={thai ? "font-kanit" : undefined}>
      <p className="mb-5 flex items-center gap-3 text-[10px] font-medium tracking-[0.32em] text-zinc-500 uppercase">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        {content.eyebrow}
      </p>

      <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {content.title}
      </h2>

      <p className="mt-7 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        {content.body}
      </p>

      <p className="mt-10 max-w-3xl border-l border-white/25 pl-5 text-sm leading-relaxed text-zinc-500 italic sm:text-base">
        “{content.closing}”
      </p>
    </div>
  );
}

export default function ContactCTA() {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/45 p-7 backdrop-blur-md transition-colors duration-500 hover:border-white/30 sm:p-12 lg:p-16">
      <div
        aria-hidden
        className="absolute top-0 left-0 h-px w-1/3 bg-gradient-to-r from-white/80 to-transparent transition-all duration-700 group-hover:w-full"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative grid cursor-default select-none">
        <div className="col-start-1 row-start-1 transition-opacity duration-500 ease-out group-hover:opacity-0">
          <ContactCopy content={ENGLISH} />
        </div>
        <div className="pointer-events-none col-start-1 row-start-1 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
          <ContactCopy content={THAI} thai />
        </div>
      </div>

      <div className="relative mt-12 flex flex-wrap gap-3">
        <a
          href="mailto:macvrtyuj@gmail.com"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
        >
          Start a conversation <span aria-hidden>↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/thanakorn-jamnongprakhon-5517a9393"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/10"
        >
          Connect on LinkedIn <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}
