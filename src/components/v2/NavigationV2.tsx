import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationV2Props {
  theme?: "light" | "dark";
}

export const NavigationV2 = ({ theme = "light" }: NavigationV2Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detectar seção ativa
      const sections = ["recursos", "planos", "faq"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // altura do header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "recursos", label: "Recursos" },
    { id: "planos", label: "Planos" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-gray-900/95 backdrop-blur-md shadow-md"
            : "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-heading font-bold text-2xl cursor-pointer transition-colors ${
              theme === "dark"
                ? "text-white hover:text-accent-gold"
                : "text-primary hover:text-primary-dark"
            }`}
          >
            AppConcurso
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-base font-medium transition-colors relative ${
                  theme === "dark"
                    ? activeSection === link.id
                      ? "text-accent-gold"
                      : "text-white/80 hover:text-white"
                    : activeSection === link.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    theme === "dark" ? "bg-accent-gold" : "bg-primary"
                  }`} />
                )}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("hero")}
              size="lg"
              className={
                theme === "dark"
                  ? "bg-accent-gold text-gray-900 hover:bg-accent-gold/90 font-bold"
                  : "bg-primary hover:bg-primary-dark text-white"
              }
            >
              Entrar na Lista VIP
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${theme === "dark" ? "text-white" : "text-foreground"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden pb-6 animate-fade-in ${
            theme === "dark" ? "bg-gray-900/95" : ""
          }`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    theme === "dark"
                      ? activeSection === link.id
                        ? "bg-accent-gold/20 text-accent-gold font-semibold"
                        : "text-white/70 hover:bg-white/10"
                      : activeSection === link.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("hero")}
                className={`w-full ${
                  theme === "dark"
                    ? "bg-accent-gold text-gray-900 hover:bg-accent-gold/90 font-bold"
                    : "bg-primary hover:bg-primary-dark text-white"
                }`}
              >
                Entrar na Lista VIP
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
