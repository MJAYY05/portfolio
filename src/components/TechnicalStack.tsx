const STACK_GROUPS = [
  {
    number: "01",
    title: "Programming Languages",
    thaiTitle: "ภาษาด้านคอมพิวเตอร์",
    items: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"],
  },
  {
    number: "02",
    title: "Frameworks, Libraries & Databases",
    thaiTitle: "เฟรมเวิร์ก ไลบรารี และฐานข้อมูล",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Three.js",
      "Azure SQL Database",
    ],
  },
  {
    number: "03",
    title: "Tools & Technologies",
    thaiTitle: "เครื่องมือและเทคโนโลยี",
    items: [
      "Git",
      "GitHub Actions",
      "Microsoft Azure",
      "Wazuh",
      "Grafana",
      "Google Gemini API",
      "ESP32 / IoT",
      "Blynk IoT",
    ],
  },
  {
    number: "04",
    title: "Software",
    thaiTitle: "โปรแกรมที่ใช้",
    items: [
      "Visual Studio Code",
      "VMware Workstation",
      "Kali Linux",
      "Wireshark",
      "Burp Suite",
    ],
  },
];

export default function TechnicalStack() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {STACK_GROUPS.map(({ number, title, thaiTitle, items }) => (
        <article
          key={title}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04] sm:p-7"
        >
          <div
            aria-hidden
            className="absolute top-0 left-0 h-px w-0 bg-white/70 transition-all duration-500 group-hover:w-full"
          />

          <div className="mb-7 flex items-start justify-between gap-5">
            <div>
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {title}
              </h3>
              <p className="font-kanit mt-1 text-sm text-zinc-500">
                {thaiTitle}
              </p>
            </div>
            <span className="font-mono text-xs text-zinc-600">{number}</span>
          </div>

          <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs tracking-wide text-zinc-300 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
