import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import CarCard from '../components/CarCard';
import Seo from '../components/Seo';
import { cars } from '../data/cars';
import type { Car } from '../types';

const categories: { value: Car['category'] | 'all'; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'economy', label: 'Эконом' },
  { value: 'comfort', label: 'Комфорт' },
  { value: 'business', label: 'Бизнес' },
  { value: 'suv', label: 'Внедорожник' },
  { value: 'minivan', label: 'Минивэн' },
];

const sortOptions = [
  { value: 'price-asc', label: 'По цене: сначала дешевле' },
  { value: 'price-desc', label: 'По цене: сначала дороже' },
  { value: 'rating-desc', label: 'По рейтингу' },
  { value: 'name-asc', label: 'По названию' },
];

export default function CarsPage() {
  const [searchParams] = useSearchParams();
  // Derive category from URL param; local state overrides when user clicks tabs
  const urlCategory = (searchParams.get('category') as Car['category']) || 'all';

  const [categoryOverride, setCategoryOverride] = useState<Car['category'] | 'all' | null>(null);
  const category = categoryOverride ?? urlCategory;

  const [transmission, setTransmission] = useState<Car['transmission'] | 'all'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [sortBy, setSortBy] = useState('price-asc');
  const [showFilters, setShowFilters] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = cars
    .filter((c) => category === 'all' || c.category === category)
    .filter((c) => transmission === 'all' || c.transmission === transmission)
    .filter((c) => c.pricePerDay <= maxPrice)
    .filter((c) => !availableOnly || c.available)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.pricePerDay - b.pricePerDay;
        case 'price-desc': return b.pricePerDay - a.pricePerDay;
        case 'rating-desc': return b.rating - a.rating;
        case 'name-asc': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  const clearFilters = () => {
    setCategoryOverride('all');
    setTransmission('all');
    setMaxPrice(10000);
    setAvailableOnly(false);
  };

  const hasActiveFilters =
    category !== 'all' || transmission !== 'all' || maxPrice < 10000 || availableOnly;

  return (
    <>
      <Seo
        title="Прокат авто во Владивостоке — каталог автомобилей MeridianVL"
        description="Каталог MeridianVL: аренда автомобилей во Владивостоке для города, аэропорта и поездок по Приморью. Эконом, комфорт, бизнес-класс, SUV и минивэны с онлайн-заявкой."
        keywords="прокат авто владивосток, каталог автомобилей аренда владивосток, аренда авто аэропорт кневичи, suv в аренду владивосток, минивэн в аренду владивосток"
        path="/cars"
      />
      <main className="cars-page">
      <div className="page-hero page-hero--sm">
        <div className="container">
          <div className="page-hero__eyebrow">Каталог MeridianVL</div>
          <h1 className="page-hero__title">Прокат автомобилей во Владивостоке</h1>
          <p className="page-hero__desc">
            Выберите автомобиль для города, аэропорта, деловой поездки,
            семейного отдыха или авто-тура по Приморскому краю.
          </p>
          <div className="page-hero__chips">
            <span className="page-hero__chip">Эконом и комфорт</span>
            <span className="page-hero__chip">Кроссоверы и минивэны</span>
            <span className="page-hero__chip">Туризм и командировки</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cars-page__toolbar">
          <div className="cars-page__cats">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`cats-btn${category === cat.value ? ' cats-btn--active' : ''}`}
                onClick={() => setCategoryOverride(cat.value as Car['category'] | 'all')}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="cars-page__toolbar-right">
            <div className="sort-select">
              <ChevronDown size={16} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select__input"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <button
              className={`filter-toggle${showFilters ? ' filter-toggle--active' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} />
              Фильтры
              {hasActiveFilters && <span className="filter-toggle__dot" />}
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="filters-panel">
            <div className="filters-panel__row">
              <div className="filter-group">
                <label className="filter-group__label">Коробка передач</label>
                <div className="filter-group__btns">
                  {(['all', 'automatic', 'manual'] as const).map((t) => (
                    <button
                      key={t}
                      className={`cats-btn${transmission === t ? ' cats-btn--active' : ''}`}
                      onClick={() => setTransmission(t)}
                    >
                      {t === 'all' ? 'Все' : t === 'automatic' ? 'Автомат' : 'Механика'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-group__label">
                  Цена до: <strong>{maxPrice.toLocaleString('ru-RU')} ₽/день</strong>
                </label>
                <input
                  type="range"
                  min={1000}
                  max={10000}
                  step={500}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="filter-group__range"
                />
              </div>

              <div className="filter-group">
                <label className="filter-group__checkbox">
                  <input
                    type="checkbox"
                    checked={availableOnly}
                    onChange={(e) => setAvailableOnly(e.target.checked)}
                  />
                  Только доступные
                </label>
              </div>

              {hasActiveFilters && (
                <button className="btn btn--ghost btn--sm" onClick={clearFilters}>
                  <X size={14} />
                  Сбросить фильтры
                </button>
              )}
            </div>
          </div>
        )}

        <div className="cars-page__results">
          <p className="cars-page__count">
            Найдено: <strong>{filtered.length}</strong> автомобилей
          </p>
          <p className="cars-page__intro">
            Все предложения ориентированы на запросы “аренда авто Владивосток”, “прокат машин в аэропорт”
            и “автомобиль для путешествия по Приморью” — выбирайте вариант под ваш маршрут и бюджет.
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="cars-grid cars-grid--3col">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="empty-state__text">По вашим фильтрам ничего не найдено</p>
            <button className="btn btn--outline" onClick={clearFilters}>
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
      </main>
    </>
  );
}
