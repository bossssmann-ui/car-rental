import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, MapPin, User, Phone, Mail, Car as CarIcon } from 'lucide-react';
import { cars } from '../data/cars';
import type { Car } from '../types';

const locations = [
  'Центр города (ул. Светланская, 82)',
  'Аэропорт Кневичи',
  'Железнодорожный вокзал',
  'Морской вокзал',
];

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const carId = searchParams.get('car');
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    carId: carId || '',
    pickupDate: searchParams.get('pickup') || today,
    returnDate: searchParams.get('return') || tomorrow,
    pickupLocation: searchParams.get('location') || locations[0],
    name: '',
    phone: '',
    email: '',
    comment: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (form.carId) {
      const car = cars.find((c) => c.id === Number(form.carId));
      setSelectedCar(car || null);
    } else {
      setSelectedCar(null);
    }
  }, [form.carId]);

  const getDays = () => {
    if (!form.pickupDate || !form.returnDate) return 1;
    const diff = new Date(form.returnDate).getTime() - new Date(form.pickupDate).getTime();
    return Math.max(1, Math.ceil(diff / 86400000));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.carId) newErrors.carId = 'Выберите автомобиль';
    if (!form.pickupDate) newErrors.pickupDate = 'Укажите дату получения';
    if (!form.returnDate) newErrors.returnDate = 'Укажите дату возврата';
    if (form.returnDate && form.pickupDate && form.returnDate <= form.pickupDate) {
      newErrors.returnDate = 'Дата возврата должна быть позже даты получения';
    }
    if (!form.name.trim()) newErrors.name = 'Укажите ваше имя';
    if (!form.phone.trim()) newErrors.phone = 'Укажите номер телефона';
    else if (!/^[\d\s+\-()]{10,}$/.test(form.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Введите корректный email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const days = getDays();
  const totalPrice = selectedCar ? selectedCar.pricePerDay * days : 0;

  if (submitted) {
    return (
      <main className="booking-page">
        <div className="container">
          <div className="booking-success">
            <CheckCircle size={64} className="booking-success__icon" />
            <h1 className="booking-success__title">Заявка отправлена!</h1>
            <p className="booking-success__desc">
              Спасибо, <strong>{form.name}</strong>! Мы получили вашу заявку и свяжемся
              с вами в ближайшее время по номеру <strong>{form.phone}</strong>.
            </p>
            {selectedCar && (
              <div className="booking-success__summary">
                <div className="booking-success__car">
                  <img src={selectedCar.image} alt={selectedCar.name} />
                  <div>
                    <p className="booking-success__car-name">{selectedCar.name}</p>
                    <p className="booking-success__car-dates">
                      {form.pickupDate} — {form.returnDate} ({days} дн.)
                    </p>
                    <p className="booking-success__car-price">
                      Итого: {totalPrice.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
              </div>
            )}
            <button className="btn btn--primary btn--lg" onClick={() => navigate('/')}>
              На главную
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="page-hero page-hero--sm">
        <div className="container">
          <h1 className="page-hero__title">Бронирование автомобиля</h1>
          <p className="page-hero__desc">
            Заполните форму и мы свяжемся с вами для подтверждения
          </p>
        </div>
      </div>

      <div className="container">
        <div className="booking-layout">
          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            {/* Car selection */}
            <div className="booking-form__section">
              <h2 className="booking-form__section-title">
                <CarIcon size={20} />
                Выбор автомобиля
              </h2>
              <div className="form-group">
                <label className="form-label" htmlFor="carId">Автомобиль *</label>
                <select
                  id="carId"
                  className={`form-control${errors.carId ? ' form-control--error' : ''}`}
                  value={form.carId}
                  onChange={(e) => setForm({ ...form, carId: e.target.value })}
                >
                  <option value="">Выберите автомобиль</option>
                  {cars.filter((c) => c.available).map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.year}) — {c.pricePerDay.toLocaleString('ru-RU')} ₽/день
                    </option>
                  ))}
                </select>
                {errors.carId && <p className="form-error">{errors.carId}</p>}
              </div>
            </div>

            {/* Dates */}
            <div className="booking-form__section">
              <h2 className="booking-form__section-title">
                <Calendar size={20} />
                Даты аренды
              </h2>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="pickupDate">Дата получения *</label>
                  <input
                    id="pickupDate"
                    type="date"
                    className={`form-control${errors.pickupDate ? ' form-control--error' : ''}`}
                    value={form.pickupDate}
                    min={today}
                    onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
                  />
                  {errors.pickupDate && <p className="form-error">{errors.pickupDate}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="returnDate">Дата возврата *</label>
                  <input
                    id="returnDate"
                    type="date"
                    className={`form-control${errors.returnDate ? ' form-control--error' : ''}`}
                    value={form.returnDate}
                    min={form.pickupDate || today}
                    onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
                  />
                  {errors.returnDate && <p className="form-error">{errors.returnDate}</p>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="pickupLocation">
                  <MapPin size={14} /> Место получения
                </label>
                <select
                  id="pickupLocation"
                  className="form-control"
                  value={form.pickupLocation}
                  onChange={(e) => setForm({ ...form, pickupLocation: e.target.value })}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact info */}
            <div className="booking-form__section">
              <h2 className="booking-form__section-title">
                <User size={20} />
                Контактные данные
              </h2>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Ваше имя *</label>
                <input
                  id="name"
                  type="text"
                  className={`form-control${errors.name ? ' form-control--error' : ''}`}
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    <Phone size={14} /> Телефон *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`form-control${errors.phone ? ' form-control--error' : ''}`}
                    placeholder="+7 (XXX) XXX-XX-XX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  {errors.phone && <p className="form-error">{errors.phone}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    <Mail size={14} /> Email (необязательно)
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`form-control${errors.email ? ' form-control--error' : ''}`}
                    placeholder="ivan@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="comment">Комментарий</label>
                <textarea
                  id="comment"
                  className="form-control form-control--textarea"
                  placeholder="Дополнительные пожелания, время встречи..."
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  rows={3}
                />
              </div>
            </div>

            <button type="submit" className="btn btn--primary btn--lg booking-form__submit">
              Отправить заявку
            </button>
            <p className="booking-form__disclaimer">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="/terms" className="booking-form__link">условиями аренды</a>{' '}
              и{' '}
              <a href="/privacy" className="booking-form__link">политикой конфиденциальности</a>
            </p>
          </form>

          {/* Summary sidebar */}
          <aside className="booking-summary">
            <h3 className="booking-summary__title">Ваша заявка</h3>
            {selectedCar ? (
              <>
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="booking-summary__car-img"
                />
                <p className="booking-summary__car-name">{selectedCar.name}</p>
                <div className="booking-summary__line">
                  <span>Цена за день</span>
                  <strong>{selectedCar.pricePerDay.toLocaleString('ru-RU')} ₽</strong>
                </div>
                <div className="booking-summary__line">
                  <span>Количество дней</span>
                  <strong>{days}</strong>
                </div>
                <div className="booking-summary__line">
                  <span>Залог</span>
                  <strong>{selectedCar.deposit.toLocaleString('ru-RU')} ₽</strong>
                </div>
                <div className="booking-summary__total">
                  <span>Итого за аренду</span>
                  <strong className="booking-summary__total-value">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </strong>
                </div>
                <p className="booking-summary__note">
                  * Залог возвращается при возврате автомобиля в целости
                </p>
              </>
            ) : (
              <p className="booking-summary__empty">Выберите автомобиль, чтобы увидеть стоимость</p>
            )}

            <div className="booking-summary__contacts">
              <p>Вопросы? Звоните:</p>
              <a href="tel:+74232000000" className="booking-summary__phone">
                +7 (423) 200-00-00
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
