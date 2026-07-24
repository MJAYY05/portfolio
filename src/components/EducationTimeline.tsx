const SCHOOLS = [
  { name: "Chainatpittayakom School", period: "2017 – 2022", gpa: null },
  { name: "Bangkok University", period: "2023 – Now", gpa: "Cum GPA. 3.54" },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function EducationTimeline() {
  return (
    <div>
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
        Education
      </p>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        {SCHOOLS.map((school, i) => (
          <div key={school.name} className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="rounded-2xl border border-white/15 bg-white/3 px-6 py-5 transition-colors hover:border-white/30">
              <p className="font-kanit text-lg font-semibold text-white">
                {school.name}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{school.period}</p>
              {school.gpa && (
                <p className="font-kanit mt-3 border-t border-white/10 pt-3 text-sm font-medium tracking-wide text-zinc-300">
                  {school.gpa}
                </p>
              )}
            </div>
            {i < SCHOOLS.length - 1 && (
              <ArrowIcon className="h-5 w-5 shrink-0 rotate-90 text-zinc-600 sm:rotate-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
