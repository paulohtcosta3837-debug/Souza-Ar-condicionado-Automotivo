import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/workshopData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Localiza a seção 'diferenciais' ("Tecnologia e precisão para...")
      const targetSection = document.getElementById('diferenciais');
      const targetTop = targetSection ? targetSection.getBoundingClientRect().top + window.scrollY : 500;
      
      const currentScroll = window.scrollY;
      
      // Inicia em 0 no topo da página e atinge 1.0 (100%) exatamente quando o scroll alcança o início da seção diferenciais
      const startFade = 40;
      const endFade = Math.max(targetTop - 120, 250);

      if (currentScroll <= startFade) {
        setOpacity(0);
      } else if (currentScroll >= endFade) {
        setOpacity(1);
      } else {
        const progress = (currentScroll - startFade) / (endFade - startFade);
        setOpacity(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center transition-opacity duration-300"
      style={{
        opacity: opacity,
        pointerEvents: opacity > 0.05 ? 'auto' : 'none',
        transform: `scale(${0.7 + opacity * 0.3})`,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
      }}
    >
      {/* Botão Pulsante do WhatsApp com a Logo Oficial */}
      <a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Souza Ar-condicionado pelo WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300/60"
      >
        {/* Efeito Onda Pulsante Contínua */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-emerald-400 opacity-20 animate-pulse pointer-events-none" />

        {/* Ícone com o desenho exato da logo do WhatsApp */}
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 drop-shadow-md group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};

