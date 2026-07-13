import { Rocket, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const { t, language } = useLanguage();
  const [modalContent, setModalContent] = useState<'privacy' | 'cookies' | null>(null);

  return (
    <footer className="bg-black border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-0 md:flex md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Rocket className="w-6 h-6 text-cyan-500" />
          <span className="text-lg font-black text-white font-display tracking-wide leading-none -translate-y-[1px]">
            Braian <span className="text-cyan-500">Soluções digitais</span>
          </span>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-2 text-slate-500 text-sm font-light text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Braian Kleber. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'} {t('footer.madeWith')}
          </p>
          <div className="flex justify-center md:justify-end space-x-4">
            <button 
              onClick={() => setModalContent('privacy')}
              className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline"
            >
              {t('footer.privacy')}
            </button>
            <span>&bull;</span>
            <button 
              onClick={() => setModalContent('cookies')}
              className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline"
            >
              {t('footer.cookies')}
            </button>
          </div>
        </div>

        <div className="flex space-x-6 text-xs font-bold tracking-widest uppercase">
          <a href="#hero" className="text-slate-500 hover:text-cyan-400 transition-colors">{language === 'pt' ? 'Voltar ao topo' : 'Back to top'}</a>
          <a href="https://github.com/Klebsuchan" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">GitHub</a>
        </div>

      </div>

      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalContent(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
              
              <button
                onClick={() => setModalContent(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-white mb-4 pr-8">
                {modalContent === 'privacy' ? t('privacy.title') : t('cookies.title')}
              </h3>
              
              <div className="text-slate-400 font-light leading-relaxed space-y-4 text-sm sm:text-base">
                <p>
                  {modalContent === 'privacy' ? t('privacy.content') : t('cookies.content')}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setModalContent(null)}
                  className="px-6 py-2 bg-white/10 hover:bg-white text-white hover:text-black transition-colors rounded-full font-bold text-xs uppercase tracking-wider"
                >
                  {language === 'pt' ? 'Fechar' : 'Close'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
