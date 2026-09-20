import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Snowflake, 
  Wind, 
  AlertTriangle, 
  ArrowUpRight, 
  Info,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/workshopData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { WhatsAppIcon } from './WhatsAppIcon';

export const CategoriesOverview: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Wind':
        return <Wind className="w-5 h-5 text-emerald-600" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'ThermometerSnowflake':
      default:
        return <Snowflake className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section 
      id="servicos"
      aria-label="Catálogo Completo de Serviços de Ar-condicionado"
      className="relative py-10 sm:py-14 px-4 sm:px-6 bg-gradient-to-b from-[#f8fafc] via-sky-50/30 to-white border-t border-sky-100 overflow-hidden"
    >
      {/* Elementos de Ambient Blur ao Fundo para Dar Vida e Profundidade */}
      <div className="absolute top-10 -left-20 w-80 h-80 bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Nossos Serviços de{' '}
            <span className="italic font-serif text-sky-600">Climatização Automotiva</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Soluções completas com equipamentos modernos, transparência orçamentária e atendimento humanizado para o seu carro em Itaúna.
          </p>
        </motion.div>

        {/* Grid dos 3 Serviços Principais com Staggered Fade-In */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } 
                }
              }}
              className="bg-white/80 backdrop-blur-[12px] border border-white/60 hover:border-sky-300/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Imagem do Serviço */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} - Souza Ar-condicionado Automotivo`}
                    loading="lazy"
                    width="600"
                    height="350"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Ícone Flutuante */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white/90 backdrop-blur-[12px] shadow-md border border-white/60">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 sm:p-7">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-0.5 rounded-full bg-sky-50/90 text-sky-700 text-[11px] font-bold border border-sky-100/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Título do Serviço */}
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Descrição Curta */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 space-y-2">
                    {service.features.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ações na Base do Card */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0 flex flex-col gap-2.5">
                {/* Botão Ver Detalhes (Abre Modal) */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-sky-700 bg-white/70 hover:bg-sky-50/80 backdrop-blur-[8px] border border-slate-200/80 hover:border-sky-200 transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4 text-sky-600" />
                  <span>Ver detalhes técnicos</span>
                </button>

                {/* Botão Agendar no WhatsApp com Logo Oficial */}
                <a
                  href={service.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] transition-all shadow-md shadow-emerald-600/20 hover:shadow-lg"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Agendar via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Modal Técnico Explicativo */}
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </section>
  );
};

