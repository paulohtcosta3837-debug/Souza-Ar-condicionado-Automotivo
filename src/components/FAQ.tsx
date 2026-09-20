import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA, BUSINESS_INFO } from '../data/workshopData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FAQ: React.FC = () => {
  // Abre o primeiro item por padrão para engajamento imediato
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="faq"
      aria-label="Perguntas Frequentes sobre Ar-condicionado Automotivo"
      className="py-10 sm:py-14 px-4 sm:px-6 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Perguntas Frequentes{' '}
            <span className="italic font-serif text-[#0284c7]">(FAQ)</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Respostas claras e técnicas sobre manutenção, recarga e cuidados com a climatização do seu veículo.
          </p>
        </motion.div>

        {/* Accordion Interativo (Exatamente 5 Dúvidas Essenciais) */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-sky-300 bg-sky-50/30 shadow-xs' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-2xl"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 pt-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Card de Atendimento Direto se persistir dúvida */}
        <div className="mt-10 p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-slate-900">Ficou com alguma dúvida específica sobre o seu modelo?</h3>
            <p className="text-xs text-slate-600 mt-0.5">Nossa equipe técnica analisa seu caso sem compromisso.</p>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] transition-all shadow-md shadow-emerald-600/20 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            Falar com Especialista no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
