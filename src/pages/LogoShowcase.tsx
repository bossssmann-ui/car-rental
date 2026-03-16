import { Sparkles } from 'lucide-react';

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-white text-3xl font-light mb-12 text-center border-b border-white/10 pb-8">
          Выберите стиль логотипа
        </h1>

        <div className="grid gap-12">
          
          {/* Вариант 1 */}
          <div role="button" tabIndex={0} className="bg-[#111] border border-white/10 p-10 rounded-3xl flex flex-col items-center gap-6 hover:border-[#D4AF37]/50 transition-colors cursor-pointer group">
            <h2 className="text-neutral-500 text-sm uppercase tracking-widest">Вариант 1: The Monogram (Классика/Статус)</h2>
            <div className="flex items-center gap-3 scale-150 transform origin-center my-4">
              <div className="relative w-10 h-10 flex items-center justify-center border border-[#D4AF37] rounded-sm bg-gradient-to-br from-[#1a1a1a] to-black group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all">
                <span className="text-[#D4AF37] font-serif text-xl tracking-tighter absolute z-10">P</span>
                <span className="text-white/40 font-serif text-xl tracking-tighter absolute translate-x-[4px] translate-y-[4px]">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif text-lg tracking-[0.2em] uppercase leading-none">Pacific</span>
                <span className="text-[#D4AF37] text-[9px] font-sans tracking-[0.4em] uppercase mt-1">Premium Rental</span>
              </div>
            </div>
          </div>

          {/* Вариант 2 */}
          <div role="button" tabIndex={0} className="bg-[#111] border border-white/10 p-10 rounded-3xl flex flex-col items-center gap-6 hover:border-[#D4AF37]/50 transition-colors cursor-pointer group">
            <h2 className="text-neutral-500 text-sm uppercase tracking-widest">Вариант 2: The Horizon (Модерн/Динамика)</h2>
            <div className="flex items-center gap-1.5 scale-150 transform origin-center my-4">
              <span className="text-2xl font-light text-white tracking-widest">PACIFIC</span>
              <Sparkles className="w-5 h-5 text-[#D4AF37] -mt-3 group-hover:animate-pulse" />
              <span className="text-2xl font-bold text-white tracking-widest">STAR</span>
            </div>
          </div>

          {/* Вариант 3 */}
          <div role="button" tabIndex={0} className="bg-[#111] border border-white/10 p-10 rounded-3xl flex flex-col items-center gap-6 hover:border-[#D4AF37]/50 transition-colors cursor-pointer group">
            <h2 className="text-neutral-500 text-sm uppercase tracking-widest">Вариант 3: The Crest (Шильдик/Надежность)</h2>
            <div className="flex items-center gap-4 scale-150 transform origin-center my-4">
              <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Логотип Pacific Star — щит" className="group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all">
                <path d="M16 0L32 6V22C32 29.5 25 35 16 36C7 35 0 29.5 0 22V6L16 0Z" fill="#0a0a0a" stroke="#D4AF37" strokeWidth="1.5"/>
                <path d="M16 6V30" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5"/>
                <path d="M8 14H24" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5"/>
                <circle cx="16" cy="14" r="3" fill="#D4AF37"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-white font-medium text-xl tracking-[0.15em] uppercase leading-none">Pacific Star</span>
                <span className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase mt-1">Vladivostok</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
