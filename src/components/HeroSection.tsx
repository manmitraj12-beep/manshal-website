import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Globe,
  Cpu,
  Smartphone,
  Layers,
  Code2,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const HeroSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'web' | 'software' | 'ai'>('web');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#070B14]"
    >
      {/* Architectural Grid & Subtle Ambient Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 35%, rgba(37, 99, 235, 0.16) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none blur-[130px]"
        style={{ background: 'rgba(37, 99, 235, 0.12)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[440px] h-[440px] rounded-full pointer-events-none blur-[140px]"
        style={{ background: 'rgba(6, 182, 212, 0.10)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Brand Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1220]/90 border border-[#2563EB]/30 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]" />
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-[#A1AAB8]">
                <strong className="text-white font-semibold">MANSHAL</strong> &mdash; Digital Engineering &amp; Product Studio
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.55rem] xl:text-[3.9rem] font-bold tracking-tight text-white leading-[1.08]">
              Building Digital Experiences That{' '}
              <span className="text-gradient-accent">Move Businesses Forward.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A1AAB8] leading-relaxed max-w-2xl font-normal">
              {SITE_CONFIG.hero.description}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.hero.primaryCta.href}
                onClick={(e) => scrollToSection(e, SITE_CONFIG.hero.primaryCta.href)}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_10px_30px_-5px_rgba(37,99,235,0.45)] hover:shadow-[0_15px_35px_-5px_rgba(6,182,212,0.55)] transition-all duration-300 active:scale-[0.99]"
              >
                <span>{SITE_CONFIG.hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={SITE_CONFIG.hero.secondaryCta.href}
                onClick={(e) => scrollToSection(e, SITE_CONFIG.hero.secondaryCta.href)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#0B1220]/90 hover:bg-[#111C32] border border-white/15 hover:border-[#06B6D4]/45 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-[#06B6D4]" />
                <span>{SITE_CONFIG.hero.secondaryCta.label}</span>
              </a>
            </div>

            {/* Domain Capability Strip */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#A1AAB8]">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#2563EB]" />
                <span>Websites &amp; Web Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#06B6D4]" />
                <span>Custom Software &amp; E-Commerce</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#2563EB]" />
                <span>Mobile &amp; AI Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D-Inspired Abstract Technology & Floating Interface Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer 3D Perspective Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#2563EB]/30 via-[#06B6D4]/20 to-transparent blur-2xl opacity-80 pointer-events-none" />

              {/* Primary Floating Browser / Architecture Stage */}
              <div className="relative rounded-2xl glass-panel border border-white/15 overflow-hidden shadow-2xl">
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#070B14]/90 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="ml-2 text-xs font-mono text-[#A1AAB8] truncate">
                      manshal.studio // digital-architecture
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded bg-[#2563EB]/20 text-[#06B6D4] border border-[#06B6D4]/30">
                    Interactive View
                  </span>
                </div>

                {/* Interactive Layer Switcher Tabs inside Hero Mockup */}
                <div className="grid grid-cols-3 gap-1.5 p-2.5 bg-[#090F1C] border-b border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setActiveLayer('web')}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                      activeLayer === 'web'
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow'
                        : 'text-[#A1AAB8] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{SITE_CONFIG.hero.floatingLabels[0]}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLayer('software')}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                      activeLayer === 'software'
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow'
                        : 'text-[#A1AAB8] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{SITE_CONFIG.hero.floatingLabels[1]}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLayer('ai')}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                      activeLayer === 'ai'
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow'
                        : 'text-[#A1AAB8] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{SITE_CONFIG.hero.floatingLabels[2]}</span>
                  </button>
                </div>

                {/* Dynamic Visual Stage */}
                <div className="p-5 sm:p-6 space-y-5 bg-gradient-to-b from-[#0B1220] to-[#070B14] relative">
                  {/* Abstract 3D Geometric Vector Core */}
                  <div className="relative h-44 rounded-xl bg-[#070B14] border border-white/[0.07] overflow-hidden flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-dot-matrix opacity-50" />
                    <svg
                      viewBox="0 0 420 180"
                      className="w-full h-full relative z-10"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="heroPolyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
                        </linearGradient>
                      </defs>

                      {/* 3D Isometric Wireframe Planes */}
                      <polygon
                        points="210,18 330,68 210,118 90,68"
                        fill="url(#heroPolyGrad)"
                        stroke="#06B6D4"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="210,48 330,98 210,148 90,98"
                        fill="rgba(11, 18, 32, 0.75)"
                        stroke="#2563EB"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                      />
                      <polygon
                        points="210,76 310,118 210,160 110,118"
                        fill="rgba(6, 182, 212, 0.08)"
                        stroke="url(#heroLineGrad)"
                        strokeWidth="1.5"
                      />

                      {/* Connecting Vertical Nodes */}
                      <line x1="210" y1="18" x2="210" y2="160" stroke="#06B6D4" strokeOpacity="0.4" />
                      <line x1="90" y1="68" x2="90" y2="98" stroke="#2563EB" strokeOpacity="0.5" />
                      <line x1="330" y1="68" x2="330" y2="98" stroke="#2563EB" strokeOpacity="0.5" />

                      {/* Glowing Node Points */}
                      <circle cx="210" cy="18" r="4" fill="#06B6D4" />
                      <circle cx="330" cy="68" r="4" fill="#2563EB" />
                      <circle cx="90" cy="68" r="4" fill="#2563EB" />
                      <circle cx="210" cy="118" r="5" fill="#FFFFFF" />
                    </svg>

                    {/* Floating Status Badge inside 3D Stage */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-lg bg-[#0B1220]/90 border border-white/10 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#06B6D4]" />
                        <span className="text-xs font-mono text-white">
                          {activeLayer === 'web' && 'Responsive UI + Modern Web Stack'}
                          {activeLayer === 'software' && 'Scalable Architecture + Custom APIs'}
                          {activeLayer === 'ai' && 'Intelligent Workflows + Mobile UX'}
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                    </div>
                  </div>

                  {/* Floating Website Interface Panel Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#0B1220] border border-white/[0.08] hover:border-[#2563EB]/40 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-white">Interface Design</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4]" />
                      </div>
                      <p className="text-xs text-[#A1AAB8] leading-relaxed">
                        Clean layouts built for readability, conversion and brand trust.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0B1220] border border-white/[0.08] hover:border-[#06B6D4]/40 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-white">Clean Engineering</span>
                        <Code2 className="w-3.5 h-3.5 text-[#2563EB]" />
                      </div>
                      <p className="text-xs text-[#A1AAB8] leading-relaxed">
                        Maintainable codebases engineered for performance and scale.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Interactive Architecture Bar */}
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-[#2563EB]/15 to-[#06B6D4]/10 border border-[#2563EB]/25">
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white">
                        Ready to build your digital product?
                      </div>
                      <div className="text-[11px] text-[#A1AAB8]">
                        Websites &bull; Custom Software &bull; Mobile &bull; AI
                      </div>
                    </div>
                    <a
                      href="#contact"
                      onClick={(e) => scrollToSection(e, '#contact')}
                      className="px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-xs font-semibold text-white transition-colors"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Glass Accent Card (Desktop overlap) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-6 px-4 py-3 rounded-xl glass-panel border border-[#06B6D4]/30 shadow-xl"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-display font-bold text-sm">
                  M
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Production-Ready Delivery</div>
                  <div className="text-[11px] text-[#A1AAB8]">Desktop, Tablet &amp; Mobile Optimized</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
