import { motion } from 'framer-motion';
import { Users, Shield, Heart, Target, MapPin, Award, Plane, Briefcase, Map, Wifi } from 'lucide-react';
import Seo from '../components/Seo';
import { EASE_OUT_EXPO } from '../utils/motion';

const values = [
  {
    icon: Target,
    title: 'Клиент на первом месте',
    desc: 'Подбираем формат аренды под маршрут, багаж, пассажиров и сроки поездки',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    desc: 'Исправные автомобили, подготовка к выдаче и понятные условия получения',
  },
  {
    icon: Heart,
    title: 'Честность',
    desc: 'Прозрачная коммуникация по стоимости аренды, депозиту и дополнительным опциям',
  },
];

const stats = [
  { icon: Award, value: 'Город', label: 'авто для ежедневных поездок по Владивостоку' },
  { icon: Users, value: 'Туризм', label: 'маршруты по Приморью для пар, семей и компаний' },
  { icon: Briefcase, value: 'Бизнес', label: 'решения для командировок и встреч партнёров' },
  { icon: Plane, value: 'Аэропорт', label: 'удобная подача автомобиля по согласованию' },
];

const milestones = [
  { icon: MapPin, label: 'Офис', text: 'Основная точка обслуживания находится во Владивостоке на ул. Очаковская, 5 стр. 2, оф. 414.' },
  { icon: Plane, label: 'Аэропорт', text: 'MeridianVL делает аренду авто удобной для гостей города за счёт подачи автомобиля в аэропорт Владивостока по согласованию.' },
  { icon: Map, label: 'Туризм', text: 'Сервис помогает подобрать автомобили для поездок по Приморью: от городских маршрутов до выездов к морю и по трассам края.' },
  { icon: Briefcase, label: 'Бизнес', text: 'В каталоге есть решения для командировок, встреч партнёров, трансферов и долгосрочной аренды для компаний.' },
  { icon: Wifi, label: 'Онлайн', text: 'Заявку на прокат автомобиля можно оставить через сайт, чтобы заранее согласовать выдачу, сроки и нужный класс авто.' },
];

const team = [
  {
    name: 'Отдел бронирования',
    role: 'Онлайн и телефонные заявки',
    desc: 'Помогает быстро подобрать автомобиль под маршрут, бюджет, количество пассажиров и формат поездки.',
  },
  {
    name: 'Сервис выдачи',
    role: 'Передача и возврат автомобилей',
    desc: 'Согласует офисную выдачу, подачу авто в аэропорт Владивостока и удобное время получения.',
  },
  {
    name: 'Техническая поддержка',
    role: 'Подготовка автопарка',
    desc: 'Следит за тем, чтобы автомобили были чистыми, исправными и готовыми к маршрутам по городу и Приморью.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT_EXPO },
  }),
};

export default function AboutPage() {
  return (
    <>
      <Seo
        title="О сервисе MeridianVL — аренда авто, аэропорт и поездки по Приморью"
        description="MeridianVL — сервис аренды автомобилей во Владивостоке. Подбор авто для туристов, бизнеса, трансферов и самостоятельных маршрутов по Приморскому краю."
        keywords="о компании meridianvl, автопрокат владивосток сервис, аренда авто приморье, авто для туристов владивосток"
        path="/about"
      />

      <div className="min-h-screen bg-[#050505] text-white">
        {/* Hero */}
        <div className="relative pt-40 pb-28 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-72 bg-[#D4AF37]/8 blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em] mb-6"
            >
              О сервисе MeridianVL
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-light tracking-tight mb-6"
            >
              Аренда авто с фокусом на{' '}
              <span className="font-bold text-[#D4AF37]">Владивосток и Приморье</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10"
            >
              Сервис помогает быстро получить автомобиль для города, аэропорта,
              командировки, семейного отдыха и авто-туризма.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {['Офис во Владивостоке', 'Подача в аэропорт', 'Туризм и бизнес'].map((chip) => (
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

        {/* Mission + Values */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            >
              <h2 className="text-3xl font-light text-white mb-6">
                Наша <span className="text-[#D4AF37] font-bold">миссия</span>
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  MeridianVL — это сервис аренды автомобилей во Владивостоке, который помогает
                  быстро получить подходящую машину для города, аэропорта, деловой поездки
                  или путешествия по Приморскому краю.
                </p>
                <p>
                  Мы делаем акцент на понятных условиях проката, предварительном согласовании деталей
                  и подборе автомобиля под конкретную задачу: будь то поездка по Владивостоку,
                  трансфер гостей или маршрут к морю и природным локациям.
                </p>
                <p>
                  Для клиента это означает меньше формальностей, больше ясности по условиям аренды
                  и сервис, ориентированный на комфортное начало поездки.
                </p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 bg-[#111] border border-white/10 rounded-2xl hover:border-[#D4AF37]/30 transition-colors duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{v.title}</h3>
                    <p className="text-neutral-400 text-sm">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-[#D4AF37]/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-neutral-500 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-light text-white text-center mb-12"
            >
              Что важно знать{' '}
              <span className="text-[#D4AF37] font-bold">о сервисе</span>
            </motion.h2>
            <div className="relative space-y-0">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`relative flex items-start gap-6 pb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-0`}
                >
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <m.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className={`flex-1 bg-[#111] border border-white/10 rounded-2xl p-5 md:w-[calc(50%-3rem)] md:flex-none ${i % 2 === 0 ? 'md:mr-auto md:ml-0 md:pr-12' : 'md:ml-auto md:mr-0 md:pl-12'}`}>
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 block">{m.label}</span>
                    <p className="text-neutral-400 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-light text-white text-center mb-12"
            >
              Как устроен <span className="text-[#D4AF37] font-bold">сервис</span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-[#D4AF37]">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium mb-4">{member.role}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
