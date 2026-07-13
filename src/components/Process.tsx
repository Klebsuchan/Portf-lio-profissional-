import { motion } from 'motion/react';
import { Network, MessageSquare, Code2, ScrollText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      title: t('process.1.title'),
      desc: t('process.1.desc'),
    },
    {
      icon: Network,
      title: t('process.2.title'),
      desc: t('process.2.desc'),
    },
    {
      icon: Code2,
      title: t('process.3.title'),
      desc: t('process.3.desc'),
    },
    {
      icon: ScrollText,
      title: t('process.4.title'),
      desc: t('process.4.desc'),
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 relative overflow-hidden bg-black/50 border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">
            <CheckCircle2 className="w-4 h-4" />
            {t('process.badge')}
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-6"
          >
            {t('process.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t('process.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group h-full"
              >
                {/* Connecting line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20px)] h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent z-0" />
                )}

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative z-10 hover:bg-white/10 transition-colors h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{step.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
