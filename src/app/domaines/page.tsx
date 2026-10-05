import type { Metadata } from "next";
import Link from "next/link";
import { Anchor, Truck, Banknote, ShieldCheck, Briefcase, Scale, Building2, UsersRound, ArrowRight, Check } from "lucide-react";
import { domaines } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = { title: "Domaines d'intervention" };

const iconMap: Record<string, React.ElementType> = { Anchor, Truck, Banknote, ShieldCheck, Briefcase, Scale, Building2, UsersRound };

export default function DomainesPage() {
  return (
    <>
      <PageHero
        label="Domaines d'intervention"
        title="Des expertises"
        accent="au service de votre situation"
        desc="8 domaines présentés clairement : maritime, transports, recouvrement, assurances, affaires, contentieux, immobilier/foncier et droit du travail. Un langage accessible, des actions concrètes."
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-8 lg:py-12">
        <Stagger className="grid gap-6">
          {domaines.map((d) => {
            const Icon = iconMap[d.icon] ?? Scale;
            return (
              <StaggerItem key={d.slug}>
                <div id={d.slug} className="scroll-mt-24 rounded-[24px] border border-zinc-200 bg-white overflow-hidden hover:border-[#C5A46B]/30 transition-colors">
                  <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-0">
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-3">
                        <span className="grid place-items-center size-11 rounded-xl bg-[#0B1E36] text-[#C5A46B]">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <h2 className="font-display text-[18px] lg:text-[20px] font-bold tracking-tight text-[#0B1E36]">{d.title}</h2>
                          <p className="text-xs font-medium tracking-wide uppercase text-zinc-400">{d.short}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-[14px] leading-7 text-zinc-600">{d.desc}</p>
                      <p className="mt-3 text-sm leading-6 text-zinc-600">
                        Le Cabinet vous conseille, sécurise vos actes et assure votre défense, de la prévention au contentieux, dans le respect de la déontologie.
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {d.points.map((p) => (
                          <li key={p} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                            <Check className="size-3.5 text-[#C5A46B]" /> {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link href="/rendez-vous" className="inline-flex items-center gap-2 rounded-full bg-[#0B1E36] px-5 py-2.5 text-sm font-semibold text-white">
                          Parler de votre dossier <ArrowRight className="size-4" />
                        </Link>
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-[#0B1E36]">
                          Nous contacter
                        </Link>
                      </div>
                    </div>
                    <div className="bg-[#F8F6F0] border-t lg:border-t-0 lg:border-l border-zinc-200 p-6 lg:p-8">
                      <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-zinc-400">Pour qui ?</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
                        <li>• Particuliers concernés par ce domaine</li>
                        <li>• Entreprises et opérateurs</li>
                        <li>• Institutions et partenaires</li>
                      </ul>
                      <p className="mt-5 text-[11px] font-bold tracking-[0.14em] uppercase text-zinc-400">Ce que nous faisons</p>
                      <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                        <li className="flex gap-2"><Check className="size-4 text-emerald-500 mt-0.5 shrink-0" /> Consultation & analyse de votre situation</li>
                        <li className="flex gap-2"><Check className="size-4 text-emerald-500 mt-0.5 shrink-0" /> Conseil stratégique et sécurisation contractuelle</li>
                        <li className="flex gap-2"><Check className="size-4 text-emerald-500 mt-0.5 shrink-0" /> Représentation devant les juridictions compétentes</li>
                      </ul>
                      <p className="mt-5 text-xs leading-5 text-zinc-400">
                        Chaque réponse reste générale et ne constitue pas une consultation personnalisée. Un échange avec le Cabinet reste nécessaire.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Famille / Autres */}
        <Reveal className="mt-6 rounded-[20px] border border-[#EDE8DE] bg-[#F8F6F0] p-6 lg:p-7">
          <h3 className="font-display text-[16px] font-bold text-[#0B1E36]">Droit de la famille & autres domaines</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Successions, séparations, obligations familiales — et plus largement, le Cabinet intervient dans d&apos;autres domaines selon vos besoins et les compétences disponibles. N&apos;hésitez pas à exposer votre situation.
          </p>
          <Link href="/rendez-vous" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0B1E36] px-6 py-3 text-sm font-semibold text-white">Prendre rendez-vous <ArrowRight className="size-4" /></Link>
        </Reveal>
      </section>
    </>
  );
}
