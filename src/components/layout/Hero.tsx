import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Shield, MapPin } from 'lucide-react';
import Button from '../ui/Button';

// Золотой мост, Владивосток ночью (узнаваемый символ города)
const BRIDGE_IMAGE_URL =
  'https://images.unsplash.com/photo-1629532454173-19ebbbcb9d65?auto=format&fit=crop&q=80&w=2000'; 

const badges = [
  { icon: Star, label: 'Премиальный сервис' },
  { icon: Shield, label: 'Страховка включена' },
  { icon: MapPin, label: 'Доставка в аэропорт' },
];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Cinematic background: Zolotoy Rog bridge at night */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={BRIDGE_IMAGE_URL}
          alt="Ночной Владивосток, Мост через бухту Золотой Рог"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        {/* Gold tint accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.15),transparent_70%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
              <Star size={12} fill="currentColor" />
              Владивосток · Золотой Рог
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)]"
          >
            Аренда премиум авто{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#e8c84a] to-[#D4AF37] bg-clip-text text-transparent">
                во Владивостоке
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: EASE_OUT_EXPO }}
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]"
          >
            Премиальный автопрокат в сердце Владивостока. Подача к мосту Золотой Рог, в аэропорт и по всему Приморскому краю.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/cars">
              <Button variant="primary" size="lg">
                Выбрать автомобиль
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/concierge">
              <Button variant="outline" size="lg">
                Консьерж-сервис
              </Button>
            </Link>
          </motion.div>

          {/* Badge row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mt-2"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-sm text-white/80 backdrop-blur-sm"
              >
                <Icon size={14} className="text-[#D4AF37]" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" aria-hidden="true" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}