import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, Briefcase, Calendar } from 'lucide-react';
import { premiumCars } from '../data/premiumCars';
import type { CarCategory } from '../data/premiumCars';
import BookingModal from '../components/ui/BookingModal';
import type { Car } from '../types';

type FilterCategory = CarCategory | 'all';

const CATEGORY_LABELS: Record<CarCategory, string> = {
  economy: 'Эконом',
  comfort: 'Комфорт',
  business: 'Бизнес',
  suv: 'Внедорожник',
  minivan: 'Минивэн',
};

const TRANSMISSION_LABELS: Record<Car['transmission'], string> = {
  automatic: 'Автомат',
  manual: 'Механика',
};

const uniqueCategories = Array.from(new Set(premiumCars.map((c) => c.category)));

export default function CarsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCars =
    activeCategory === 'all'
      ? premiumCars
      : premiumCars.filter((car) => car.category === activeCategory);

  const handleBookClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
            Автопарк <span className="font-bold text-[#D4AF37]">Meridian VL</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Идеальное техническое состояние, безупречная чистота и максимальная комплектация. Выберите свой автомобиль для поездки по Владивостоку.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                : 'bg-white/5 text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            Все модели
          </button>
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-white/5 text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={car.id}
                className="group relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-[#D4AF37]/50 transition-colors duration-500"
              >
                <div className="h-56 relative bg-gradient-to-t from-[#0a0a0a] to-white/5 p-6 flex items-center justify-center">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-white tracking-widest uppercase">
                    {CATEGORY_LABELS[car.category]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6 border-y border-white/5 py-4">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Star className="w-4 h-4 text-[#D4AF37]" />
                      {car.rating.toFixed(1)} / 5.0
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                      {car.seats} мест
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                      {TRANSMISSION_LABELS[car.transmission]}
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      {car.year} г.
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">От</p>
                      <p className="text-xl text-white font-light">
                        {car.pricePerDay.toLocaleString('ru-RU')} ₽{' '}
                        <span className="text-sm text-neutral-500">/ сут</span>
                      </p>
                    </div>
                    <button
                      onClick={() => handleBookClick(car)}
                      className="px-6 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors"
                    >
                      Бронь
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20 text-neutral-500">
            В данной категории пока нет доступных автомобилей.
          </div>
        )}
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCar={selectedCar}
      />
    </div>
  );
}
