import { useState } from 'react';
import { Button } from '@/components/ui/button';
import schoolLogo from '@/assets/school-logo.png';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

export const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
    
    // Create incredible transition effect
    const transitionElement = document.createElement('div');
    transitionElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, hsl(142 76% 36% / 0.9), hsl(142 86% 55% / 0.9));
      z-index: 9999;
      animation: incredible-transition 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      backdrop-filter: blur(20px);
    `;
    
    // Add keyframes for incredible transition
    const style = document.createElement('style');
    style.textContent = `
      @keyframes incredible-transition {
        0% {
          opacity: 0;
          transform: scale(0.8) rotate(-5deg);
          border-radius: 50%;
        }
        30% {
          opacity: 0.8;
          transform: scale(1.1) rotate(2deg);
          border-radius: 30%;
        }
        60% {
          opacity: 0.9;
          transform: scale(0.95) rotate(-1deg);
          border-radius: 15%;
        }
        100% {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          border-radius: 0%;
        }
      }
      
      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(transitionElement);
    
    // Add sparkle effects
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: hsl(142 86% 55%);
        border-radius: 50%;
        z-index: 10000;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: sparkle 0.8s ease-in-out ${Math.random() * 0.5}s forwards;
        box-shadow: 0 0 10px hsl(142 86% 55%);
      `;
      document.body.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 1200);
    }
    
    setTimeout(() => {
      onLanguageSelect(langCode);
      transitionElement.remove();
      style.remove();
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="bubble-bg">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="glass-card p-8 max-w-md w-full mx-4 animate-fade-in">
        {/* School Logo */}
        <div className="text-center mb-8">
          <div className="floating-animation">
            <img 
              src={schoolLogo} 
              alt="Unifarm Logo" 
              className="w-20 h-20 mx-auto mb-4 drop-shadow-2xl"
            />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Unifarm
          </h1>
          <p className="text-muted-foreground">Choose your language</p>
        </div>

        {/* Language Options */}
        <div className="space-y-3">
          {languages.map((lang, index) => (
            <Button
              key={lang.code}
              variant="glass"
              size="lg"
              className={`w-full justify-start text-left p-4 h-auto transition-all duration-300 ${
                selectedLanguage === lang.code ? 'scale-95 opacity-50' : ''
              }`}
              onClick={() => handleSelect(lang.code)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-2xl mr-3">{lang.flag}</span>
              <span className="text-lg font-medium">{lang.name}</span>
            </Button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Welcome to the future of education
          </p>
        </div>
      </div>
    </div>
  );
};