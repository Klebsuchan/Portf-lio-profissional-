import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
  Server,
  Database,
  Workflow,
  Bot,
  Github,
  Mail,
  ChevronRight,
  Menu,
  X,
  Code2,
  Terminal,
  Sun,
  Moon,
  ArrowUp,
  Layers,
  Cpu
} from 'lucide-react';
import { useState, useEffect } from 'react';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Parallax Setup
  const { scrollY } = useScroll();
  
  // Hero Background Parallax (moves slower than foreground)
  const bgYBlob1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const bgYBlob2 = useTransform(scrollY, [0, 1000], [0, -150]);
  
  // Hero Elements Parallax
  const heroContentY = useTransform(scrollY, [0, 800], [0, 100]);

  // Projects Parallax Ref
  const projectsRef = useRef<HTMLElement>(null);
  const { scrollYProgress: projectsScroll } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });
  const projectsBgY = useTransform(projectsScroll, [0, 1], [-100, 100]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Soluções', href: '#sobre' },
    { name: 'Stack', href: '#stack' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Entregáveis', href: '#entregaveis' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Feedbacks', href: '#feedbacks' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out">
      {/* Background ambient light */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div style={{ y: bgYBlob1 }} className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-neon opacity-10 blur-[150px] rounded-full"></motion.div>
        <motion.div style={{ y: bgYBlob2 }} className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple opacity-[0.07] blur-[150px] rounded-full"></motion.div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-[var(--bg-color)]/80 backdrop-blur-md border-b border-border-glass">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[60px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="logo text-[20px] font-bold tracking-tight text-text-main flex items-center">
                Braian Kleber
                <span className="w-1.5 h-1.5 bg-neon rounded-full inline-block ml-0.5 shadow-[0_0_10px_#00ff66]"></span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="uppercase text-[13px] tracking-[0.1em] font-semibold opacity-70 hover:opacity-100 hover:text-text-main transition-opacity px-3 py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Theme Switcher & Mobile menu button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hidden md:flex p-2 text-text-muted hover:text-text-main transition-colors outline-none"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 text-text-muted hover:text-text-main transition-colors outline-none"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-text-muted hover:text-text-main transition-colors outline-none"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--bg-color)]/95 backdrop-blur-xl border-t border-border-glass absolute w-full left-0 top-full">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-main hover:text-neon block px-3 py-4 text-base font-medium border-b border-border-glass/50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-24 pb-8 max-w-[1440px] mx-auto px-6 lg:px-10 lg:grid lg:grid-cols-[420px_1fr] lg:gap-x-6 lg:gap-y-5">
        {/* HERO SECTION */}
        <section className="lg:col-start-1 lg:row-span-8 lg:sticky lg:top-[90px] self-start mt-4 mb-12 lg:mb-0 z-10">
          <motion.div style={{ y: heroContentY }} className="flex flex-col">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
            >
              <motion.div variants={FADE_UP} className="text-[11px] uppercase tracking-[0.2em] text-purple mb-3 block">
                Engenharia de Software de Alto Nível
              </motion.div>

              <motion.h1 
                variants={FADE_UP}
                className="font-display text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] mb-5 text-gradient font-bold"
              >
                Arquitetura e Engenharia de Software para o Futuro do seu Negócio.
              </motion.h1>
              
              <motion.p 
                variants={FADE_UP}
                className="text-[15px] md:text-[16px] leading-[1.6] opacity-80 mb-8 max-w-md text-text-muted"
              >
                Desenvolvedor focado em performance, consistência de dados e conversão. 
                Transformo visões de mercado em plataformas digitais escaláveis e experiências cinematográficas.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://wa.me/5554991064604" target="_blank" rel="noreferrer" className="glow-button px-7 py-3.5 rounded-md flex items-center justify-center text-[14px]">
                  Agendar Call Estratégica
                </a>
                <a href="#projetos" className="border border-border-glass text-text-main rounded-md px-7 py-3.5 text-[14px] font-bold hover:bg-black-deep/10 transition-colors text-center">
                  Explorar
                </a>
              </motion.div>
            </motion.div>

            {/* Abstract Visual Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden"
            >
              <div className="w-full aspect-square relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-black-deep via-transparent to-black-deep z-10 rounded-2xl"></div>
                <div className="w-full h-full glass-panel rounded-2xl overflow-hidden relative border-border-glass">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                  
                  {/* Floating abstract code elements */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }} 
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute top-20 left-10 p-4 glass-panel rounded-lg border-purple/20 blur-[0.5px]"
                  >
                    <Code2 className="text-purple mb-2" size={24} />
                    <div className="w-24 h-1.5 bg-text-muted/40 rounded mb-2"></div>
                    <div className="w-16 h-1.5 bg-text-muted/20 rounded"></div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [10, -10, 10] }} 
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 right-10 p-4 glass-panel rounded-lg border-neon/20 z-20 shadow-2xl"
                  >
                    <Terminal className="text-neon mb-2" size={24} />
                    <div className="w-32 h-1.5 bg-neon/50 rounded mb-2"></div>
                    <div className="w-20 h-1.5 bg-neon/30 rounded"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT & EDU */}
        <section id="sobre" className="lg:col-start-2 mb-5 lg:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="glass-panel p-5 relative overflow-hidden md:col-span-2 flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple opacity-5 blur-[40px] rounded-full"></div>
              <div className="relative z-10">
                <h2 className="font-display text-[18px] font-bold text-neon mb-2">Muito Além da Interface.</h2>
                <div className="space-y-3 text-[13px] text-text-muted leading-[1.5] font-normal opacity-80">
                  <p>
                    Combino sólidos conhecimentos de engenharia de software acadêmica com a agilidade exigida pelo mercado contemporâneo. 
                    Com <strong className="text-text-main">4 anos de atuação na área</strong>, meu foco está na construção de fundações sólidas: desde o modelo de dados até a visualização no client.
                  </p>
                  <p>
                    Através de <span className="text-text-main font-semibold">planejamento estruturado e arquitetura limpa</span>, 
                    garanto previsibilidade arquitetural e a entrega de produtos com o mais alto rigor técnico e estético. 
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              transition={{ delay: 0.1 }}
              className="glass-panel p-5 flex flex-col justify-center items-start border-l-2 border-l-neon/50 bg-neon/5"
            >
              <h3 className="text-text-main font-bold text-[32px] font-display leading-none mb-1">4<span className="text-neon text-[20px]">+</span></h3>
              <p className="text-text-muted text-[11px] uppercase tracking-wider font-semibold opacity-70 mb-4">Anos de Atuação</p>
              
              <div className="space-y-3 w-full">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon"></div>
                    <span className="text-[10px] font-bold text-text-main">Gestão de TI</span>
                  </div>
                  <p className="text-[10px] text-text-muted">Graduado • Formado</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple"></div>
                    <span className="text-[10px] font-bold text-text-main">Análise de Sistemas</span>
                  </div>
                  <p className="text-[10px] text-text-muted">Em andamento • Finalizando</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="lg:col-start-2 mb-5 lg:mb-0">
          <div className="sr-only">
            <h2>Competências Técnicas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="glass-panel p-4 border-l-2 border-l-purple hover:border-l-neon transition-colors group flex flex-col justify-center"
            >
              <h3 className="text-text-main font-bold text-[13px] mb-1 flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-purple group-hover:text-neon transition-colors" /> Backend & APIs
              </h3>
              <p className="text-text-muted text-[11px] opacity-60 leading-[1.4]">
                Desenvolvimento de sistemas robustos e de alta performance utilizando Python e FastAPI.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: 0.1 }}
              className="glass-panel p-4 border-l-2 border-l-purple hover:border-l-neon transition-colors group flex flex-col justify-center"
            >
              <h3 className="text-text-main font-bold text-[13px] mb-1 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-purple group-hover:text-neon transition-colors" /> Arquitetura & Dados
              </h3>
              <p className="text-text-muted text-[11px] opacity-60 leading-[1.4]">
                Estruturação lógica e persistência segura utilizando Supabase. Consistência corporativa.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: 0.2 }}
              className="glass-panel p-4 border-l-2 border-l-purple hover:border-l-neon transition-colors group flex flex-col justify-center"
            >
              <h3 className="text-text-main font-bold text-[13px] mb-1 flex items-center gap-2">
                <Workflow className="w-3.5 h-3.5 text-purple group-hover:text-neon transition-colors" /> Modelagem de Software
              </h3>
              <p className="text-text-muted text-[11px] opacity-60 leading-[1.4]">
                Planejamento avançado utilizando diagramas Mermaid para clareza e previsibilidade.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: 0.3 }}
              className="glass-panel p-4 border-l-2 border-l-purple hover:border-l-neon transition-colors group flex flex-col justify-center"
            >
              <h3 className="text-text-main font-bold text-[13px] mb-1 flex items-center gap-2">
                <Bot className="w-3.5 h-3.5 text-purple group-hover:text-neon transition-colors" /> Ecossistema Web & IA
              </h3>
              <p className="text-text-muted text-[11px] opacity-60 leading-[1.4]">
                Proficiência em TypeScript, integrações inteligentes de IA e automação de processos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="stack" className="lg:col-start-2 mb-6 lg:mb-0 relative z-10">
          <div className="mb-4">
            <h2 className="font-display text-[18px] font-bold text-text-main flex items-center">
              <Layers className="text-purple mr-2" size={18} />
              Stack Tecnológica
            </h2>
            <p className="text-text-muted text-[12px] mt-1">Ferramentas de alta performance que utilizo no ecossistema de desenvolvimento empresarial.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              "React & Next.js",
              "Node.js & Express",
              "TypeScript",
              "Tailwind CSS",
              "PostgreSQL",
              "Prisma ORM",
              "Google Cloud",
              "Figma (UI/UX)"
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: idx * 0.05 }}
                className="glass-panel px-4 py-2.5 flex items-center justify-start text-left hover:border-purple/30 transition-colors shrink-0"
              >
                <span className="text-[12px] sm:text-[13px] font-semibold text-text-main opacity-90">{tech}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORKFLOW */}
        <section id="workflow" className="lg:col-start-2 mb-6 lg:mb-0">
          <div className="sr-only">
            <h2>Metodologia & Diferenciais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="glass-panel p-4 border-l-2 border-l-neon hover:border-l-purple transition-colors"
            >
              <h3 className="text-text-main font-bold text-[13px] mb-1">Velocidade de Execução</h3>
              <p className="text-text-muted text-[11px] opacity-60 leading-[1.4]">
                Entrega ágil com <strong className="text-neon font-semibold text-[11px] opacity-100">prazo médio de 6 dias</strong> (dependendo do projeto), sem comprometer a robustez técnica.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: 0.1 }}
              className="glass-panel p-4 border-l-2 border-l-neon hover:border-l-purple transition-colors"
            >
              <h3 className="text-text-main font-bold text-[13px] mb-1">Custo-Benefício Estratégico</h3>
              <p className="text-text-muted text-[11px] opacity-60 leading-[1.4]">
                Orçamentos altamente acessíveis no momento. Meu foco atual é viabilizar projetos de alto padrão para a construção e expansão do meu portfólio empresarial.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ENTREGÁVEIS */}
        <section id="entregaveis" className="lg:col-start-2 mb-6 lg:mb-0 mt-4">
          <div className="mb-4">
            <h2 className="font-display text-[18px] font-bold text-text-main">Documentação Base</h2>
            <p className="text-text-muted text-[12px] mt-1">Sistemas previsíveis e robustos. Cada projeto acompanha os seguintes documentos estratégicos:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="glass-panel p-4 group"
            >
              <h3 className="text-neon font-bold text-[13px] mb-1">Kickoff Estratégico</h3>
              <p className="text-text-muted text-[11px] opacity-70 leading-[1.4]">
                Alinhamento inicial focado em negócios. Entendimento profundo das necessidades, metas de conversão e definição da rota tecnológica.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: 0.1 }}
              className="glass-panel p-4 group"
            >
              <h3 className="text-purple font-bold text-[13px] mb-1">PRD (Product Requirements Document)</h3>
              <p className="text-text-muted text-[11px] opacity-70 leading-[1.4]">
                O escopo blindado. Documentação detalhando funcionalidades esperadas, requisitos técnicos, regras de negócio e limites da aplicação.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: 0.2 }}
              className="glass-panel p-4 group"
            >
              <h3 className="text-neon font-bold text-[13px] mb-1">DoD (Definition of Done)</h3>
              <p className="text-text-muted text-[11px] opacity-70 leading-[1.4]">
                A garantia de qualidade final. Critérios rigorosos e checklists que definem claramente quando uma entrega atinge o padrão visual e técnico exigido.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: 0.3 }}
              className="glass-panel p-4 group"
            >
              <h3 className="text-purple font-bold text-[13px] mb-1">System Instructions</h3>
              <p className="text-text-muted text-[11px] opacity-70 leading-[1.4]">
                O manual de escala. Instruções do sistema, visão geral da arquitetura para manutenção futura e preparação estratégica para integração de IA.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section ref={projectsRef} id="projetos" className="lg:col-start-2 mb-6 lg:mb-0 relative">
          <motion.div 
            style={{ y: projectsBgY }} 
            className="absolute right-[-10%] top-[20%] w-[400px] h-[400px] bg-neon opacity-5 blur-[100px] rounded-full pointer-events-none z-0"
          />
          <div className="sr-only">
            <h2>Trabalhos em Desenvolvimento</h2>
          </div>

          <div className="mb-6 relative z-10 w-full overflow-hidden mask-image-marquee">
            <div className="flex animate-marquee gap-4 w-[max-content]">
              {/* Double array for infinite effect */}
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex gap-4">
                  {[
                    "/image.png",
                    "/image (1).png",
                    "/image (2).png",
                    "/image (3).png",
                    "/image (4).png",
                    "/image (5).png",
                    "/image (6).png",
                    "/image (7).png",
                    "/image (8).png",
                    "/image (9).png",
                    "/image (10).png",
                  ].map((src, idx) => (
                    <div key={idx} className="w-[280px] h-[160px] md:w-[320px] md:h-[180px] shrink-0 rounded-xl overflow-hidden border border-border-glass bg-white-glass/10 shadow-sm relative group">
                      <img 
                        src={src} 
                        alt={`Projeto ${idx}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black-deep/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
            {[
              {
                title: "Animed Petshop e Veterinária",
                desc: "Plataforma de gestão e agendamento para clínica veterinária e petshop. Focada na experiência do usuário e na organização de consultas e serviços de banho e tosa.",
                tags: ["React", "TypeScript", "Vercel"],
                color: "cyan",
                stack: ["React", "TypeScript", "Tailwind CSS"],
                href: "https://github.com/braianklebercamargo-sketch/Animed-Petshop-e-Veterin-ria"
              },
              {
                title: "Naturalmix Restaurant",
                desc: "Landing page e cardápio digital para restaurante focado em alimentação saudável. Otimizado para SEO, carregamento rápido e design voltado para conversão.",
                tags: ["Landing Page", "Food", "Vercel"],
                color: "neon",
                stack: ["React", "TypeScript", "Tailwind CSS"],
                href: "https://naturalmix-restaurant.vercel.app"
              },
              {
                title: "Nossa História de Amor",
                desc: "Template interativo e imersivo para casais (convites digitais e álbuns de casamento). Contém animações fluidas e design emocional.",
                tags: ["Interactive", "Motion", "Vercel"],
                color: "purple",
                stack: ["React", "TypeScript", "Framer Motion", "Tailwind"],
                href: "https://nossa-hist-ria-de-amor-six.vercel.app"
              },
              {
                title: "Klebsuchan",
                desc: "Blog e plataforma de conteúdo focado no universo nerd, cultura pop, anime e tecnologia. Estrutura otimizada para SEO e alta performance.",
                tags: ["Blog Nerd", "Conteúdo", "Vercel"],
                color: "cyan",
                stack: ["Next.js", "TypeScript", "Tailwind CSS"],
                href: "https://klebsuchan-braianklebercamargo-sketchs-projects.vercel.app"
              },
              {
                title: "Harrisson e Kali",
                desc: "Projeto comemorativo de relacionamento estruturado com design inovador e visual envolvente com galeria de memórias interativa.",
                tags: ["Personalite", "Galeria", "Vercel"],
                color: "neon",
                stack: ["React", "TypeScript", "Tailwind CSS"],
                href: "https://harrisson-e-kali.vercel.app"
              },
              {
                title: "Braian e Stefani",
                desc: "Plataforma em formato de linha do tempo desenvolvida em React para arquivamento e exposição de história amorosa de forma cronológica.",
                tags: ["UX", "História", "GitHub"],
                color: "purple",
                stack: ["React", "TypeScript", "Tailwind CSS"],
                href: "https://github.com/braianklebercamargo-sketch/Braian-e-Stefani---uma-hist-ria-de-amor"
              },
              {
                title: "Maiara e Marcelo",
                desc: "Layout responsivo focado em micro-interações, estruturado para convite imersivo focado em usabilidade unificada em navegadores móveis.",
                tags: ["Frontend", "Convite", "GitHub"],
                color: "cyan",
                stack: ["React", "TypeScript", "UI/UX"],
                href: "https://github.com/braianklebercamargo-sketch/Uma-hist-ria-de-amor-Maiara-e-Marcelo-"
              },
              {
                title: "Core Services & API",
                desc: "Repositório base de estudos, interfaces genéricas e projetos privados. Focado em escalabilidade, arquitetura limpa e testes unitários.",
                tags: ["Backend", "Arquitetura", "Privado"],
                color: "slate",
                stack: ["Node.js", "Express", "Microservices", "GCP"],
                href: "https://github.com/braianklebercamargo-sketch"
              }
            ].map((project, idx) => {
              const MotionTag = project.href ? motion.a : motion.div;
              return (
              <MotionTag 
                key={project.title}
                href={project.href}
                target={project.href ? "_blank" : undefined}
                rel={project.href ? "noopener noreferrer" : undefined}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-4 flex flex-col justify-start relative overflow-hidden group hover:border-purple/50 transition-colors h-full"
              >
                <div className="mb-2">
                  <span className="text-[9px] font-extrabold uppercase bg-purple/10 text-purple px-1.5 py-0.5 rounded mr-1 inline-block">
                    {project.tags[0]}
                  </span>
                </div>
                
                <div className="flex flex-col flex-1">
                  <h3 className="font-bold text-[14px] text-text-main mb-1 group-hover:text-purple transition-colors">{project.title}</h3>
                  <p className="text-text-muted text-[11px] opacity-60 leading-[1.4] mb-3">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[9px] text-text-muted opacity-80 bg-border-glass/30 border border-border-glass px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionTag>
            )})}
          </div>
        </section>

        {/* FEEDBACKS */}
        <section id="feedbacks" className="lg:col-start-2 mb-6 lg:mb-0">
          <div className="sr-only">
            <h2>Feedback de Clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                text: "A reestruturação da nossa arquitetura foi impecável. O sistema que antes travava com poucos acessos agora suporta escala sem gargalos. Alta previsibilidade e profissionalismo.",
                name: "Ricardo Mendes",
                role: "CTO, TechLog Operations",
                img: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                text: "Sua visão sobre produtos digitais é diferenciada. A otimização da nossa landing page e infraestrutura aumentaram nossa taxa de conversão quase instantaneamente.",
                name: "Mariana Costa",
                role: "Fundadora, ScaleUp Digital",
                img: "https://randomuser.me/api/portraits/women/44.jpg"
              }
            ].map((feedback, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-5 relative overflow-hidden group hover:border-neon/30 transition-colors"
              >
                <div className="text-neon mb-2 text-3xl font-serif leading-none h-6 opacity-80">"</div>
                <p className="text-text-muted text-[12px] opacity-80 leading-[1.6] mb-5 italic font-light">
                  {feedback.text}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img loading="lazy" decoding="async" width="36" height="36" src={feedback.img} alt={feedback.name} className="w-9 h-9 rounded-full border-2 border-border-glass object-cover" />
                  <div className="flex flex-col">
                    <span className="text-text-main font-bold text-[11px]">{feedback.name}</span>
                    <span className="text-text-muted text-[9px] uppercase tracking-wider">{feedback.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="lg:col-start-2 mb-6 mt-4 lg:mb-0">
          <div className="mb-4">
            <h2 className="font-display text-[18px] font-bold text-text-main">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Qual é o tempo médio de entrega dos projetos?",
                a: "O prazo médio de entrega é de 6 dias, porém esse tempo pode variar dependendo da complexidade e do escopo específico do seu projeto."
              },
              {
                q: "Como funciona a definição de orçamento?",
                a: "Atualmente pratico valores altamente acessíveis (baixo custo). Meu principal objetivo no momento é expandir agressivamente a criação e o tamanho do meu portfólio empresarial com cases de sucesso."
              },
              {
                q: "Os projetos possuem suporte após a entrega?",
                a: "Sim. A arquitetura de software elaborada foca em documentação limpa. Ofereço suporte para manter sua base de dados escalando perfeitamente caso você escale para infoprodutos e plataformas maiores."
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-4 group hover:border-purple/30 transition-colors"
              >
                <h3 className="text-text-main font-bold text-[13px] mb-2 flex items-center group-hover:text-purple transition-colors">
                  <ChevronRight size={14} className="text-neon mr-2" />
                  {faq.q}
                </h3>
                <p className="text-text-muted text-[11px] opacity-70 leading-[1.6] pl-6">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="lg:col-start-2 mt-8 mb-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
            className="glass-panel p-8 text-center relative overflow-hidden flex flex-col items-center justify-center border-neon/30 hover:border-neon/50 transition-colors"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon opacity-[0.05] blur-[80px] rounded-full pointer-events-none"></div>
            
            <h2 className="font-display text-[22px] font-bold text-text-main mb-2 relative z-10">
              Pronto para escalar sua operação?
            </h2>
            <p className="text-text-muted text-[13px] mb-6 max-w-[400px] relative z-10 leading-[1.6]">
              Vamos transformar a arquitetura do seu negócio. Sistemas escaláveis, performáticos e de alta conversão.
            </p>
            
            <a 
              href="https://wa.me/5554991064604" 
              target="_blank" 
              rel="noreferrer"
              className="glow-button px-7 py-3.5 rounded-md flex items-center justify-center text-[13px] relative z-10 font-bold"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] mr-2">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Peça seu orçamento aqui
            </a>
          </motion.div>
        </section>

        {/* FOOTER & CONTACT */}
        <section id="contato" className="lg:col-span-2 mt-8">
          <div className="min-h-[60px] border-t border-border-glass flex flex-col md:flex-row items-center justify-between text-[11px] opacity-70 px-2 lg:px-4 gap-6 py-6 md:py-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span>&copy; 2026 Braian Kleber. Todos os direitos reservados.</span>
              <span className="text-text-muted">📍 Rio Grande do Sul, Brasil</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-text-muted">
              <a href="https://wa.me/5554991064604" target="_blank" rel="noreferrer" className="hover:text-text-main hover:underline transition-all">WhatsApp</a>
              <span className="opacity-30">•</span>
              <a href="mailto:braian.kleber.camargo@gmail.com" className="hover:text-text-main hover:underline transition-all">Email</a>
              <span className="opacity-30">•</span>
              <a href="https://github.com/braianklebercamargo-sketch" target="_blank" rel="noreferrer" className="hover:text-text-main hover:underline transition-all">GitHub</a>
            </div>
          </div>
        </section>

      </main>

      {/* BACK TO TOP BUTTON */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-text-muted hover:text-text-main hover:border-purple/50 transition-all z-50 shadow-lg"
        aria-label="Voltar para o topo"
      >
        <ArrowUp size={18} />
      </motion.button>
    </div>
  );
}
