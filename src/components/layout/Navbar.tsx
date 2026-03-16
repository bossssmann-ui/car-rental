import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Автопарк', path: '/cars' },
    { name: 'Условия', path: '/conditions' },
    { name: 'Консьерж', path: '/concierge' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/10 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-1.5 group">
            <span className="text-xl font-light text-white tracking-widest group-hover:text-[#D4AF37] transition-colors">PACIFIC</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <span className="text-xl font-bold text-white tracking-widest group-hover:text-[#D4AF37] transition-colors">STAR</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm tracking-wider uppercase transition-colors hover:text-[#D4AF37] ${
                  location.pathname === link.path ? 'text-[#D4AF37] font-medium' : 'text-neutral-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+79247314800" className="hidden lg:flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider">+7 (924) 731-48-00</span>
            </a>
            <Link
              to="/contacts"
              className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors rounded-none"
            >
              Связаться
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <motion.div 
        initial={false}
        animate={isMobileMenuOpen ? { height: '100vh', opacity: 1 } : { height: 0, opacity: 0 }}
        className="fixed inset-0 top-0 z-40 bg-[#0a0a0a] overflow-hidden md:hidden flex flex-col pt-24 px-6"
      >
        <div className="flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light text-white hover:text-[#D4AF37] transition-colors border-b border-white/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="mt-auto mb-12 flex flex-col gap-4">
          <a href="tel:+79247314800" className="text-2xl font-bold text-white flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#D4AF37]" />
            +7 (924) 731-48-00
          </a>
          <a
            href="tel:+79247314800"
            className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest mt-4 text-center"
          >
            Заказать звонок
          </a>
        </div>
      </motion.div>
    </>
  );
}
