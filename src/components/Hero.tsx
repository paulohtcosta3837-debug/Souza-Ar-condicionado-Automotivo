import React, { useEffect, useRef } from 'react';
import { ArrowDown, ShieldCheck, Snowflake, Gauge } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/workshopData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Autoplay garantido sem som para execução automática em navegadores desktop e mobile
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Se bloqueado, tenta novamente com interação de toque
            const handleTouch = () => {
              videoRef.current?.play();
              window.removeEventListener('touchstart', handleTouch);
              window.removeEventListener('click', handleTouch);
            };
            window.addEventListener('touchstart', handleTouch, { once: true });
            window.addEventListener('click', handleTouch, { once: true });
          });
        }
      }
    };

    playVideo();
  }, []);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('servicos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      aria-label="Apresentação da Souza Ar-condicionado"
      className="relative w-full h-[100svh] min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Video do Usuário com visualização limpa ocupando 100% da tela */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-100 contrast-100"
          aria-hidden="true"
        >
          {/* Arquivo de vídeo enviado pelo usuário */}
          <source 
            src="/hero-video.mp4" 
            type="video/mp4" 
          />
          <source 
            src="Snow_blowing_from_car_vents_20260919181107.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Camada translúcida neutra e leve, sem filtro azul, permitindo total visualização nítida do vídeo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Espaçador superior invisível para manter equilíbrio vertical */}
      <div className="hidden sm:block h-6" aria-hidden="true" />

      {/* Título Principal <h1> centralizado com elegância sobre o vídeo */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center my-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.18] drop-shadow-lg max-w-3xl"
        >
          Conforto térmico e eficiência para o seu veículo em{' '}
          <span className="italic font-serif text-sky-400 drop-shadow-md font-normal">
            Itaúna.
          </span>
        </motion.h1>
      </div>

      {/* Dois botões posicionados mais abaixo, rentes à base da tela inteira */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex justify-center pb-2 sm:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2"
        >
          {/* Botão Conhecer Nossos Serviços */}
          <a
            id="hero-cta-services"
            href="#servicos"
            onClick={scrollToServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-white bg-white/20 hover:bg-white/30 active:bg-white/35 backdrop-blur-md border border-white/50 rounded-full transition-all duration-200 hover:scale-[1.02]"
          >
            <span>Conhecer Nossos Serviços</span>
            <ArrowDown className="w-4 h-4 text-sky-300" />
          </a>

          {/* Botão Chamar no WhatsApp */}
          <a
            id="hero-cta-whatsapp"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-white bg-sky-400/80 hover:bg-sky-400/95 active:bg-sky-500/90 backdrop-blur-md border border-sky-300/40 rounded-full transition-all duration-200 shadow-xl shadow-sky-500/25 hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span>Chamar no WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

