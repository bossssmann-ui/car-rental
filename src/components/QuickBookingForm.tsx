import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Search } from 'lucide-react';
import { todayISO, tomorrowISO } from '../utils/dates';

const locations = [
  'Центр города (ул. Светланская, 82)',
  'Аэропорт Кневичи',
  'Железнодорожный вокзал',
  'Морской вокзал',
];

export default function QuickBookingForm() {
  const navigate = useNavigate();
  const today = todayISO();
  const tomorrow = tomorrowISO();

  const [form, setForm] = useState({
    location: locations[0],
    pickupDate: today,
    returnDate: tomorrow,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      location: form.location,
      pickup: form.pickupDate,
      return: form.returnDate,
    });
    navigate(`/cars?${params.toString()}`);
  };

  return (
    <form className="quick-booking" onSubmit={handleSubmit}>
      <div className="quick-booking__field">
        <label className="quick-booking__label">
          <MapPin size={16} />
          Место получения
        </label>
        <select
          className="quick-booking__select"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="quick-booking__field">
        <label className="quick-booking__label">
          <Calendar size={16} />
          Дата получения
        </label>
        <input
          type="date"
          className="quick-booking__input"
          value={form.pickupDate}
          min={today}
          onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
          required
        />
      </div>

      <div className="quick-booking__field">
        <label className="quick-booking__label">
          <Calendar size={16} />
          Дата возврата
        </label>
        <input
          type="date"
          className="quick-booking__input"
          value={form.returnDate}
          min={form.pickupDate || today}
          onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn--primary quick-booking__btn">
        <Search size={18} />
        Найти автомобиль
      </button>
    </form>
  );
}
