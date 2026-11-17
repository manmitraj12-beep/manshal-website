import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe2, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';
import { LinkedInIcon } from './SocialIcons';

export const AboutSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[#070B14] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#2563EB]/30 text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
              <span>About MANSHAL</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {SITE_CONFIG.about.heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
              {SITE_CONFIG.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Focus Areas List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SITE_CONFIG.about.focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#0B1220]/90 border border-white/[0.07]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white">{area}</span>
                </div>
              ))}
            </div>

            {/* Action Links: LinkedIn Profile & Start a Conversation */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.contact.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={SITE_CONFIG.contact.socials.linkedin.label}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#0B1220] hover:bg-[#111C32] border border-white/15 hover:border-[#06B6D4]/50 text-xs sm:text-sm font-semibold text-white transition-all"
              >
                <LinkedInIcon className="w-4 h-4 text-[#06B6D4]" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A1AAB8]" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:text-white transition-colors"
              >
                <span>Start a conversation with MANSHAL</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Brand Identity & Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl p-7 sm:p-9 glass-panel border border-white/15 space-y-7 overflow-hidden">
              <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(6, 182, 212, 0.18)' }}
              />

              {/* Brand Identity Lockup Display */}
              <div className="p-6 rounded-xl bg-[#070B14]/95 border border-white/10 flex flex-col items-start gap-4">
                <BrandLogo variant="horizontal" imgClassName="h-11 sm:h-13" />
                <p className="text-xs sm:text-sm text-[#A1AAB8] leading-relaxed">
                  {SITE_CONFIG.brand.positioning}
                </p>
              </div>

              {/* Authentic Brand Pillars */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#070B14]/70 border border-white/[0.07]">
                  <Sparkles className="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Founder-Led Engineering &amp; Care
                    </h3>
                    <p className="text-xs text-[#A1AAB8] mt-1 leading-relaxed">
                      Led by {SITE_CONFIG.founder.name} ({SITE_CONFIG.founder.education}), combining modern web engineering with AI &amp; Machine Learning exploration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#070B14]/70 border border-white/[0.07]">
                  <Globe2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      India &amp; International Collaboration
                    </h3>
                    <p className="text-xs text-[#A1AAB8] mt-1 leading-relaxed">
                      {SITE_CONFIG.brand.markets} Clear remote workflows, structured milestones and responsive support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
