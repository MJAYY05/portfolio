import type { SVGProps } from "react";

function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3.5 5 6v5.5c0 4.6 3 7.9 7 9 4-1.1 7-4.4 7-9V6l-7-2.5z" />
      <path d="m9.2 12 2 2 3.6-4" />
    </svg>
  );
}

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m8.5 8-4 4 4 4" />
      <path d="m15.5 8 4 4-4 4" />
      <path d="m13.2 6-2.4 12" />
    </svg>
  );
}

function FlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 21V4" />
      <path d="M5 4h13l-3 4.2L18 12.5H5" />
    </svg>
  );
}

const SKILLS = [
  {
    icon: TargetIcon,
    title: "Red Team / Pentest",
    en: "Simulating real-world attacks to uncover vulnerabilities before adversaries do — reconnaissance, exploitation, and clear reporting.",
    th: "จำลองการโจมตีแบบผู้ไม่หวังดีเพื่อค้นหาช่องโหว่ก่อนถูกใช้จริง ตั้งแต่การสอดแนม เจาะระบบ ไปจนถึงการเขียนรายงานผล",
  },
  {
    icon: ShieldIcon,
    title: "Blue Team",
    en: "Monitoring, detecting, and responding to security incidents — log analysis, SIEM, and threat hunting to keep systems safe.",
    th: "เฝ้าระวัง ตรวจจับ และรับมือกับเหตุการณ์ด้านความปลอดภัย วิเคราะห์ log ใช้งาน SIEM และตามล่าภัยคุกคามเพื่อปกป้องระบบ",
  },
  {
    icon: CodeIcon,
    title: "Python",
    en: "Writing scripts and tools for automation, data analysis, and security testing — the backbone of most of my technical work.",
    th: "เขียนสคริปต์และเครื่องมือสำหรับงานอัตโนมัติ วิเคราะห์ข้อมูล และทดสอบความปลอดภัย ถือเป็นพื้นฐานของงานด้านเทคนิคที่ทำอยู่",
  },
  {
    icon: FlagIcon,
    title: "CTF & Competitions",
    en: "Solving hands-on security challenges — web, crypto, forensics, and reverse engineering — to sharpen practical problem-solving skills.",
    th: "แก้โจทย์ท้าทายด้านความปลอดภัยแบบลงมือจริง ทั้ง web, crypto, forensics และ reverse engineering เพื่อฝึกทักษะการแก้ปัญหา",
  },
];

export default function SkillsList() {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {SKILLS.map(({ icon: Icon, title, en, th }, i) => (
        <div
          key={title}
          className="group -mx-4 grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 rounded-xl px-4 py-8 transition-colors duration-300 hover:bg-white/[0.03] sm:-mx-6 sm:grid-cols-[3.5rem_14rem_1fr] sm:items-center sm:gap-x-8 sm:px-6"
        >
          <span className="font-mono text-xs text-zinc-600">
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Icon className="h-5 w-5 text-white" />
            </span>
            <h3 className="font-kanit text-xl font-semibold text-white sm:text-2xl">
              {title}
            </h3>
          </div>

          <div className="relative col-span-2 grid cursor-default select-none sm:col-span-1">
            <p className="col-start-1 row-start-1 text-sm leading-relaxed text-zinc-400 transition-opacity duration-500 ease-out group-hover:opacity-0 sm:text-base">
              {en}
            </p>
            <p className="font-kanit pointer-events-none col-start-1 row-start-1 text-sm leading-relaxed text-zinc-400 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 sm:text-base">
              {th}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
