import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  const projects = [
    {
      title: "Pastelarica Delivery 2.0",
      description: language === 'pt' ? "Plataforma de delivery moderna e focada em performance para a Pastelarica (Versão 2.0), com cardápio online inteligente, carrinho dinâmico e fluxo ágil para pedidos via WhatsApp." : "Modern and performance-focused delivery platform for Pastelarica (Version 2.0) with a smart online menu, dynamic cart, and streamlined order flow via WhatsApp.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      githubLink: "https://github.com/Klebsuchan/Pastelarica2.0",
      liveLink: "https://pastelaricadelivery.vercel.app",
      accent: "from-orange-500 to-red-600",
      offset: ["50px", "-100px"]
    },
    {
      title: "StellarCare",
      description: language === 'pt' ? "Sistema avançado de Assistência de Enfermagem (SAE) e Prontuário Eletrônico (PEP) desenvolvido para monitoramento clínico em tempo real e evoluções estruturadas." : "Advanced Nursing Assistance System (SAE) and Electronic Health Record (EHR) built for real-time clinical monitoring and structured patient evolutions.",
      techStack: ["React", "TypeScript", "TailwindCSS", "HTML/CSS"],
      githubLink: "https://github.com/Klebsuchan/StellarCare",
      liveLink: "https://stellar-care.vercel.app",
      accent: "from-cyan-500 to-blue-600",
      offset: ["250px", "-400px"]
    },
    {
      title: "FinanceKleber",
      description: language === 'pt' ? "Plataforma de gestão financeira inteligente. Ferramenta simplificada para acompanhar despesas, receitas corporativas e gerar dashboards em tempo real." : "Smart financial management platform. Ideal for tracking expenses, corporate income, and rendering real-time dashboards.",
      techStack: ["TypeScript", "React", "Node.js", "HTML/CSS"],
      githubLink: "https://github.com/Klebsuchan/KleberFinance",
      liveLink: "https://nexus-fc-seven.vercel.app",
      accent: "from-purple-500 to-fuchsia-600",
      offset: ["100px", "-150px"]
    },
    {
      title: "Wonder SNES Cloud",
      description: language === 'pt' ? "Aplicação moderna em nuvem para rodar clássicos do Super Nintendo e PS1, projetada para performance contínua e renderização Web sem downloads." : "Modern cloud web emulation for Super Nintendo and PS1 classics. Engineered for seamless rendering with no downloads required.",
      techStack: ["TypeScript", "Next.js", "Web Emulation", "JavaScript"],
      githubLink: "https://github.com/Klebsuchan/atualiza-o-sness",
      liveLink: "https://wondersnes-cloud.vercel.app",
      accent: "from-orange-400 to-red-600",
      offset: ["200px", "-300px"]
    },
    {
      title: "Naturalmix Restaurant",
      description: language === 'pt' ? "Plataforma web para restaurantes focados em alimentação saudável. Sistema focado em presença digital, apresentação de cardápio e conversão de vendas." : "Web platform for healthy food restaurants. Focused on modern digital presence, menu presentations, and sales conversion optimization.",
      techStack: ["TypeScript", "React", "Next.js", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/Naturalmix-Restaurant",
      liveLink: "https://naturalmix-restaurant.vercel.app",
      accent: "from-green-500 to-emerald-700",
      offset: ["300px", "-450px"]
    },
    {
      title: "Animed Veterinária",
      description: language === 'pt' ? "Landing page e ecossistema web para petshops e clínicas veterinárias, focado em UX otimizada para capturar leads e demonstrar serviços profissionais." : "Web ecosystem and landing page for animal clinics and pet shops. Specifically tuned for lead capture via an optimized user experience.",
      techStack: ["TypeScript", "React", "Node.js", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/animed-v2.0",
      liveLink: "https://animed-v2-0.vercel.app",
      accent: "from-teal-400 to-cyan-600",
      offset: ["50px", "-100px"]
    },
    {
      title: "Escola Coração de Mãe",
      description: language === 'pt' ? "Site institucional altamente otimizado para o setor educacional. Estruturado para fortalecer a imagem da escola e facilitar a comunicação com os pais." : "Highly optimized institutional website for the education sector. Structured to bolster school credibility and streamline parent communication.",
      techStack: ["TypeScript", "React", "TailwindCSS", "Framer Motion"],
      githubLink: "https://github.com/Klebsuchan/site-escola-cora-o-de-m-e",
      liveLink: "https://site-escola-coracao-de-mae.vercel.app/",
      accent: "from-pink-500 to-rose-600",
      offset: ["150px", "-250px"]
    },
    {
      title: "E-book Bolo de Pote",
      description: language === 'pt' ? "Landing page de alta conversão estruturada para venda de infoprodutos e e-books focados em confeitaria e empreendedorismo." : "High-conversion landing page designed for selling infoproducts and e-books targeted towards bakery entrepreneurship.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      githubLink: "https://github.com/Klebsuchan/E-book-Bolo-de-pote",
      liveLink: "https://lucro-no-pote.vercel.app/",
      accent: "from-amber-400 to-yellow-600",
      offset: ["250px", "-400px"]
    },
    {
      title: "Landing Page: E-book Arquitetura",
      description: language === 'pt' ? "Página de vendas dedicada a infoproduto no nicho de arquitetura, apresentando design refinado e foco direto em conversão de leads." : "Sales page for a niche architecture infoproduct, delivering refined aesthetic design paired with a direct approach to lead conversion.",
      techStack: ["React", "TypeScript", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/ebook-arquitetura",
      liveLink: "https://ebook-arquitetura.vercel.app",
      accent: "from-slate-400 to-gray-600",
      offset: ["100px", "-150px"]
    },
    {
      title: "Point do Dog PF",
      description: language === 'pt' ? "Plataforma de delivery online moderna, garantindo rapidez e eficiência no fluxo de pedidos e visualização do cardápio." : "Modern online delivery platform, ensuring speed and efficiency in the order flow and menu visualization.",
      techStack: ["React", "TypeScript", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/pointdodogpf",
      liveLink: "https://pointdodogpf.vercel.app",
      accent: "from-red-500 to-orange-600",
      offset: ["50px", "-100px"]
    },
    {
      title: "A Sorte te Guia",
      description: language === 'pt' ? "Sistema para campanhas e sorteios digitais, com interface atrativa focada em engajamento e experiência de usuário fluida." : "System for digital campaigns and giveaways, featuring an attractive interface focused on engagement and fluid user experience.",
      techStack: ["React", "TypeScript", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/a-sorte-te-guia",
      liveLink: "https://a-sorte-te-guia.vercel.app",
      accent: "from-yellow-400 to-green-600",
      offset: ["150px", "-250px"]
    },
    {
      title: "Braian & Stefani - História de Amor",
      description: language === 'pt' ? "Página interativa focada em storytelling, construída para celebrar memorabilidade e romance de casais." : "Interactive storytelling page built to celebrate romance and memorability for couples.",
      techStack: ["Frontend", "UI/UX", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/Braian-e-Stefani---uma-hist-ria-de-amor",
      liveLink: "https://braian-e-stefani-uma-historia-de-am.vercel.app",
      accent: "from-rose-400 to-pink-600",
      offset: ["200px", "-300px"]
    },
    {
      title: "Harrisson & Kali",
      description: language === 'pt' ? "Experiência digital personalizada dedicada a documentar uma história de amor com design elegante." : "Custom digital experience dedicated to documenting a love story with elegant design.",
      techStack: ["React", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/Harrisson-e-Kali-",
      liveLink: "https://harrisson-e-kali.vercel.app",
      accent: "from-pink-500 to-purple-600",
      offset: ["100px", "-150px"]
    },
    {
      title: "Léo & Vanessa",
      description: language === 'pt' ? "Landing page animada e sensível focada na jornada de amor e parceria do casal." : "Animated and sensitive landing page focused on the couple's journey of love and partnership.",
      techStack: ["Frontend", "UI/UX"],
      githubLink: "https://github.com/Klebsuchan/L-o-e-Vanessa",
      liveLink: "https://leo-vanessa.vercel.app",
      accent: "from-red-400 to-rose-500",
      offset: ["50px", "-100px"]
    },
    {
      title: "Nossa História de Amor",
      description: language === 'pt' ? "Layout romântico e imersivo concebido para preservar recordações e a trajetória de afeto de casais." : "Immersive romantic layout designed to preserve memories and the affectionate trajectory of couples.",
      techStack: ["React", "Vercel"],
      githubLink: "https://github.com/Klebsuchan/Nossa-hist-ria-de-amor-",
      liveLink: "https://nossa-hist-ria-de-amor-six.vercel.app",
      accent: "from-fuchsia-500 to-pink-700",
      offset: ["150px", "-250px"]
    },
    {
      title: "Enterprise Bkmdc",
      description: language === 'pt' ? "Portfólio corporativo anterior para apresentação de software e arquitetura limpa." : "Previous corporate portfolio for software presentation and clean architecture.",
      techStack: ["React", "TypeScript", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/Enterprise-Bkmdc",
      liveLink: "https://portfolio-braian-three.vercel.app",
      accent: "from-blue-600 to-indigo-800",
      offset: ["200px", "-300px"]
    },
    {
      title: "Portfólio Profissional (V1)",
      description: language === 'pt' ? "Primeira versão de um portfólio digital profissional destacando experiências de frontend e engenharia." : "First version of a professional digital portfolio highlighting frontend and engineering experiences.",
      techStack: ["Frontend", "UI/UX"],
      githubLink: "https://github.com/Klebsuchan/Portf-lio-profissional-",
      liveLink: "https://portf-lio-profissional-henna.vercel.app",
      accent: "from-slate-600 to-gray-800",
      offset: ["100px", "-200px"]
    },
    {
      title: "Pastelarica Delivery (V1)",
      description: language === 'pt' ? "Primeira versão da plataforma de delivery focada em vendas de pastéis com suporte a WhatsApp." : "Initial version of the delivery platform focused on pastry sales with WhatsApp support.",
      techStack: ["React", "TailwindCSS"],
      githubLink: "https://github.com/Klebsuchan/Pastelarica-Delivery",
      liveLink: "https://pastelarica-delivery.vercel.app",
      accent: "from-amber-500 to-orange-700",
      offset: ["50px", "-150px"]
    }
  ];

  return (
    <section id="portfolio" ref={ref} className="py-16 md:py-32 bg-black relative overflow-hidden z-20">
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-black to-black pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-widest uppercase text-sm mb-4">
              <Code2 className="w-4 h-4" />
              {t('portfolio.badge')}
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6 font-display uppercase tracking-tight"
            >
              {t('portfolio.title')}
            </motion.h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-6">
              {t('portfolio.desc')}
            </p>
          </div>
          <a 
            href="https://github.com/Klebsuchan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex w-full md:w-auto justify-center items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white text-white hover:text-black border border-white/20 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-xl"
          >
            <Github className="w-5 h-5" />
            {language === 'pt' ? 'Acessar Github' : 'Access Github'}
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/[0.02] p-6 md:p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-colors duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-sm"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white leading-tight font-display tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed font-light max-w-3xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-white/5 text-cyan-300 text-xs font-bold tracking-widest uppercase rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-6 md:mt-0 shrink-0">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white hover:text-black text-white rounded-xl transition-all border border-white/20 font-bold uppercase tracking-widest text-xs w-full md:w-auto justify-center"
                >
                  <Github className="w-4 h-4" />
                  {t('portfolio.sourceCode')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
