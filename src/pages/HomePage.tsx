import { Link } from 'react-router-dom';
import { Shield, Clock, MapPin, ThumbsUp, Award, Headphones, ChevronRight, CheckCircle } from 'lucide-react';
import QuickBookingForm from '../components/QuickBookingForm';
import CarCard from '../components/CarCard';
import ReviewCard from '../components/ReviewCard';
import { cars, reviews } from '../data/cars';

const benefits = [
  {
    icon: Shield,
    title: 'Надёжность',
    desc: 'Все автомобили застрахованы, проходят регулярное ТО. Ваша безопасность — наш приоритет.',
  },
  {
    icon: Clock,
    title: 'Работаем 24/7',
    desc: 'Принимаем заявки круглосуточно. Выдача и возврат авто в удобное для вас время.',
  },
  {
    icon: MapPin,
    title: 'Удобное расположение',
    desc: 'Офисы у аэропорта, вокзала и в центре города. Доставка авто по всему Владивостоку.',
  },
  {
    icon: ThumbsUp,
    title: 'Прозрачные цены',
    desc: 'Никаких скрытых платежей. Цена фиксирована — вы платите ровно столько, сколько указано.',
  },
  {
    icon: Award,
    title: '8 лет на рынке',
    desc: 'Работаем с 2016 года. Более 5 000 довольных клиентов и 500+ успешных поездок в месяц.',
  },
  {
    icon: Headphones,
    title: 'Поддержка в пути',
    desc: 'Наш менеджер всегда на связи. Поможем с любым вопросом во время аренды.',
  },
];

const steps = [
  { num: '01', title: 'Выберите автомобиль', desc: 'Выберите авто из каталога по категории, цене и характеристикам' },
  { num: '02', title: 'Оформите бронь', desc: 'Заполните форму онлайн или позвоните нам — займёт 3 минуты' },
  { num: '03', title: 'Получите автомобиль', desc: 'Приезжайте в удобный офис или мы доставим авто к вам' },
  { num: '04', title: 'Наслаждайтесь поездкой', desc: 'Путешествуйте с комфортом. Мы всегда на связи!' },
];

const stats = [
  { value: '8+', label: 'лет работы' },
  { value: '50+', label: 'автомобилей' },
  { value: '5000+', label: 'клиентов' },
  { value: '4.8', label: 'средний рейтинг' },
];

export default function HomePage() {
  const featuredCars = cars.filter((c) => c.available).slice(0, 4);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__bg-overlay" />
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="hero__badge">
              <CheckCircle size={16} />
              Лучший автопрокат Владивостока
            </div>
            <h1 className="hero__title">
              Аренда автомобилей<br />
              <span className="hero__title-accent">во Владивостоке</span>
            </h1>
            <p className="hero__subtitle">
              Широкий выбор авто, прозрачные цены, круглосуточная поддержка.
              Без скрытых платежей и лишних формальностей.
            </p>
            <div className="hero__actions">
              <Link to="/cars" className="btn btn--primary btn--lg">
                Смотреть автомобили
                <ChevronRight size={20} />
              </Link>
              <a href="tel:+74232000000" className="btn btn--outline-white btn--lg">
                Позвонить нам
              </a>
            </div>
          </div>
          <div className="hero__booking">
            <div className="hero__booking-title">Быстрый поиск</div>
            <QuickBookingForm />
          </div>
        </div>
      </section>

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
            <h2 className="section__title">Популярные автомобили</h2>
            <p className="section__desc">
              Выберите автомобиль, который подходит именно вам.
              От эконом-класса до люксовых внедорожников.
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
            <h2 className="section__title">Почему выбирают нас</h2>
            <p className="section__desc">
              Более 8 лет мы делаем аренду автомобилей во Владивостоке простой и комфортной
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
            <h2 className="section__title">4 простых шага</h2>
            <p className="section__desc">Арендовать автомобиль с нами — легко и быстро</p>
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
            <h2 className="section__title">Что говорят наши клиенты</h2>
            <p className="section__desc">
              Более 5 000 довольных клиентов доверяют нам. Прочитайте реальные отзывы.
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
            <h2 className="cta__title">Готовы отправиться в путь?</h2>
            <p className="cta__desc">
              Забронируйте автомобиль прямо сейчас или позвоните нам — ответим на все вопросы
            </p>
            <div className="cta__actions">
              <Link to="/booking" className="btn btn--white btn--lg">
                Забронировать онлайн
              </Link>
              <a href="tel:+74232000000" className="btn btn--outline-white btn--lg">
                +7 (423) 200-00-00
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
