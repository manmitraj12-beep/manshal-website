import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Users,
  Code,
  Layers,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const QUALITY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Layout,
  Users,
  Code,
  Layers,
  MessageSquare,
  ShieldCheck,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

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
            <span>Why Choose MANSHAL</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {SITE_CONFIG.whyChooseUs.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            Every project is guided by strong engineering discipline, responsive design principles and transparent collaboration.
          </p>
        </motion.div>

        {/* Six Qualities Grid */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.whyChooseUs.qualities.map((quality, idx) => {
            const IconComponent = QUALITY_ICONS[quality.iconName] || ShieldCheck;
            return (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="group relative rounded-2xl p-7 bg-[#0B1220]/85 border border-white/[0.08] hover:border-[#2563EB]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] shrink-0 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                      {quality.title}
                    </h3>
                    <p className="text-sm text-[#A1AAB8] leading-relaxed">
                      {quality.description}
                    </p>
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
