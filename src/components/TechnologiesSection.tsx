import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const TechnologiesSection: React.FC = () => {
  const groupIcons = [Code2, Cpu, Wrench];

  return (
    <section
      id="technologies"
      className="relative py-24 lg:py-32 bg-[#070B14] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Background Grid & Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-45 pointer-events-none" />
      <div
        className="absolute top-1/2 right-1/4 w-[460px] h-[460px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'rgba(37, 99, 235, 0.09)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#2563EB]/30 text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
            <span>Technical Stack &amp; Focus Areas</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {SITE_CONFIG.technologies.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            {SITE_CONFIG.technologies.description}
          </p>
        </motion.div>

        {/* Three Categorized Technology Cards */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-7">
          {SITE_CONFIG.technologies.groups.map((group, idx) => {
            const IconComponent = groupIcons[idx] || Terminal;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl p-7 sm:p-8 glass-panel glass-panel-hover flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/15 border border-[#2563EB]/30 flex items-center justify-center text-[#06B6D4]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#A1AAB8]/45">
                      STACK // 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1AAB8] leading-relaxed">
                      {group.subtitle}
                    </p>
                  </div>

                  {/* Clean Visual Pill Grid */}
                  <div className="pt-2 flex flex-wrap gap-2.5">
                    {group.items.map((tech) => (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#070B14] border border-white/[0.08] group-hover:border-[#06B6D4]/30 text-xs sm:text-sm font-medium text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A1AAB8]">
                  <span>Active Practice &amp; Exploration</span>
                  <span className="font-mono text-[#06B6D4]">MANSHAL</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
