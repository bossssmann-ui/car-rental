import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Coffee, UserCheck } from 'lucide-react';

const CONCIERGE_PHONE = '+70000000000';

const services = [
  {
    icon: <UserCheck className="w-6 h-6 text-[#D4AF37]" />,
    title: 'Личный водитель',
    desc: 'Профессиональные англоговорящие водители с опытом работы в VIP-протоколе.'
  },
  {
    icon: <Plane className="w-6 h-6 text-[#D4AF37]" />,
    title: 'Подача к трапу',
    desc: 'Встреча в VIP-терминале аэропорта VVO. Машина ждет вас у выхода.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
    title: 'Полная анонимность',
    desc: 'Строгая политика конфиденциальности. Закрытые договоры и охрана по запросу.'
  },
  {
    icon: <Coffee className="w-6 h-6 text-[#D4AF37]" />,
    title: 'Индивидуальный бар',
    desc: 'Любимые напитки, свежая пресса и нужный температурный режим до вашего прихода.'
  }
];

export default function Concierge() {
  return (
    <section className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Левая часть: Текст */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">Premium Service</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            Больше, чем аренда. <br />
            <span className="font-bold">Ваш личный консьерж.</span>
          </h2>
          
          <p className="text-neutral-400 text-lg mb-10 max-w-lg leading-relaxed">
            Мы берем на себя все заботы о вашем передвижении, чтобы вы могли сосредоточиться на бизнесе и отдыхе. Идеальный сервис без компромиссов.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {srv.icon}
                </div>
                <h4 className="text-white font-semibold">{srv.title}</h4>
                <p className="text-neutral-500 text-sm">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Правая часть: Визуал */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-3xl blur-[100px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] aspect-[4/5] shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&w=1000&q=80" 
              alt="VIP Concierge Service" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium mb-1">Связаться с менеджером</p>
                  <p className="text-neutral-400 text-sm">24/7 Поддержка клиентов</p>
                </div>
                <a href={`tel:${CONCIERGE_PHONE}`} className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center hover:bg-white transition-colors cursor-pointer text-black">
                  <UserCheck className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
