import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Car } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/cars', label: 'Прокат авто' },
  { to: '/about', label: 'О сервисе' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-[#D4AF37]"
            >
              <Car size={28} />
            </motion.div>
            <span className="text-lg font-bold tracking-tight text-white">
              Меридиан<span className="text-[#D4AF37]">VL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  location.pathname === link.to
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-[#a3a3a3] hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+79247314800"
              className="flex items-center gap-2 text-sm text-[#a3a3a3] hover:text-white transition-colors duration-200"
            >
              <Phone size={15} />
              +7 (924) 731-48-00
            </a>
            <Link to="/booking">
              <Button variant="primary" size="sm">
                Быстрая бронь
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#a3a3a3] hover:text-white hover:bg-white/5 transition-colors duration-200"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label={isMobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                    location.pathname === link.to
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'text-[#a3a3a3] hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
                <a
                  href="tel:+79247314800"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-[#a3a3a3] hover:text-white transition-colors duration-200"
                >
                  <Phone size={15} />
                  +7 (924) 731-48-00
                </a>
                <Link to="/booking" className="px-4">
                  <Button variant="primary" size="sm" fullWidth>
                    Быстрая бронь
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
