"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Scale } from "lucide-react";
import { navLinks, cabinet } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top bar — coordonnées (desktop) */}
      <div className="hidden lg:block bg-[#0B1E36] text-white/75 text-[12.5px]">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <a href={`tel:${cabinet.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="size-3.5 text-[#C5A46B]" /> {cabinet.phone}
            </a>
            <span className="opacity-30">|</span>
            <a href={`tel:${cabinet.phone2.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{cabinet.phone2}</a>
            <a href={`mailto:${cabinet.email}`} className="hidden xl:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="size-3.5 text-[#C5A46B]" /> {cabinet.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-70">{cabinet.address}</span>
            <span className="opacity-30">|</span>
            <span className="hidden xl:inline">{cabinet.hours}</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-zinc-200 shadow-[0_4px_24px_rgba(11,30,54,0.08)]"
            : "bg-white border-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 flex items-center justify-between gap-4 h-[64px] lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <span className="grid place-items-center size-10 rounded-xl bg-[#0B1E36] text-[#C5A46B] group-hover:bg-[#14365A] transition-colors">
              <Scale className="size-5" />
            </span>
            <span className="leading-none whitespace-nowrap">
              <span className="block font-display font-bold text-[15px] lg:text-[16px] tracking-[-0.02em] text-[#0B1E36]">
                Cabinet EBIANG&apos;NE
              </span>
              <span className="block text-[10px] tracking-[0.12em] uppercase text-zinc-500 font-medium mt-0.5">
                Avocats • Cameroun
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-2.5 py-2 text-[13px] font-medium tracking-[-0.01em] rounded-full whitespace-nowrap transition-colors ${
                    active ? "text-[#0B1E36]" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[#F5EEDB] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-2">
            <Link
              href="/rendez-vous"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0B1E36] px-4 lg:px-5 py-2.5 text-[12.5px] font-bold tracking-wide text-white hover:bg-[#14365A] transition-colors whitespace-nowrap"
            >
              <span className="size-1.5 rounded-full bg-[#C5A46B] animate-pulse" />
              PRENDRE RDV
            </Link>
            <button
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((v) => !v)}
              className="xl:hidden grid place-items-center size-10 rounded-full border border-zinc-200 bg-white"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="xl:hidden absolute inset-x-0 top-[64px] lg:top-[72px] bg-white border-t border-zinc-100 shadow-2xl max-h-[calc(100dvh-64px)] overflow-auto"
            >
              <nav className="px-5 py-6 flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      className={`flex items-center justify-between py-3.5 border-b border-zinc-100 text-[16px] font-medium ${
                        pathname === l.href ? "text-[#0B1E36]" : "text-zinc-700"
                      }`}
                    >
                      {l.label}
                      <span className="text-zinc-300">›</span>
                    </Link>
                  </motion.div>
                ))}
                <div className="grid grid-cols-2 gap-3 pt-6">
                  <Link href="/rendez-vous" className="rounded-full bg-[#0B1E36] text-white text-center py-3.5 text-sm font-bold">
                    Prendre RDV
                  </Link>
                  <a href={`tel:${cabinet.phone.replace(/\s/g, "")}`} className="rounded-full border border-zinc-200 text-center py-3.5 text-sm font-bold text-[#0B1E36]">
                    Appeler
                  </a>
                </div>
                <div className="pt-6 text-sm text-zinc-500 space-y-1">
                  <p className="flex items-center gap-2"><Phone className="size-4 text-[#C5A46B]" /> {cabinet.phone}</p>
                  <p className="flex items-center gap-2"><Mail className="size-4 text-[#C5A46B]" /> {cabinet.email}</p>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
