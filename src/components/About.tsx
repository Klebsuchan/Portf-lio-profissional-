import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';
import { User, Server, Cpu, Code, Briefcase, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const graphicY = useTransform(scrollYProgress, [0, 1], ["200px", "-200px"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);
  const bgPlanetY = useTransform(scrollYProgress, [0, 1], ["-150px", "150px"]);
  
  const orbit1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const orbit2Rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);

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

  // Parallax offsets
  const ring1X = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const ring1Y = useTransform(smoothMouseY, [-1, 1], [-20, 20]);
  const ring2X = useTransform(smoothMouseX, [-1, 1], [30, -30]);
  const ring2Y = useTransform(smoothMouseY, [-1, 1], [30, -30]);
  const planetX = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
  const planetY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  const mainSkills = [
    { name: t('about.skills.frontend'), icon: <Code className="w-5 h-5 text-cyan-400" /> },
    { name: t('about.skills.backend'), icon: <Server className="w-5 h-5 text-purple-400" /> },
    { name: t('about.skills.automations'), icon: <Cpu className="w-5 h-5 text-green-400" /> },
    { name: t('about.skills.english'), icon: <Languages className="w-5 h-5 text-yellow-400" /> },
  ];

  const hardSkills = ['React', 'Node.js', 'Rust', 'Python', 'n8n', 'TailwindCSS', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'];

  const experience = [
    {
      period: t('about.exp.period'),
      role: t('about.exp.role'),
      description: t('about.exp.desc')
    },
    {
      period: t('about.edu.period'),
      role: t('about.edu.role'),
      description: t('about.edu.desc')
    }
  ];

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-black relative overflow-hidden z-10">
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]) }}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgPlanetY, x: ring2X }}
        className="absolute top-[20%] left-[-10%] w-96 h-96 border border-white/5 rounded-full pointer-events-none" 
      >
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6 will-change-transform"
          >
            <div className="inline-flex items-center gap-2 text-purple-400 font-medium tracking-widest uppercase text-sm">
              <User className="w-4 h-4" />
              {t('about.title')}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight">
              {language === 'pt' ? 'Sistemas modernos para desafios reais.' : 'Modern systems for real challenges.'}
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed font-light mt-4" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />

            <div className="pt-2">
              <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-3">{t('about.hardSkills')}</h3>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors cursor-default rounded-lg text-sm font-medium text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {mainSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl text-center">
                  <div className="p-2 bg-black/50 rounded-full mb-2 border border-white/5">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-200 uppercase tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-6">
              <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> {t('about.timeline')}
              </h3>
              <div className="space-y-6 border-l border-white/10 pl-4 ml-2">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                    <div className="text-xs text-cyan-400 font-bold tracking-wider mb-1 uppercase">{exp.period}</div>
                    <div className="text-lg font-bold text-white mb-1">{exp.role}</div>
                    <div className="text-sm text-slate-400 font-light leading-relaxed">{exp.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
          </motion.div>

          {/* Abstract planetary visual */}
          <motion.div
            style={{ y: graphicY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:h-[600px] flex items-center justify-center p-8 lg:p-0 will-change-transform"
          >
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              {/* Central Planet */}
              <motion.div style={{ x: planetX, y: planetY }} className="absolute w-40 h-40 bg-gradient-to-br from-slate-800 to-black rounded-full shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.1),_0_0_50px_rgba(0,0,0,0.8)] border border-slate-700 z-20 flex items-center justify-center">
                <Code className="w-10 h-10 text-slate-400 opacity-50" />
              </motion.div>
              
              {/* Orbiting Ring 1 */}
              <motion.div 
                style={{ rotate: orbit1Rotate, x: ring1X, y: ring1Y }}
                className="absolute w-72 h-72 rounded-full border border-cyan-500/30 z-10"
              >
                <div className="absolute top-0 left-1/2 -ml-2 -mt-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />
              </motion.div>
              
              {/* Orbiting Ring 2 */}
              <motion.div 
                style={{ rotate: orbit2Rotate, x: ring2X, y: ring2Y }}
                className="absolute w-96 h-96 rounded-full border border-purple-500/20 z-10"
              >
                <div className="absolute bottom-0 right-1/4 -mb-1 -mr-1 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_#c084fc]" />
                <div className="absolute top-1/4 left-0 -ml-1.5 -mt-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
              </motion.div>
              
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full z-0" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
