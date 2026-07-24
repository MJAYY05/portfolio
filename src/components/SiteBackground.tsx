export default function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_85%_0%,rgba(255,255,255,0.22),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_0%_45%,rgba(255,255,255,0.16),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_75%_100%,rgba(255,255,255,0.18),transparent_65%)]" />
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent_80%)]" />
    </div>
  );
}
