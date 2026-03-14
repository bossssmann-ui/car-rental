import { Award, Users, Shield, Heart, Target, MapPin } from 'lucide-react';
import Seo from '../components/Seo';

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

const milestones = [
  { year: 'Офис', text: 'Основная точка обслуживания находится во Владивостоке на ул. Очаковская, 5 стр. 2, оф. 414.' },
  { year: 'Аэропорт', text: 'MeridianVL делает аренду авто удобной для гостей города за счёт подачи автомобиля в аэропорт Владивостока по согласованию.' },
  { year: 'Туризм', text: 'Сервис помогает подобрать автомобили для поездок по Приморью: от городских маршрутов до выездов к морю и по трассам края.' },
  { year: 'Бизнес', text: 'В каталоге есть решения для командировок, встреч партнёров, трансферов и долгосрочной аренды для компаний.' },
  { year: 'Онлайн', text: 'Заявку на прокат автомобиля можно оставить через сайт, чтобы заранее согласовать выдачу, сроки и нужный класс авто.' },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="О сервисе MeridianVL — аренда авто, аэропорт и поездки по Приморью"
        description="MeridianVL — сервис аренды автомобилей во Владивостоке. Подбор авто для туристов, бизнеса, трансферов и самостоятельных маршрутов по Приморскому краю."
        keywords="о компании meridianvl, автопрокат владивосток сервис, аренда авто приморье, авто для туристов владивосток"
        path="/about"
      />
      <main className="about-page">
        <div className="page-hero">
          <div className="container">
            <div className="page-hero__eyebrow">О сервисе MeridianVL</div>
            <h1 className="page-hero__title">Аренда авто с фокусом на Владивосток и Приморье</h1>
            <p className="page-hero__desc">
              Сервис помогает быстро получить автомобиль для города, аэропорта,
              командировки, семейного отдыха и авто-туризма.
            </p>
            <div className="page-hero__chips">
              <span className="page-hero__chip">Офис во Владивостоке</span>
              <span className="page-hero__chip">Подача в аэропорт</span>
              <span className="page-hero__chip">Туризм и бизнес</span>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="about-section">
            <div className="about-intro">
              <div className="about-intro__text">
                <h2 className="about-intro__title">Наша миссия</h2>
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
              <div className="about-intro__values">
                <div className="value-item">
                  <Target size={24} />
                  <div>
                    <h3>Клиент на первом месте</h3>
                    <p>Подбираем формат аренды под маршрут, багаж, пассажиров и сроки поездки</p>
                  </div>
                </div>
                <div className="value-item">
                  <Shield size={24} />
                  <div>
                    <h3>Безопасность</h3>
                    <p>Исправные автомобили, подготовка к выдаче и понятные условия получения</p>
                  </div>
                </div>
                <div className="value-item">
                  <Heart size={24} />
                  <div>
                    <h3>Честность</h3>
                    <p>Прозрачная коммуникация по стоимости аренды, депозиту и дополнительным опциям</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-stats">
              <div className="about-stat">
                <Award size={36} />
                <span className="about-stat__value">Город</span>
                <span className="about-stat__label">авто для ежедневных поездок по Владивостоку</span>
              </div>
              <div className="about-stat">
                <Users size={36} />
                <span className="about-stat__value">Туризм</span>
                <span className="about-stat__label">маршруты по Приморью для пар, семей и компаний</span>
              </div>
              <div className="about-stat">
                <Shield size={36} />
                <span className="about-stat__value">Бизнес</span>
                <span className="about-stat__label">решения для командировок и встреч партнёров</span>
              </div>
              <div className="about-stat">
                <MapPin size={36} />
                <span className="about-stat__value">Аэропорт</span>
                <span className="about-stat__label">удобная подача автомобиля по согласованию</span>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="about-section__title">Что важно знать о сервисе</h2>
            <div className="timeline">
              {milestones.map((m) => (
                <div key={m.year} className="timeline-item">
                  <div className="timeline-item__year">{m.year}</div>
                  <div className="timeline-item__dot" />
                  <div className="timeline-item__text">{m.text}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="about-section">
            <h2 className="about-section__title">Как устроен сервис</h2>
            <div className="team-grid">
              {team.map((member) => (
                <div key={member.name} className="team-card">
                  <div className="team-card__avatar">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__desc">{member.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
