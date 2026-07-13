import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const testimonials = [
    {
      text: t('testimonials.1.text'),
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop'
    },
    {
      text: t('testimonials.2.text'),
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    {
      text: t('testimonials.3.text'),
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-24 relative overflow-hidden bg-black/50 border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-widest uppercase text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            {t('testimonials.badge')}
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-6"
          >
            {t('testimonials.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t('testimonials.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between hover:bg-white/10 transition-colors group"
            >
              <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 text-white/5 group-hover:text-cyan-500/10 transition-colors" />
              
              <p className="text-slate-300 font-light leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
