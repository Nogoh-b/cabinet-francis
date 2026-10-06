import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Scale } from "lucide-react";
import { equipe, cabinet } from "@/lib/data";
import { images } from "@/lib/images";
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
          {equipe.map((m, idx) => (
            <StaggerItem key={m.name}>
              <div className="group rounded-[24px] border border-zinc-200 bg-white overflow-hidden hover:border-[#C5A46B]/30 hover:shadow-[0_12px_32px_rgba(11,30,54,0.08)] transition-all flex flex-col h-full">
                <div className="relative h-[168px] overflow-hidden bg-zinc-100">
                  <Image src={images.team[idx] ?? images.team[0]} alt={m.name} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/55 via-transparent to-transparent" />
                  <div className="absolute -bottom-0 left-4 flex items-end gap-3 pb-3">
                    <span className="grid place-items-center size-14 rounded-2xl bg-[#C5A46B] text-[#0B1E36] font-display font-extrabold text-base shadow-lg ring-4 ring-white">{m.initials}</span>
                    <span className="mb-2 rounded-full bg-white/90 backdrop-blur border border-white/60 px-2.5 py-1 text-[11px] font-semibold text-[#0B1E36] shadow">{m.role.split("—")[0].trim()}</span>
                  </div>
                </div>
                <div className="pt-5 pb-6 px-6 flex flex-col flex-1">
                  <h2 className="font-display text-[16px] font-bold leading-tight text-[#0B1E36]">{m.name}</h2>
                  <p className="mt-1 text-xs font-semibold tracking-wide uppercase text-[#8A7655]">{m.role}</p>
                  <p className="mt-3 text-[14px] leading-6 text-zinc-600 flex-1">{m.bio}</p>
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
