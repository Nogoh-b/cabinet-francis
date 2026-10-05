"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "@/lib/data";
import PageHero from "@/components/PageHero";

export default function ConseilsPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        label="Conseils juridiques"
        title="Vous avez"
        accent="une question juridique ?"
        desc="Des éléments d'orientation clairs et accessibles, même sans connaissances juridiques. Chaque réponse reste générale : un échange avec le Cabinet reste nécessaire pour une analyse personnalisée."
      />

      <section className="mx-auto max-w-[860px] px-5 lg:px-8 py-8 lg:py-12">
        <div className="rounded-[24px] border border-zinc-200 bg-white overflow-hidden divide-y divide-zinc-100">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-zinc-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="hidden sm:grid place-items-center size-9 rounded-xl bg-[#F5EEDB] text-[#8A7655] shrink-0">
                      <HelpCircle className="size-4" />
                    </span>
                    <span className="font-semibold text-[14px] lg:text-[15px] leading-6 text-[#0B1E36]">{item.q}</span>
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="grid place-items-center size-8 rounded-full border border-zinc-200 bg-white shrink-0">
                    <ChevronDown className="size-4 text-zinc-500" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 lg:pl-[66px] pb-6 text-sm leading-7 text-zinc-600">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-xs leading-6 text-amber-800">
            <strong>Information importante :</strong> ces réponses sont fournies à titre d&apos;information générale et ne constituent pas une consultation juridique personnalisée. Seul un échange avec le Cabinet permet une analyse adaptée à votre situation.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/rendez-vous" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1E36] px-7 py-3.5 text-sm font-bold text-white">
            Poser votre question <ArrowRight className="size-4" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#0B1E36]">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
