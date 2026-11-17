import React from 'react';
import { Mail, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
                aria-label={`Email ${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>

              <a
                href={`tel:+91${SITE_CONFIG.contact.mobile}`}
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
                aria-label={`WhatsApp ${SITE_CONFIG.contact.whatsappDisplay}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#06B6D4] shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1AAB8]">
          <div>
            &copy; {currentYear} <strong className="text-white">{SITE_CONFIG.brand.name}</strong> &bull; Founded by <strong className="text-white">{SITE_CONFIG.founder.name}</strong>. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#070B14] border border-white/10 text-[#A1AAB8] hover:text-white hover:border-[#06B6D4]/40 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#06B6D4]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
