import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { actualites } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Stagger, StaggerItem, Reveal } from "@/components/ui";

export const metadata: Metadata = { title: "Actualités & Publications" };

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        label="Actualités & Publications"
        title="Actualités"
        accent="juridiques"
        desc="Analyses, explications de procédures et informations pratiques sur l'évolution du droit camerounais. Une rubrique pensée pour le référencement et surtout pour vous être utile."
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-8 lg:py-12">
        <Stagger className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {actualites.map((a) => (
            <StaggerItem key={a.slug}>
              <article id={a.slug} className="scroll-mt-24 rounded-[24px] border border-zinc-200 bg-white overflow-hidden hover:border-[#C5A46B]/30 hover:shadow-[0_8px_28px_rgba(11,30,54,0.08)] transition-all flex flex-col h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#0B1E36] to-[#C5A46B]" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-[#F5EEDB] border border-[#EDE8DE] px-2.5 py-1 font-semibold text-[#8A7655]">{a.category}</span>
                    <span className="inline-flex items-center gap-1 text-zinc-400"><Calendar className="size-3.5" /> {a.date}</span>
                    <span className="inline-flex items-center gap-1 text-zinc-400"><Clock className="size-3.5" /> {a.readTime}</span>
                  </div>
                  <h2 className="mt-3 font-display text-[17px] font-bold leading-tight tracking-tight text-[#0B1E36]">{a.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 flex-1">{a.excerpt}</p>
                  <p className="mt-4 text-xs leading-5 text-zinc-400">
                    Article d&apos;information générale — ne constitue pas une consultation juridique personnalisée.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1E36]">
                    Lire l&apos;article <ArrowRight className="size-4 text-[#C5A46B]" />
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Newsletter placeholder */}
        <Reveal className="mt-8 rounded-[20px] border border-zinc-200 bg-[#F8F6F0] p-6 lg:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-[#0B1E36]">Newsletter juridique (à venir)</h3>
            <p className="text-sm text-zinc-500">Recevez nos analyses et actualités. Phase 2 du projet.</p>
          </div>
          <span className="rounded-full bg-white border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-500">Bientôt disponible</span>
        </Reveal>

        <Reveal className="mt-6 text-center">
          <Link href="/conseils" className="inline-flex items-center gap-2 rounded-full bg-[#0B1E36] px-6 py-3 text-sm font-semibold text-white">Voir les conseils juridiques <ArrowRight className="size-4" /></Link>
        </Reveal>
      </section>
    </>
  );
}
