import { Link } from 'react-router-dom';
import { Star, Users, Fuel, Settings, CheckCircle } from 'lucide-react';
import type { Car } from '../types';

const categoryLabel: Record<Car['category'], string> = {
  economy: 'Эконом',
  comfort: 'Комфорт',
  business: 'Бизнес',
  suv: 'Внедорожник',
  minivan: 'Минивэн',
};

const transmissionLabel: Record<Car['transmission'], string> = {
  automatic: 'Автомат',
  manual: 'Механика',
};

const fuelLabel: Record<Car['fuelType'], string> = {
  petrol: 'Бензин',
  diesel: 'Дизель',
  hybrid: 'Гибрид',
  electric: 'Электро',
};

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <article className={`car-card${!car.available ? ' car-card--unavailable' : ''}`}>
      <div className="car-card__image-wrap">
        <img
          src={car.image}
          alt={car.name}
          className="car-card__image"
          loading="lazy"
        />
        <span className={`car-card__badge car-card__badge--${car.category}`}>
          {categoryLabel[car.category]}
        </span>
        {!car.available && (
          <div className="car-card__overlay">
            <span>Недоступен</span>
          </div>
        )}
      </div>

      <div className="car-card__body">
        <div className="car-card__header">
          <h3 className="car-card__title">{car.name}</h3>
          <div className="car-card__rating">
            <Star size={14} fill="currentColor" />
            <span>{car.rating}</span>
            <span className="car-card__reviews">({car.reviewCount})</span>
          </div>
        </div>

        <div className="car-card__specs">
          <div className="car-card__spec">
            <Users size={14} />
            <span>{car.seats} мест</span>
          </div>
          <div className="car-card__spec">
            <Settings size={14} />
            <span>{transmissionLabel[car.transmission]}</span>
          </div>
          <div className="car-card__spec">
            <Fuel size={14} />
            <span>{fuelLabel[car.fuelType]}</span>
          </div>
        </div>

        <ul className="car-card__features">
          {car.features.slice(0, 3).map((f) => (
            <li key={f} className="car-card__feature">
              <CheckCircle size={12} />
              {f}
            </li>
          ))}
          {car.features.length > 3 && (
            <li className="car-card__feature car-card__feature--more">
              +{car.features.length - 3} ещё
            </li>
          )}
        </ul>

        <div className="car-card__footer">
          <div className="car-card__price">
            <span className="car-card__price-value">
              {car.pricePerDay.toLocaleString('ru-RU')} ₽
            </span>
            <span className="car-card__price-unit">/ день</span>
          </div>
          {car.available ? (
            <Link to={`/booking?car=${car.id}`} className="btn btn--primary btn--sm">
              Забронировать
            </Link>
          ) : (
            <button className="btn btn--outline btn--sm" disabled>
              Недоступен
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
