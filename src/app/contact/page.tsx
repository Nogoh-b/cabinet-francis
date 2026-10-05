import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cabinet } from "@/lib/data";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Parlons de"
        accent="votre situation"
        desc="Une question, un dossier, une urgence ? Écrivez-nous — réponse sous 24h ouvrées. Tous les champs marqués * sont requis."
      />

      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[1.35fr_0.85fr] gap-6 lg:gap-8 items-start">
          <Reveal className="rounded-[24px] border border-zinc-200 bg-white p-6 lg:p-8">
            <h2 className="font-display text-lg font-bold tracking-tight text-[#0B1E36]">Envoyer un message</h2>
            <p className="mt-1 text-sm text-zinc-500">Formulaire sécurisé — envoi par e-mail vers {cabinet.email}</p>
            <div className="mt-6">
              <ContactForm variant="contact" />
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal className="rounded-[24px] border border-zinc-200 bg-[#F8F6F0] p-6 lg:p-7">
              <h3 className="font-display font-bold text-[#0B1E36]">Coordonnées</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="grid place-items-center size-10 rounded-xl bg-white border border-zinc-200 text-[#C5A46B] shrink-0"><MapPin className="size-4" /></span>
                  <span className="pt-1.5 leading-6 text-zinc-700">
                    <strong className="text-zinc-900">{cabinet.name}</strong>
                    <br />
                    {cabinet.address}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="grid place-items-center size-10 rounded-xl bg-white border border-zinc-200 text-[#C5A46B] shrink-0"><Phone className="size-4" /></span>
                  <span className="pt-1">
                    <a href={`tel:${cabinet.phone.replace(/\s/g, "")}`} className="font-semibold text-[#0B1E36] hover:text-[#C5A46B]">{cabinet.phone}</a>
                    <br />
                    <a href={`tel:${cabinet.phone2.replace(/\s/g, "")}`} className="font-semibold text-[#0B1E36] hover:text-[#C5A46B]">{cabinet.phone2}</a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="grid place-items-center size-10 rounded-xl bg-white border border-zinc-200 text-[#C5A46B] shrink-0"><Mail className="size-4" /></span>
                  <a href={`mailto:${cabinet.email}`} className="pt-2 font-medium text-[#0B1E36] hover:text-[#C5A46B]">{cabinet.email}</a>
                </li>
                <li className="flex gap-3">
                  <span className="grid place-items-center size-10 rounded-xl bg-white border border-zinc-200 text-[#C5A46B] shrink-0"><Clock className="size-4" /></span>
                  <span className="pt-2 text-zinc-700">{cabinet.hours}</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href={`https://wa.me/237697080892?text=${encodeURIComponent("Bonjour Cabinet EBIANG'NE,")}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1ebd5a]">
                  WhatsApp
                </a>
                <a href={`tel:${cabinet.phone.replace(/\s/g, "")}`} className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1E36] hover:bg-zinc-50">
                  Appeler
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08} id="carte" className="scroll-mt-24 rounded-[24px] border border-zinc-200 bg-white overflow-hidden">
              <div className="p-6 pb-3">
                <h3 className="font-display font-bold text-[#0B1E36]">Plan d&apos;accès</h3>
                <p className="text-xs text-zinc-500">1, boulevard Paul Biya — Sangmélima</p>
              </div>
              <div className="h-[280px] bg-zinc-100">
                <iframe
                  title="Carte — Cabinet EBIANG'NE, Sangmélima"
                  src="https://www.google.com/maps?q=Sangm%C3%A9lima%20Cameroun&z=14&output=embed"
                  className="size-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="px-6 py-3 flex items-center justify-between">
                <p className="text-xs text-zinc-500">Google Maps — itinéraire en un clic</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Sangmélima+Cameroun" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0B1E36] hover:text-[#C5A46B]">
                  Ouvrir dans Google Maps →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
