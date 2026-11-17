import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, TrendingUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const IntroSection: React.FC = () => {
  const icons = [Lightbulb, Cpu, TrendingUp];

  return (
    <section className="relative py-20 lg:py-28 bg-[#0B1220] border-y border-white/[0.06] overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.6) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#070B14] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
            <span>Our Philosophy</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white leading-tight">
            {SITE_CONFIG.introduction.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            {SITE_CONFIG.introduction.description}
          </p>
        </motion.div>

        {/* Three Visual Highlights (No invented achievements or statistics) */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SITE_CONFIG.introduction.highlights.map((item, idx) => {
            const IconComponent = icons[idx] || Lightbulb;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl p-7 sm:p-8 bg-[#070B14]/90 border border-white/[0.08] hover:border-[#06B6D4]/40 transition-all duration-300 shadow-glass overflow-hidden"
              >
                {/* Subtle corner gradient accent */}
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#2563EB]/15 to-[#06B6D4]/5 blur-2xl group-hover:opacity-100 opacity-60 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/15 border border-[#2563EB]/30 flex items-center justify-center text-[#06B6D4] group-hover:scale-105 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-[#A1AAB8]/50">0{idx + 1}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#A1AAB8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative visual vector bar */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A1AAB8]">
                    <span>MANSHAL Core Pillar</span>
                    <div className="flex items-center gap-1">
                      <span className="w-6 h-1 rounded-full bg-[#2563EB]" />
                      <span className="w-2 h-1 rounded-full bg-[#06B6D4]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
