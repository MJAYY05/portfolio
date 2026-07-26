import ActivityCarousel from "@/components/ActivityCarousel";

const EN =
  "A truly inspiring experience — I got to see real projects from several teams applying AI to cybersecurity, and talked with professionals who were generous with their time and advice. It made me realize that what I'm studying is genuinely valuable and applicable in the real world. I came back with real motivation to keep pushing myself and grow even further.";

const TH =
  "เป็นงานที่ประทับใจมาก ได้เห็นทั้งโปรเจคจริงของหลายๆกลุ่ม ที่นำ AI มาใช้ใน Cybersecurity และได้คุยกับพี่ๆ ที่เปิดโอกาสและให้คำแนะนำดีมาก ทำให้รู้สึกว่าสิ่งที่เรียนอยู่มันมีคุณค่าและนำไปใช้ได้จริง กลับมาพร้อมแรงบันดาลใจที่อยากขวนขวายและพัฒนาตัวเองมากขึ้นกว่าเดิม";

export default function ActivityShowcase() {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-br from-white/15 via-transparent to-white/5 blur-2xl"
        />
        <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl border border-white/15">
          <ActivityCarousel />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            Featured Activity
          </p>
          <h3 className="font-kanit text-3xl font-semibold text-white sm:text-4xl">
            IT Expo Day
          </h3>
        </div>

        <div className="group relative grid cursor-default select-none">
          <p className="col-start-1 row-start-1 text-base leading-relaxed text-zinc-300 transition-opacity duration-500 ease-out group-hover:opacity-0 sm:text-lg">
            {EN}
          </p>
          <p className="font-kanit pointer-events-none col-start-1 row-start-1 text-base leading-relaxed text-zinc-300 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 sm:text-lg">
            {TH}
          </p>
        </div>
      </div>
    </div>
  );
}
