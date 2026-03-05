import { Award, Users, Shield, Heart, Target, MapPin } from 'lucide-react';

const team = [
  {
    name: 'Алексей Морозов',
    role: 'Директор',
    desc: '12 лет в автобизнесе. Основал компанию «Меридиан» в 2016 году.',
  },
  {
    name: 'Наталья Ким',
    role: 'Менеджер по работе с клиентами',
    desc: 'Помогает клиентам выбрать идеальный автомобиль с 2018 года.',
  },
  {
    name: 'Виктор Орлов',
    role: 'Главный механик',
    desc: 'Отвечает за техническое состояние всего автопарка.',
  },
];

const milestones = [
  { year: '2016', text: 'Основание компании. Первые 5 автомобилей в парке.' },
  { year: '2018', text: 'Расширение до 20 автомобилей. Открытие офиса у аэропорта.' },
  { year: '2020', text: 'Запуск онлайн-бронирования. 1000 довольных клиентов.' },
  { year: '2022', text: 'Обновление автопарка. Добавление гибридных и люкс авто.' },
  { year: '2024', text: '50+ автомобилей, 4 офиса, 5000+ клиентов.' },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">О компании МеридианVL</h1>
          <p className="page-hero__desc">
            Лучший автопрокат Владивостока с 2016 года
          </p>
        </div>
      </div>

      <div className="container">
        {/* Mission */}
        <section className="about-section">
          <div className="about-intro">
            <div className="about-intro__text">
              <h2 className="about-intro__title">Наша миссия</h2>
              <p>
                МеридианVL — это не просто автопрокат. Мы помогаем жителям и гостям Владивостока
                путешествовать свободно и комфортно по всему Приморскому краю.
              </p>
              <p>
                Мы верим, что хорошая аренда автомобиля должна быть простой, прозрачной
                и доступной каждому. Поэтому мы постоянно обновляем автопарк, обучаем персонал
                и улучшаем сервис.
              </p>
              <p>
                За 8 лет работы мы помогли более чем 5 000 клиентам — туристам, командировочным,
                местным жителям — сделать их поездки незабываемыми.
              </p>
            </div>
            <div className="about-intro__values">
              <div className="value-item">
                <Target size={24} />
                <div>
                  <h3>Клиент на первом месте</h3>
                  <p>Ваши интересы — наш главный приоритет</p>
                </div>
              </div>
              <div className="value-item">
                <Shield size={24} />
                <div>
                  <h3>Безопасность</h3>
                  <p>Регулярное ТО, страховка, исправные авто</p>
                </div>
              </div>
              <div className="value-item">
                <Heart size={24} />
                <div>
                  <h3>Честность</h3>
                  <p>Никаких скрытых платежей и ненужных доплат</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-section">
          <div className="about-stats">
            <div className="about-stat">
              <Award size={36} />
              <span className="about-stat__value">8+</span>
              <span className="about-stat__label">лет работы</span>
            </div>
            <div className="about-stat">
              <Users size={36} />
              <span className="about-stat__value">5000+</span>
              <span className="about-stat__label">довольных клиентов</span>
            </div>
            <div className="about-stat">
              <Shield size={36} />
              <span className="about-stat__value">50+</span>
              <span className="about-stat__label">автомобилей</span>
            </div>
            <div className="about-stat">
              <MapPin size={36} />
              <span className="about-stat__value">4</span>
              <span className="about-stat__label">офиса во Владивостоке</span>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="about-section">
          <h2 className="about-section__title">История компании</h2>
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

        {/* Team */}
        <section className="about-section">
          <h2 className="about-section__title">Наша команда</h2>
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
  );
}
