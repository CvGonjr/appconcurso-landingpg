import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AppConcurso - Conquiste seu Cargo Público com IA";
const description =
  "Plataforma completa de estudos para concursos públicos com Super Inteligência AC. Centralize materiais, otimize estudos e conquiste sua aprovação com mentor de IA personalizado.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "concurso público",
    "estudos",
    "IA",
    "inteligência artificial",
    "aprovação",
    "mentor virtual",
    "flashcards",
    "resumos inteligentes",
  ],
  authors: [{ name: "AppConcurso" }],
  openGraph: {
    title,
    description,
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title,
    description,
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AppConcurso",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description: description,
  offers: [
    {
      "@type": "Offer",
      name: "Plano Gratuito",
      price: "0",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Plano Premium VIP",
      price: "49.90",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1250",
  },
  featureList: [
    "Super Inteligência AC",
    "Organização de materiais",
    "Ciclos de estudo otimizados",
    "Flashcards dinámicos",
    "Resumos inteligentes",
    "Radar de oportunidades",
  ],
  screenshot: "https://lovable.dev/opengraph-image-p98pqg.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
