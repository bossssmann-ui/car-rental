import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Seo from '../components/Seo';
import { EASE_OUT_EXPO } from '../utils/motion';

const offices = [
  {
    name: 'Центральный офис',
    address: 'ул. Очаковская, 5 стр. 2, оф. 414, 4 этаж',
    phone: '+7 (924) 731-48-00',
    hours: 'Пн–Пт: 09:30 – 19:00',
    mapUrl: 'https://yandex.ru/maps/75/vladivostok/?ll=131.897767%2C43.121229&z=17',
  },
  {
    name: 'Выдача в аэропорту',
    address: 'Аэропорт Владивосток (Кневичи) — по предварительному согласованию',
    phone: '+7 (4232) 01-48-00',
    hours: 'Сб–Вс: 10:30 – 19:00',
    mapUrl: 'https://yandex.ru/maps/75/vladivostok/?ll=132.148093%2C43.401541&z=14',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT_EXPO },
  }),
};

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Укажите имя';
    if (!form.phone.trim()) e.phone = 'Укажите телефон';
    if (!form.message.trim()) e.message = 'Напишите сообщение';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Контакты MeridianVL — аренда авто во Владивостоке и в аэропорту"
        description="Контакты MeridianVL: офис во Владивостоке, телефоны для бронирования, выдача авто в аэропорту Кневичи и консультации по аренде автомобилей."
        keywords="контакты автопрокат владивосток, meridianvl телефон, аренда авто аэропорт владивосток контакты, офис meridianvl"
        path="/contacts"
      />

      <div className="min-h-screen bg-[#050505] text-white">
        {/* Hero */}
        <div className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-72 bg-[#D4AF37]/8 blur-[120px] pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em] mb-6"
            >
              Связаться с MeridianVL
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-light tracking-tight mb-6"
            >
              Контакты{' '}
              <span className="font-bold text-[#D4AF37]">автопроката</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-lg max-w-xl mx-auto mb-10"
            >
              Позвоните, отправьте заявку или приезжайте в офис, чтобы быстро оформить аренду авто
              для города, аэропорта и поездок по Приморью.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {['ул. Очаковская, 5 стр. 2', '+7 (924) 731-48-00', 'Аэропорт Кневичи'].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-white/5 border border-white/10 text-neutral-300"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Main grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

            {/* Left: office cards + messengers */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-light text-white mb-2"
              >
                Наши <span className="text-[#D4AF37] font-bold">офисы</span>
              </motion.h2>

              {offices.map((office, i) => (
                <motion.div
                  key={office.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-colors duration-300"
                >
                  <h3 className="text-white font-semibold text-lg mb-4">{office.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-neutral-400 text-sm">
                      <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D4AF37] transition-colors"
                      >
                        {office.address}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400 text-sm">
                      <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\D/g, '')}`}
                        className="hover:text-[#D4AF37] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400 text-sm">
                      <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-colors duration-300"
              >
                <h3 className="text-white font-semibold text-lg mb-4">Электронная почта</h3>
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a href="mailto:info@meridianvl.pro" className="hover:text-[#D4AF37] transition-colors">
                    info@meridianvl.pro
                  </a>
                </div>
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#111] border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-white font-semibold text-lg mb-4">Быстрая связь</h3>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/79247314800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-semibold text-center tracking-wide hover:bg-[#25D366]/20 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+74232014800"
                    className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold text-center tracking-wide hover:bg-white/10 transition-colors"
                  >
                    Позвонить
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
              className="bg-[#111] border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h2 className="text-2xl font-light text-white">
                  Написать по <span className="text-[#D4AF37] font-bold">аренде авто</span>
                </h2>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <p className="text-neutral-300 max-w-xs leading-relaxed">
                    Сообщение отправлено! Мы ответим вам в ближайшее время и поможем с подбором автомобиля.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
                      Ваше имя *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors ${
                        errors.name ? 'border-red-500/50' : 'border-white/10'
                      }`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-phone" className="block text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
                      Телефон *
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      placeholder="+7 (924) 731-48-00"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors ${
                        errors.phone ? 'border-red-500/50' : 'border-white/10'
                      }`}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-message" className="block text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      id="c-message"
                      placeholder="Нужен автомобиль в аэропорт, по Владивостоку или для поездки по Приморью..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none ${
                        errors.message ? 'border-red-500/50' : 'border-white/10'
                      }`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#D4AF37] text-black text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-[#c9a227] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Отправить запрос
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Map */}
        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-light text-white mb-6"
            >
              Офис MeridianVL{' '}
              <span className="text-[#D4AF37] font-bold">на карте</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-white/10"
            >
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=131.897767%2C43.121229&z=17&pt=131.897767,43.121229,pm2rdm"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                title="Карта офиса МеридианVL"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
