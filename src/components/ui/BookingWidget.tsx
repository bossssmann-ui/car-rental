import { motion } from 'framer-motion';
import { MapPin, CalendarDays, ArrowRight } from 'lucide-react';
import { EASE_OUT_EXPO } from '../../utils/motion';

export default function BookingWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-16 sm:-mt-24"
    >
      <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/50 flex flex-col md:flex-row items-center gap-4 sm:gap-6 justify-between">

        {/* Pickup location */}
        <div className="flex-1 w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/[0.06] transition-colors cursor-pointer border border-transparent hover:border-white/10 group">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Где забрать?</p>
            <p className="text-white font-medium text-sm sm:text-base">Владивосток, Аэропорт (VVO)</p>
          </div>
        </div>

        {/* Divider (desktop only) */}
        <div className="w-px h-12 bg-white/10 hidden md:block" />

        {/* Date range */}
        <div className="flex-1 w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/[0.06] transition-colors cursor-pointer border border-transparent hover:border-white/10 group">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <CalendarDays className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Даты аренды</p>
            <p className="text-white font-medium text-sm sm:text-base">15 Мар — 22 Мар 2026</p>
          </div>
        </div>

        {/* Search button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="w-full md:w-auto px-8 py-5 rounded-2xl bg-[#D4AF37] text-black font-semibold flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] shrink-0"
        >
          <span>Найти авто</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>

      </div>
    </motion.div>
  );
}