import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Car, Instagram, Send } from 'lucide-react';

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
              Автопрокат во Владивостоке. Более 8 лет на рынке. Широкий выбор автомобилей,
              прозрачные цены, качественный сервис.
            </p>
            <div className="footer__social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://t.me/meridianvl"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Навигация</h3>
            <nav className="footer__nav">
              <Link to="/" className="footer__nav-link">Главная</Link>
              <Link to="/cars" className="footer__nav-link">Автомобили</Link>
              <Link to="/about" className="footer__nav-link">О компании</Link>
              <Link to="/contacts" className="footer__nav-link">Контакты</Link>
              <Link to="/booking" className="footer__nav-link">Бронирование</Link>
            </nav>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Категории авто</h3>
            <nav className="footer__nav">
              <Link to="/cars?category=economy" className="footer__nav-link">Эконом</Link>
              <Link to="/cars?category=comfort" className="footer__nav-link">Комфорт</Link>
              <Link to="/cars?category=business" className="footer__nav-link">Бизнес</Link>
              <Link to="/cars?category=suv" className="footer__nav-link">Внедорожники</Link>
              <Link to="/cars?category=minivan" className="footer__nav-link">Минивэны</Link>
            </nav>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Контакты</h3>
            <div className="footer__contacts">
              <a href="tel:+74232000000" className="footer__contact">
                <Phone size={16} />
                +7 (423) 200-00-00
              </a>
              <a href="tel:+79147000000" className="footer__contact">
                <Phone size={16} />
                +7 (914) 700-00-00
              </a>
              <a href="mailto:info@meridianvl.pro" className="footer__contact">
                <Mail size={16} />
                info@meridianvl.pro
              </a>
              <div className="footer__contact">
                <MapPin size={16} />
                Владивосток, ул. Светланская, 82
              </div>
              <div className="footer__contact">
                <Clock size={16} />
                Пн–Вс: 08:00 – 22:00
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
