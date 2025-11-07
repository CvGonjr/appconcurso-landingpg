'use client';

import { useState, useEffect } from "react";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Problemas", href: "#pain-points" },
  { label: "Solução", href: "#solution" },
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Recursos", href: "#features" },
  { label: "Preços", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              AppConcurso
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#pricing");
                }}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-all hover:shadow-lg active:scale-95"
              >
                Começar Agora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border shadow-elegant">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors hover:bg-muted rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#pricing");
                }}
                className="block text-center bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-all"
              >
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
