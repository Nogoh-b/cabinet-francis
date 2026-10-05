import Hero from "@/components/home/Hero";
import { Presentation, Domaines, Pourquoi, Equipe, Actualites, ContactCTA } from "@/components/home/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentation />
      <Domaines />
      <Pourquoi />
      <Equipe />
      <Actualites />
      <ContactCTA />
    </>
  );
}
