import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AppConcurso - Conquiste seu Cargo Público com IA",
  description: "Otimize cada hora de estudo com seu Mentor de IA. Centralize todos os seus cursinhos, organize editais e maximize suas chances de aprovação em concursos públicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
