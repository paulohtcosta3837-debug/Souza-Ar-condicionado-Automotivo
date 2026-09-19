import React from 'react';
import { Home, ArrowLeft, Snowflake, PhoneCall, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

interface NotFoundPageProps {
  onGoHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-md">
        
        <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center mx-auto mb-6 text-sky-600">
          <Snowflake className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
          Erro 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
          Página não encontrada
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Parece que você pegou o caminho errado. Mas não se preocupe: a temperatura certa para o seu veículo está na nossa página inicial!
        </p>

        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
          <button
            onClick={onGoHome}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </button>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-semibold text-slate-700 hover:text-sky-700 bg-slate-50 hover:bg-sky-50 border border-slate-200 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Falar com a Oficina no WhatsApp</span>
          </a>
        </div>

      </div>

      <p className="mt-6 text-xs text-slate-400">
        Souza Ar-condicionado Automotivo • Itaúna - MG
      </p>
    </div>
  );
};
