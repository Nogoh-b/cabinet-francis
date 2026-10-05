import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cabinet } from "@/lib/data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${cabinet.name} — ${cabinet.baseline}`,
    template: `%s | ${cabinet.shortName}`,
  },
  description: cabinet.presentation,
  keywords: cabinet.seoKeywords,
  authors: [{ name: cabinet.name }],
  openGraph: {
    title: `${cabinet.name} — ${cabinet.slogan}`,
    description: cabinet.presentation,
    locale: "fr_CM",
    type: "website",
  },
  metadataBase: new URL("https://cabinet-ebiangne.cm"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
