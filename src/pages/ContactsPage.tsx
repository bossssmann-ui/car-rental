import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

const offices = [
  {
    name: 'Центральный офис',
    address: 'ул. Светланская, 82',
    phone: '+7 (423) 200-00-00',
    hours: 'Пн–Вс: 08:00 – 22:00',
    mapUrl: 'https://yandex.ru/maps/75/vladivostok/?ll=131.895093%2C43.115542&z=15',
  },
  {
    name: 'Офис у аэропорта',
    address: 'Аэропорт Кневичи, Терминал Б',
    phone: '+7 (914) 700-00-00',
    hours: 'Пн–Вс: 06:00 – 23:00',
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
    <main className="contacts-page">
      <div className="page-hero page-hero--sm">
        <div className="container">
          <h1 className="page-hero__title">Контакты</h1>
          <p className="page-hero__desc">
            Мы всегда рады помочь — позвоните, напишите или приходите в офис
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contacts-grid">
          {/* Contact info */}
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
              <h3 className="contacts-messengers__title">Мессенджеры</h3>
              <div className="contacts-messengers__btns">
                <a
                  href="https://wa.me/79147000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="messenger-btn messenger-btn--whatsapp"
                >
                  WhatsApp
                </a>
                <a
                  href="https://t.me/meridianvl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="messenger-btn messenger-btn--telegram"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contacts-form-wrap">
            <h2 className="contacts-form__title">
              <MessageSquare size={22} />
              Написать нам
            </h2>
            {submitted ? (
              <div className="contacts-form-success">
                <CheckCircle size={48} />
                <p>Сообщение отправлено! Мы ответим вам в ближайшее время.</p>
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
                    placeholder="+7 (XXX) XXX-XX-XX"
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
                    placeholder="Ваш вопрос или запрос..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>
                <button type="submit" className="btn btn--primary btn--lg">
                  <Send size={18} />
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="contacts-map">
          <h2 className="contacts-map__title">Мы на карте</h2>
          <div className="contacts-map__embed">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=131.895093%2C43.115542&z=15&pt=131.895093,43.115542,pm2rdm"
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
  );
}
