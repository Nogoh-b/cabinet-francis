"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Scale, Clock3, Award } from "lucide-react";
import { cabinet } from "@/lib/data";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1E36]">
      {/* Background image */}
      <Image
        src={images.hero}
        alt=""
        fill
        priority
        className="object-cover opacity-[0.22]"
        sizes="100vw"
      />
      {/* Navy overlay to keep text readable */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#0B1E36]/85 via-[#0B1E36]/70 to-[#0B1E36]/60" />
      {/* subtle dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "22px 22px",
        }}
      />
      {/* gold + blue glows */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] size-[680px] rounded-full bg-[#C5A46B]/[0.10] blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-32 left-[-8%] size-[560px] rounded-full bg-[#1E4A7A]/[0.30] blur-[70px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center py-12 lg:py-[64px]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-white/85"
            >
              <span className="size-2 rounded-full bg-[#C5A46B] animate-pulse" />
              Sangmélima • Douala • Cameroun &nbsp;—&nbsp; Depuis 2022
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-[34px] lg:text-[52px] leading-[0.95] tracking-[-0.03em] text-white text-balance"
            >
              Cabinet d&apos;Avocats
              <br />
              <span className="text-[#C5A46B]">Francis EBIANG&apos;NE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-4 text-[13px] tracking-[0.18em] uppercase font-semibold text-white/60"
            >
              Conseil • Assistance • Défense • Contentieux
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-5 max-w-[560px] text-[18px] leading-7 text-white/80"
            >
              {cabinet.slogan}. Un cabinet moderne et rigoureux, au service des{" "}
              <span className="text-white font-medium">particuliers, entreprises et institutions</span> — en droit maritime,
              transports, assurances, recouvrement et droit des affaires.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                href="/rendez-vous"
                className="inline-flex items-center gap-2 rounded-full bg-[#C5A46B] px-7 py-3.5 text-sm font-bold tracking-wide text-[#0B1E36] hover:bg-[#D4B77A] transition-colors"
              >
                PRENDRE RENDEZ-VOUS <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/cabinet"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
              >
                Découvrir le cabinet
              </Link>
            </motion.div>

            {/* trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3 text-xs"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-white/75">
                <ShieldCheck className="size-3.5 text-[#C5A46B]" /> Confidentialité garantie
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-white/75">
                <Clock3 className="size-3.5 text-[#C5A46B]" /> Réponse sous 24h
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-white/75">
                <Award className="size-3.5 text-[#C5A46B]" /> Expertise OHADA
              </span>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-6"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#122B4A] to-[#0B1E36] p-6 lg:p-7 shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
              {/* inner gold border top */}
              <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-[#C5A46B]/40 to-transparent" />

              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-11 rounded-2xl bg-[#C5A46B] text-[#0B1E36]">
                  <Scale className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Cabinet structuré & disponible</p>
                  <p className="text-xs text-white/60">Sangmélima — 1, bd Paul Biya, BP 243</p>
                </div>
                <span className="ml-auto hidden lg:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Ouvert
                </span>
              </div>

              {/* stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "4+", v: "Domaines phares" },
                  { k: "6", v: "Professionnels" },
                  { k: "FR / EN", v: "Bilingue" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl bg-white/10 border border-white/10 p-4 text-center backdrop-blur">
                    <p className="font-display text-xl font-bold text-white">{s.k}</p>
                    <p className="text-[11px] leading-tight text-white/60 mt-1">{s.v}</p>
                  </div>
                ))}
              </div>

              {/* domains quick */}
              <div className="mt-6 rounded-2xl bg-white p-4 lg:p-5">
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-zinc-400">Domaines prioritaires</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Droit maritime", "Transports", "Recouvrement", "Assurances", "Affaires", "Contentieux"].map((t) => (
                    <span key={t} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href="/domaines" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1E36] hover:text-[#C5A46B]">
                  Voir tous les domaines <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* bottom bar */}
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#C5A46B] px-4 py-3">
                <div className="text-sm leading-tight">
                  <p className="font-bold text-[#0B1E36]">Besoin d&apos;un conseil rapide ?</p>
                  <p className="text-xs text-[#0B1E36]/70">Par téléphone ou WhatsApp</p>
                </div>
                <a
                  href={`https://wa.me/237697080892`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0B1E36] px-4 py-2 text-xs font-bold text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* floating card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden lg:flex absolute -left-6 -bottom-4 items-center gap-3 rounded-2xl bg-white border border-zinc-200 shadow-xl px-4 py-3"
            >
              <span className="grid place-items-center size-9 rounded-xl bg-[#F5EEDB] text-[#8A7655]">
                <ShieldCheck className="size-5" />
              </span>
              <div className="text-xs leading-tight">
                <p className="font-bold text-zinc-900">Déontologie & confidentialité</p>
                <p className="text-zinc-500">Aucune donnée client publiée</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
