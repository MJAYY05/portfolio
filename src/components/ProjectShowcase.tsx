"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type SVGProps } from "react";
import ImageLightbox from "@/components/ImageLightbox";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.5 6.75a2.9 2.9 0 0 0-2.04-2.05C18.7 4.2 12 4.2 12 4.2s-6.7 0-8.46.5A2.9 2.9 0 0 0 1.5 6.75 30.3 30.3 0 0 0 1 12.2a30.3 30.3 0 0 0 .5 5.45 2.9 2.9 0 0 0 2.04 2.05c1.76.5 8.46.5 8.46.5s6.7 0 8.46-.5a2.9 2.9 0 0 0 2.04-2.05 30.3 30.3 0 0 0 .5-5.45 30.3 30.3 0 0 0-.5-5.45zM9.75 15.5v-6.6l5.75 3.3-5.75 3.3z" />
    </svg>
  );
}

function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ZoomIcon(props: SVGProps<SVGSVGElement>) {
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

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: "vseg-email",
    tag: "Featured Project",
    status: null as string | null,
    title: "VSEG Email Platform",
    subtitle: null as string | null,
    image: {
      fit: "cover" as const,
      items: [
        {
          src: "/projects/project1.webp",
          width: 882,
          height: 1010,
          alt: "VSEG Email Platform project — team photo, presentation, sign-up UI, Azure database, and deploy log",
        },
      ],
    },
    highlights: [
      {
        label: "Concept",
        en: "This project simulates a data messaging environment to study how Data Flow and Identity management work on the Cloud.",
        th: "โปรเจกต์นี้คือการสร้างสภาพแวดล้อมจำลองของระบบรับ-ส่งข้อมูล เพื่อศึกษาการทำงานของ Data Flow และการจัดการ Identity บน Cloud",
      },
      {
        label: "Implementation",
        en: "Used GitHub Actions to manage the workflow so system updates stay organized, and deployed on Azure to practice configuring a secure, production-ready Cloud environment.",
        th: "ใช้ GitHub Actions ในการจัดการ Workflow เพื่อให้การอัปเดตระบบเป็นไปอย่างมีระเบียบ และ Deploy บน Azure เพื่อฝึกฝนการตั้งค่า Cloud Environment ให้มีความปลอดภัยและใช้งานได้จริง",
      },
      {
        label: "My Role",
        en: "I designed the UI/UX, wrote the backend code, and handled the Azure deployment — setting up the base environment so the web app runs stably on the Cloud.",
        th: "ผมเป็นผู้ออกแบบในเรื่อง UI/UX รวมถึงเขียนโค้ดควบคุมระบบหลังบ้าน และดูแลการ Deploy บน Azure โดยจัดการ Environment เบื้องต้นเพื่อให้เว็บแอปพลิเคชันทำงานได้เสถียรบนระบบ Cloud",
      },
    ],
    stack: ["GitHub Actions", "Microsoft Azure", "Azure SQL Database", "CI/CD"],
    github: "https://github.com/MJAYY05/VSEGV",
    youtube: null as string | null,
  },
  {
    id: "leo-auto",
    tag: "Featured Project",
    status: null as string | null,
    title: "Leo Auto — Inventory Management System",
    subtitle: null as string | null,
    image: {
      fit: "cover" as const,
      items: [
        {
          src: "/projects/leo1.webp",
          width: 811,
          height: 883,
          alt: "Leo Auto inventory dashboard — parts catalog with stock levels and search",
        },
        {
          src: "/projects/leo2.webp",
          width: 888,
          height: 867,
          alt: "Leo Auto analytics dashboard — AI Vision system effectiveness metrics",
        },
      ],
    },
    highlights: [
      {
        label: "Concept",
        en: "A comprehensive inventory management system for truck parts with AI-powered features. Combines a FastAPI backend with a modern web frontend for efficient stock management, order tracking, and intelligent part identification.",
        th: "ระบบจัดการสต๊อกอะไหล่รถบรรทุกแบบครบวงจร มาพร้อมฟีเจอร์ AI ผสาน FastAPI backend เข้ากับหน้าเว็บที่ทันสมัย เพื่อบริหารสต๊อก ติดตามคำสั่งซื้อ และระบุชิ้นส่วนได้อย่างชาญฉลาด",
      },
      {
        label: "Key Features",
        en: "Full CRUD for truck parts with real-time stock tracking, storage locations, and cost/value calculation. AI features include a natural-language chat assistant (Gemini 2.5 Flash), photo-based part recognition, and automated inventory summary reports. Order management covers daily bill tracking, automatic bill numbering, and total computation.",
        th: "จัดการอะไหล่รถบรรทุกแบบ CRUD ครบวงจร พร้อมติดตามสต๊อกและตำแหน่งจัดเก็บแบบเรียลไทม์ และคำนวณมูลค่าสินค้าคงคลัง ฟีเจอร์ AI ได้แก่ แชทถาม-ตอบด้วยภาษาธรรมชาติ (Gemini 2.5 Flash) การสแกนรูปภาพเพื่อระบุชิ้นส่วน และรายงานสรุปสต๊อกอัตโนมัติ ส่วนระบบคำสั่งซื้อรองรับการบันทึกบิลรายวัน ออกเลขบิลอัตโนมัติ และคำนวณยอดรวมให้ทันที",
      },
      {
        label: "My Role",
        en: "I wrote the system's code and designed the overall website.",
        th: "ผมเป็นผู้เขียนโค้ดระบบทั้งหมดและออกแบบหน้าเว็บโดยรวม",
      },
    ],
    stack: ["FastAPI", "Python", "Google Gemini API", "Gemini 2.5 Flash", "AI Vision"],
    github: "https://github.com/artochey/cs460-final-project/tree/main",
    youtube: "https://youtu.be/nuhNHLMDTYI?si=JaoE-edZ8KyTWrEf",
  },
  {
    id: "smart-mobile-bin",
    tag: "Featured Project",
    status: null as string | null,
    title: "Smart Mobile Bin",
    subtitle: "VSEG Teams — Cloud-connected smart trash bin",
    image: {
      fit: "video" as const,
      src: "/projects/SmartBinClip.mp4",
      alt: "Smart Mobile Bin demo clip",
    },
    highlights: [
      {
        label: "Concept",
        en: "A cloud-connected mobile trash bin built on IoT, designed to make waste disposal easier indoors — especially for elderly and disabled users. It can be driven remotely and opens its lid automatically when someone approaches.",
        th: "ถังขยะอัจฉริยะเคลื่อนที่ผ่าน Cloud ที่พัฒนาด้วยเทคโนโลยี IoT เพื่ออำนวยความสะดวกในการจัดการขยะภายในอาคาร โดยเฉพาะสำหรับผู้สูงอายุและผู้พิการ สามารถบังคับเคลื่อนที่จากระยะไกลและเปิดฝาอัตโนมัติเมื่อมีคนเข้าใกล้",
      },
      {
        label: "How It Works",
        en: "Built on an ESP32 NodeMCU with a DC gear motor + L298N driver for movement, an Ultrasonic sensor (HC-SR04) for distance detection, and a Servo (SG90) to open and close the lid. Users drive it remotely over the Cloud with a joystick in the Blynk IoT app; the lid opens automatically as someone gets close, and an auto-brake stops the motor if an obstacle is detected within 10cm.",
        th: "ใช้บอร์ด ESP32 NodeMCU เป็นชุดประมวลผลหลัก ขับเคลื่อนด้วยมอเตอร์เกียร์ DC ร่วมกับตัวควบคุม L298N ตรวจจับระยะด้วยเซนเซอร์ Ultrasonic (HC-SR04) และเปิด-ปิดฝาด้วยเซอร์โวมอเตอร์ (SG90) ผู้ใช้บังคับเคลื่อนที่ผ่าน Cloud ด้วย Joystick บนแอป Blynk IoT ฝาถังเปิดอัตโนมัติเมื่อมีคนเข้าใกล้ และมีระบบเบรกฉุกเฉินหยุดมอเตอร์ทันทีเมื่อพบสิ่งกีดขวางในระยะน้อยกว่า 10 ซม.",
      },
      {
        label: "Monitoring & Data",
        en: "The app dashboard tracks bin-fill status with alerts, plus usage analytics showing how often and when the bin is used most — helping plan more efficient collection rounds.",
        th: "แดชบอร์ดในแอปแสดงสถานะปริมาณขยะภายในถังพร้อมแจ้งเตือนเมื่อขยะเต็ม และสถิติการใช้งานว่าใช้บ่อยแค่ไหนและช่วงเวลาใด เพื่อวางแผนรอบจัดเก็บขยะได้อย่างมีประสิทธิภาพ",
      },
    ],
    stack: ["ESP32 NodeMCU", "IoT", "Blynk", "L298N Motor Driver", "HC-SR04 Ultrasonic"],
    github: null as string | null,
    youtube: "https://youtu.be/WRQXNdCPoXw?si=cxX1vVLuLVwKI4_Y",
  },
  {
    id: "umbra-xdr",
    tag: "Featured Project",
    status: "Ongoing" as string | null,
    title: "Umbra XDR",
    subtitle: "VSEG Teams — commissioned by SIAM AI Cloud",
    image: {
      fit: "contain" as const,
      src: "/projects/siamai.webp",
      width: 905,
      height: 330,
      alt: "SIAM AI Cloud logo",
      caption: "Commissioned by SIAM AI Cloud",
    },
    highlights: [
      {
        label: "The Challenge",
        en: "Data volume and cyber threats keep growing more complex and constantly evolving. Legacy signature-based detection is often slow, generates too many false positives, and can't keep up with new attack patterns — leaving SOC teams overloaded. This project analyzes data in real time and uses AI to detect anomalous behavior, responding to threats automatically.",
        th: "ปัจจุบันปริมาณข้อมูลและภัยคุกคามทางไซเบอร์มีความซับซ้อนและเปลี่ยนแปลงตลอดเวลา ระบบตรวจจับแบบเดิมที่พึ่งพา Signature มักล่าช้า แจ้งเตือนผิดพลาดสูง (False Positive) และตรวจจับภัยรูปแบบใหม่ไม่ทัน ส่งผลให้ทีม SOC ต้องแบกรับภาระหนัก โครงการนี้จึงถูกพัฒนาขึ้นเพื่อวิเคราะห์ข้อมูลแบบ Real-Time และใช้ AI ตรวจจับพฤติกรรมผิดปกติเพื่อตอบสนองต่อภัยคุกคามโดยอัตโนมัติ",
      },
      {
        label: "Solution & Key Functions",
        en: "AI-driven detection analyzes and flags abnormal behavior without relying on signatures. Real-time processing runs on the NVIDIA Morpheus Framework with H100 GPUs. Lightweight agents (Python/C++) paired with Sysmon collect deep-level logs, and automated alerts fire through Webhooks (LINE/Discord/Slack) with instant reports for the SOC team.",
        th: "ใช้ AI วิเคราะห์และตรวจจับพฤติกรรมผิดปกติโดยไม่ต้องพึ่ง Signature ประมวลผลข้อมูลแบบ Real-Time ด้วย NVIDIA Morpheus Framework บน H100 GPUs ติดตั้ง Agent ขนาดเล็ก (Python/C++) ร่วมกับ Sysmon เพื่อเก็บ Logs เชิงลึก และแจ้งเตือนอัตโนมัติผ่าน Webhooks (LINE/Discord/Slack) พร้อมสร้างรายงานให้ทีม SOC ทันที",
      },
      {
        label: "Impact",
        en: "Adaptive Learning raises detection coverage for new attack patterns, real-time processing cuts incident response time, and GPU acceleration keeps costs down while scaling to large data volumes.",
        th: "ยกระดับการตรวจจับภัยรูปแบบใหม่ด้วย Adaptive Learning ลดระยะเวลาตอบสนองต่อเหตุการณ์ด้วยการประมวลผลแบบ Real-Time และประหยัดต้นทุนพร้อมรองรับข้อมูลขนาดใหญ่ด้วย GPU Acceleration",
      },
      {
        label: "Current Progress",
        en: "Currently in the POC phase — building a pipeline that ingests logs, parses fields, applies detection rules, and renders results on a dashboard. The next phase adds AI, Kafka, and NVIDIA Morpheus to the system.",
        th: "ตอนนี้อยู่ในช่วง POC — สร้าง pipeline รับ log เข้ามา แตกฟิลด์ข้อมูล เขียน rule ตรวจจับ และแสดงผลบน dashboard เฟสถัดไปคือการเพิ่ม AI, Kafka และ NVIDIA Morpheus เข้ามาในระบบ",
      },
      {
        label: "Team & Advisor",
        en: "Advisor: Khwanruthai Kunkitcharoen — Team: Thanakorn Jamnongprakhon, Nawakhun Phromlok, Phuwadon Phiukhangkun, Tranphop Najaroon, La-ongthip Phokhrongwong",
        th: "อาจารย์ที่ปรึกษา: ขวัญฤทัย กุลกิจเจริญ — ทีม: ธนกร จำนงประโคน, นวคุณ พรมโลก, ภูวดล ผิวขางกูล, ตรัณภพ นาจรูญ, ละอองทิพย์ พ่อครวงศ์",
      },
    ],
    stack: ["NVIDIA Morpheus", "NVIDIA H100", "Python", "Wazuh", "Grafana", "Kafka"],
    github: null as string | null,
    youtube: null as string | null,
  },
];

type Project = (typeof PROJECTS)[number];

function ProjectPreviewCard({
  project,
  side,
  onClick,
}: {
  project: Project;
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${side === "left" ? "Previous" : "Next"} project: ${project.title}`}
      className={`project-preview project-preview-${side} group absolute top-1/2 z-0 hidden aspect-4/3 w-[29%] overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 text-left shadow-2xl lg:block`}
    >
      {project.image.fit === "video" ? (
        <video
          src={project.image.src}
          muted
          loop
          autoPlay
          playsInline
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
        />
      ) : project.image.fit === "cover" ? (
        <Image
          src={project.image.items[0].src}
          alt=""
          fill
          sizes="28vw"
          className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      ) : (
        <Image
          src={project.image.src}
          alt=""
          fill
          sizes="28vw"
          className="bg-zinc-950 object-contain p-7 grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      )}
      <span className="absolute inset-0 bg-black/55 transition-colors duration-500 group-hover:bg-black/25" />
      <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/60 to-transparent px-5 pt-12 pb-5">
        <span className="mb-1 block font-mono text-[8px] tracking-[0.22em] text-zinc-500 uppercase">
          {side === "left" ? "Previous" : "Next"}
        </span>
        <span className="font-kanit block truncate text-sm font-medium text-white/75">
          {project.title}
        </span>
      </span>
    </button>
  );
}

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [transitionKey, setTransitionKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const project = PROJECTS[activeIndex];
  const previousProject =
    PROJECTS[(activeIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(activeIndex + 1) % PROJECTS.length];

  const showProject = (index: number, nextDirection: "next" | "previous") => {
    const normalized = (index + PROJECTS.length) % PROJECTS.length;
    if (normalized === activeIndex) return;
    setDirection(nextDirection);
    setActiveIndex(normalized);
    setTransitionKey((current) => current + 1);
  };

  const previous = () => showProject(activeIndex - 1, "previous");
  const next = () => showProject(activeIndex + 1, "next");

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
        const distance = touchStartX.current - endX;
        touchStartX.current = null;
        if (Math.abs(distance) < 55) return;
        if (distance > 0) next();
        else previous();
      }}
      className="project-carousel focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
    >
      <div className="flex flex-col gap-6 px-1 py-5 sm:px-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <p
            aria-live="polite"
            className="font-mono text-xs tracking-[0.24em] text-zinc-400"
          >
            <span className="text-white">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-zinc-700">/</span>
            {String(PROJECTS.length).padStart(2, "0")}
          </p>
          <span className="h-px w-10 bg-white/15" />
          <p className="max-w-55 truncate text-[10px] font-medium tracking-[0.2em] text-zinc-500 uppercase sm:max-w-none">
            {project.title}
          </p>
        </div>

        <div className="flex items-center justify-between gap-5 lg:justify-end">
          <div className="flex items-center gap-2" aria-label="Choose project">
            {PROJECTS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  showProject(index, index > activeIndex ? "next" : "previous")
                }
                aria-label={`Show project ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`relative h-1 overflow-hidden rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-12 bg-white/20"
                    : "w-5 bg-white/10 hover:bg-white/30"
                }`}
              >
                {index === activeIndex && (
                  <span className="absolute inset-y-0 left-0 w-full origin-left animate-[project-progress_650ms_cubic-bezier(0.16,1,0.3,1)_both] bg-white" />
                )}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous project"
              className="project-arrow group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.025] text-zinc-300 transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black active:scale-95"
            >
              <ArrowLeftIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="project-arrow group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.025] text-zinc-300 transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black active:scale-95"
            >
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="project-stage relative overflow-hidden px-1 py-10 sm:px-3 sm:py-12 lg:px-0 lg:py-20">
        <ProjectPreviewCard
          project={previousProject}
          side="left"
          onClick={previous}
        />
        <ProjectPreviewCard project={nextProject} side="right" onClick={next} />

        <div aria-hidden className="project-pedestal" />
        <div
          key={`${project.id}-${transitionKey}`}
          aria-label={`${project.title}, project ${activeIndex + 1} of ${PROJECTS.length}`}
          className={`project-slide relative z-10 mx-auto grid w-full items-start gap-10 lg:w-[82%] lg:grid-cols-[1.16fr_0.84fr] lg:gap-14 ${
            direction === "next"
              ? "project-slide-next"
              : "project-slide-previous"
          }`}
        >
          <div className="relative drop-shadow-[0_35px_70px_rgba(0,0,0,0.65)]">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-br from-white/15 via-transparent to-white/5 blur-2xl"
            />
            {project.image.fit === "video" ? (
              <div className="aspect-4/3 overflow-hidden rounded-2xl border border-white/15 bg-black">
                <video
                  src={project.image.src}
                  aria-label={project.image.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            ) : project.image.fit === "cover" ? (
              <div
                className={`grid aspect-4/3 overflow-hidden rounded-2xl ${
                  project.image.items.length > 1
                    ? "grid-cols-2 gap-1.5"
                    : "grid-cols-1"
                }`}
              >
                {project.image.items.map((img) => (
                  <ImageLightbox
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    triggerClassName="group relative block h-full w-full cursor-zoom-in overflow-hidden border border-white/15 text-left first:rounded-l-2xl last:rounded-r-2xl"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 40vw, 90vw"
                    />
                    <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIcon className="h-4 w-4" />
                    </span>
                  </ImageLightbox>
                ))}
              </div>
            ) : (
              <ImageLightbox
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                triggerClassName="group relative flex aspect-4/3 w-full cursor-zoom-in flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-10 text-center"
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  className="h-auto w-full max-w-55 object-contain"
                />
                {"caption" in project.image && project.image.caption && (
                  <p className="text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
                    {project.image.caption}
                  </p>
                )}
                <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIcon className="h-4 w-4" />
                </span>
              </ImageLightbox>
            )}
          </div>

          <div className="project-details flex flex-col gap-9 lg:max-h-[min(72vh,720px)] lg:overflow-y-auto lg:pr-3">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
                {project.tag}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-kanit text-3xl font-semibold text-white sm:text-4xl">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-medium tracking-wide text-sky-300">
                    {project.status}
                  </span>
                )}
              </div>
              {project.subtitle && (
                <p className="mt-2 text-sm text-zinc-500">{project.subtitle}</p>
              )}
            </div>

            <div className="flex flex-col gap-8">
              {project.highlights.map((h) => (
                <div key={h.label}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    {h.label}
                  </p>
                  <div className="group relative grid cursor-default select-none">
                    <p className="col-start-1 row-start-1 text-base leading-relaxed text-zinc-300 transition-opacity duration-500 ease-out group-hover:opacity-0 sm:text-lg">
                      {h.en}
                    </p>
                    <p className="font-kanit pointer-events-none col-start-1 row-start-1 text-base leading-relaxed text-zinc-300 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 sm:text-lg">
                      {h.th}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>

            {(project.github || project.youtube) && (
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
                  >
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
                  >
                    <YoutubeIcon className="h-4 w-4" />
                    Watch Demo
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-1 py-4 font-mono text-[9px] tracking-[0.2em] text-zinc-600 uppercase sm:px-3">
        <span>Use arrows or swipe</span>
        <span>Projects / Selected works</span>
      </div>
    </div>
  );
}
