import React from 'react';
import { ChevronRight, MapPin, Phone, Shield, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="rodape"
      aria-label="Rodapé Institucional"
      className="bg-white border-t border-slate-200 text-slate-600 pt-12 pb-24 sm:pb-12 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumbs Semânticos Funcionais */}
        <nav aria-label="Breadcrumb" className="pb-8 mb-8 border-b border-slate-100">
          <ol className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
            <li>
              <a href="#hero" className="hover:text-sky-600 transition-colors">Início</a>
            </li>
            <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
            <li>
              <a href="#servicos" className="hover:text-sky-600 transition-colors">Serviços de Climatização</a>
            </li>
            <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
            <li>
              <a href="#sobre" className="hover:text-sky-600 transition-colors">Oficina em Itaúna</a>
            </li>
            <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
            <li className="font-semibold text-slate-800" aria-current="page">
              Trevo Padre Eustáquio
            </li>
          </ol>
        </nav>

        {/* Grade Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10">
          
          {/* Coluna 1: Marca & Apresentação */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="/logo.png"
                alt="Souza Ar-condicionado Automotivo - Itaúna MG"
                width="190"
                height="50"
                loading="lazy"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/logo.jfif';
                }}
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Referência em diagnóstico e manutenção de ar-condicionado automotivo em Itaúna - MG. Carga de gás ecológica, vácuo de precisão, oxissaniatização por ozônio e socorro SOS para veículos de passeio e utilitários.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full w-fit border border-emerald-100">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Garantia de serviços e peças originais</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-sky-600 transition-colors">Início</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-sky-600 transition-colors">Diferenciais & Tecnologia</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-sky-600 transition-colors">Catálogo de Serviços</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-sky-600 transition-colors">Nossa Estrutura & Ferramental</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-sky-600 transition-colors">Avaliações Google 5 Estrelas</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-600 transition-colors">Perguntas Frequentes (FAQ)</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-sky-600 transition-colors">Localização & Mapa</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços Principais */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>Recarga R134a / R1234yf</li>
              <li>Teste de Estanqueidade</li>
              <li>Conserto de Compressor</li>
              <li>Oxissaniatização O3</li>
              <li>Filtro de Cabine / Pólen</li>
              <li>Atendimento SOS Trevo</li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Endereço */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Atendimento Itaúna - MG
            </h4>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.fullAddress}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-sky-600 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-sky-600 font-semibold">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
              <a 
                href={BUSINESS_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emerald-600 font-bold text-slate-800"
              >
                WhatsApp Oficial
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-slate-500 pt-1">
              <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>Seg-Sex: 08h às 18h | Sáb: 08h às 12h</span>
            </div>
          </div>

        </div>

        {/* Linha Final: Compliance LGPD, Direitos Autorais e Dados */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-sky-600 underline focus:outline-none transition-colors"
            >
              Política de Privacidade (LGPD)
            </button>
            <span>•</span>
            <span>Itaúna - Minas Gerais</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
