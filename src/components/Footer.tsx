import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Phone, ArrowUp, X, ShieldCheck, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG, trackConversionEvent } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleOpenLegal = (e: Event) => {
      const customEvent = e as CustomEvent<'privacy' | 'terms'>;
      setLegalModalTab(customEvent.detail || 'privacy');
    };
    window.addEventListener('open-manshal-legal', handleOpenLegal);
    return () => window.removeEventListener('open-manshal-legal', handleOpenLegal);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.contact.whatsappPrefilledText
  )}`;

  return (
    <footer className="relative bg-[#0B1220] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle Top Gradient Accent Line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.5) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.07]">
          {/* Column 1: MANSHAL Logo, Tagline, Short Description & Social Links */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block focus:outline-none"
              aria-label="MANSHAL Home"
            >
              <BrandLogo variant="horizontal" imgClassName="h-10 sm:h-12" />
            </a>

            <p className="text-sm font-medium text-white">
              {SITE_CONFIG.brand.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#A1AAB8] leading-relaxed">
              {SITE_CONFIG.brand.positioning}
            </p>

            {/* Official LinkedIn and GitHub Profile Buttons */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href={SITE_CONFIG.contact.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={SITE_CONFIG.contact.socials.linkedin.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#070B14] border border-white/10 text-xs font-semibold text-white hover:border-[#06B6D4]/50 hover:text-[#06B6D4] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#06B6D4]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={SITE_CONFIG.contact.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={SITE_CONFIG.contact.socials.github.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#070B14] border border-white/10 text-xs font-semibold text-white hover:border-[#06B6D4]/50 hover:text-[#06B6D4] transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-[#06B6D4]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-[#A1AAB8] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Portfolio */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
              Services &amp; Work
            </h3>
            <ul className="space-y-2.5">
              {SITE_CONFIG.services.items.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-sm text-[#A1AAB8] hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="text-sm font-medium text-[#06B6D4] hover:text-white transition-colors"
                >
                  Selected Portfolio &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Founder & Official Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
              Founder &amp; Contact
            </h3>

            <div className="p-3.5 rounded-xl bg-[#070B14]/80 border border-white/[0.07] space-y-1">
              <div className="text-sm font-semibold text-white">
                {SITE_CONFIG.founder.name}
              </div>
              <div className="text-xs text-[#06B6D4]">
                {SITE_CONFIG.founder.fullTitle}
              </div>
              <div className="text-[11px] text-[#A1AAB8]">
                {SITE_CONFIG.founder.education}
              </div>
            </div>

            <div className="space-y-2.5 text-sm text-[#A1AAB8]">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                onClick={() =>
                  trackConversionEvent('email_click', { location: 'footer' })
                }
                aria-label={`Email ${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>

              <a
                href={`tel:+91${SITE_CONFIG.contact.mobile}`}
                onClick={() =>
                  trackConversionEvent('phone_call_click', { location: 'footer' })
                }
                aria-label={`Call ${SITE_CONFIG.contact.mobileFormatted}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>{SITE_CONFIG.contact.mobileFormatted}</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackConversionEvent('whatsapp_click', { location: 'footer' })
                }
                aria-label={`WhatsApp ${SITE_CONFIG.contact.whatsappDisplay}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#06B6D4] shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright, Privacy Policy / Terms & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1AAB8]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
            <span>
              &copy; {currentYear} <strong className="text-white">{SITE_CONFIG.brand.name}</strong> &bull; Founded by <strong className="text-white">{SITE_CONFIG.founder.name}</strong>. All rights reserved.
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <button
              type="button"
              onClick={() => setLegalModalTab('privacy')}
              className="text-[#A1AAB8] hover:text-[#06B6D4] underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModalTab('terms')}
              className="text-[#A1AAB8] hover:text-[#06B6D4] underline underline-offset-4 transition-colors"
            >
              Terms of Service
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#070B14] border border-white/10 text-[#A1AAB8] hover:text-white hover:border-[#06B6D4]/40 transition-colors shrink-0"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#06B6D4]" />
          </button>
        </div>
      </div>

      {/* Privacy Policy & Terms of Service Modal */}
      <AnimatePresence>
        {legalModalTab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setLegalModalTab(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-[#0B1220] border border-white/15 shadow-2xl overflow-hidden my-8"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#070B14] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLegalModalTab('privacy')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      legalModalTab === 'privacy'
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white'
                        : 'text-[#A1AAB8] hover:text-white bg-white/[0.04]'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Privacy Policy</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLegalModalTab('terms')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      legalModalTab === 'terms'
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white'
                        : 'text-[#A1AAB8] hover:text-white bg-white/[0.04]'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Terms of Service</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setLegalModalTab(null)}
                  className="p-1.5 rounded-lg bg-white/[0.05] text-[#A1AAB8] hover:text-white transition-colors"
                  aria-label="Close legal information modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-5">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {legalModalTab === 'privacy'
                      ? 'MANSHAL Privacy Policy'
                      : 'MANSHAL Terms of Service'}
                  </h3>
                  <p className="text-xs font-mono text-[#06B6D4]">
                    Last Updated: {SITE_CONFIG.legal.lastUpdated}
                  </p>
                </div>

                <div className="space-y-4">
                  {(legalModalTab === 'privacy'
                    ? SITE_CONFIG.legal.privacyPolicy
                    : SITE_CONFIG.legal.termsOfService
                  ).map((section) => (
                    <div
                      key={section.heading}
                      className="p-4 rounded-xl bg-[#070B14] border border-white/[0.07] space-y-1.5"
                    >
                      <h4 className="font-display text-sm sm:text-base font-semibold text-white">
                        {section.heading}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A1AAB8] leading-relaxed">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setLegalModalTab(null)}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
