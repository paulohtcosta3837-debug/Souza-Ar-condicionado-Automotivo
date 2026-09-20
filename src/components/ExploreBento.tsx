import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2, 
  Gauge, 
  Star, 
  Wrench, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Snowflake,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ExploreBento: React.FC = () => {
  return (
    <section 
      id="diferenciais"
      aria-label="Diferenciais da Souza Ar-condicionado"
      className="relative py-10 sm:py-14 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Elementos de Ambient Blur ao Fundo para Dar Mais Vida, Profundidade e Estilo */}
      <div className="absolute -top-16 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 left-1/3 w-72 sm:w-80 h-72 sm:h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Tecnologia e precisão para o{' '}
            <span className="italic font-serif text-sky-600">máximo rendimento</span> do seu ar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Nossa estrutura conta com estações recicladoras digitais e procedimentos técnicos que protegem o compressor e garantem a temperatura ideal na cabine.
          </p>
        </motion.div>

        {/* Pilares Essenciais com Staggered Fade-In */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6 sm:mb-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
            }}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 backdrop-blur-[12px] border border-white/70 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group"
          >
            <div className="p-3 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors shrink-0">
              <Snowflake className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Ar Gelando no Máximo</h3>
              <p className="text-xs text-slate-600 font-medium">Eficiência térmica calibrada e fluxo potente</p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
            }}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 backdrop-blur-[12px] border border-white/70 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group"
          >
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Teste de Estanqueidade</h3>
              <p className="text-xs text-slate-600 font-medium">Vácuo e pressão para garantia de zero vazamento</p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
            }}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 backdrop-blur-[12px] border border-white/70 shadow-xs hover:shadow-md hover:border-cyan-300 transition-all group"
          >
            <div className="p-3 rounded-xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Carga Ecológica R134a / R1234yf</h3>
              <p className="text-xs text-slate-600 font-medium">Dosagem digital milimétrica e fluido de fábrica</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid Bento com Staggered Fade-in */}
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
                delayChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6"
        >

        {/* Bloco Grande: Diagnóstico Computadorizado e Carga de Gás Ecológica (col-span-12 lg:col-span-8) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
          }}
          className="md:col-span-12 lg:col-span-8 bg-white/80 backdrop-blur-[12px] border border-white/60 hover:border-sky-300/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight leading-snug group-hover:text-sky-700 transition-colors">
              Diagnóstico Computadorizado e Carga de Gás Ecológica
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Utilizamos estações recicladoras de última geração que realizam vácuo profundo nos dutos, eliminam 100% da umidade que corrói o circuito e realizam o teste de estanqueidade para identificar qualquer fuga antes de injetar a dosagem exata de gás estipulada pelo fabricante do carro.
            </p>

            {/* Lista de pontos técnicos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Pesagem com tolerância milimétrica (0.1g)</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Gás ecológico que não agride o meio ambiente</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Reposição do óleo lubrificante correto do compressor</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Verificação de pressão de alta e baixa com termômetro laser</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-sky-600">100%</span>
              <span className="text-xs text-slate-600 font-semibold max-w-[200px]">testado sob pressão negativa antes de abastecer</span>
            </div>

            <a
              href="#servicos"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 group/link"
            >
              <span>Ver detalhes deste serviço</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Bloco Médio 1: Atendimento Emergencial SOS (col-span-12 sm:col-span-6 lg:col-span-4) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
          }}
          className="md:col-span-6 lg:col-span-4 bg-gradient-to-b from-amber-50/70 to-white/80 backdrop-blur-[12px] border border-amber-200/70 hover:border-amber-400 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/85 border border-amber-300/80 text-amber-900 text-xs font-bold">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                Resposta Prioritária
              </span>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full">Itaúna - MG</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] tracking-tight">
              Atendimento Emergencial SOS
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              O ar-condicionado parou no meio do caminho ou começou a fazer barulho na polia? Oferecemos socorro ágil para motoristas locais e viajantes nas imediações do <strong className="text-slate-900 font-bold">Trevo Padre Eustáquio</strong>.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-amber-100/80">
            <a
              href="https://wa.me/5537998570029?text=URGENTE%20SOS%3A%20Preciso%20de%20socorro%20para%20o%20ar-condicionado%20do%20meu%20carro%20em%20Ita%C3%BAna!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              Chamar SOS no WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bloco Médio 2: Saúde e Ar Limpo (col-span-12 sm:col-span-6 lg:col-span-4) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
          }}
          className="md:col-span-6 lg:col-span-4 bg-gradient-to-b from-emerald-50/70 to-white/80 backdrop-blur-[12px] border border-emerald-200/70 hover:border-emerald-400 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] tracking-tight">
              Saúde e Ar Limpo
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Higienização profunda com gerador de gás ozônio ativo que esteriliza o habitáculo, eliminando fungos, colônias de bactérias e aquele cheiro de mofo característico, com troca do filtro de pólen.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-100/80 flex items-center justify-between text-xs text-slate-600">
            <span className="font-semibold text-emerald-800 bg-emerald-50/90 px-2.5 py-1 rounded-full border border-emerald-200">
              Ideal para alérgicos
            </span>
            <span className="font-bold text-slate-800 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Ar Puro & Saudável
            </span>
          </div>
        </motion.div>

        {/* Bloco Indicadores de Confiança e Estrutura Técnica com Fotos do Estabelecimento (col-span-12 lg:col-span-8) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
          }}
          className="md:col-span-12 lg:col-span-8 bg-white/85 backdrop-blur-[12px] border border-white/60 hover:border-sky-300/80 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-5">
            <Wrench className="w-4 h-4 text-sky-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Indicadores de Confiança e Estrutura Técnica
            </h3>
          </div>

          {/* Fotos Reais do Estabelecimento / Oficina */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div className="relative group/photo rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200/80 shadow-2xs">
              <img 
                src="/boxes-de-atendimento.png" 
                alt="Boxes de Atendimento e Estrutura da Oficina Souza Ar-condicionado"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-2.5">
                <span className="text-[11px] font-bold text-white leading-tight">Boxes de Atendimento</span>
                <span className="text-[10px] text-sky-200 font-medium">Trevo Padre Eustáquio</span>
              </div>
            </div>

            <div className="relative group/photo rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200/80 shadow-2xs">
              <img 
                src="/estacao-digital-automatizada.png" 
                alt="Estação Digital Automatizada de Diagnóstico de Ar-condicionado"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-2.5">
                <span className="text-[11px] font-bold text-white leading-tight">Estação Digital Automatizada</span>
                <span className="text-[10px] text-sky-200 font-medium">Pesagem Computadorizada</span>
              </div>
            </div>

            <div className="relative group/photo rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200/80 shadow-2xs">
              <img 
                src="/bancada-especializada.png" 
                alt="Bancada Mecânica de Compressores e Ferramental Especializado"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-2.5">
                <span className="text-[11px] font-bold text-white leading-tight">Bancada Especializada</span>
                <span className="text-[10px] text-sky-200 font-medium">Revisão de Compressores</span>
              </div>
            </div>
          </div>

          {/* Indicadores Numéricos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
            <div className="p-3.5 sm:p-4 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100 shadow-2xs">
              <div className="flex items-center gap-1.5 text-sky-600 mb-1">
                <Gauge className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-black text-slate-900">100%</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">Gás R134a/R1234yf ecológico e puro</p>
            </div>

            <div className="p-3.5 sm:p-4 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 shadow-2xs">
              <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-xl sm:text-2xl font-black text-slate-900">5.0</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">Avaliação no Google Reviews</p>
            </div>

            <div className="p-3.5 sm:p-4 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 shadow-2xs">
              <div className="flex items-center gap-1.5 text-emerald-600 mb-1">
                <Wrench className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-black text-slate-900">+12 anos</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">Experiência e tradição em Itaúna</p>
            </div>
          </div>
        </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

