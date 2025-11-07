import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2 } from "lucide-react";

interface EmailCaptureProps {
  variant: 'hero' | 'pricing' | 'final';
  placeholder?: string;
  buttonText?: string;
  size?: 'default' | 'large';
}

export const EmailCapture = ({ 
  variant, 
  placeholder = "seu@email.com", 
  buttonText = "Quero acesso antecipado ⚡",
  size = 'default'
}: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Por favor, insira seu email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, insira um email válido");
      return;
    }

    setIsLoading(true);

    try {
      // Store in localStorage for now (replace with API call later)
      const leads = JSON.parse(localStorage.getItem('leads') || '[]');
      const newLead = {
        email,
        variant,
        timestamp: new Date().toISOString()
      };
      
      // Check for duplicates
      const isDuplicate = leads.some((lead: any) => lead.email === email);
      if (!isDuplicate) {
        leads.push(newLead);
        localStorage.setItem('leads', JSON.stringify(leads));
      }

      // Google Tag Manager event tracking (if available)
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'lead_capture',
          email: email,
          variant: variant
        });
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Ocorreu um erro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 p-4 bg-secondary/10 rounded-lg border border-secondary animate-fade-in">
        <CheckCircle2 className="w-5 h-5 text-secondary" />
        <p className="text-sm font-medium">
          ✅ Você está na lista VIP! Confirme seu email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex flex-col sm:flex-row gap-3 ${size === 'large' ? 'max-w-2xl mx-auto' : ''}`}>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className={`flex-1 ${size === 'large' ? 'h-14 text-lg' : 'h-12'} border-2 focus:ring-2 focus:ring-primary`}
          aria-label="Email address"
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className={`${size === 'large' ? 'h-14 px-8 text-lg' : 'h-12 px-6'} bg-primary hover:bg-primary-dark transition-all hover:scale-105 font-semibold`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Enviando...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </div>
      {error && (
        <p className="text-destructive text-sm mt-2 animate-fade-in">{error}</p>
      )}
    </form>
  );
};
