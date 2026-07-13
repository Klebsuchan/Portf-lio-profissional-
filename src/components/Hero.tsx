import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Rocket, Github, Linkedin, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  
  // Parallax layers for "Worlds"
  const planet1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const planet2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]);
  const planet3Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const debrisY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

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

  // Transform layers for mouse interactions
  const bgMouseX = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
  const bgMouseY = useTransform(smoothMouseY, [-1, 1], [-15, 15]);

  const starsMouseX = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const starsMouseY = useTransform(smoothMouseY, [-1, 1], [-30, 30]);

  const p1MouseX = useTransform(smoothMouseX, [-1, 1], [-70, 70]);
  const p1MouseY = useTransform(smoothMouseY, [-1, 1], [-70, 70]);

  const p2MouseX = useTransform(smoothMouseX, [-1, 1], [50, -50]); // Inverse direction
  const p2MouseY = useTransform(smoothMouseY, [-1, 1], [50, -50]);

  const p3MouseX = useTransform(smoothMouseX, [-1, 1], [-120, 120]);
  const p3MouseY = useTransform(smoothMouseY, [-1, 1], [-120, 120]);

  const debrisMouseX = useTransform(smoothMouseX, [-1, 1], [150, -150]);
  const debrisMouseY = useTransform(smoothMouseY, [-1, 1], [150, -150]);

  const textMouseX = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
  const textMouseY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Space Background Layer */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-[-5%] z-0 origin-top pointer-events-none">
          <motion.div 
            className="w-full h-full opacity-60 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2048&auto=format&fit=crop")',
              scale: 1.1,
              x: bgMouseX,
              y: bgMouseY
            }}
          />
        </motion.div>
        
        {/* Starfield overlay layer */}
        <motion.div style={{ y: starsY }} className="absolute inset-[-10%] z-0 pointer-events-none">
          <motion.div 
            className="w-full h-full opacity-50 mix-blend-screen pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0,0,0,0))',
              backgroundSize: '200px 200px',
              x: starsMouseX,
              y: starsMouseY
            }}
          />
        </motion.div>

        {/* Debris / Asteroid Layer */}
        <motion.div
          style={{ y: debrisY }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <motion.div style={{ x: debrisMouseX, y: debrisMouseY }} className="w-full h-full relative pointer-events-none">
            <div className="absolute top-[15%] left-[25%] w-1.5 h-1.5 bg-slate-400 rounded-full blur-[1px] opacity-80" />
            <div className="absolute top-[35%] right-[20%] w-3 h-3 bg-cyan-400/50 rounded-full blur-[2px]" />
            <div className="absolute top-[65%] left-[10%] w-4 h-4 bg-purple-500/40 rounded-full blur-[1px]" />
            <div className="absolute top-[85%] right-[35%] w-2 h-2 bg-white/70 rounded-full blur-[1px]" />
          </motion.div>
        </motion.div>

        {/* Floating Worlds (Angular-style layered parallax) */}
        <motion.div
          style={{ y: planet1Y }}
          className="absolute top-[15%] right-[10%] w-64 h-64 blur-[2px] opacity-80 z-0 pointer-events-none"
        >
          <motion.div style={{ x: p1MouseX, y: p1MouseY }} className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-600 via-blue-500 to-purple-600 shadow-[0_0_80px_rgba(56,189,248,0.3)] animate-[spin_120s_linear_infinite]" />
        </motion.div>

        <motion.div
          style={{ y: planet2Y }}
          className="absolute bottom-[20%] left-[5%] w-40 h-40 blur-[1px] opacity-70 z-0 pointer-events-none"
        >
          <motion.div style={{ x: p2MouseX, y: p2MouseY }} className="w-full h-full rounded-full bg-gradient-to-br from-indigo-900 via-violet-600 to-fuchsia-500 shadow-[0_0_60px_rgba(168,85,247,0.4)] animate-[spin_80s_reverse_linear_infinite]" />
        </motion.div>

        <motion.div
          style={{ y: planet3Y }}
          className="absolute top-[40%] left-[25%] w-16 h-16 blur-sm opacity-50 z-0 pointer-events-none"
        >
          <motion.div style={{ x: p3MouseX, y: p3MouseY }} className="w-full h-full rounded-full bg-gradient-to-tr from-orange-400 to-red-600" />
        </motion.div>

        {/* Dark gradient fade for transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 md:pt-40 md:pb-32 text-center pointer-events-auto">
        <motion.div
          style={{ y: textY, x: textMouseX }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="will-change-transform max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.3)] mb-8 z-20"
          >
            <img src="/braianfoto.png" alt="Braian Kleber" className="w-full h-full object-cover" />
          </motion.div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-cyan-300 text-sm font-medium mb-8 uppercase tracking-widest shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <Rocket className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-2xl font-display">
            {t('hero.title1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {t('hero.title2')}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 md:mb-12 max-w-3xl mx-auto text-center text-balance leading-relaxed font-light px-4 sm:px-0">
            {t('hero.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0">
            <a
              href="#contact"
              className="group relative flex w-full sm:w-auto justify-center items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-base sm:text-lg font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              {t('hero.start')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-base sm:text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              {t('hero.view')}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://github.com/Klebsuchan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/braian-kleber-3404551a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
            <a
              href="/curriculo.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t('hero.download')}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
