import { Navigation } from "@/components/landing/Navigation";
import { NewHero } from "@/components/landing/NewHero";
import { NewPainPoints } from "@/components/landing/NewPainPoints";
import { NewSolution } from "@/components/landing/NewSolution";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="hero">
        <NewHero />
      </section>
      <NewPainPoints />
      <NewSolution />
      <Footer />
    </div>
  );
};

export default Index;
