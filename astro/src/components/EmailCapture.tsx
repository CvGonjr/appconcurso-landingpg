import { useState } from 'react';

interface EmailCaptureProps {
  variant?: 'hero' | 'pricing' | 'final';
  size?: 'large' | 'medium' | 'small';
  placeholder?: string;
  buttonText?: string;
  segment?: 'jovem' | 'profissional' | 'familia' | 'maduro' | 'geral';
}

const EmailCapture = ({ 
  variant = 'hero', 
  size = 'large',
  placeholder = 'seu@email.com',
  buttonText = 'Quero acesso antecipado ⚡',
  segment = 'geral'
}: EmailCaptureProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    // Save to localStorage
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push({
      email,
      variant,
      segment,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('leads', JSON.stringify(leads));

    // GTM Event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'lead_captured',
        email,
        variant,
        segment,
      });
    }

    setStatus('success');
    setEmail('');

    setTimeout(() => setStatus('idle'), 3000);
  };

  const sizeClasses = {
    large: 'flex-col md:flex-row gap-3 md:gap-2',
    medium: 'flex-col sm:flex-row gap-2',
    small: 'flex-row gap-2',
  };

  const inputSizeClasses = {
    large: 'text-base md:text-lg px-6 py-4',
    medium: 'text-base px-5 py-3',
    small: 'text-sm px-4 py-2',
  };

  const buttonSizeClasses = {
    large: 'text-base md:text-lg px-8 py-4 font-bold',
    medium: 'text-base px-6 py-3 font-semibold',
    small: 'text-sm px-5 py-2 font-medium',
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className={`flex ${sizeClasses[size]} w-full max-w-xl`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${inputSizeClasses[size]}`}
          required
        />
        <button
          type="submit"
          className={`bg-primary hover:bg-primary-dark text-white rounded-lg transition-all hover:shadow-lg active:scale-95 whitespace-nowrap ${buttonSizeClasses[size]}`}
        >
          {buttonText}
        </button>
      </form>

      {status === 'success' && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
          <p className="text-green-800 font-semibold">✅ Você está na lista! Aguarde nosso email.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
          <p className="text-red-800 font-semibold">❌ Por favor, insira um email válido.</p>
        </div>
      )}
    </div>
  );
};

export default EmailCapture;
