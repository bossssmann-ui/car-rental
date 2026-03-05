import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Car } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/cars', label: 'Автомобили' },
    { to: '/about', label: 'О нас' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <Car size={28} />
            <span className="header__logo-text">
              Меридиан<span className="header__logo-accent">VL</span>
            </span>
          </Link>

          <nav className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`header__nav-link${location.pathname === link.to ? ' header__nav-link--active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+74232000000" className="header__phone header__phone--mobile">
              <Phone size={16} />
              +7 (423) 200-00-00
            </a>
          </nav>

          <div className="header__actions">
            <a href="tel:+74232000000" className="header__phone">
              <Phone size={16} />
              +7 (423) 200-00-00
            </a>
            <Link to="/booking" className="btn btn--primary btn--sm">
              Забронировать
            </Link>
            <button
              className="header__burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="header__overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
