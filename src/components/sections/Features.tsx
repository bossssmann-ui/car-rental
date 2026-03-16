import { motion } from 'framer-motion';
import { Shield, Clock, Gem, Headphones } from 'lucide-react';
import { EASE_OUT_EXPO } from '../../utils/motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_OUT_EXPO },
  }),
};

export default function Features() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Наши преимущества
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Сервис без{' '}
            <span className="text-[#a3a3a3] font-light">компромиссов.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(200px,auto)]">

          {/* Large card — Insurance (span 2) */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="md:col-span-2 relative rounded-3xl border border-white/10 p-10 flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_20%,rgba(212,175,55,0.08),transparent)]" />
            <Shield className="absolute top-8 right-8 w-20 h-20 text-[#D4AF37] opacity-20" aria-hidden="true" />
            <h3 className="text-3xl font-bold text-white mb-3 relative z-10">Абсолютное КАСКО</h3>
            <p className="text-[#a3a3a3] text-base max-w-md leading-relaxed relative z-10">
              Все автомобили застрахованы по максимальной программе — никаких скрытых франшиз и неожиданных доплат после аренды.
            </p>
          </motion.div>

          {/* Small card — 24/7 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
          >
            <Clock className="w-9 h-9 text-white/70" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Подача 24/7</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                Доставим ключи лично в руки в любую точку города в удобное для вас время.
              </p>
            </div>
          </motion.div>

          {/* Small card — Quality */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
          >
            <Gem className="w-9 h-9 text-white/70" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Идеальное состояние</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                Детейлинг и техническая проверка перед каждой выдачей — автомобиль как с салона.
              </p>
            </div>
          </motion.div>

          {/* Large card — Concierge (span 2) */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="md:col-span-2 relative rounded-3xl border border-white/10 p-10 flex flex-col justify-center items-start overflow-hidden bg-[#111]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.07),transparent_60%)]" />
            <Headphones className="w-12 h-12 text-[#D4AF37] mb-6 relative z-10" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Личный консьерж-сервис</h3>
            <p className="text-[#a3a3a3] text-base max-w-lg leading-relaxed relative z-10">
              Персональный менеджер на связи на протяжении всей аренды. Поможем с маршрутом, подбором авто и любыми вопросами.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}