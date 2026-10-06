import { Reveal } from "@/components/ui";

import Image from "next/image";
import { images } from "@/lib/images";

export default function PageHero({
  label,
  title,
  accent,
  desc,
  children,
  image,
}: {
  label: string;
  title: string;
  accent?: string;
  desc: string;
  children?: React.ReactNode;
  image?: string;
}) {
  const bg = image ?? images.hero;
  return (
    <section className="relative overflow-hidden bg-[#0B1E36]">
      <Image src={bg} alt="" fill className="object-cover opacity-[0.12]" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E36]/85 via-[#0B1E36]/70 to-[#0B1E36]/60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "22px 22px" }} />
      <div className="pointer-events-none absolute -top-24 right-[-6%] size-[560px] rounded-full bg-[#C5A46B]/10 blur-[70px]" />
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-12 lg:py-16 relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/70">
            <span className="size-1.5 rounded-full bg-[#C5A46B]" /> {label}
          </span>
          <h1 className="mt-4 font-display text-[32px] lg:text-[46px] leading-[0.95] tracking-[-0.03em] text-white text-balance">
            {title} {accent && <span className="text-[#C5A46B]">{accent}</span>}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-white/70">{desc}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
