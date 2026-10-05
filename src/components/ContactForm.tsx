"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Props = {
  variant?: "contact" | "rdv";
};

export default function ContactForm({ variant = "contact" }: Props) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate success — replace with real API / Formspree / Resend later
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 6000);
    }, 900);
  }

  const isRdv = variant === "rdv";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          >
            <CheckCircle2 className="size-5 shrink-0 text-emerald-600" />
            <span>
              <strong>Demande envoyée !</strong> Merci — le Cabinet vous répond sous 24h ouvrées.
              <br />
              <span className="text-emerald-700/80 text-xs">Démo locale : aucun e-mail n&apos;a été réellement envoyé. Branchez votre service d&apos;envoi (Resend, Formspree, etc.).</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500">Nom complet *</span>
          <input required name="name" placeholder="Votre nom" className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#C5A46B] focus:ring-2 focus:ring-[#C5A46B]/20 placeholder:text-zinc-400" />
        </label>
        <label className="block">
          <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500">Téléphone *</span>
          <input required name="phone" placeholder="+237 ..." className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#C5A46B] focus:ring-2 focus:ring-[#C5A46B]/20 placeholder:text-zinc-400" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500">E-mail *</span>
          <input required type="email" name="email" placeholder="vous@exemple.com" className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#C5A46B] focus:ring-2 focus:ring-[#C5A46B]/20 placeholder:text-zinc-400" />
        </label>
        <label className="block">
          <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500">Domaine concerné</span>
          <select name="domaine" defaultValue="" className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#C5A46B] focus:ring-2 focus:ring-[#C5A46B]/20 text-zinc-700">
            <option value="" disabled>Choisir…</option>
            <option>Droit maritime</option>
            <option>Droit des transports</option>
            <option>Recouvrement de créances</option>
            <option>Droit des assurances</option>
            <option>Droit des affaires</option>
            <option>Contentieux</option>
            <option>Immobilier / foncier</option>
            <option>Droit du travail</option>
            <option>Droit de la famille</option>
            <option>Autre</option>
          </select>
        </label>
      </div>

      {isRdv && (
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500">Mode de contact souhaité</span>
            <select name="mode" defaultValue="Téléphone" className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#C5A46B] focus:ring-2 focus:ring-[#C5A46B]/20">
              <option>Téléphone</option>
              <option>WhatsApp</option>
              <option>E-mail</option>
              <option>Rendez-vous physique</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500">Créneau souhaité</span>
            <input name="slot" placeholder="Ex : Lun 10h ou 'au plus tôt'" className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#C5A46B] focus:ring-2 focus:ring-[#C5A46B]/20 placeholder:text-zinc-400" />
          </label>
        </div>
      )}

      <label className="block">
        <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500">
          {isRdv ? "Brève description de votre situation *" : "Votre message *"}
        </span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder={isRdv ? "Décrivez brièvement votre situation, l'objet de votre demande et vos disponibilités…" : "Décrivez votre situation ou votre question…"}
          className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#C5A46B] focus:ring-2 focus:ring-[#C5A46B]/20 placeholder:text-zinc-400 resize-none"
        />
      </label>

      <label className="flex gap-2.5 text-xs leading-5 text-zinc-500">
        <input type="checkbox" required className="mt-1 accent-[#0B1E36]" />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la{" "}
          <a href="/mentions-legales#confidentialite" className="font-semibold text-[#0B1E36] underline decoration-[#C5A46B] underline-offset-2">
            politique de confidentialité
          </a>
          . Aucune information confidentielle relative à un dossier client n&apos;est publiée.
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0B1E36] px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-[#14365A] disabled:opacity-60 transition-colors"
      >
        {loading ? (
          <>
            <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" /> Envoi en cours…
          </>
        ) : (
          <>
            <Send className="size-4" /> {isRdv ? "ENVOYER MA DEMANDE" : "Envoyer mon message"}
          </>
        )}
      </button>

      <p className="flex gap-1.5 text-xs leading-5 text-zinc-400">
        <AlertCircle className="size-3.5 mt-0.5 shrink-0" />
        Aucune décision de justice avec nom de client n&apos;est publiée sans anonymisation et autorisation écrite.
      </p>
    </form>
  );
}
