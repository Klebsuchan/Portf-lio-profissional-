import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';
import { LayoutTemplate, DatabaseZap, Workflow, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);
  const cardY1 = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], ["200px", "-200px"]);
  const cardY3 = useTransform(scrollYProgress, [0, 1], ["300px", "-300px"]);
  
  // Extra parallax decorations
  const decor1Y = useTransform(scrollYProgress, [0, 1], ["-200px", "200px"]);
  const decor2Y = useTransform(scrollYProgress, [0, 1], ["300px", "-300px"]);

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

  const decor1MouseX = useTransform(smoothMouseX, [-1, 1], [30, -30]);
  const decor1MouseY = useTransform(smoothMouseY, [-1, 1], [30, -30]);
  const decor2MouseX = useTransform(smoothMouseX, [-1, 1], [-50, 50]);
  const decor2MouseY = useTransform(smoothMouseY, [-1, 1], [-50, 50]);

  const services = [
    {
      icon: <LayoutTemplate className="w-8 h-8 text-cyan-400" />,
      title: t('services.2.title'),
      description: t('services.2.desc'),
      benefits: language === 'pt' ? ["Performance Extrema", "Interfaces Responsivas", "Design Centrado no Usuário"] : ["Extreme Performance", "Responsive Layouts", "User-centric UI/UX"],
      y: cardY1
    },
    {
      icon: <DatabaseZap className="w-8 h-8 text-purple-400" />,
      title: t('services.1.title'),
      description: t('services.1.desc'),
      benefits: language === 'pt' ? ["Arquitetura Limpa", "Modelagem de Banco de Dados", "Sistemas Seguros e Escalonáveis"] : ["Clean Architecture", "Database Modeling", "Secure & Scalable Systems"],
      y: cardY2
    },
    {
      icon: <Workflow className="w-8 h-8 text-orange-400" />,
      title: t('services.3.title'),
      description: t('services.3.desc'),
      benefits: language === 'pt' ? ["Rotinas com n8n", "RAG e IA Generativa", "Otimização de Conversão"] : ["n8n Routines", "Generative AI / RAG", "Conversion Rate Optimization"],
      y: cardY3
    }
  ];

  return (
    <section id="services" ref={ref} className="py-16 md:py-32 bg-black border-t border-white/5 relative z-20 overflow-hidden">
      {/* Background Parallax elements: Comets / Nebula */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]) }}
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]) }}
        className="absolute bottom-0 left-0 w-full h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2"
      />
      
      {/* Floating Space Objects */}
      <motion.div
        style={{ y: decor1Y, x: decor1MouseX, rotate: useTransform(scrollYProgress, [0, 1], [0, 90]) }}
        className="absolute top-[30%] left-[5%] text-slate-800"
      >
        <Star size={100} strokeWidth={1} />
      </motion.div>
      <motion.div
        style={{ y: decor2Y, x: decor2MouseX, rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
        className="absolute bottom-[20%] right-[10%] text-slate-800"
      >
        <LayoutTemplate size={64} strokeWidth={1} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          style={{ y: titleY }}
          className="text-center max-w-3xl mx-auto mb-20 will-change-transform"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 font-display uppercase tracking-tight"
          >
            {language === 'pt' ? 'Engenharia de Software' : 'Software Engineering'} <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{language === 'pt' ? 'Aplicada e Otimizada' : 'Applied & Optimized'}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 font-light"
          >
            {t('services.desc')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              style={{ y: service.y }}
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white/[0.02] p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all duration-500 flex flex-col will-change-transform overflow-hidden"
            >
              {/* Glass reflection */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed font-light">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-4 shadow-[0_0_8px_#22d3ee]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
