const EN = `Hello, my name is Mac. I'm a fourth-year Computer Science student at Bangkok University's School of Information Technology and Innovation, where I focus on Data Science and Cybersecurity.

I'm currently looking for a cooperative education placement, the chance to work alongside an experienced team is what I want most at this stage, and it's the step I think will shape my career the most. Outside of coursework I'm continuously building my technical skills, and I'm preparing for the CompTIA Security+ certification. My main interests are SOC operations, penetration testing, and cyber threat analysis, and I plan to build my career in this field long term.`;

const TH = `สวัสดีครับ ผมชื่อแม็ก ปัจจุบันเป็นนักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศและนวัตกรรม มหาวิทยาลัยกรุงเทพ โดยมุ่งเน้นด้านวิทยาการข้อมูลและความมั่นคงปลอดภัยไซเบอร์ครับ

ตอนนี้ผมกำลังมองหาโอกาสฝึกงานสหกิจศึกษา สิ่งที่ผมต้องการมากที่สุดในช่วงนี้คือการได้ทำงานร่วมกับทีมที่มีประสบการณ์จริง เพราะผมเชื่อว่านี่คือก้าวที่จะกำหนดทิศทางอาชีพของผมมากที่สุด นอกเหนือจากการเรียนในห้องเรียน ผมพัฒนาทักษะทางเทคนิคของตัวเองอย่างต่อเนื่อง และปัจจุบันกำลังเตรียมสอบใบรับรอง CompTIA Security+ ครับ ผมสนใจงานด้าน SOC Operations, Penetration Testing และ Cyber Threat Analysis เป็นพิเศษ และตั้งใจจะเติบโตในสายงานนี้ในระยะยาวครับ`;

export default function AboutText() {
  return (
    <div className="group relative grid max-w-2xl cursor-default select-none">
      {[EN, TH].map((text, i) => (
        <div
          key={i}
          className={`col-start-1 row-start-1 space-y-5 text-base leading-relaxed text-zinc-300 transition-opacity duration-500 ease-out sm:text-lg ${
            i === 0
              ? "group-hover:opacity-0"
              : "pointer-events-none font-kanit opacity-0 group-hover:opacity-100"
          }`}
        >
          {text.split("\n\n").map((para, j) => (
            <p key={j}>{para}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
