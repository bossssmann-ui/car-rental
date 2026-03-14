import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Seo from '../components/Seo';

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
      <main className="contacts-page">
        <div className="page-hero page-hero--sm">
          <div className="container">
            <div className="page-hero__eyebrow">Связаться с MeridianVL</div>
            <h1 className="page-hero__title">Контакты автопроката во Владивостоке</h1>
            <p className="page-hero__desc">
              Позвоните, отправьте заявку или приезжайте в офис, чтобы быстро оформить аренду авто
              для города, аэропорта и поездок по Приморью.
            </p>
            <div className="page-hero__chips">
              <span className="page-hero__chip">ул. Очаковская, 5 стр. 2</span>
              <span className="page-hero__chip">+7 (924) 731-48-00</span>
              <span className="page-hero__chip">Аэропорт Кневичи</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="contacts-grid">
            <div className="contacts-info">
              <h2 className="contacts-info__title">Наши офисы</h2>
              {offices.map((office) => (
                <div key={office.name} className="office-card">
                  <h3 className="office-card__name">{office.name}</h3>
                  <div className="office-card__detail">
                    <MapPin size={16} />
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="office-card__link"
                    >
                      {office.address}
                    </a>
                  </div>
                  <div className="office-card__detail">
                    <Phone size={16} />
                    <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="office-card__link">
                      {office.phone}
                    </a>
                  </div>
                  <div className="office-card__detail">
                    <Clock size={16} />
                    <span>{office.hours}</span>
                  </div>
                </div>
              ))}

              <div className="office-card">
                <h3 className="office-card__name">Электронная почта</h3>
                <div className="office-card__detail">
                  <Mail size={16} />
                  <a href="mailto:info@meridianvl.pro" className="office-card__link">
                    info@meridianvl.pro
                  </a>
                </div>
              </div>

              <div className="contacts-messengers">
                <h3 className="contacts-messengers__title">Быстрая связь</h3>
                <div className="contacts-messengers__btns">
                  <a
                    href="https://wa.me/79247314800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="messenger-btn messenger-btn--whatsapp"
                  >
                    WhatsApp
                  </a>
                  <a href="tel:+74232014800" className="messenger-btn messenger-btn--telegram">
                    Позвонить
                  </a>
                </div>
              </div>
            </div>

            <div className="contacts-form-wrap">
              <h2 className="contacts-form__title">
                <MessageSquare size={22} />
                Написать по аренде авто
              </h2>
              {submitted ? (
                <div className="contacts-form-success">
                  <CheckCircle size={48} />
                  <p>Сообщение отправлено! Мы ответим вам в ближайшее время и поможем с подбором автомобиля.</p>
                </div>
              ) : (
                <form className="contacts-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-name">Ваше имя *</label>
                    <input
                      id="c-name"
                      type="text"
                      className={`form-control${errors.name ? ' form-control--error' : ''}`}
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-phone">Телефон *</label>
                    <input
                      id="c-phone"
                      type="tel"
                      className={`form-control${errors.phone ? ' form-control--error' : ''}`}
                      placeholder="+7 (924) 731-48-00"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="form-error">{errors.phone}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-message">Сообщение *</label>
                    <textarea
                      id="c-message"
                      className={`form-control form-control--textarea${errors.message ? ' form-control--error' : ''}`}
                      placeholder="Нужен автомобиль в аэропорт, по Владивостоку или для поездки по Приморью..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg">
                    <Send size={18} />
                    Отправить запрос
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="contacts-map">
            <h2 className="contacts-map__title">Офис MeridianVL на карте</h2>
            <div className="contacts-map__embed">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=131.897767%2C43.121229&z=17&pt=131.897767,43.121229,pm2rdm"
                width="100%"
                height="400"
                style={{ border: 0 }}
                title="Карта офиса МеридианVL"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
