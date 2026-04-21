import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden bg-bg"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: 'easeOut' }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/media/images/quarry-block.webp"
        >
          <source src="/media/videos/crane-lifting.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 35%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.2) 100%)',
        }}
      />
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 container-site pb-24 md:pb-32 pt-32 w-full">
        <div className="max-w-[700px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold">
              Distribuidora Premium de Pedras Naturais
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            A nobreza da
            <br />
            pedra em cada
            <br />
            <span className="italic text-gold">detalhe</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Mármores, granitos, quartzitos e pedras naturais de origem nacional e internacional para os
            projetos mais exigentes do Brasil.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <Link to="/produtos" className="btn btn-primary">
              Explorar Materiais
            </Link>
            <Link to="/contato" className="btn btn-outline">
              Solicitar Orçamento
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 right-8 lg:right-12 z-10 hidden md:flex flex-col items-center gap-3 text-muted-faint"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative h-16 w-px bg-line-hover overflow-hidden">
          <div className="absolute inset-0 bg-gold animate-scrollLine" />
        </div>
      </motion.div>
    </section>
  );
}
