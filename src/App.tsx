import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExploreBento } from './components/ExploreBento';
import { CategoriesOverview } from './components/CategoriesOverview';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Detecta se a rota for /404 para testes de rota
    if (window.location.pathname === '/404') {
      setIs404(true);
    }
  }, []);

  const handleGoHome = () => {
    setIs404(false);
    window.history.pushState({}, '', '/');
  };

  if (is404) {
    return <NotFoundPage onGoHome={handleGoHome} />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col selection:bg-sky-100 selection:text-sky-900 font-sans">
      {/* Navbar Cápsula Flutuante */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section com Vídeo em Tela Cheia & Primeira Dobra */}
        <Hero />

        {/* 2. ExploreBento (Bento Grid com Destaques & Indicadores) */}
        <ExploreBento />

        {/* 3. CategoriesOverview (Catálogo dos 3 Serviços Principais) */}
        <CategoriesOverview />

        {/* 4. AboutSection (Oficina, Filosofia e Galeria de Fotos) */}
        <AboutSection />

        {/* 5. Sistema de Depoimentos (Google Reviews 5 Estrelas) */}
        <Testimonials />

        {/* 6. Perguntas Frequentes (FAQ Accordion com 5 dúvidas essenciais) */}
        <FAQ />

        {/* 7. Localização Estratégica, Horários e Mapa Interativo */}
        <LocationHours />
      </main>

      {/* 8. Rodapé & Compliance com Breadcrumbs Semânticos */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal de Política de Privacidade (LGPD) */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </div>
  );
}
