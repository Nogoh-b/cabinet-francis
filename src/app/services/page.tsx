import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Users, Building2, Landmark } from "lucide-react";
import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = { title: "Nos services" };

const blocks = [
  { title: "Pour les particuliers", icon: Users, items: services.particuliers, desc: "Un accompagnement clair, de la consultation à la représentation devant les juridictions." },
  { title: "Pour les entreprises", icon: Building2, items: services.entreprises, desc: "Un conseil opérationnel : contrats, recouvrement, sociétés, transports, maritime et assurances." },
  { title: "Pour les institutions", icon: Landmark, items: services.institutions, desc: "Consultations, accompagnement contractuel, audits et assistance contentieuse." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Nos services"
        title="Ce que le Cabinet"
        accent="peut faire pour vous"
        desc="Que vous soyez particulier, entreprise ou institution, le Cabinet propose un accompagnement complet : conseil, rédaction d'actes, assistance et représentation."
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-8 lg:py-12">
        <Stagger className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {blocks.map((b) => (
            <StaggerItem key={b.title}>
              <div className="rounded-[24px] border border-zinc-200 bg-white p-6 lg:p-7 h-full flex flex-col">
                <span className="grid place-items-center size-11 rounded-xl bg-[#0B1E36] text-[#C5A46B]">
                  <b.icon className="size-5" />
                </span>
                <h2 className="mt-4 font-display text-[17px] font-bold tracking-tight text-[#0B1E36]">{b.title}</h2>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">{b.desc}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-zinc-700">
                      <Check className="size-4 text-emerald-500 shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
                <Link href="/rendez-vous" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F8F6F0] border border-[#EDE8DE] px-4 py-2.5 text-sm font-semibold text-[#0B1E36] hover:bg-[#F5EEDB]">
                  Demander un accompagnement <ArrowRight className="size-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 rounded-[20px] bg-[#0B1E36] p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-bold text-white">Honoraires — transparence</h3>
            <p className="mt-1 text-sm leading-6 text-white/65 max-w-xl">
              Consultation, forfait, temps passé ou convention d&apos;honoraires : chaque mission fait l&apos;objet d&apos;un devis écrit. Premier contact téléphonique d&apos;orientation possible.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#C5A46B] px-6 py-3 text-sm font-bold text-[#0B1E36] shrink-0">
            Demander un devis <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
