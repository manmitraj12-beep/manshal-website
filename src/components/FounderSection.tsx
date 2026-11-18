import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Cpu,
  ExternalLink,
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { BrandLogo } from './BrandLogo';

export const FounderSection: React.FC = () => {
  const { founder, contact } = SITE_CONFIG;

  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="founder"
      className="relative py-24 lg:py-32 bg-[#0B1220] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Lighting */}
      <div
        className="absolute top-1/3 right-0 w-[520px] h-[520px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'rgba(6, 182, 212, 0.09)' }}
      />
      <div
        className="absolute bottom-0 left-10 w-[440px] h-[440px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(37, 99, 235, 0.10)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#070B14] border border-[#06B6D4]/30 text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
            <span>Founder &amp; Developer Profile</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Meet the Founder Behind MANSHAL.
          </h2>

          <p className="text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            {founder.shortSummary}
          </p>
        </motion.div>

        {/* Leadership & Business Registration Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl p-6 sm:p-8 bg-[#070B14] border border-white/10 shadow-glass space-y-6"
        >
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Leadership
            </h3>
            <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
              MANSHAL
            </span>
          </div>

          {/* Leadership Profiles: 1. Shailesh Sir (above) 2. Manmit Raj (below) */}
          <div className="space-y-4">
            {founder.leadership.map((leader, index) => (
              <div
                key={leader.name}
                className="p-5 sm:p-6 rounded-xl bg-[#0B1220] border border-white/[0.08] hover:border-[#06B6D4]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#06B6D4]">
                      0{index + 1}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                      {leader.name}
                    </h4>
                  </div>
                  <p className="text-sm font-medium text-[#60A5FA]">
                    {leader.position}
                  </p>
                  {leader.additionalDesignation && (
                    <p className="text-xs sm:text-sm text-[#A1AAB8]">
                      {leader.additionalDesignation}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <a
                    href={`tel:${leader.phone}`}
                    aria-label={`Call ${leader.name} at ${leader.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#070B14] hover:bg-[#111C32] border border-white/10 hover:border-[#06B6D4]/40 text-xs sm:text-sm font-semibold text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>{leader.phone}</span>
                  </a>
                  <span className="text-[11px] font-mono text-[#A1AAB8]">
                    {leader.contactType}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Business Registration (Udyam Number) */}
          <div className="pt-2 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#A1AAB8]">
              <ShieldCheck className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>Business Registration &mdash; Udyam Registration Number:</span>
            </div>
            <span className="font-mono font-semibold text-white bg-[#0B1220] px-3.5 py-1.5 rounded-lg border border-[#06B6D4]/30 w-fit">
              {founder.businessRegistration.udyamNumber}
            </span>
          </div>
        </motion.div>

        {/* Main Founder Profile Layout */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Premium Founder Photograph Placeholder / Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl p-6 sm:p-7 bg-[#070B14] border border-white/10 shadow-glass space-y-6">
              {/* Portrait Aspect Ratio Container (4:5) */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1220] via-[#0F1B33] to-[#070B14] border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                {/* Ambient Geometric Background Grid */}
                <div className="absolute inset-0 bg-tech-grid opacity-55 pointer-events-none" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 38%, rgba(37, 99, 235, 0.25) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 72%)',
                  }}
                />

                {founder.photoUrl ? (
                  <img
                    src={founder.photoUrl}
                    alt={`${founder.name} — ${founder.fullTitle}`}
                    className="relative z-10 w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="relative z-10 flex flex-col items-center justify-center space-y-5 max-w-xs">
                    {/* Elegant MANSHAL-Branded Initials Emblem ("MR") */}
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#2563EB]/40 to-[#06B6D4]/40 blur-xl" />
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#070B14]/90 border-2 border-[#06B6D4]/45 shadow-[0_0_35px_rgba(37,99,235,0.35)] flex flex-col items-center justify-center">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-gradient-accent tracking-tight">
                          {founder.initials}
                        </span>
                        <span className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[#A1AAB8]">
                          FOUNDER
                        </span>
                      </div>
                    </div>

                    {/* MANSHAL Compact Icon Mark */}
                    <div className="pt-1">
                      <BrandLogo variant="icon" imgClassName="h-7 opacity-90" />
                    </div>

                    <div className="space-y-1">
                      <div className="font-display text-xl font-bold text-white">
                        {founder.name}
                      </div>
                      <div className="text-xs font-medium text-[#06B6D4]">
                        {founder.fullTitle}
                      </div>
                    </div>

                    <div className="px-3 py-1.5 rounded-lg bg-[#0B1220]/90 border border-white/10 text-[11px] font-mono text-[#A1AAB8]">
                      Founder Photograph Placeholder &bull; Configurable in{' '}
                      <code className="text-[#06B6D4]">siteConfig.ts</code>
                    </div>
                  </div>
                )}
              </div>

              {/* Verified Identity & Direct Contact Quick Card */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium">
                  <GraduationCap className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <span>{founder.educationBadge}</span>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={`mailto:${contact.email}`}
                    aria-label={`Send an email to ${founder.name} at ${contact.email}`}
                    className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0B1220] hover:bg-[#111C32] border border-white/10 hover:border-[#06B6D4]/40 text-xs font-semibold text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span className="truncate">{contact.email}</span>
                  </a>

                  <a
                    href={`tel:${contact.mobile}`}
                    aria-label={`Call ${founder.name} at ${contact.mobile}`}
                    className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0B1220] hover:bg-[#111C32] border border-white/10 hover:border-[#06B6D4]/40 text-xs font-semibold text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>{contact.mobile} (Calling only)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Biography, Vision Quote, Technical Interests & Social Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Header Lockup */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
                <span>{founder.fullTitle}</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {founder.name}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#60A5FA]">
                {founder.education}
              </p>
            </div>

            {/* Highlighted Vision Quote */}
            <blockquote className="p-6 rounded-2xl bg-[#070B14] border-l-4 border-[#06B6D4] border-t border-r border-b border-white/[0.08] text-sm sm:text-base text-white/95 italic leading-relaxed">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>

            {/* Authentic Founder Introduction Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#A1AAB8] leading-relaxed">
              {founder.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Development & Machine Learning Interests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-5 rounded-2xl bg-[#070B14] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Code2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Development Interests</span>
                </div>
                <ul className="space-y-2">
                  {founder.developmentInterests.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#A1AAB8]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B14] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Cpu className="w-4 h-4 text-[#06B6D4]" />
                  <span>AI &amp; Machine Learning Interests</span>
                </div>
                <ul className="space-y-2">
                  {founder.mlInterests.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#A1AAB8]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons: LinkedIn, GitHub & Portfolio */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href={founder.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.socials.linkedin.label}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_10px_25px_-5px_rgba(37,99,235,0.45)] hover:opacity-95 transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={founder.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.socials.github.label}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#070B14] hover:bg-[#111C32] border border-white/15 hover:border-[#06B6D4]/50 transition-all"
              >
                <GitHubIcon className="w-4 h-4 text-[#06B6D4]" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A1AAB8]" />
              </a>

              <a
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#A1AAB8] hover:text-white bg-[#070B14]/60 border border-white/10 hover:border-white/25 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
