import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CalendarDays, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { todayISO, tomorrowISO } from '../../utils/dates';

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
    <div className="w-full max-w-5xl mx-auto relative z-20 px-4 sm:px-6 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="backdrop-blur-xl bg-black/50 border border-white/10 rounded-3xl p-4 md:p-6 shadow-[0_32px_64px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-stretch gap-3 md:gap-4"
      >
        {/* Location picker */}
        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => setLocationOpen((v) => !v)}
            className="w-full flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-[#D4AF37]" />
            </div>
            <div className="min-w-0">
              <p className="text-[#a3a3a3] text-xs mb-0.5">Место получения</p>
              <p className="text-white text-sm font-medium truncate">{location}</p>
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
                    'w-full px-4 py-3 text-sm text-left transition-colors hover:bg-white/5',
                    loc === location ? 'text-[#D4AF37]' : 'text-[#a3a3a3]'
                  )}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:block w-px bg-white/8 self-stretch" />

        {/* Date range */}
        <div className="flex flex-1 items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
            <CalendarDays size={18} className="text-[#D4AF37]" />
          </div>
          <div className="flex flex-1 items-center gap-2 min-w-0">
            <div className="flex-1 min-w-0">
              <p className="text-[#a3a3a3] text-xs mb-0.5">Дата получения</p>
              <input
                type="date"
                value={pickupDate}
                min={todayISO()}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
              />
            </div>
            <div className="w-px h-8 bg-white/8 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[#a3a3a3] text-xs mb-0.5">Дата возврата</p>
              <input
                type="date"
                value={returnDate}
                min={pickupDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Search button */}
        <motion.button
          type="button"
          onClick={handleSearch}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#D4AF37] text-[#0a0a0a] text-sm font-bold hover:bg-[#e8c84a] transition-colors duration-200 shadow-[0_0_32px_rgba(212,175,55,0.3)] hover:shadow-[0_0_48px_rgba(212,175,55,0.5)] shrink-0 whitespace-nowrap"
        >
          Найти авто
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>
    </div>
  );
}
