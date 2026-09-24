import React from 'react';
import { X, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div 
        className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Limpo e Elegante sem Imagem */}
        <div className="relative p-6 sm:p-7 border-b border-slate-100 bg-gradient-to-br from-sky-50/70 via-white to-slate-50/60 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-2xs"
            aria-label="Fechar detalhes do serviço"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-10">
            <div className="flex flex-wrap gap-2 mb-2.5">
              {service.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 rounded-full bg-sky-100/90 text-sky-800 text-[11px] font-bold border border-sky-200/70">
                  {tag}
                </span>
              ))}
            </div>
            <h3 id="modal-service-title" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {service.fullDesc}
            </p>

            {/* Checklist Técnico */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-sky-600" />
                O que está incluído neste procedimento:
              </h4>
              <ul className="space-y-2.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Garantia e Segurança */}
            <div className="mt-6 p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-xs text-slate-700">
                <strong className="text-slate-900 font-semibold">Garantia Técnica Souza:</strong> Peças de reposição originais e mão de obra qualificada com garantia em conformidade com as normas ABNT.
              </p>
            </div>
          </div>

          {/* Ações do Modal */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
            >
              Fechar
            </button>
            <a
              href={service.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] rounded-full transition-colors shadow-md shadow-emerald-500/20"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

