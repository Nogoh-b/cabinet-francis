import { Reveal } from "@/components/ui";

export default function PageHero({
  label,
  title,
  accent,
  desc,
  children,
}: {
  label: string;
  title: string;
  accent?: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-[#0B1E36] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "22px 22px" }} />
      <div className="pointer-events-none absolute -top-24 right-[-6%] size-[560px] rounded-full bg-[#C5A46B]/10 blur-[70px]" />
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-10 lg:py-14 relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/70">
            <span className="size-1.5 rounded-full bg-[#C5A46B]" /> {label}
          </span>
          <h1 className="mt-4 font-display text-[30px] lg:text-[44px] leading-[0.95] tracking-[-0.03em] text-white text-balance">
            {title} {accent && <span className="text-[#C5A46B]">{accent}</span>}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/65">{desc}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
