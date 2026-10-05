import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { cabinet } from "@/lib/data";

export const metadata: Metadata = { title: "Mentions légales & Confidentialité" };

export default function MentionsPage() {
  return (
    <>
      <PageHero
        label="Mentions légales"
        title="Mentions légales"
        accent="& confidentialité"
        desc="Informations légales et politique de confidentialité du site du Cabinet d'Avocats Francis EBIANG'NE."
      />

      <section className="mx-auto max-w-[860px] px-5 lg:px-8 py-8 lg:py-12">
        <div className="prose prose-zinc max-w-none prose-sm lg:prose-base prose-headings:font-display prose-headings:tracking-tight prose-headings:text-[#0B1E36] prose-a:text-[#0B1E36] prose-a:underline prose-a:decoration-[#C5A46B] prose-a:underline-offset-4">
          <Reveal className="rounded-[20px] border border-zinc-200 bg-white p-6 lg:p-8">
            <h2>Éditeur du site</h2>
            <p>
              <strong>{cabinet.name}</strong>
              <br />
              {cabinet.address}
              <br />
              Tél. : {cabinet.phone} • {cabinet.phone2}
              <br />
              E-mail : <a href={`mailto:${cabinet.email}`}>{cabinet.email}</a>
              <br />
              Création : {cabinet.created} — Barreau d&apos;appartenance et n° d&apos;inscription : à compléter.
            </p>

            <h2>Responsable de la publication</h2>
            <p>Me Francis EBIANG&apos;NE — Avocat Manager. À confirmer auprès du Cabinet.</p>

            <h2>Hébergement</h2>
            <p>
              Hébergeur à compléter (ex. Vercel, Hostinger, o2switch…). Le site est servi en <strong>HTTPS</strong> avec certificat SSL.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus (textes, visuels, marques) est protégé. Toute reproduction sans autorisation écrite est interdite.
            </p>

            <h2 id="confidentialite" className="scroll-mt-24">Politique de confidentialité</h2>
            <p>
              Le formulaire de contact collecte : nom, téléphone, e-mail, objet/domaine et message — aux seules fins de traiter votre demande de contact ou de rendez-vous.
            </p>
            <ul>
              <li>Base légale : votre consentement et l&apos;intérêt légitime à répondre à votre demande.</li>
              <li>Durée de conservation : 3 ans maximum à compter du dernier échange, sauf obligation légale contraire.</li>
              <li>Destinataires : seuls les membres habilités du Cabinet.</li>
              <li>Vos droits : accès, rectification, effacement, opposition — en écrivant à {cabinet.email}.</li>
              <li>Sécurité : HTTPS, protection anti-spam, sauvegardes régulières, accès restreints.</li>
            </ul>
            <p>
              Aucune information relative à un dossier client n&apos;est publiée sans anonymisation et autorisation écrite préalable. Aucune décision de justice nominative n&apos;est diffusée sans accord.
            </p>

            <h2>Cookies & mesure d&apos;audience</h2>
            <p>
              Le site peut utiliser des cookies techniques et, avec votre consentement, des cookies de mesure d&apos;audience (ex. Google Analytics). Vous pouvez les refuser via le bandeau de consentement.
            </p>

            <h2>Liens & responsabilité</h2>
            <p>
              Les informations publiées le sont à titre général et ne constituent pas une consultation juridique personnalisée. Le Cabinet ne saurait être tenu responsable de l&apos;usage qui en est fait.
            </p>

            <h2>Contact DPO / confidentialité</h2>
            <p>
              Pour toute question relative à vos données : <a href={`mailto:${cabinet.email}`}>{cabinet.email}</a>
            </p>
          </Reveal>

          <p className="mt-6 text-center text-xs text-zinc-400">
            Dernière mise à jour : octobre 2026 — Document à faire valider par le Cabinet avant mise en ligne définitive.
          </p>
        </div>
      </section>
    </>
  );
}
