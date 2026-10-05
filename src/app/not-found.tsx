import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 lg:py-28 text-center">
      <p className="inline-flex items-center gap-2 rounded-full border border-[#EDE8DE] bg-[#F8F6F0] px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-[#8A7655]">
        Erreur 404
      </p>
      <h1 className="mt-6 font-display text-[32px] lg:text-[48px] leading-none tracking-[-0.03em] text-[#0B1E36]">
        Page <span className="text-[#C5A46B]">introuvable</span>
      </h1>
      <p className="mt-4 mx-auto max-w-lg text-[15px] leading-7 text-zinc-500">
        La page que vous cherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou explorez nos domaines d&apos;intervention.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-[#0B1E36] px-6 py-3 text-sm font-semibold text-white">
          <ArrowLeft className="size-4" /> Retour à l&apos;accueil
        </Link>
        <Link href="/domaines" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-[#0B1E36]">
          <Search className="size-4" /> Voir les domaines
        </Link>
      </div>
    </div>
  );
}
