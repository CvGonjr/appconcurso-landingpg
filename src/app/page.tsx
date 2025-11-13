import dynamic from "next/dynamic";

// Componentes críticos (above the fold) → import normal
import { Hero } from "@/components/landing/Hero";
import { Navigation } from "@/components/landing/Navigation";
import { PainPoints } from "@/components/landing/PainPoints";

// Componentes abaixo da dobra → lazy load
const Solution = dynamic(() => import("@/components/landing/Solution").then((mod) => ({ default: mod.Solution })), {
  ssr: true, // SSR habilitado para SEO
});
const HowItWorks = dynamic(() => import("@/components/landing/HowItWorks").then((mod) => ({ default: mod.HowItWorks })), {
  ssr: true,
});
const Features = dynamic(() => import("@/components/landing/Features").then((mod) => ({ default: mod.Features })), {
  ssr: true,
});
const Pricing = dynamic(() => import("@/components/landing/Pricing").then((mod) => ({ default: mod.Pricing })), {
  ssr: true,
});
const FAQ = dynamic(() => import("@/components/landing/FAQ").then((mod) => ({ default: mod.FAQ })), {
  ssr: true,
});
const FinalCTA = dynamic(() => import("@/components/landing/FinalCTA").then((mod) => ({ default: mod.FinalCTA })), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/landing/Footer").then((mod) => ({ default: mod.Footer })), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="pain-points">
          <PainPoints />
        </section>
        <section id="solution">
          <Solution />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
