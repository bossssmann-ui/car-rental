import { Link } from 'react-router-dom';
import { Shield, Clock, MapPin, ThumbsUp, Award, Headphones, ChevronRight } from 'lucide-react';
import CarCard from '../components/CarCard';
import ReviewCard from '../components/ReviewCard';
import Seo from '../components/Seo';
import Hero from '../components/layout/Hero';
import { cars, reviews } from '../data/cars';

const benefits = [
  {
    icon: Shield,
    title: 'Исправные и подготовленные автомобили',
    desc: 'Каждый автомобиль проверяется перед выдачей, чтобы аренда авто во Владивостоке была безопасной и предсказуемой.',
  },
  {
    icon: Clock,
    title: 'Быстрое подтверждение брони',
    desc: 'Онлайн-заявка помогает заранее подготовить договор и сократить время получения автомобиля.',
  },
  {
    icon: MapPin,
    title: 'Выдача в городе и в аэропорту',
    desc: 'Можно получить машину в офисе MeridianVL, согласовать подачу в аэропорт Владивостока или доставку по городу.',
  },
  {
    icon: ThumbsUp,
    title: 'Прозрачные условия аренды',
    desc: 'Чёткая стоимость, понятный депозит и сопровождение менеджера без лишних скрытых платежей.',
  },
  {
    icon: Award,
    title: 'Авто для туризма и бизнеса',
    desc: 'В каталоге есть машины для деловых поездок, семейных маршрутов, трансферов и путешествий по Приморью.',
  },
  {
    icon: Headphones,
    title: 'Сервис с акцентом на клиента',
    desc: 'Менеджеры помогают подобрать формат аренды под маршрут, багаж, пассажиров и формат вашей поездки.',
  },
];

const steps = [
  { num: '01', title: 'Выберите класс авто', desc: 'Сравните эконом, комфорт, кроссоверы, бизнес-седаны и минивэны по цене и задачам поездки.' },
  { num: '02', title: 'Оставьте заявку', desc: 'Заполните онлайн-форму на сайте или свяжитесь с менеджером по телефону для быстрого подтверждения.' },
  { num: '03', title: 'Согласуйте выдачу', desc: 'Выберите офис на Очаковской, подачу в аэропорт Владивостока или удобную доставку по городу.' },
  { num: '04', title: 'Отправляйтесь в маршрут', desc: 'Используйте автомобиль для города, командировки, отдыха у моря и авто-туризма по Приморскому краю.' },
];

const stats = [
  { value: 'Эконом → бизнес', label: 'категории автомобилей в каталоге' },
  { value: 'Аэропорт', label: 'подача и возврат по договорённости' },
  { value: 'Онлайн', label: 'заявка на аренду за несколько минут' },
  { value: 'Приморье', label: 'авто для туризма, города и трассы' },
];


export default function HomePage() {
  const featuredCars = cars.filter((c) => c.available).slice(0, 4);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      <Seo
        title="MeridianVL — аренда авто во Владивостоке, прокат автомобилей и авто-туризм"
        description="MeridianVL — автопрокат во Владивостоке с выдачей в городе и аэропорту. Аренда авто для туристов, бизнеса и поездок по Приморью: эконом, кроссоверы, бизнес-класс и минивэны."
        keywords="аренда авто владивосток, автопрокат владивосток, прокат автомобилей владивосток, аренда авто аэропорт владивосток, авто туризм приморье, meridianvl"
        path="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AutoRental',
          name: 'MeridianVL',
          description: 'Прокат автомобилей во Владивостоке для города, аэропорта и путешествий по Приморью.',
          url: 'https://meridianvl.pro/',
          telephone: '+7-924-731-48-00',
          areaServed: ['Владивосток', 'Аэропорт Владивосток (Кневичи)', 'Приморский край'],
        }}
      />
      <Hero />
      <main>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((s) => (
              <div key={s.label} className="stats__item">
                <span className="stats__value">{s.value}</span>
                <span className="stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section" id="cars">
        <div className="container">
          <div className="section__header">
            <div className="section__tag">Наш автопарк</div>
            <h2 className="section__title">Популярные автомобили для аренды</h2>
            <p className="section__desc">
              Подберите авто под городской маршрут, поездку в аэропорт, трансфер,
              командировку или путешествие по побережью Приморья.
            </p>
          </div>
          <div className="cars-grid">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="section__action">
            <Link to="/cars" className="btn btn--outline btn--lg">
              Все автомобили
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--grey" id="benefits">
        <div className="container">
          <div className="section__header">
            <div className="section__tag">Наши преимущества</div>
            <h2 className="section__title">Почему MeridianVL ищут по запросам “автопрокат Владивосток”</h2>
            <p className="section__desc">
              Мы делаем прокат автомобилей понятным для жителей города, туристов,
              гостей Владивостока и корпоративных клиентов.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-card">
                <div className="benefit-card__icon">
                  <b.icon size={28} />
                </div>
                <h3 className="benefit-card__title">{b.title}</h3>
                <p className="benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section__header">
            <div className="section__tag">Как это работает</div>
            <h2 className="section__title">Как забронировать авто без лишних формальностей</h2>
            <p className="section__desc">Понятный путь от выбора автомобиля до старта поездки по Владивостоку и Приморью</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={step.num} className="step-card">
                <div className="step-card__num">{step.num}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="step-card__arrow" aria-hidden="true">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section section--grey" id="reviews">
        <div className="container">
          <div className="section__header">
            <div className="section__tag">Отзывы клиентов</div>
            <h2 className="section__title">Отзывы об аренде авто во Владивостоке</h2>
            <p className="section__desc">
              Реальные впечатления клиентов о прокате автомобилей для города,
              аэропорта, деловых поездок и маршрутов по Приморскому краю.
            </p>
          </div>
          <div className="reviews-grid">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__content">
            <h2 className="cta__title">Нужен автомобиль во Владивостоке уже сегодня?</h2>
            <p className="cta__desc">
              Оставьте заявку онлайн, чтобы быстро получить подтверждение брони, условия аренды
              и удобный вариант выдачи автомобиля.
            </p>
            <div className="cta__actions">
              <Link to="/booking" className="btn btn--white btn--lg">
                Оформить заявку
              </Link>
              <a href="tel:+79247314800" className="btn btn--outline-white btn--lg">
                +7 (924) 731-48-00
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
