import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    setIsLoading(true);

    try {
      // Store in localStorage for now (will be replaced with API call)
      const leads = JSON.parse(localStorage.getItem('leads') || '[]');
      
      // Check for duplicates
      if (leads.some((lead: any) => lead.email === email)) {
        toast.info("Este email já está na lista VIP!");
        setIsLoading(false);
        return;
      }

      const newLead = {
        email,
        variant,
        timestamp: new Date().toISOString()
      };

      leads.push(newLead);
      localStorage.setItem('leads', JSON.stringify(leads));

      // Track event (Google Tag Manager)
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'lead_captured',
          variant,
          email
        });
      }

      setIsSuccess(true);
      toast.success("🎉 Você está na lista VIP!");
      
      setTimeout(() => {
        setEmail("");
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`flex items-center gap-2 ${size === 'large' ? 'text-lg' : 'text-base'} text-secondary font-semibold`}>
        <span>✅</span>
        <span>Você está na lista VIP! Confirme seu email.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${size === 'large' ? 'max-w-2xl' : 'max-w-lg'} w-full`}>
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 ${size === 'large' ? 'h-14 text-lg' : 'h-12'}`}
        disabled={isLoading}
        required
      />
      <Button 
        type="submit" 
        size={size === 'large' ? 'lg' : 'default'}
        className={`${size === 'large' ? 'h-14 px-8 text-lg' : 'h-12'} bg-primary hover:bg-primary-dark transition-all hover:scale-105`}
        disabled={isLoading}
      >
        {isLoading ? "Processando..." : buttonText}
      </Button>
    </form>
  );
};
