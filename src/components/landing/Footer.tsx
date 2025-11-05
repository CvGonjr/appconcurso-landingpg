import { Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contact" },
  { label: "Política de Privacidade", href: "#privacy" }
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1a1a1a] text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500">
            <span className="font-heading font-bold text-xl">AppConcurso</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>© {currentYear} AppConcurso. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
