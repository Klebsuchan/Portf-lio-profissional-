import React, { createContext, useState, useContext } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navbar
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.process': 'Processo',
    'nav.testimonials': 'Feedbacks',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contato',
    'nav.start': 'Iniciar Projeto',

    // Hero
    'hero.badge': 'Engenheiro de Software & Desenvolvedor Full-Stack',
    'hero.title1': 'Arquitetura Sólida',
    'hero.title2': 'Soluções Escaláveis',
    'hero.desc': 'Especilista em Node.js, React e automações n8n. Desenvolvo produtos fáceis de escalar focados na melhor experiência e conversão.',
    'hero.start': 'Iniciar Projeto',
    'hero.view': 'Ver Projetos',
    'hero.download': 'Download CV',

    // Divider
    'divider.title': 'Arquitetura Limpa e Código Escalável',
    'divider.subtitle': 'Tecnologia de Alta Performance',

    // About
    'about.title': 'Sobre Mim',
    'about.p1': 'Olá, sou <strong className="text-white font-medium">Braian Kleber M.C.</strong>, um desenvolvedor que une visão estratégica de produto à execução técnica impecável. Trago na bagagem forte orientação à conversão e arquiteturas performáticas.',
    'about.hardSkills': 'Hard Skills & Tecnologias',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.automations': 'Automações',
    'about.skills.english': 'Inglês Fluente',
    'about.timeline': 'Linha do Tempo',
    'about.exp.period': '5 Anos de Experiência',
    'about.exp.role': 'Desenvolvedor Full-Stack Pleno/Sênior',
    'about.exp.desc': 'Arquitetura de sistemas robustos com Node.js/Rust, frontend em React/Tailwind e automações avançadas (n8n/Python). Foco em MVP e escalabilidade ágil.',
    'about.edu.period': 'Formação & Acadêmico',
    'about.edu.role': 'Gestão de T.I. & Análise de Sistemas',
    'about.edu.desc': 'Graduado em Gestão de Tecnologia da Informação. Atualmente cursando Análise e Desenvolvimento de Sistemas pelo Senac.',
    
    // Services
    'services.badge': 'Minhas Especialidades',
    'services.title': 'Soluções que Impulsionam Resultados',
    'services.desc': 'Arquitetura moderna e focada em escalabilidade. De integrações de API complexas até experiências de usuário fluidas.',
    'services.1.title': 'Arquitetura Backend Sólida',
    'services.1.desc': 'APIs escaláveis e microsserviços responsivos em Node.js ou Rust, com foco em alta taxa de transferência, segurança de dados e manutenção limpa.',
    'services.2.title': 'Frontend Dinâmico',
    'services.2.desc': 'Interfaces interativas e reativas com React e Tailwind, que trazem uma experiência fluida para os usuários, priorizando as melhores práticas focadas em conversão (UI/UX).',
    'services.3.title': 'Automações Inteligentes',
    'services.3.desc': 'Construção de fluxos complexos em plataformas como n8n e Python, otimizando processos maçantes e orquestrando conexões perfeitas entre as mais variadas bases de dados e inteligências artificiais.',

    // Portfolio
    'portfolio.badge': 'Projetos Recentes',
    'portfolio.title': 'O Que Já Construímos',
    'portfolio.desc': 'Interfaces de produto e infraestrutura em que trabalhei.',
    'portfolio.viewProject': 'Ver Projeto',
    'portfolio.sourceCode': 'Código Fonte',

    // Process
    'process.badge': 'Como Funciona',
    'process.title': 'Meu Processo de Trabalho',
    'process.desc': 'Do primeiro contato até a entrega do documento de requisitos do produto (PRD).',
    'process.1.title': '1. Contato Inicial',
    'process.1.desc': 'Conversa inicial para entender as necessidades e objetivos do seu projeto.',
    'process.2.title': '2. Kickoff do Sistema',
    'process.2.desc': 'Reunião de alinhamento para definir o escopo principal, tecnologias e arquitetura.',
    'process.3.title': '3. System Instructions',
    'process.3.desc': 'Elaboração das instruções detalhadas do sistema e fluxos de trabalho essenciais.',
    'process.4.title': '4. PRD',
    'process.4.desc': 'Entrega do Product Requirements Document, consolidando todas as especificações técnicas e de negócio.',

    // Testimonials
    'testimonials.badge': 'O Que Dizem',
    'testimonials.title': 'Feedbacks de Clientes',
    'testimonials.desc': 'Resultados reais de projetos entregues e clientes satisfeitos.',
    'testimonials.1.text': 'O Braian não só entregou o que foi pedido, mas sugeriu melhorias na arquitetura que deixaram o sistema 3x mais rápido. Um profissional acima da média.',
    'testimonials.1.name': 'Ricardo Gomes',
    'testimonials.1.role': 'CTO, TechLogistics',
    'testimonials.2.text': 'A automação desenvolvida em n8n reduziu nosso trabalho manual em quase 80%. A entrega foi rápida e o código super organizado.',
    'testimonials.2.name': 'Amanda Silveira',
    'testimonials.2.role': 'Gerente de Operações, VendaMais',
    'testimonials.3.text': 'Criou nossa plataforma do zero com uma performance incrível. A interface ficou super moderna e a taxa de conversão dobrou no primeiro mês.',
    'testimonials.3.name': 'Carlos Eduardo',
    'testimonials.3.role': 'CEO, E-Commerce Hub',

    // FAQ
    'faq.badge': 'Dúvidas Frequentes',
    'faq.title': 'Perguntas Comuns',
    'faq.desc': 'Encontre respostas rápidas para as dúvidas mais comuns sobre meus serviços.',
    'faq.q1': 'Quanto tempo leva para desenvolver um projeto?',
    'faq.a1': 'O prazo varia conforme a complexidade. Projetos mais simples podem ser entregues a partir de 2 dias, enquanto aplicações complexas (front-end + back-end) podem levar algumas semanas ou meses. O cronograma exato é definido no planejamento.',
    'faq.q2': 'Você oferece suporte e manutenção após a entrega?',
    'faq.a2': 'Sim! Todos os projetos acompanham um período de garantia e suporte inicial gratuito. Após esse período, ofereço planos de manutenção mensal personalizados para garantir que tudo continue funcionando perfeitamente.',
    'faq.q3': 'Quais as formas de pagamento?',
    'faq.a3': 'O pagamento é geralmente dividido, com um sinal no início do projeto e parcelas atreladas a entregas (milestones) ou na entrega final. Aceito PIX, Transferência bancária e Cartão de Crédito em até 12x (taxas de parcelamento repassadas ao cliente).',
    'faq.q4': 'Eu recebo o código fonte do projeto?',
    'faq.a4': 'Sim. Ao final do projeto e com o pagamento concluído, o código fonte completo e a propriedade intelectual da aplicação desenvolvida são integralmente transferidos para você.',

    // Contact
    'contact.badge': 'Vamos Conversar',
    'contact.title': 'Pronto para Transformar sua Ideia em Realidade?',
    'contact.desc': 'De interfaces web excepcionais e sistemas embarcados até infraestrutura e fluxos complexos de IA no seu dia-a-dia. Envie sua mensagem e eu vou mostrar como.',
    'contact.info.title': 'Informações de Contato',
    'contact.info.emailTitle': 'E-mail de Contato',
    'contact.info.locationTitle': 'WhatsApp',
    'contact.pricing.title': 'Orçamentos Personalizados',
    'contact.pricing.desc': 'Cada projeto tem suas particularidades. Por isso, os orçamentos são 100% personalizados e adaptados às necessidades, escopo e tecnologias de cada cliente. Não uso "valores de vitrine"; meu foco está em dimensionar a solução exata para a sua demanda.',
    'contact.form.title': 'Envie uma Mensagem',
    'contact.form.name': 'Seu Nome',
    'contact.form.namePlaceholder': 'Nome completo',
    'contact.form.message': 'Sua Mensagem',
    'contact.form.messagePlaceholder': 'Descreva brevemente a sua necessidade ou ideia de aplicação...',
    'contact.form.button': 'Enviar com WhatsApp',

    // Footer
    'footer.madeWith': 'Feito no Brasil.',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.cookies': 'Política de Cookies',

    // Policies
    'privacy.title': 'Política de Privacidade',
    'privacy.content': 'Sua privacidade é importante para nós. Coletamos apenas as informações necessárias para fornecer nossos serviços. Não compartilhamos seus dados pessoais com terceiros sem o seu consentimento explícito, exceto quando exigido por lei. Utilizamos medidas de segurança padrão do setor para proteger suas informações contra acesso não autorizado.',
    'cookies.title': 'Política de Cookies',
    'cookies.content': 'Utilizamos cookies para melhorar a sua experiência no site, analisar o tráfego e entender como você interage com o nosso conteúdo. Não utilizamos cookies de rastreamento de terceiros com fins publicitários agressivos. Ao continuar a navegar no nosso site, você concorda com o uso dessas informações.',
  },
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.testimonials': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.start': 'Start Project',

    // Hero
    'hero.badge': 'Software Engineer & Full-Stack Developer',
    'hero.title1': 'Solid Architecture',
    'hero.title2': 'Scalable Solutions',
    'hero.desc': 'Expert in Node.js, React and n8n automations. I build highly scalable digital products focused on optimal user experience and high conversion rates.',
    'hero.start': 'Start Project',
    'hero.view': 'View Portfolio',
    'hero.download': 'Download CV',

    // Divider
    'divider.title': 'Clean Architecture & Scalable Code',
    'divider.subtitle': 'High-Performance Technology',

    // About
    'about.title': 'About Me',
    'about.p1': 'Hello, I am <strong className="text-white font-medium">Braian Kleber M.C.</strong>, a developer who bridges product strategy with flawless technical execution. I bring a robust track record of conversion-driven, highly performant systems architectures.',
    'about.hardSkills': 'Hard Skills & Technologies',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.automations': 'Automations',
    'about.skills.english': 'Fluent English',
    'about.timeline': 'Timeline',
    'about.exp.period': '5 Years of Experience',
    'about.exp.role': 'Mid/Senior Full-Stack Developer',
    'about.exp.desc': 'Architecting robust systems with Node.js/Rust, frontend applications in React/Tailwind, and advanced automation platforms (n8n/Python). Focused on MVPs & agile scalability.',
    'about.edu.period': 'Education & Academics',
    'about.edu.role': 'IT Management & Systems Analysis',
    'about.edu.desc': 'Degree in Information Technology Management. Currently pursuing an associate degree in Systems Analysis and Development (Senac).',

    // Services
    'services.badge': 'My Specialties',
    'services.title': 'Solutions That Drive Results',
    'services.desc': 'Modern architecture aimed at scaling rapidly. Covering from highly demanding API integrations to flawlessly slick user experiences.',
    'services.1.title': 'Solid Backend Architecture',
    'services.1.desc': 'Scalable APIs and responsive microservices using Node.js or Rust, focused on high throughput, paramount data security, and maintainable, clean code.',
    'services.2.title': 'Dynamic Frontend',
    'services.2.desc': 'Responsive interactive layouts via React & Tailwind, enabling seamless UX strategies aligned with premium conversions and agile iteration loops.',
    'services.3.title': 'Smart AI Automations',
    'services.3.desc': 'Engineering complex event-driven data platforms (mostly via Python/n8n) to streamline boring tasks and seamlessly integrate databases to LLMs.',

    // Portfolio
    'portfolio.badge': 'Recent Works',
    'portfolio.title': 'What We Have Built',
    'portfolio.desc': 'Interfaces, digital experiences, and cloud infrastructures I’ve contributed to recently.',
    'portfolio.viewProject': 'Live Project',
    'portfolio.sourceCode': 'Source Code',

    // Process
    'process.badge': 'How it Works',
    'process.title': 'My Work Process',
    'process.desc': 'From the first contact to the delivery of the Product Requirements Document (PRD).',
    'process.1.title': '1. Initial Contact',
    'process.1.desc': 'Initial conversation to understand your needs and the main goals of your project.',
    'process.2.title': '2. System Kickoff',
    'process.2.desc': 'Alignment meeting to define the main scope, core technologies, and architecture.',
    'process.3.title': '3. System Instructions',
    'process.3.desc': 'Elaboration of detailed system instructions and essential workflows.',
    'process.4.title': '4. PRD',
    'process.4.desc': 'Delivery of the PRD, consolidating all technical and business specifications.',

    // Testimonials
    'testimonials.badge': 'What They Say',
    'testimonials.title': 'Client Feedbacks',
    'testimonials.desc': 'Real results from shipped projects and satisfied clients.',
    'testimonials.1.text': 'Braian didn\'t just deliver what was asked, but suggested architecture improvements that made our system 3x faster. An outstanding professional.',
    'testimonials.1.name': 'Ricardo Gomes',
    'testimonials.1.role': 'CTO, TechLogistics',
    'testimonials.2.text': 'The n8n automation he developed reduced our manual work by almost 80%. Delivery was fast and the code is super clean.',
    'testimonials.2.name': 'Amanda Silveira',
    'testimonials.2.role': 'Operations Manager, VendaMais',
    'testimonials.3.text': 'He built our platform from scratch with amazing performance. The UI feels incredibly modern, and our conversion rate doubled in the first month.',
    'testimonials.3.name': 'Carlos Eduardo',
    'testimonials.3.role': 'CEO, E-Commerce Hub',

    // FAQ
    'faq.badge': 'Common Questions',
    'faq.title': 'Frequently Asked Questions',
    'faq.desc': 'Find quick answers to the most common questions about my services.',
    'faq.q1': 'How long does it take to develop a project?',
    'faq.a1': 'The timeline varies depending on complexity. Simpler projects can be delivered starting from 2 days, while full-stack applications might take weeks or months. An exact schedule is defined during the planning phase.',
    'faq.q2': 'Do you provide support and maintenance after delivery?',
    'faq.a2': 'Yes! All projects come with an initial free support and warranty period. After that, I offer custom monthly maintenance plans to ensure everything keeps running smoothly.',
    'faq.q3': 'What payment methods do you accept?',
    'faq.a3': 'Payments are typically divided, with an upfront deposit and installments tied to project milestones or final delivery. I accept PIX, bank transfers, and credit cards up to 12 installments (fees apply to the client).',
    'faq.q4': 'Do I get the source code?',
    'faq.a4': 'Yes. Upon project completion and final payment, the complete source code and intellectual property of the developed application are transferred to you.',

    // Contact
    'contact.badge': 'Let\'s Talk',
    'contact.title': 'Ready to Turn Your Idea into Reality?',
    'contact.desc': 'From striking web frontends to robust microservices and sophisticated AI automation pipelines. Text me and I’ll walk you through the journey.',
    'contact.info.title': 'Contact Info',
    'contact.info.emailTitle': 'Email Address',
    'contact.info.locationTitle': 'WhatsApp',
    'contact.pricing.title': 'Custom Pricing',
    'contact.pricing.desc': 'Every project has its own unique requirements. Therefore, quotes are 100% personalized according to your specific needs, scope, and requested technologies. I don\'t rely on fixed pricing tables; my main goal is to properly dimension the exact solution for your demand.',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Your Name',
    'contact.form.namePlaceholder': 'Full Name',
    'contact.form.message': 'Your Message',
    'contact.form.messagePlaceholder': 'Briefly describe what challenges you want to solve or the application you envision...',
    'contact.form.button': 'Send via WhatsApp',

    // Footer
    'footer.madeWith': 'Crafted in Brazil.',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',

    // Policies
    'privacy.title': 'Privacy Policy',
    'privacy.content': 'Your privacy is important to us. We only collect the information necessary to provide our services. We do not share your personal data with third parties without your explicit consent, except when required by law. We use industry-standard security measures to protect your information from unauthorized access.',
    'cookies.title': 'Cookie Policy',
    'cookies.content': 'We use cookies to enhance your experience on our website, analyze our traffic, and understand how you interact with our content. We do not use aggressive third-party advertising cookies. By continuing to use our website, you consent to our use of these simple cookies.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
