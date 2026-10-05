import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cabinet } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = { title: "Le Cabinet" };

export default function CabinetPage() {
  return (
    <>
      <PageHero
        label="Le Cabinet"
        title="Un cabinet"
        accent="au service de vos intérêts"
        desc="Créé en 2022 à Douala, installé à Sangmélima depuis septembre 2025. Une structure moderne, déontologique et à l'écoute."
      />

      {/* Histoire */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12">
          <Reveal>
            <h2 className="font-display text-[26px] lg:text-[32px] tracking-[-0.03em] text-[#0B1E36]">Notre histoire</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-7 text-zinc-600">
              <p>
                Le <strong className="text-zinc-900">Cabinet d&apos;Avocats Francis EBIANG&apos;NE</strong> est créé en{" "}
                <strong className="text-zinc-900">juillet 2022</strong>, initialement établi à <strong className="text-zinc-900">Douala</strong>,
                capitale économique du Cameroun.
              </p>
              <p>
                En <strong className="text-zinc-900">septembre 2025</strong>, le Cabinet s&apos;installe à{" "}
                <strong className="text-zinc-900">Sangmélima</strong> (1, boulevard Paul Biya, BP 243), afin d&apos;être au plus proche
                de sa clientèle du Sud et de renforcer son ancrage régional tout en conservant une activité nationale.
              </p>
              <p>{cabinet.presentation}</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { label: "Création", value: "2022" },
                { label: "Implantations", value: "Douala → Sangmélima" },
                { label: "Langues", value: "FR / EN" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-zinc-200 bg-[#F8F6F0] p-4 text-center">
                  <p className="font-display text-sm font-bold text-[#0B1E36]">{s.value}</p>
                  <p className="text-[11px] tracking-wide uppercase text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[24px] border border-zinc-200 bg-white p-6 lg:p-7">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-zinc-400">Frise</p>
            <ol className="mt-5 space-y-5 relative">
              <span className="absolute left-[11px] top-1 bottom-1 w-px bg-zinc-200" aria-hidden />
              {[
                { date: "Juillet 2022", text: "Création du Cabinet à Douala." },
                { date: "2022 — 2025", text: "Développement des activités : maritime, transports, recouvrement, assurances, affaires." },
                { date: "Septembre 2025", text: "Installation à Sangmélima, 1 bd Paul Biya — ouverture au public." },
                { date: "Aujourd'hui", text: "6 professionnels, accompagnement des particuliers, entreprises et institutions." },
              ].map((e) => (
                <li key={e.date} className="relative flex gap-4">
                  <span className="relative grid place-items-center size-6 rounded-full bg-[#0B1E36] text-[#C5A46B] shrink-0 ring-4 ring-white">
                    <span className="size-2 rounded-full bg-[#C5A46B]" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wide uppercase text-[#8A7655]">{e.date}</p>
                    <p className="text-sm leading-6 text-zinc-600">{e.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#F8F6F0] border-y border-[#EDE8DE]">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-10 lg:py-14">
          <Reveal>
            <h2 className="font-display text-[22px] lg:text-[28px] tracking-[-0.03em] text-[#0B1E36]">Notre vision</h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-zinc-600">{cabinet.vision}</p>
          </Reveal>
          <Stagger className="mt-8 grid sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {cabinet.method.map((step, i) => (
              <StaggerItem key={step}>
                <div className="rounded-2xl bg-white border border-zinc-200 p-5 text-center">
                  <span className="mx-auto grid place-items-center size-9 rounded-xl bg-[#0B1E36] text-white font-bold text-sm">{i + 1}</span>
                  <p className="mt-3 text-sm font-bold text-[#0B1E36]">{step}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Valeurs */}
      <section id="valeurs" className="mx-auto max-w-[1280px] px-5 lg:px-8 py-10 lg:py-14 scroll-mt-24">
        <Reveal>
          <h2 className="font-display text-[22px] lg:text-[28px] tracking-[-0.03em] text-[#0B1E36]">Nos valeurs</h2>
          <p className="mt-2 text-sm text-zinc-500">Les principes qui guident chaque dossier.</p>
        </Reveal>
        <Stagger className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cabinet.values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="font-display text-[16px] font-bold text-[#0B1E36]">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 flex flex-wrap gap-3">
          <Link href="/domaines" className="inline-flex items-center gap-2 rounded-full bg-[#0B1E36] px-6 py-3 text-sm font-semibold text-white">Nos domaines <ArrowRight className="size-4" /></Link>
          <Link href="/equipe" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-[#0B1E36]">Notre équipe <ArrowRight className="size-4" /></Link>
        </Reveal>
      </section>
    </>
  );
}
