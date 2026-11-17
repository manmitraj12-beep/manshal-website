import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Code2,
  Smartphone,
  ShoppingBag,
  Cpu,
  RefreshCw,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { SITE_CONFIG, ServiceItem } from '../config/siteConfig';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

const ICON_MAP: Record<ServiceItem['iconName'], React.FC<{ className?: string }>> = {
  Globe,
  Code2,
  Smartphone,
  ShoppingBag,
  Cpu,
  RefreshCw,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleInquireService = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const top = contactEl.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#070B14] overflow-hidden">
      {/* Background subtle grid & glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
      <div
        className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(37, 99, 235, 0.10)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#2563EB]/30 text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
            <span>Capabilities &amp; Services</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {SITE_CONFIG.services.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            End-to-end design and engineering services crafted to help businesses, startups, educational institutions and entrepreneurs build lasting digital products.
          </p>
        </motion.div>

        {/* Six Premium Service Cards */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITE_CONFIG.services.items.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 glass-panel glass-panel-hover"
              >
                {/* Top Glow Line on Hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-5">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 p-3.5 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/10 border border-[#2563EB]/30 text-[#06B6D4] group-hover:text-white group-hover:from-[#2563EB] group-hover:to-[#06B6D4] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#A1AAB8]/40 group-hover:text-[#06B6D4] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm sm:text-base text-[#A1AAB8] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Subtle Capability Highlights */}
                  <ul className="pt-2 space-y-2">
                    {service.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-xs sm:text-sm text-[#A1AAB8]/90"
                      >
                        <Check className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Footer */}
                <div className="pt-6 mt-6 border-t border-white/[0.07] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleInquireService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#06B6D4] transition-colors focus:outline-none"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Industry Focus Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl p-6 sm:p-8 bg-[#0B1220]/90 border border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="font-display text-base sm:text-lg font-semibold text-white">
              Specialized Industry &amp; Digital Transformation Solutions
            </h4>
            <p className="text-sm text-[#A1AAB8]">
              We also partner with institutions and growing enterprises across specialized domains:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {SITE_CONFIG.services.additionalDomains.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => handleInquireService(domain)}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#070B14] text-[#A1AAB8] hover:text-white border border-white/10 hover:border-[#06B6D4]/40 transition-colors"
              >
                {domain}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
