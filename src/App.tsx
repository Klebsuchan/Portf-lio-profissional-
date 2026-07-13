/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function MainContent() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-cyan-500/30 overflow-x-hidden text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        
        {/* Parallax Image Divider - Cosmic Theme */}
        <div 
          className="h-64 md:h-96 w-full bg-fixed bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2070&auto=format&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000_100%)]" />
          <div 
            className="w-full h-full flex flex-col items-center justify-center px-4 relative z-10 transition-transform duration-1000 hover:scale-105"
          >
             <h2 className="text-3xl md:text-5xl font-black text-white text-center tracking-tight font-display mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
               {t('divider.title')}
             </h2>
             <p className="text-cyan-400 tracking-widest uppercase text-sm font-semibold drop-shadow-md">{t('divider.subtitle')}</p>
          </div>
        </div>

        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
