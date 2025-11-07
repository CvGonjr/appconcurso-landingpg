import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Loader2 } from "lucide-react";

export type EmailCaptureVariant = "hero" | "pricing" | "final";
export type EmailCaptureSegment = "jovem" | "profissional" | "familia" | "maduro" | "geral";

interface EmailCaptureProps {
  variant?: EmailCaptureVariant;
  placeholder?: string;
  buttonText?: string;
  size?: "default" | "large";
  className?: string;
  segment?: EmailCaptureSegment;
}

export const EmailCapture = ({
  variant = "hero",
  placeholder = "seu@email.com",
  buttonText = "Quero acesso antecipado ⚡",
  size = "default",
  className = "",
  segment = "geral",
}: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
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
      // Simular chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Em produção, fazer POST para /api/leads
      // const response = await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     email,
      //     variant,
      //     timestamp: new Date().toISOString()
      //   })
      // });

      // Salvar temporariamente no localStorage
      const leads = JSON.parse(localStorage.getItem("leads") || "[]");
      leads.push({ 
        email, 
        variant, 
        segment,
        timestamp: new Date().toISOString() 
      });
      localStorage.setItem("leads", JSON.stringify(leads));

      // Event tracking para GTM
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "lead_captured",
          email,
          variant,
          segment,
        } as any);
      }

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Algo deu errado. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg ${className}`}>
        <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="font-semibold text-green-900">Você está na lista VIP!</p>
          <p className="text-sm text-green-700">Confirme seu email para garantir acesso antecipado.</p>
        </div>
      </div>
    );
  }

  const inputSizeClass = size === "large" ? "h-14 text-lg" : "h-12";
  const buttonSizeClass = size === "large" ? "h-14 px-8 text-lg" : "h-12 px-6";

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className={`${inputSizeClass} ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            disabled={isLoading}
          />
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className={`${buttonSizeClass} bg-primary hover:bg-primary-dark transition-all duration-300 hover:scale-105`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processando...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </div>
    </form>
  );
};

// Extensão de tipos para GTM
declare global {
  interface Window {
    dataLayer: Array<{
      event: string;
      email?: string;
      variant?: string;
    }>;
  }
}
