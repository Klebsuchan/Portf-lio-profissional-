import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';
import { Send, MapPin, Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${name}.%0A%0AMeu email: ${email}%0A%0A${message}`;
    window.open(`https://wa.me/5554991064604?text=${text}`, '_blank');
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const formY = useTransform(scrollYProgress, [0, 1], ["150px", "-150px"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);
  
  const floatingObject1Y = useTransform(scrollYProgress, [0, 1], ["-200px", "300px"]);
  const floatingObject2Y = useTransform(scrollYProgress, [0, 1], ["200px", "-300px"]);

  // Mouse Parallax Trackers
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 150, mass: 2 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const p1MouseX = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const p1MouseY = useTransform(smoothMouseY, [-1, 1], [40, -40]);
  const p2MouseX = useTransform(smoothMouseX, [-1, 1], [-60, 60]);
  const p2MouseY = useTransform(smoothMouseY, [-1, 1], [-60, 60]);

  return (
    <section id="contact" ref={ref} className="py-16 md:py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Graphic & Parallax elements */}
      <motion.div 
        style={{ scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]) }}
        className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black pointer-events-none"
      />
      
      <motion.div
        style={{ y: floatingObject1Y, x: p1MouseX, rotate: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
        className="absolute top-[10%] left-[5%] w-32 h-32 border border-white/5 rounded-full pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]" />
      </motion.div>

      <motion.div
        style={{ y: floatingObject2Y, x: p2MouseX, rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }}
        className="absolute bottom-[20%] right-[5%] w-48 h-48 border border-white/5 rounded-full pointer-events-none"
      >
        <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center will-change-transform"
          >
            <div className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-widest uppercase text-sm mb-4">
              {t('contact.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
              {t('contact.desc')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 text-slate-300">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{t('contact.info.emailTitle')}</p>
                  <a href="mailto:braian.kleber.camargo@gmail.com" className="text-white hover:text-cyan-400 transition-colors font-medium text-lg truncate block max-w-[200px] sm:max-w-none">braian.kleber.camargo@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 text-slate-300">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-lg">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{t('contact.info.locationTitle')}</p>
                  <a href="https://wa.me/5554991064604" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors font-medium text-lg">+55 (54) 99106-4604</a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6 mt-8">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 shrink-0 rounded-full bg-cyan-400 block" />
                {t('contact.pricing.title')}
              </h4>
              <p className="text-sm font-light text-slate-300 leading-relaxed">
                {t('contact.pricing.desc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="https://github.com/Klebsuchan" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group p-4 bg-white/5 hover:bg-white hover:text-black border border-white/10 hover:border-white rounded-2xl text-slate-400 transition-all flex justify-center items-center gap-2 font-bold uppercase tracking-wider text-sm shadow-xl">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="https://linkedin.com/in/braian-kleber-3404551a3/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group p-4 bg-white/5 hover:bg-blue-600 hover:text-white border border-white/10 hover:border-blue-500 rounded-2xl text-slate-400 transition-all flex justify-center items-center gap-2 font-bold uppercase tracking-wider text-sm shadow-xl">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            style={{ y: formY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden will-change-transform backdrop-blur-md"
          >
            {/* Glossy top highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            
            <h3 className="text-2xl font-bold text-white mb-8 tracking-wide">{t('contact.form.title')}</h3>
            
            <form className="space-y-6" onSubmit={sendWhatsApp}>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-inner"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-inner"
                  placeholder="exemplo@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">{t('contact.form.message')}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none shadow-inner"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="group w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-sm py-5 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              >
                {t('contact.form.button')}
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 -mt-1" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
