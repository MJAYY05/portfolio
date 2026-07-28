import AboutText from "@/components/AboutText";
import ActivityShowcase from "@/components/ActivityShowcase";
import BibleVerse from "@/components/BibleVerse";
import CertificatesGrid from "@/components/CertificatesGrid";
import ContactCTA from "@/components/ContactCTA";
import EducationTimeline from "@/components/EducationTimeline";
import NameHover from "@/components/NameHover";
import ProfileCarousel from "@/components/ProfileCarousel";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsList from "@/components/SkillsList";
import SocialLinks from "@/components/SocialLinks";
import TechnicalStack from "@/components/TechnicalStack";

export default function Home() {
  return (
    <main id="top" className="flex-1 text-white">
      <section
        id="hero"
        className="relative flex min-h-screen scroll-mt-24 flex-col justify-center px-6 pt-32 pb-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
                Portfolio
              </p>
              <NameHover />
            </div>
            <BibleVerse />
            <SocialLinks />
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-transparent to-white/10 blur-2xl"
              />
              <div className="relative aspect-square w-64 overflow-hidden rounded-[2rem] border border-white/15 sm:w-80 lg:w-96">
                <ProfileCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            02
          </p>
          <h2 className="font-kanit mb-12 text-3xl font-semibold sm:text-4xl">
            About Me & Education
          </h2>

          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <AboutText />
            <EducationTimeline />
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            03
          </p>
          <h2 className="font-kanit mb-12 text-3xl font-semibold sm:text-4xl">
            Skills & Certificates
          </h2>
          <SkillsList />

          <p className="mt-20 mb-8 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            Technical Stack
          </p>
          <TechnicalStack />

          <p className="mt-20 mb-8 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            Certificates
          </p>
          <CertificatesGrid />
        </div>
      </section>

      <section
        id="project"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            04
          </p>
          <h2 className="font-kanit mb-12 text-3xl font-semibold sm:text-4xl">
            Project
          </h2>
          <ProjectShowcase />
        </div>
      </section>

      <section
        id="activity"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            05
          </p>
          <h2 className="font-kanit mb-12 text-3xl font-semibold sm:text-4xl">
            Activity
          </h2>
          <ActivityShowcase />
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            06
          </p>
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            Contact
          </p>
          <ContactCTA />
        </div>
      </section>
    </main>
  );
}
