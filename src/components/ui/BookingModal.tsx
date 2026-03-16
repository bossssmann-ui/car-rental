import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';

interface Car {
  id: string;
  name: string;
  pricePerDay: number;
  image: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCar: Car | null;
}

const WHATSAPP_NUMBER = '79000000000';
const TELEGRAM_USERNAME = 'your_telegram_username';

export default function BookingModal({ isOpen, onClose, selectedCar }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!selectedCar) return null;

  const messageText = `Здравствуйте! Меня интересует аренда ${selectedCar.name}. Подскажите условия и свободные даты.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(messageText)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-48 relative bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-0" />
                <img 
                  src={selectedCar.image} 
                  alt={selectedCar.name} 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                />
              </div>

              <div className="p-8 pt-0 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCar.name}</h3>
                <p className="text-[#D4AF37] font-medium mb-8">
                  {selectedCar.pricePerDay.toLocaleString('ru-RU')} ₽ <span className="text-sm text-neutral-500">/ сутки</span>
                </p>

                <p className="text-neutral-400 text-sm mb-8">
                  Для оформления бронирования и уточнения деталей свяжитесь с вашим личным менеджером.
                </p>

                <div className="flex flex-col gap-3">
                  <a 
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-[#2AABEE]/10 text-[#2AABEE] border border-[#2AABEE]/20 hover:bg-[#2AABEE] hover:text-white transition-all font-medium"
                  >
                    <Send className="w-5 h-5" />
                    Написать в Telegram
                  </a>
                  
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
