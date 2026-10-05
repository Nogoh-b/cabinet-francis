import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Scale } from "lucide-react";
import { equipe, cabinet } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = { title: "Notre équipe" };

export default function EquipePage() {
  return (
    <>
      <PageHero
        label="Notre équipe"
        title="Des professionnels"
        accent="à votre écoute"
        desc="Avocats et juristes collaborateurs : une équipe structurée, disponible et complémentaire, au service de vos dossiers."
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-8 lg:py-12">
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {equipe.map((m) => (
            <StaggerItem key={m.name}>
              <div className="rounded-[24px] border border-zinc-200 bg-white overflow-hidden hover:border-[#C5A46B]/30 hover:shadow-[0_12px_32px_rgba(11,30,54,0.08)] transition-all flex flex-col h-full">
                <div className="h-[140px] bg-gradient-to-br from-[#0B1E36] via-[#14365A] to-[#1E4A7A] relative">
                  <div className="absolute -bottom-9 left-6 grid place-items-center size-[72px] rounded-2xl bg-[#C5A46B] text-[#0B1E36] font-display font-extrabold text-xl shadow-lg ring-4 ring-white">
                    {m.initials}
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                    {m.role.split("—")[0].trim()}
                  </span>
                </div>
                <div className="pt-12 pb-6 px-6 flex flex-col flex-1">
                  <h2 className="font-display text-[16px] font-bold leading-tight text-[#0B1E36]">{m.name}</h2>
                  <p className="mt-1 text-xs font-semibold tracking-wide uppercase text-[#8A7655]">{m.role}</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 flex-1">{m.bio}</p>
                  <div className="mt-5 flex gap-2">
                    <a href={`mailto:${cabinet.email}`} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50">
                      <Mail className="size-3.5" /> Contacter
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 rounded-2xl border border-[#EDE8DE] bg-[#F8F6F0] p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-[#0B1E36]">Une photographie professionnelle de chaque membre pourra être intégrée</p>
            <p className="text-sm text-zinc-500">Placeholders actuels — remplacez par vos portraits HD (min. 1200 px, fond neutre).</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white border border-zinc-200 px-6 py-3 text-sm font-semibold text-[#0B1E36] shrink-0">
            Envoyer vos photos <Scale className="size-4 text-[#C5A46B]" />
          </Link>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <Link href="/rendez-vous" className="inline-flex items-center gap-2 rounded-full bg-[#0B1E36] px-7 py-3.5 text-sm font-bold text-white">
            Prendre rendez-vous avec l&apos;équipe <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
