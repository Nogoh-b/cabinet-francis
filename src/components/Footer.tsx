import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Clock } from "lucide-react";
import { cabinet, navLinks, domaines } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0B1E36] text-white">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Top */}
        <div className="grid gap-10 lg:gap-8 py-12 lg:py-16 lg:grid-cols-[1.4fr_0.9fr_1.1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid place-items-center size-11 rounded-xl bg-white/10 border border-white/15 text-[#C5A46B]">
                <Scale className="size-6" />
              </span>
              <span className="leading-none">
                <span className="block font-display font-bold text-[17px] tracking-tight">Cabinet EBIANG&apos;NE</span>
                <span className="block text-[11px] tracking-[0.14em] uppercase text-white/60 font-medium">Avocats • Cameroun</span>
              </span>
            </Link>
            <p className="mt-5 text-[14px] leading-6 text-white/70 max-w-sm">
              {cabinet.slogan}. Un cabinet moderne, rigoureux et accessible, au service des particuliers, entreprises et institutions.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
              <span className="size-2 rounded-full bg-[#C5A46B]" /> Depuis 2022 • Douala → Sangmélima
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-[15px] font-semibold tracking-tight">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/rendez-vous" className="text-sm font-semibold text-[#C5A46B] hover:text-white transition-colors">
                  Prendre rendez-vous →
                </Link>
              </li>
            </ul>
          </div>

          {/* Domaines */}
          <div>
            <h4 className="font-display text-[15px] font-semibold tracking-tight">Domaines</h4>
            <ul className="mt-4 space-y-2.5">
              {domaines.slice(0, 6).map((d) => (
                <li key={d.slug}>
                  <Link href={`/domaines#${d.slug}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {d.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/domaines" className="text-sm text-white/50 hover:text-white">
                  Voir tous les domaines →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[15px] font-semibold tracking-tight">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="size-4 mt-0.5 shrink-0 text-[#C5A46B]" />
                <span>{cabinet.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 mt-0.5 shrink-0 text-[#C5A46B]" />
                <span>
                  {cabinet.phone}
                  <br />
                  {cabinet.phone2}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 mt-0.5 shrink-0 text-[#C5A46B]" />
                <a href={`mailto:${cabinet.email}`} className="hover:text-white">
                  {cabinet.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="size-4 mt-0.5 shrink-0 text-[#C5A46B]" />
                <span>{cabinet.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {cabinet.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <span className="opacity-30">•</span>
            <Link href="/mentions-legales#confidentialite" className="hover:text-white">Confidentialité</Link>
            <span className="opacity-30">•</span>
            <span>Design sobre & institutionnel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
