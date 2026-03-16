import Seo from '../components/Seo';

const conditions = [
  {
    title: 'Возраст и стаж',
    desc: 'Арендатору должно быть не менее 21 года. Стаж вождения — от 2 лет.',
  },
  {
    title: 'Документы',
    desc: 'Паспорт гражданина РФ и водительское удостоверение категории «B».',
  },
  {
    title: 'Залог',
    desc: 'Возвращаемый депозит блокируется на карте на период аренды. Полностью возвращается при возврате автомобиля без повреждений.',
  },
  {
    title: 'Страхование',
    desc: 'Все автомобили застрахованы по ОСАГО. КАСКО и страховка от угона включены в тариф.',
  },
  {
    title: 'Топливо',
    desc: 'Автомобиль выдаётся с полным баком. Возврат — с полным баком.',
  },
  {
    title: 'Пробег',
    desc: 'Стандартный тариф включает 300 км/сутки. Каждый дополнительный километр — 10 ₽.',
  },
];

export default function ConditionsPage() {
  return (
    <>
      <Seo
        title="Условия аренды — Meridian VL Владивосток"
        description="Условия аренды премиальных автомобилей во Владивостоке: документы, залог, страховка, пробег."
        path="/conditions"
      />
      <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
              Прозрачные условия
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Условия <span className="font-bold">аренды</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-center">
            <p className="text-neutral-300 text-sm mb-4">
              Остались вопросы? Свяжитесь с вашим персональным менеджером.
            </p>
            <a
              href="tel:+79247314800"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              +7 (924) 731-48-00
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
