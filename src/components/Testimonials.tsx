import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/workshopData';

export const Testimonials: React.FC = () => {
  return (
    <section 
      id="depoimentos"
      aria-label="Avaliações de Clientes no Google"
      className="relative py-10 sm:py-14 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200/60 overflow-hidden"
    >
      {/* Ambient Blur ao fundo */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          {/* Selo Google Reviews */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span className="font-bold text-slate-900">Google Reviews</span>
            <span className="text-slate-400">|</span>
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-900 font-bold">5.0</span>
            <span className="text-slate-500 text-[11px]">(148+ avaliações reais)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            A opinião de quem já roda com o{' '}
            <span className="italic font-serif text-[#0284c7]">ar gelando</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A satisfação dos motoristas de Itaúna e região é o nosso maior cartão de visitas. Confira avaliações autênticas registradas no Google.
          </p>
        </motion.div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:border-sky-200"
            >
              <div>
                {/* Estrelas & Selo de Verificação */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Verificado
                  </span>
                </div>

                {/* Texto da Avaliação */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Informações do Cliente */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={testimonial.avatarUrl}
                  alt={`Foto de ${testimonial.name}`}
                  loading="lazy"
                  width="44"
                  height="44"
                  className="w-10 h-10 rounded-full object-cover border border-sky-100 shrink-0"
                />
                <div className="overflow-hidden">
                  <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-sky-600 font-medium truncate">
                    {testimonial.vehicle}
                  </p>
                  <span className="text-[10px] text-slate-400 block">
                    {testimonial.date} no Google
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
