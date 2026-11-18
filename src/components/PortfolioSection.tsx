import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Eye,
  X,
  CheckCircle2,
  Layers,
  Code2,
  Sparkles,
  FolderGit2,
  ShieldCheck,
  Cpu,
  Lightbulb,
} from 'lucide-react';
import { SITE_CONFIG, ProjectItem, ProjectFilterTag } from '../config/siteConfig';
import { GitHubIcon } from './SocialIcons';

type FilterSelection = 'All Projects' | ProjectFilterTag;

interface PortfolioSectionProps {
  onInquireProject?: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onInquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterSelection>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = SITE_CONFIG.projects.items.filter((project) => {
    if (activeFilter === 'All Projects') return true;
    return project.filterTags.includes(activeFilter);
  });

  const handleRequestSimilar = (project: ProjectItem) => {
    setSelectedProject(null);
    if (onInquireProject) {
      onInquireProject(project.title);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const top = contactEl.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const getBadgeStyle = (type: ProjectItem['projectType']) => {
    switch (type) {
      case 'client':
        return {
          classes: 'bg-[#2563EB]/20 text-[#60A5FA] border border-[#2563EB]/35',
          Icon: ShieldCheck,
        };
      case 'ml_academic':
        return {
          classes: 'bg-[#06B6D4]/15 text-[#22D3EE] border border-[#06B6D4]/30',
          Icon: Cpu,
        };
      case 'concept':
        return {
          classes: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
          Icon: Lightbulb,
        };
      default:
        return {
          classes: 'bg-white/10 text-white border border-white/20',
          Icon: FolderGit2,
        };
    }
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 bg-[#0B1220] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Radial Illumination */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(6, 182, 212, 0.08)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#070B14] border border-[#06B6D4]/30 text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
              <span>Featured Portfolio</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {SITE_CONFIG.projects.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
              Showcasing delivered client websites, web development projects, academic machine learning studies and technical IoT concepts.
            </p>
          </motion.div>

          {/* GitHub Profile Action in Technical Projects Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="self-start lg:self-auto"
          >
            <a
              href={SITE_CONFIG.contact.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={SITE_CONFIG.contact.socials.github.label}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#070B14] hover:bg-[#111C32] border border-white/15 hover:border-[#06B6D4]/45 text-xs sm:text-sm font-semibold text-white transition-all"
            >
              <GitHubIcon className="w-4 h-4 text-[#06B6D4]" />
              <span>Explore GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#A1AAB8]" />
            </a>
          </motion.div>
        </div>

        {/* Separate Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-8 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#070B14] border border-white/[0.08] w-fit"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {SITE_CONFIG.projects.filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow'
                    : 'text-[#A1AAB8] hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const badge = getBadgeStyle(project.projectType);
              const BadgeIcon = badge.Icon;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="group flex flex-col justify-between rounded-2xl bg-[#070B14] border border-white/[0.08] hover:border-[#06B6D4]/40 overflow-hidden shadow-glass transition-all duration-300"
                >
                  <div>
                    {/* Elegant Browser Mockup Frame */}
                    <div className="p-3 pb-0 bg-gradient-to-b from-[#111C32] to-[#070B14]">
                      <div className="rounded-t-xl bg-[#0B1220] border border-b-0 border-white/10 overflow-hidden">
                        {/* Browser Top Bar */}
                        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#070B14]/90 border-b border-white/[0.07]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                          </div>
                          <div className="px-3 py-0.5 rounded-md bg-[#0B1220] border border-white/[0.06] text-[10px] font-mono text-[#A1AAB8] truncate max-w-[200px]">
                            {project.domainPreviewLabel}
                          </div>
                          <span className="w-4" />
                        </div>

                        {/* Screenshot Viewport */}
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="relative aspect-[16/10] w-full overflow-hidden bg-[#070B14] cursor-pointer"
                        >
                          <img
                            src={project.screenshotUrl}
                            alt={`${project.title} — ${project.category} by MANSHAL`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-[#070B14]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-semibold shadow-lg">
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Project Overview</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 sm:p-7 space-y-4">
                      {/* Ownership / Status Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${badge.classes}`}
                        >
                          <BadgeIcon className="w-3.5 h-3.5" />
                          <span>{project.typeBadge}</span>
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-xs font-mono text-[#06B6D4]">
                          {project.category}
                        </div>
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[#A1AAB8] leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Technologies Used */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0B1220] text-[#A1AAB8] border border-white/[0.07]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: View Project & Source Code Actions */}
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-3 border-t border-white/[0.06] flex items-center gap-2.5">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 transition-all"
                      >
                        <span>View Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0B1220] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#06B6D4] border border-white/10 hover:border-transparent transition-all duration-300"
                      >
                        <Eye className="w-4 h-4 text-[#06B6D4] group-hover:text-white" />
                        <span>View Project</span>
                      </button>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#A1AAB8] hover:text-white bg-[#0B1220] border border-white/10 hover:border-[#06B6D4]/40 transition-colors"
                        title="View on GitHub"
                      >
                        <GitHubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Editable Portfolio Note */}
        <div className="mt-10 rounded-xl p-4 sm:px-6 bg-[#070B14]/80 border border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A1AAB8]">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
            <span>
              <strong className="text-white">Transparent Portfolio Structure:</strong> Completed client projects, academic ML studies and IoT concepts are clearly separated and managed in <code className="text-[#06B6D4]">src/config/siteConfig.ts</code>.
            </span>
          </div>
          <a
            href={SITE_CONFIG.contact.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SITE_CONFIG.contact.socials.github.label}
            className="inline-flex items-center gap-1.5 text-white hover:text-[#06B6D4] font-semibold shrink-0 transition-colors"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>github.com/manmitraj12-beep &rarr;</span>
          </a>
        </div>
      </div>

      {/* Interactive Project Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-2xl bg-[#0B1220] border border-white/15 shadow-2xl overflow-hidden my-8"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#070B14] border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#06B6D4]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-white/[0.05] text-[#A1AAB8] hover:text-white transition-colors"
                  aria-label="Close project preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto space-y-6">
                {/* Full Browser Mockup Preview */}
                <div className="rounded-xl bg-[#070B14] border border-white/10 overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#070B14] border-b border-white/[0.07]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                    </div>
                    <span className="text-xs font-mono text-[#A1AAB8]">
                      {selectedProject.domainPreviewLabel}
                    </span>
                    <span className="text-[11px] font-mono text-[#06B6D4]">
                      {selectedProject.typeBadge}
                    </span>
                  </div>
                  <img
                    src={selectedProject.screenshotUrl}
                    alt={`${selectedProject.title} — ${selectedProject.category} by MANSHAL`}
                    className="w-full h-auto object-contain bg-[#070B14]"
                  />
                </div>

                {/* Project Overview & Deliverables */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                  <div className="md:col-span-7 space-y-3">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#A1AAB8] leading-relaxed">
                      {selectedProject.detailedOverview}
                    </p>
                  </div>

                  <div className="md:col-span-5 space-y-4 p-5 rounded-xl bg-[#070B14] border border-white/[0.08]">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
                      Key Highlights
                    </div>
                    <ul className="space-y-2">
                      {selectedProject.keyDeliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-white/[0.08]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8] mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-[#0B1220] text-[#06B6D4] border border-[#06B6D4]/25"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
                      >
                        <span>Open Live Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${selectedProject.title} on GitHub`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#070B14] border border-white/15 hover:border-[#06B6D4]/50 transition-colors"
                      >
                        <GitHubIcon className="w-4 h-4 text-[#06B6D4]" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#A1AAB8]" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium text-[#A1AAB8] hover:text-white bg-white/[0.05]"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRequestSimilar(selectedProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Discuss a Similar Project</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
