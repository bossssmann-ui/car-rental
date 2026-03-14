import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Car, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <Car size={24} />
              <span>Меридиан<span className="footer__logo-accent">VL</span></span>
            </Link>
            <p className="footer__desc">
              MeridianVL — аренда автомобилей во Владивостоке для города, аэропорта и
              путешествий по Приморью. Прозрачные условия, оперативная подача авто,
              онлайн-бронирование и решения для туристов и бизнеса.
            </p>
            <div className="footer__social">
              <a
                href="https://meridianvl.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Сайт MeridianVL"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://wa.me/79247314800"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="WhatsApp MeridianVL"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Навигация</h3>
            <nav className="footer__nav">
              <Link to="/" className="footer__nav-link">Главная</Link>
              <Link to="/cars" className="footer__nav-link">Прокат авто</Link>
              <Link to="/about" className="footer__nav-link">О сервисе</Link>
              <Link to="/contacts" className="footer__nav-link">Контакты</Link>
              <Link to="/booking" className="footer__nav-link">Бронирование</Link>
            </nav>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Категории авто</h3>
            <nav className="footer__nav">
              <Link to="/cars?category=economy" className="footer__nav-link">Эконом для города</Link>
              <Link to="/cars?category=comfort" className="footer__nav-link">Комфорт для поездок</Link>
              <Link to="/cars?category=business" className="footer__nav-link">Бизнес-класс</Link>
              <Link to="/cars?category=suv" className="footer__nav-link">Кроссоверы и SUV</Link>
              <Link to="/cars?category=minivan" className="footer__nav-link">Минивэны для групп</Link>
            </nav>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Контакты</h3>
            <div className="footer__contacts">
              <a href="tel:+79247314800" className="footer__contact">
                <Phone size={16} />
                +7 (924) 731-48-00
              </a>
              <a href="tel:+74232014800" className="footer__contact">
                <Phone size={16} />
                +7 (4232) 01-48-00
              </a>
              <a href="mailto:info@meridianvl.pro" className="footer__contact">
                <Mail size={16} />
                info@meridianvl.pro
              </a>
              <div className="footer__contact">
                <MapPin size={16} />
                Владивосток, ул. Очаковская, 5 стр. 2, оф. 414
              </div>
              <div className="footer__contact">
                <Clock size={16} />
                Пн–Пт: 09:30–19:00 · Сб–Вс: 10:30–19:00
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} МеридианVL. Все права защищены.
          </p>
          <p className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">Политика конфиденциальности</Link>
            <Link to="/terms" className="footer__legal-link">Условия аренды</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
