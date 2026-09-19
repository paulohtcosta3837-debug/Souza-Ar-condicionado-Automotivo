import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [navOpacity, setNavOpacity] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        setNavOpacity(0);
      } else if (currentScroll >= endFade) {
        setNavOpacity(1);
      } else {
        const progress = (currentScroll - startFade) / (endFade - startFade);
        setNavOpacity(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Destaques', href: '#diferenciais' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'A Oficina', href: '#sobre' },
    { label: 'Avaliações', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  // Se a navbar estiver com opacidade 0 e o menu mobile fechado, desativa pointer-events para não bloquear cliques na hero
  const isVisible = navOpacity > 0.05 || mobileMenuOpen;

  return (
    <header 
      style={{ 
        opacity: mobileMenuOpen ? 1 : navOpacity,
        pointerEvents: isVisible ? 'auto' : 'none',
        transform: `translateY(${(1 - (mobileMenuOpen ? 1 : navOpacity)) * -10}px)`
      }}
      className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-200 will-change-transform will-change-opacity"
    >
      <div className="max-w-7xl mx-auto">
        <nav 
          id="main-navigation"
          aria-label="Navegação Principal"
          className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 border border-sky-100"
        >
          {/* Logo Slot Semântico e Responsivo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
            title="Souza Ar-condicionado Automotivo - Início"
          >
            <img 
              src="/logo-souza.svg" 
              alt="Souza Ar-condicionado Automotivo - Oficina especializada em Itaúna MG"
              width="210"
              height="44"
              loading="eager"
              className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.logo-fallback')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'logo-fallback flex items-center gap-2 text-slate-900 font-extrabold text-sm sm:text-base';
                  fallback.innerHTML = '<span class="text-sky-600 font-black">SOUZA</span> AR AUTOMOTIVO';
                  parent.appendChild(fallback);
                }
              }}
            />
          </a>

          {/* Links para Desktop com alta legibilidade e hover vibrante */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Botão CTA Direita Desktop com a Logo Oficial do WhatsApp */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              id="cta-nav-schedule"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] rounded-full transition-all duration-200 shadow-md shadow-emerald-500/20 hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Agendar Revisão</span>
            </a>
          </div>

          {/* Botão Mobile com WhatsApp Direto e Hamburger */}
          <div className="flex sm:hidden items-center gap-1">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:bg-emerald-50 rounded-full"
              aria-label="Abrir WhatsApp da Souza Ar-condicionado"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 text-sky-600 hover:bg-sky-50 rounded-full"
              aria-label="Ligar para a oficina"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-600 hover:bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 bg-white/98 backdrop-blur-xl border border-sky-100 rounded-3xl shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-3 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 mt-2 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] rounded-2xl shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                Agendar Revisão no WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

