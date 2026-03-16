import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CalendarDays, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { todayISO, tomorrowISO } from '../../utils/dates';
import { EASE_OUT_EXPO } from '../../utils/motion';

const locations = [
  'Офис MeridianVL — ул. Очаковская, 5 стр. 2',
  'Аэропорт Владивосток (Кневичи)',
  'Подача по Владивостоку',
  'Доставка к отелю или апартаментам',
];

export default function BookingWidget() {
  const navigate = useNavigate();
  const [location, setLocation] = useState(locations[0]);
  const [pickupDate, setPickupDate] = useState(todayISO());
  const [returnDate, setReturnDate] = useState(tomorrowISO());
  const [locationOpen, setLocationOpen] = useState(false);

  const handleSearch = () => {
    const params = new URLSearchParams({ location, pickup: pickupDate, ['return']: returnDate });
    navigate(`/cars?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-16 sm:-mt-24"
    >
      <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/50 flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 justify-between">

        {/* Pickup location */}
        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => setLocationOpen((v) => !v)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/[0.06] transition-colors cursor-pointer border border-transparent hover:border-white/10 group text-left"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="min-w-0">
              <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Где забрать?</p>
              <p className="text-white font-medium text-sm sm:text-base truncate">{location}</p>
            </div>
          </button>
          {locationOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 z-30 rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-2xl overflow-hidden">
              {locations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => { setLocation(loc); setLocationOpen(false); }}
                  className={cn(
                    'w-full px-5 py-3 text-sm text-left transition-colors hover:bg-white/5',
                    loc === location ? 'text-[#D4AF37]' : 'text-[#a3a3a3]'
                  )}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Divider (desktop only) */}
        <div className="w-px bg-white/10 hidden md:block self-stretch" />

        {/* Date range */}
        <div className="flex-1 flex items-center gap-4 p-4 rounded-2xl hover:bg-white/[0.06] transition-colors border border-transparent hover:border-white/10 group">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <CalendarDays className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div className="flex flex-1 items-center gap-3 min-w-0">
            <div className="flex-1 min-w-0">
              <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Получение</p>
              <input
                type="date"
                value={pickupDate}
                min={todayISO()}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm sm:text-base focus:outline-none cursor-pointer"
              />
            </div>
            <div className="w-px h-8 bg-white/10 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Возврат</p>
              <input
                type="date"
                value={returnDate}
                min={pickupDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm sm:text-base focus:outline-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Search button */}
        <motion.button
          type="button"
          onClick={handleSearch}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="w-full md:w-auto px-8 py-5 rounded-2xl bg-[#D4AF37] text-black font-semibold flex items-center justify-center gap-2 hover:bg-[#e8c84a] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_48px_rgba(212,175,55,0.5)] shrink-0 whitespace-nowrap"
        >
          <span>Найти авто</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>

      </div>
    </motion.div>
  );
}