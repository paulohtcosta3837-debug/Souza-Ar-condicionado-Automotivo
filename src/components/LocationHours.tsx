import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Navigation, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

export const LocationHours: React.FC = () => {
  return (
    <section 
      id="localizacao"
      aria-label="Localização da Oficina e Horários de Funcionamento"
      className="relative py-10 sm:py-14 px-4 sm:px-6 bg-[#f8fafc] overflow-hidden"
    >
      {/* Ambient Blur ao fundo */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Localização Estratégica e{' '}
            <span className="italic font-serif text-[#0284c7]">Horários de Atendimento</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Oficina ampla, com pátio seguro e maquinário completo situada no Trevo Padre Eustáquio para sua total conveniência.
          </p>
        </motion.div>

        {/* Grid: Informações & Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna Esquerda: Cards de Endereço & Horários */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Bloco de Endereço */}
            <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 text-sky-700 mb-3">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">Endereço Oficial</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {BUSINESS_INFO.fullAddress}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Ponto de referência: Próximo ao Trevo Padre Eustáquio, entrada facilitada pela Vila Tavares.
              </p>

              {/* Botão em Destaque: Traçar Rota no Google Maps */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  id="btn-tracar-rota"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-full text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 transition-all shadow-xs hover:shadow hover:scale-[1.01]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Bloco de Horários de Funcionamento */}
            <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 text-sky-700 mb-4">
                <Clock className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">Horários de Atendimento</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Segunda a Sexta</span>
                  <span className="font-bold text-slate-900">08:00 às 18:00</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Sábado</span>
                  <span className="font-bold text-slate-900">08:00 às 12:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Domingo</span>
                  <span className="text-amber-700 font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full text-xs">
                    SOS sob consulta prévia
                  </span>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-center gap-2.5 text-xs text-sky-900">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Formas de pagamento: PIX, cartões de débito/crédito e dinheiro.</span>
              </div>
            </div>

            {/* Contato Telefônico Direto */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-slate-700">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Contato Telefônico Direto:</span>
              </div>
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="font-bold text-sky-600 hover:text-sky-700 hover:underline"
              >
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Mapa Interativo Embutido (Mini Mapa) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-[#e2e8f0] rounded-3xl p-3 sm:p-4 shadow-xs flex flex-col overflow-hidden min-h-[380px] sm:min-h-[440px]"
          >
            {/* Identificador do Mini Mapa com o Endereço Exato */}
            <div className="flex flex-wrap items-center justify-between px-2 pb-2.5 mb-1 gap-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Mini Mapa de Localização</span>
              </div>
              <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                {BUSINESS_INFO.fullAddress}
              </span>
            </div>

            <div className="w-full h-full min-h-[350px] rounded-2xl overflow-hidden relative border border-slate-200">
              <iframe
                title={`Mini Mapa de Localização - ${BUSINESS_INFO.fullAddress}`}
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <div className="mt-3 px-2 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span className="font-medium text-slate-700">Endereço: <strong className="text-slate-900 font-bold">{BUSINESS_INFO.fullAddress}</strong></span>
              <a 
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline font-semibold"
              >
                Abrir em tela cheia no Google Maps ↗
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
