import type { Metadata } from "next";
import { Clock, ShieldCheck, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/ui";

export const metadata: Metadata = { title: "Prendre rendez-vous" };

export default function RdvPage() {
  return (
    <>
      <PageHero
        label="Prendre rendez-vous"
        title="Demander"
        accent="une consultation"
        desc="Décrivez votre situation en quelques lignes : domaine, urgence, disponibilités. Le Cabinet vous répond rapidement et vous propose un créneau."
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[1.35fr_0.85fr] gap-6 lg:gap-8 items-start">
          <Reveal className="rounded-[24px] border border-zinc-200 bg-white p-6 lg:p-8">
            <h2 className="font-display text-lg font-bold tracking-tight text-[#0B1E36]">Formulaire de rendez-vous</h2>
            <p className="mt-1 text-sm text-zinc-500">Tous les champs marqués * sont requis — réponse sous 24h ouvrées.</p>
            <div className="mt-6">
              <ContactForm variant="rdv" />
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal className="rounded-[24px] border border-zinc-200 bg-[#F8F6F0] p-6 lg:p-7">
              <h3 className="font-display font-bold text-[#0B1E36]">Comment ça se passe ?</h3>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <li className="flex gap-3"><span className="grid place-items-center size-7 rounded-full bg-[#0B1E36] text-white text-xs font-bold shrink-0">1</span> Vous envoyez votre demande via le formulaire.</li>
                <li className="flex gap-3"><span className="grid place-items-center size-7 rounded-full bg-[#0B1E36] text-white text-xs font-bold shrink-0">2</span> Le Cabinet analyse et vous propose un créneau (téléphone, WhatsApp ou présentiel).</li>
                <li className="flex gap-3"><span className="grid place-items-center size-7 rounded-full bg-[#0B1E36] text-white text-xs font-bold shrink-0">3</span> Consultation, conseil et — si besoin — devis écrit d&apos;honoraires.</li>
              </ol>
              <div className="mt-6 grid gap-3">
                <span className="inline-flex items-center gap-2 rounded-xl bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  <Clock className="size-4 text-[#C5A46B]" /> Lun – Ven 8h–18h • Sam sur RDV
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  <ShieldCheck className="size-4 text-[#C5A46B]" /> Confidentialité & déontologie strictes
                </span>
                <a href="tel:+237697080892" className="inline-flex items-center gap-2 rounded-xl bg-white border border-zinc-200 px-4 py-3 text-sm font-semibold text-[#0B1E36]">
                  <Phone className="size-4 text-[#C5A46B]" /> +237 697 08 08 92 — Appel direct
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="text-xs leading-6 text-amber-800">
                <strong>Honoraires :</strong> chaque mission fait l&apos;objet d&apos;un devis écrit (consultation, forfait, temps passé ou convention). Aucun engagement sans validation préalable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
