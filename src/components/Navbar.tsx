import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'pt' ? 'Início' : 'Home', href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0 z-10">
            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            <span className="text-lg md:text-xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent font-display tracking-wide leading-none -translate-y-[1px]">
              Braian <span className="text-cyan-400">Soluções digitais</span>
            </span>
          </div>

          {/* Desktop Links - Centered */}
          <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center space-x-3 lg:space-x-4 2xl:space-x-6 w-max">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors text-[10px] lg:text-xs font-semibold tracking-widest uppercase shrink-0"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Desktop Right Actions */}
          <div className="hidden xl:flex items-center gap-4 shrink-0 z-10">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase border border-white/20 rounded-full px-3 py-1.5 bg-white/5 shrink-0"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'pt' ? 'EN' : 'PT'}
            </button>

            <a
              href="#contact"
              className="bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black hover:border-white px-6 py-2 rounded-full transition-all duration-300 font-bold text-xs tracking-widest uppercase shrink-0"
            >
              {language === 'pt' ? 'Falar com Braian' : 'Contact'}
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center gap-4 z-10 shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase border border-white/20 rounded-full px-2 py-1 bg-white/5"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-cyan-400 p-2 -mr-2 sm:mr-0"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-t border-white/10 shadow-xl"
        >
          <div className="px-6 py-6 space-y-4 flex flex-col items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white transition-colors text-base font-medium py-2 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center bg-white text-black font-bold px-6 py-3 rounded-full mt-4 uppercase tracking-widest"
            >
              {language === 'pt' ? 'Falar com Braian' : 'Contact Braian'}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
