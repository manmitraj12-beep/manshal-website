import React from 'react';
import { motion } from 'framer-motion';
import { Compass, GitBranch, Code2, Rocket } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Compass, GitBranch, Code2, Rocket];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B1220] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Center Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'rgba(37, 99, 235, 0.10)' }}
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#070B14] border border-[#06B6D4]/30 text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
            <span>How We Work</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {SITE_CONFIG.process.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            A structured, transparent four-stage workflow designed to take your idea from initial concept to a polished production launch.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="mt-16 lg:mt-20 relative">
          {/* Desktop Horizontal Connecting Line */}
          <div
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(37,99,235,0.2) 0%, rgba(6,182,212,0.8) 50%, rgba(37,99,235,0.2) 100%)',
            }}
          />

          {/* Mobile Vertical Connecting Line */}
          <div
            className="lg:hidden absolute top-6 bottom-6 left-7 w-[2px] pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(37,99,235,0.6) 0%, rgba(6,182,212,0.8) 50%, rgba(37,99,235,0.2) 100%)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {SITE_CONFIG.process.steps.map((step, idx) => {
              const StepIcon = stepIcons[idx] || Compass;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-16 lg:pl-0 flex flex-col lg:items-center lg:text-center group"
                >
                  {/* Step Node Circle */}
                  <div className="absolute left-0 top-0 lg:static lg:mb-6 w-14 h-14 lg:w-20 lg:h-20 rounded-2xl bg-[#070B14] border-2 border-[#2563EB]/60 group-hover:border-[#06B6D4] shadow-[0_0_25px_rgba(37,99,235,0.25)] flex flex-col items-center justify-center transition-all duration-300 z-10">
                    <span className="font-mono text-xs font-bold text-[#06B6D4]">
                      {step.number}
                    </span>
                    <StepIcon className="w-4 h-4 lg:w-5 lg:h-5 text-white mt-0.5" />
                  </div>

                  {/* Card Body */}
                  <div className="w-full rounded-2xl p-6 bg-[#070B14]/90 border border-white/[0.08] group-hover:border-[#06B6D4]/40 transition-all duration-300 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="font-mono text-xs uppercase tracking-widest text-[#2563EB] lg:hidden">
                        Step {step.number}
                      </div>

                      <h3 className="font-display text-xl font-bold text-white">
                        {step.number} &mdash; {step.title}
                      </h3>

                      <p className="text-sm text-[#A1AAB8] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap lg:justify-center gap-1.5">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0B1220] text-[#A1AAB8] border border-white/[0.06]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
