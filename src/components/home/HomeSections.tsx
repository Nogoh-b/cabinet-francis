"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Anchor,
  Truck,
  Banknote,
  ShieldCheck,
  Briefcase,
  Scale,
  Building2,
  UsersRound,
  Check,
  Quote,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import { domaines, equipe, cabinet, actualites } from "@/lib/data";
import { images } from "@/lib/images";
import { Reveal, Stagger, StaggerItem, SectionLabel } from "@/components/ui";

const iconMap: Record<string, React.ElementType> = {
  Anchor,
  Truck,
  Banknote,
  ShieldCheck,
  Briefcase,
  Scale,
  Building2,
  UsersRound,
};

// Maps domaine slug → image
const domaineImages: Record<string, string> = {
  "droit-maritime": images.domaines.maritime,
  "droit-transports": images.domaines.transport,
  "recouvrement-creances": images.domaines.recouvrement,
  "droit-assurances": images.domaines.assurances,
  "droit-affaires": images.domaines.affaires,
  "contentieux": images.domaines.contentieux,
  "immobilier-foncier": images.domaines.immobilier,
  "droit-travail": images.domaines.travail,
};

/* ── Présentation ── */
export function Presentation() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-start">
        <Reveal>
          <SectionLabel>Votre partenaire juridique au Cameroun</SectionLabel>
          <h2 className="mt-4 font-display text-[30px] lg:text-[42px] leading-[1.05] tracking-[-0.03em] text-[#0B1E36] text-balance">
            Un cabinet moderne,
            <br />
            <span className="text-[#C5A46B]">rigoureux et accessible</span>
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-zinc-600">{cabinet.history}</p>
          <p className="mt-3 text-[16px] leading-7 text-zinc-600">{cabinet.vision}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/cabinet" className="inline-flex items-center gap-2 rounded-full bg-[#0B1E36] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#14365A] transition-colors">
              En savoir plus <ArrowRight className="size-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-[15px] font-semibold text-[#0B1E36] hover:bg-zinc-50">
              Nos services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="space-y-4">
          {/* Photo bureau */}
          <div className="relative overflow-hidden rounded-[20px] border border-zinc-200 h-[220px] lg:h-[260px]">
            <Image src={images.bureau} alt="Bureau du cabinet — espace de travail sobre et professionnel" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 560px" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-[#0B1E36] shadow">
              Sangmélima • Bureau principal
            </span>
          </div>

          {/* Méthode */}
          <div className="rounded-[20px] border border-zinc-200 bg-white p-5 lg:p-6">
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-zinc-400">Notre méthode</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cabinet.method.map((step, i) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-[#0B1E36] px-3.5 py-1.5 text-xs font-bold text-white">{step}</span>
                  {i < cabinet.method.length - 1 && <ChevronRight className="size-3.5 text-zinc-300" />}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[15px] leading-6 text-zinc-600">
              Chaque dossier suit un parcours clair : écoute approfondie, analyse juridique, conseil stratégique et suivi jusqu&apos;au dénouement.
            </p>
          </div>

          {/* Valeurs */}
          <div className="grid grid-cols-2 gap-3">
            {cabinet.values.slice(0, 4).map((v) => (
              <div key={v.title} className="rounded-2xl border border-zinc-200 bg-[#F8F6F0] p-4">
                <p className="text-[15px] font-bold text-[#0B1E36]">{v.title}</p>
                <p className="mt-1 text-[13px] leading-5 text-zinc-500">{v.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/cabinet#valeurs" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0B1E36]">
            Toutes nos valeurs <ArrowRight className="size-4 text-[#C5A46B]" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Domaines ── */
export function Domaines() {
  return (
    <section className="bg-[#F8F6F0] border-y border-[#EDE8DE]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-12 lg:py-16">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <SectionLabel>Domaines d&apos;intervention</SectionLabel>
            <h2 className="mt-3 font-display text-[28px] lg:text-[38px] leading-none tracking-[-0.03em] text-[#0B1E36]">
              Une expertise ciblée, <span className="text-[#C5A46B]">des réponses concrètes</span>
            </h2>
          </div>
          <Link href="/domaines" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-white border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-[#0B1E36] hover:bg-zinc-50">
            Voir tous les domaines <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Stagger className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {domaines.slice(0, 8).map((d) => {
            const Icon = iconMap[d.icon] ?? Scale;
            const img = domaineImages[d.slug];
            return (
              <StaggerItem key={d.slug}>
                <Link
                  href={`/domaines#${d.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[20px] bg-white border border-zinc-200 hover:border-[#C5A46B]/40 hover:shadow-[0_8px_28px_rgba(11,30,54,0.08)] transition-all h-full"
                >
                  <div className="relative h-[132px] overflow-hidden bg-zinc-100">
                    {img && (
                      <Image
                        src={img}
                        alt={d.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                    <span className="absolute bottom-3 left-3 grid place-items-center size-10 rounded-xl bg-white text-[#0B1E36] shadow-lg ring-1 ring-black/5 group-hover:bg-[#0B1E36] group-hover:text-[#C5A46B] transition-colors">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <div className="p-5 lg:p-6 flex flex-col flex-1">
                    <h3 className="font-display text-[17px] font-bold leading-tight tracking-tight text-[#0B1E36] line-clamp-2">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-zinc-500 line-clamp-3">{d.desc}</p>
                    <ul className="mt-3 space-y-1">
                      {d.points.slice(0, 3).map((p) => (
                        <li key={p} className="flex items-center gap-1.5 text-xs text-zinc-500">
                          <Check className="size-3.5 text-[#C5A46B] shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0B1E36] group-hover:text-[#C5A46B]">
                      En savoir plus <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-6 flex lg:hidden justify-center">
          <Link href="/domaines" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-[#0B1E36]">
            Voir tous les domaines <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Pourquoi nous choisir ── */
export function Pourquoi() {
  const items = [
    { title: "Expertise", desc: "Maritime, transports, assurances, recouvrement et affaires : des domaines maîtrisés." },
    { title: "Écoute", desc: "Chaque situation est unique. Nous prenons le temps de comprendre." },
    { title: "Confidentialité", desc: "Vos données et vos dossiers restent strictement protégés." },
    { title: "Rigueur", desc: "Analyses solides, actes précis, stratégie documentée." },
    { title: "Réactivité", desc: "Des réponses rapides et un suivi sans délai." },
    { title: "Défense", desc: "La défense de vos intérêts au cœur de notre engagement." },
  ];
  return (
    <section className="relative overflow-hidden bg-[#0B1E36]">
      <Image
        src={images.hero}
        alt=""
        fill
        className="object-cover opacity-[0.08]"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute -right-20 -top-20 size-[520px] rounded-full bg-[#C5A46B]/10 blur-[60px]" />
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-12 lg:py-16 relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-[0.14em] uppercase text-white/70">
            <span className="size-1.5 rounded-full bg-[#C5A46B]" /> Pourquoi nous choisir ?
          </span>
          <h2 className="mt-4 font-display text-[28px] lg:text-[38px] leading-none tracking-[-0.03em] text-white">
            La défense de vos intérêts,
            <br />
            <span className="text-[#C5A46B]">au cœur de notre engagement</span>
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <StaggerItem key={it.title}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <p className="font-display text-[16px] font-bold text-white">{it.title}</p>
                <p className="mt-1.5 text-[15px] leading-6 text-white/60">{it.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ── Équipe ── */
export function Equipe() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-12 lg:py-16">
      <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <SectionLabel>Notre équipe</SectionLabel>
          <h2 className="mt-3 font-display text-[28px] lg:text-[38px] leading-none tracking-[-0.03em] text-[#0B1E36]">
            Des professionnels à votre écoute
          </h2>
          <p className="mt-2 text-[15px] text-zinc-500">6 professionnels — Avocats et juristes collaborateurs</p>
        </div>
        <Link href="/equipe" className="hidden lg:inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1E36] hover:bg-zinc-50">
          Voir toute l&apos;équipe <ArrowRight className="size-4" />
        </Link>
      </Reveal>

      <Stagger className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {equipe.map((m, idx) => (
          <StaggerItem key={m.name}>
            <div className="group rounded-[20px] border border-zinc-200 bg-white overflow-hidden hover:border-[#C5A46B]/30 hover:shadow-[0_8px_28px_rgba(11,30,54,0.08)] transition-all">
              <div className="relative h-[148px] overflow-hidden bg-zinc-100">
                <Image
                  src={images.team[idx] ?? images.team[0]}
                  alt={m.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/55 via-transparent to-transparent" />
                <div className="absolute -bottom-0 left-4 flex items-end gap-3 pb-3">
                  <span className="grid place-items-center size-14 rounded-2xl bg-[#C5A46B] text-[#0B1E36] font-display font-extrabold text-base shadow-lg ring-4 ring-white">
                    {m.initials}
                  </span>
                  <span className="mb-2 rounded-full bg-white/90 backdrop-blur border border-white/60 px-2.5 py-1 text-[11px] font-semibold text-[#0B1E36] shadow">
                    {m.role.split("—")[0].trim()}
                  </span>
                </div>
              </div>
              <div className="pt-5 pb-5 px-5">
                <h3 className="font-display text-[16px] font-bold leading-tight text-[#0B1E36]">{m.name}</h3>
                <p className="mt-1 text-xs font-medium text-[#8A7655]">{m.role}</p>
                <p className="mt-3 text-[14px] leading-6 text-zinc-500 line-clamp-3">{m.bio}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-6 flex lg:hidden justify-center">
        <Link href="/equipe" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-[#0B1E36]">
          Voir toute l&apos;équipe <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

/* ── Actualités ── */
export function Actualites() {
  return (
    <section className="bg-[#F8F6F0] border-y border-[#EDE8DE]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-12 lg:py-16">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <SectionLabel>Actualités & Publications</SectionLabel>
            <h2 className="mt-3 font-display text-[28px] lg:text-[38px] leading-none tracking-[-0.03em] text-[#0B1E36]">Décryptages juridiques utiles</h2>
          </div>
          <Link href="/actualites" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-white border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-[#0B1E36] hover:bg-zinc-50">
            Toutes les actualités <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Stagger className="mt-8 grid lg:grid-cols-3 gap-4 lg:gap-5">
          {actualites.map((a, idx) => (
            <StaggerItem key={a.slug}>
              <Link href={`/actualites#${a.slug}`} className="group flex flex-col rounded-[20px] bg-white border border-zinc-200 overflow-hidden hover:border-[#C5A46B]/30 hover:shadow-[0_8px_28px_rgba(11,30,54,0.08)] transition-all h-full">
                <div className="relative h-[160px] overflow-hidden bg-zinc-100">
                  <Image src={images.actus[idx] ?? images.actus[0]} alt={a.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-xs font-semibold text-[#0B1E36] shadow">
                    {a.category}
                  </span>
                </div>
                <div className="p-5 lg:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span>{a.date} • {a.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-display text-[17px] font-bold leading-tight tracking-tight text-[#0B1E36] group-hover:text-[#14365A] line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-zinc-500 line-clamp-2 flex-1">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0B1E36] group-hover:text-[#C5A46B]">
                    Lire l&apos;article <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-6 flex lg:hidden justify-center">
          <Link href="/actualites" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-[#0B1E36]">
            Toutes les actualités <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Contact CTA ── */
export function ContactCTA() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-12 lg:py-16">
      <Reveal className="overflow-hidden rounded-[28px] bg-[#0B1E36] relative">
        <div className="pointer-events-none absolute -right-16 -top-16 size-[420px] rounded-full bg-[#C5A46B]/10 blur-[50px]" />
        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-8 p-6 lg:p-10">
          <div>
            <h2 className="font-display text-[26px] lg:text-[36px] leading-none tracking-[-0.03em] text-white">
              Besoin d&apos;un <span className="text-[#C5A46B]">accompagnement juridique ?</span>
            </h2>
            <p className="mt-3 text-[16px] leading-6 text-white/65 max-w-lg">
              Exposez votre situation en quelques lignes. Nous vous répondons sous 24h ouvrées et vous orientons vers la démarche la plus adaptée.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/rendez-vous" className="inline-flex items-center gap-2 rounded-full bg-[#C5A46B] px-6 py-3 text-[15px] font-bold text-[#0B1E36] hover:bg-[#D4B77A] transition-colors">
                Prendre rendez-vous <ArrowRight className="size-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white hover:bg-white/15">
                Nous contacter
              </Link>
            </div>
            <div className="relative mt-8 hidden lg:block overflow-hidden rounded-2xl h-[160px] border border-white/10">
              <Image src={images.contact} alt="Façade cabinet — illustration" fill className="object-cover opacity-80" sizes="520px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/60 to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0B1E36]">Sangmélima • Bd Paul Biya</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 lg:p-6">
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-zinc-400">Coordonnées</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <span className="grid place-items-center size-9 rounded-xl bg-[#F5EEDB] text-[#8A7655] shrink-0"><MapPin className="size-4" /></span>
                <span className="pt-1.5 leading-5 text-zinc-700">{cabinet.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="grid place-items-center size-9 rounded-xl bg-[#F5EEDB] text-[#8A7655] shrink-0"><Phone className="size-4" /></span>
                <span className="pt-1.5 text-zinc-700">{cabinet.phone} • {cabinet.phone2}</span>
              </li>
              <li className="flex gap-3">
                <span className="grid place-items-center size-9 rounded-xl bg-[#F5EEDB] text-[#8A7655] shrink-0"><Mail className="size-4" /></span>
                <span className="pt-1.5 text-zinc-700">{cabinet.email}</span>
              </li>
              <li className="flex gap-3">
                <span className="grid place-items-center size-9 rounded-xl bg-[#F5EEDB] text-[#8A7655] shrink-0"><Clock className="size-4" /></span>
                <span className="pt-1.5 text-zinc-700">{cabinet.hours}</span>
              </li>
            </ul>
            <div className="mt-5 relative overflow-hidden rounded-xl border border-zinc-200 h-[160px]">
              <Image src={images.contact} alt="Cabinet — extérieur" fill className="object-cover" sizes="420px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0B1E36] shadow">Sangmélima — Bd Paul Biya</span>
                <Link href="/contact#carte" className="rounded-full bg-[#0B1E36] px-3 py-1.5 text-xs font-bold text-white">Carte →</Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Testimony mini */}
      <Reveal delay={0.1} className="mt-6 rounded-2xl border border-[#EDE8DE] bg-[#F8F6F0] p-5 lg:p-6 flex gap-4">
        <Quote className="size-8 text-[#C5A46B] shrink-0" />
        <div>
          <p className="text-[15px] leading-6 text-zinc-600 italic">
            « Un cabinet à l&apos;écoute, rigoureux et très réactif sur nos dossiers de recouvrement. Nous recommandons vivement. »
          </p>
          <p className="mt-2 text-xs font-semibold text-zinc-700">— Entreprise cliente, Douala <span className="font-normal text-zinc-400">(témoignage avec accord écrit)</span></p>
        </div>
      </Reveal>
    </section>
  );
}
