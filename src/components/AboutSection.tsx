import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  MapPin, 
  HeartHandshake, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X,
  Sparkles
} from 'lucide-react';
import { GALLERY_PHOTOS, BUSINESS_INFO } from '../data/workshopData';

export const AboutSection: React.FC = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentPhoto = GALLERY_PHOTOS[activePhotoIdx];

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="sobre"
      aria-label="Sobre a Souza Ar-condicionado Automotivo e Estrutura"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-200/60 overflow-hidden"
    >
      {/* Ambient Blur ao fundo para dar vida e profundidade */}
      <div className="absolute top-1/4 -left-24 w-80 sm:w-96 h-80 sm:h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Linha Superior: Filosofia & História com Revelação Suave */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Nossa Oficina & Filosofia
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Compromisso com o motorista de Itaúna:{' '}
              <span className="italic font-serif text-[#0284c7]">diagnóstico honesto</span> e resolução definitiva
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Na <strong className="text-slate-900 font-semibold">Souza Ar-condicionado Automotivo</strong>, compreendemos que o sistema de climatização de um veículo não tolera amadorismo. Um diagnóstico errado ou uma recarga de gás mal calculada pode danificar o compressor e gerar altos custos.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nossa filosofia é pautada na <strong className="text-slate-900 font-semibold">transparência absoluta</strong>: apresentamos o teste de estanqueidade a você, explicamos se há desgaste elétrico ou mecânico e só realizamos o procedimento com a sua total aprovação.
            </p>

            {/* Pilares da Oficina com Staggered Fade-in */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80"
              >
                <div className="flex items-center gap-2 text-[#0284c7] font-bold text-sm mb-1.5">
                  <Target className="w-4 h-4" />
                  <span>Resolução Definitiva</span>
                </div>
                <p className="text-xs text-slate-600">
                  Localizamos a causa-raiz do problema e não apenas mascaramos o sintoma temporariamente.
                </p>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80"
              >
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-1.5">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Atendimento Transparente</span>
                </div>
                <p className="text-xs text-slate-600">
                  Orçamento claro, sem surpresas na fatura e com explicações didáticas para você rodar seguro.
                </p>
              </motion.div>
            </motion.div>

            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium">
              <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Localização privilegiada no Trevo Padre Eustáquio - Vila Tavares, Itaúna - MG</span>
            </div>
          </motion.div>

          {/* Galeria de Fotos e Ferramental (Visualizador Limpo sem textos sobrepostos) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {/* Visualizador Principal */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md aspect-16/10 sm:aspect-16/9 group">
              <img
                src={currentPhoto.imageUrl}
                alt={`${currentPhoto.title} - ${currentPhoto.category} na Souza Ar-condicionado Automotivo`}
                loading="lazy"
                width="800"
                height="500"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-102"
              />

              {/* Botão de Ampliar Lightbox */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400"
                title="Ampliar foto em tela cheia"
                aria-label="Ampliar foto"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Controles de Navegação Anterior / Próxima */}
              <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto p-2 rounded-full bg-white/85 hover:bg-white text-slate-800 shadow-md transition-all hover:scale-110 focus:outline-none"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto p-2 rounded-full bg-white/85 hover:bg-white text-slate-800 shadow-md transition-all hover:scale-110 focus:outline-none"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Legenda limpa ABAIXO da foto (SEM textos sobrepostos que poluem a imagem) */}
            <div className="flex items-center justify-between px-2">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 block">
                  {currentPhoto.category}
                </span>
                <p className="text-sm font-semibold text-slate-800">
                  {currentPhoto.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentPhoto.caption}
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {activePhotoIdx + 1} de {GALLERY_PHOTOS.length}
              </span>
            </div>

            {/* Miniaturas de Navegação Rápida */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 pt-1">
              {GALLERY_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-16/10 border-2 transition-all focus:outline-none ${
                    activePhotoIdx === idx 
                      ? 'border-sky-600 ring-2 ring-sky-200' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Ver foto: ${photo.title}`}
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    width="200"
                    height="120"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Modal Lightbox para visualização em alta resolução */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-black">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 bg-white flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-sky-600">{currentPhoto.category}</p>
                <h4 className="text-base font-bold text-slate-900">{currentPhoto.title}</h4>
                <p className="text-xs text-slate-600 mt-1">{currentPhoto.caption}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-slate-200 hover:bg-slate-100 rounded-full"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-700" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 border border-slate-200 hover:bg-slate-100 rounded-full"
                  aria-label="Próxima"
                >
                  <ChevronRight className="w-4 h-4 text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
