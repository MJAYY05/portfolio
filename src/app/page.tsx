import ActivityShowcase from "@/components/ActivityShowcase";
import CertificatesGrid from "@/components/CertificatesGrid";
import ContactCTA from "@/components/ContactCTA";
import HeroAboutDeck from "@/components/HeroAboutDeck";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsList from "@/components/SkillsList";
import TechnicalStack from "@/components/TechnicalStack";

export default function Home() {
  return (
    <main id="top" className="flex-1 text-white">
      <HeroAboutDeck />

      <section
        id="skills"
        data-section="02"
        className="content-section scroll-mt-24 border-t border-white/10 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div data-reveal className="section-inner mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            02
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
        data-section="03"
        className="content-section scroll-mt-24 border-t border-white/10 px-4 py-32 sm:px-8 lg:px-10 xl:px-12"
      >
        <div data-reveal className="section-inner mx-auto max-w-[1500px]">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            03
          </p>
          <h2 className="font-kanit mb-12 text-3xl font-semibold sm:text-4xl">
            Project
          </h2>
          <ProjectShowcase />
        </div>
      </section>

      <section
        id="activity"
        data-section="04"
        className="content-section scroll-mt-24 border-t border-white/10 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div data-reveal className="section-inner mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            04
          </p>
          <h2 className="font-kanit mb-12 text-3xl font-semibold sm:text-4xl">
            Activity
          </h2>
          <ActivityShowcase />
        </div>
      </section>

      <section
        id="contact"
        data-section="05"
        className="content-section scroll-mt-24 border-t border-white/10 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div data-reveal className="section-inner mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
            05
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
