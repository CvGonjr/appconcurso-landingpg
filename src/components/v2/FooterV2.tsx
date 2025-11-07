import { Instagram, Youtube, Linkedin } from "lucide-react";

export const FooterV2 = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    main: [
      { label: "Sobre", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contato", href: "#" },
      { label: "Política de Privacidade", href: "#" },
    ],
    social: [
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Youtube, href: "#", label: "YouTube" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    ],
  };

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <h3 className="font-heading font-bold text-2xl text-gray-300">
              AppConcurso
            </h3>
          </div>

          {/* Links principais */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.main.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Redes sociais */}
          <div className="flex justify-center gap-6">
            {links.social.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-sm">
              © {currentYear} AppConcurso. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
