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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
