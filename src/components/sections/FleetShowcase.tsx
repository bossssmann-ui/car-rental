import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Settings, Fuel, ArrowRight, ChevronRight } from 'lucide-react';
import type { Car } from '../../types';
import { EASE_OUT_EXPO } from '../../utils/motion';

const categoryLabel: Record<Car['category'], string> = {
  economy: 'Эконом',
  comfort: 'Комфорт',
  business: 'Бизнес',
  suv: 'Внедорожник',
  minivan: 'Минивэн',
};

const transmissionLabel: Record<Car['transmission'], string> = {
  automatic: 'Автомат',
  manual: 'Механика',
};

const fuelLabel: Record<Car['fuelType'], string> = {
  petrol: 'Бензин',
  diesel: 'Дизель',
  hybrid: 'Гибрид',
  electric: 'Электро',
};

const categoryAccent: Record<Car['category'], string> = {
  economy: 'text-blue-400',
  comfort: 'text-emerald-400',
  business: 'text-[#D4AF37]',
  suv: 'text-orange-400',
  minivan: 'text-purple-400',
};

interface FleetShowcaseProps {
  cars: Car[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT_EXPO },
  }),
};

export default function FleetShowcase({ cars }: FleetShowcaseProps) {
  const featured = cars.filter((c) => c.available).slice(0, 4);

  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Наш автопарк
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Популярные авто{' '}
              <span className="text-[#a3a3a3] font-light">для аренды</span>
            </h2>
          </div>
          <Link
            to="/cars"
            className="group inline-flex items-center gap-2 text-sm text-[#a3a3a3] hover:text-[#D4AF37] transition-colors duration-200 shrink-0"
          >
            Весь автопарк
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((car, i) => (
            <motion.article
              key={car.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="group relative flex flex-col rounded-3xl bg-white/[0.03] border border-white/8 overflow-hidden backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-[#111] flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent z-10" />
                <motion.img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category badge */}
                <span
                  className={`absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-sm border border-white/10 ${categoryAccent[car.category]}`}
                >
                  {categoryLabel[car.category]}
                </span>
                {/* Rating */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                  <Star size={10} fill="#D4AF37" className="text-[#D4AF37]" />
                  <span className="text-white text-[11px] font-medium">{car.rating}</span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-white leading-snug mb-0.5">{car.name}</h3>
                  <p className="text-[#a3a3a3] text-xs">{car.year} · {car.brand}</p>
                </div>

                {/* Specs row */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-black/40 border border-white/5">
                    <Users size={13} className="text-[#a3a3a3]" />
                    <span className="text-white text-[11px] font-medium">{car.seats}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-black/40 border border-white/5">
                    <Settings size={13} className="text-[#a3a3a3]" />
                    <span className="text-white text-[10px] font-medium leading-tight text-center">{transmissionLabel[car.transmission]}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-black/40 border border-white/5">
                    <Fuel size={13} className="text-[#a3a3a3]" />
                    <span className="text-white text-[11px] font-medium">{fuelLabel[car.fuelType]}</span>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-[#D4AF37] text-lg font-bold leading-none">
                      {car.pricePerDay.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-[#a3a3a3] text-[11px] mt-0.5">/ день</p>
                  </div>
                  <Link
                    to={`/booking?car=${car.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D4AF37] text-[#0a0a0a] text-xs font-bold hover:bg-[#e8c84a] transition-colors duration-200 shadow-[0_0_16px_rgba(212,175,55,0.25)] hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]"
                  >
                    Забронировать
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
