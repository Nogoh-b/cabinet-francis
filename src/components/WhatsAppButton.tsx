"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";
import { cabinet } from "@/lib/data";

const waNumber = "237697080892";
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Bonjour Cabinet EBIANG'NE, je souhaite obtenir des informations.")}`;

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="fixed bottom-[84px] right-4 lg:right-6 z-40 w-[320px] max-w-[calc(100vw-32px)] rounded-[20px] bg-white shadow-[0_16px_48px_rgba(11,30,54,0.18)] border border-zinc-200 overflow-hidden"
          >
            <div className="bg-[#0B1E36] px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">Parler au Cabinet</p>
                <p className="text-white/60 text-xs">Réponse rapide • Lun–Sam</p>
              </div>
              <button onClick={() => setOpen(false)} className="grid place-items-center size-8 rounded-full bg-white/10 text-white">
                <X className="size-4" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-4 py-3.5 text-white font-semibold hover:bg-[#1ebd5a] transition-colors"
              >
                <MessageCircle className="size-5" />
                Écrire sur WhatsApp
              </a>
              <a
                href={`tel:${cabinet.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3.5 font-semibold text-[#0B1E36] hover:bg-zinc-50 transition-colors"
              >
                <Phone className="size-5 text-[#C5A46B]" />
                Appeler {cabinet.phone}
              </a>
              <p className="text-xs text-zinc-500 text-center">Aucune donnée n&apos;est stockée sans votre consentement.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-5 right-4 lg:right-6 z-40 grid place-items-center size-[56px] rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)]"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-7" />}
      </motion.button>
    </>
  );
}
