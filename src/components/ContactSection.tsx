import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  Phone,
  User,
  Send,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG, trackConversionEvent } from '../config/siteConfig';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Website Development');
  const [projectBudget, setProjectBudget] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'backend_not_configured' | 'submitted' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setServiceRequired(selectedService);
    }
  }, [selectedService]);

  const buildStructuredMessage = () => {
    if (!fullName && !projectDescription) {
      return SITE_CONFIG.contact.whatsappPrefilledText;
    }
    return [
      `Hello ${SITE_CONFIG.contact.founderName} (MANSHAL),`,
      ``,
      `I would like to discuss a project:`,
      `- Name: ${fullName || 'Not provided'}`,
      `- Email: ${email || 'Not provided'}`,
      `- Mobile: ${mobile || 'Not provided'}`,
      `- Service Required: ${serviceRequired}`,
      `- Project Budget: ${projectBudget || 'Not specified'}`,
      ``,
      `Project Description:`,
      `${projectDescription || 'No description provided.'}`,
    ].join('\n');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const endpoint = SITE_CONFIG.contact.formEndpoint.trim();

    // Never show fake successful submissions when no backend is configured
    if (!endpoint) {
      setStatus('backend_not_configured');
      return;
    }

    try {
      setStatus('submitting');
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          mobile,
          serviceRequired,
          projectBudget,
          projectDescription,
        }),
      });

      if (response.ok) {
        trackConversionEvent('generate_lead', {
          method: 'form_endpoint',
          service: serviceRequired,
        });
        setStatus('submitted');
        setFullName('');
        setEmail('');
        setMobile('');
        setProjectBudget('');
        setProjectDescription('');
      } else {
        setStatus('error');
        setErrorMsg('The form service returned an error. Please use Email or WhatsApp below.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Unable to reach the configured form endpoint. Please use Email or WhatsApp.');
    }
  };

  const handleWhatsAppClick = () => {
    trackConversionEvent('whatsapp_click', {
      location: 'contact_section',
      service: serviceRequired,
    });
    const encodedText = encodeURIComponent(buildStructuredMessage());
    window.open(
      `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodedText}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleMailtoFallback = () => {
    trackConversionEvent('generate_lead', {
      method: 'mailto_dispatch',
      service: serviceRequired,
    });
    const subject = encodeURIComponent(
      `Project Enquiry: ${serviceRequired} — ${fullName || 'MANSHAL Website'}`
    );
    const body = encodeURIComponent(buildStructuredMessage());
    window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(SITE_CONFIG.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const directWhatsAppHref = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.contact.whatsappPrefilledText
  )}`;

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[#070B14] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'rgba(37, 99, 235, 0.12)' }}
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1220] border border-[#06B6D4]/30 text-xs font-mono uppercase tracking-widest text-[#06B6D4]">
            <span>Start a Conversation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Have a Project in Mind? Let&apos;s Build It.
          </h2>

          <p className="text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            Tell us about your idea. Let&apos;s explore how MANSHAL can help turn it into a digital solution.
          </p>
        </motion.div>

        <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Official Contact Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl p-7 sm:p-8 bg-[#0B1220] border border-white/[0.08] space-y-6 shadow-glass">
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-white">
                  Direct Contact Details
                </h3>
                <p className="text-xs sm:text-sm text-[#A1AAB8] leading-relaxed">
                  Reach out directly via email, phone or WhatsApp to discuss website, software or application projects.
                </p>
              </div>

              {/* Founder Contact Card */}
              <div className="p-4 rounded-xl bg-[#070B14] border border-white/[0.07] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8]">
                    Founder &amp; Developer
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {SITE_CONFIG.contact.founderName}
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="p-4 rounded-xl bg-[#070B14] border border-white/[0.07] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8]">
                      Email
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      onClick={() =>
                        trackConversionEvent('email_click', { location: 'contact_card' })
                      }
                      aria-label={`Email ${SITE_CONFIG.contact.founderName} at ${SITE_CONFIG.contact.email}`}
                      className="text-sm font-semibold text-white hover:text-[#06B6D4] break-all transition-colors"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#A1AAB8] hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#06B6D4]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Mobile Number */}
              <div className="p-4 rounded-xl bg-[#070B14] border border-white/[0.07] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8]">
                      Mobile
                    </div>
                    <a
                      href={`tel:+91${SITE_CONFIG.contact.mobile}`}
                      onClick={() =>
                        trackConversionEvent('phone_call_click', { location: 'contact_card' })
                      }
                      aria-label={`Call ${SITE_CONFIG.contact.mobileFormatted}`}
                      className="text-sm font-semibold text-white hover:text-[#06B6D4] transition-colors"
                    >
                      {SITE_CONFIG.contact.mobile} ({SITE_CONFIG.contact.mobileFormatted})
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Link */}
              <div className="p-4 rounded-xl bg-[#070B14] border border-white/[0.07] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/20 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8]">
                      WhatsApp
                    </div>
                    <a
                      href={directWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackConversionEvent('whatsapp_click', { location: 'contact_card' })
                      }
                      aria-label={`Chat on WhatsApp at ${SITE_CONFIG.contact.whatsappDisplay}`}
                      className="text-sm font-semibold text-white hover:text-[#06B6D4] transition-colors"
                    >
                      {SITE_CONFIG.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={directWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackConversionEvent('whatsapp_click', { location: 'contact_card_button' })
                  }
                  aria-label="Open WhatsApp chat"
                  className="px-3.5 py-1.5 rounded-lg bg-[#06B6D4]/15 hover:bg-[#06B6D4]/25 text-xs font-semibold text-[#06B6D4] transition-colors shrink-0"
                >
                  Chat Now
                </a>
              </div>

              {/* Official Social Profiles */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8]">
                  Official Social Profiles
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={SITE_CONFIG.contact.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={SITE_CONFIG.contact.socials.linkedin.label}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 hover:border-[#06B6D4]/50 text-xs sm:text-sm font-semibold text-white transition-all"
                  >
                    <span className="inline-flex items-center gap-2">
                      <LinkedInIcon className="w-4 h-4 text-[#06B6D4]" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A1AAB8]" />
                  </a>

                  <a
                    href={SITE_CONFIG.contact.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={SITE_CONFIG.contact.socials.github.label}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 hover:border-[#06B6D4]/50 text-xs sm:text-sm font-semibold text-white transition-all"
                  >
                    <span className="inline-flex items-center gap-2">
                      <GitHubIcon className="w-4 h-4 text-[#06B6D4]" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A1AAB8]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Project Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleFormSubmit}
              className="rounded-2xl p-7 sm:p-9 glass-panel border border-white/10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A1AAB8]"
                  >
                    Full Name <span className="text-[#06B6D4]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 text-sm text-white placeholder-[#A1AAB8]/45 focus:outline-none focus:border-[#06B6D4] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="emailAddress"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A1AAB8]"
                  >
                    Email Address <span className="text-[#06B6D4]">*</span>
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 text-sm text-white placeholder-[#A1AAB8]/45 focus:outline-none focus:border-[#06B6D4] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Mobile Number */}
                <div className="space-y-2">
                  <label
                    htmlFor="mobileNumber"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A1AAB8]"
                  >
                    Mobile Number <span className="text-[#06B6D4]">*</span>
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 text-sm text-white placeholder-[#A1AAB8]/45 focus:outline-none focus:border-[#06B6D4] transition-colors"
                  />
                </div>

                {/* Service Required */}
                <div className="space-y-2">
                  <label
                    htmlFor="serviceRequired"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A1AAB8]"
                  >
                    Service Required <span className="text-[#06B6D4]">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 text-sm text-white focus:outline-none focus:border-[#06B6D4] transition-colors"
                  >
                    {SITE_CONFIG.services.items.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#0B1220] text-white">
                        {s.title}
                      </option>
                    ))}
                    {SITE_CONFIG.services.additionalDomains.map((d) => (
                      <option key={d} value={d} className="bg-[#0B1220] text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Budget (Optional) */}
              <div className="space-y-2">
                <label
                  htmlFor="projectBudget"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A1AAB8]"
                >
                  Project Budget <span className="text-[#A1AAB8]/60">(Optional)</span>
                </label>
                <select
                  id="projectBudget"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 text-sm text-white focus:outline-none focus:border-[#06B6D4] transition-colors"
                >
                  <option value="" className="bg-[#0B1220] text-[#A1AAB8]">
                    Select an estimated scope (optional)
                  </option>
                  {SITE_CONFIG.budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#0B1220] text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <label
                  htmlFor="projectDescription"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A1AAB8]"
                >
                  Project Description <span className="text-[#06B6D4]">*</span>
                </label>
                <textarea
                  id="projectDescription"
                  rows={4}
                  required
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Tell us about your project goals, features needed, and timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 text-sm text-white placeholder-[#A1AAB8]/45 focus:outline-none focus:border-[#06B6D4] transition-colors resize-y"
                />
              </div>

              {/* Client-Friendly Direct Dispatch Notice (Honest: Never fakes server submission when formEndpoint is empty) */}
              {status === 'backend_not_configured' && (
                <div className="p-4 rounded-xl bg-[#070B14] border border-[#06B6D4]/40 space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs sm:text-sm">
                      <div className="font-semibold text-white">
                        Enquiry Formatted &amp; Ready — Select Your Preferred Channel
                      </div>
                      <p className="text-[#A1AAB8] leading-relaxed">
                        Your project details are prepared. To complete your enquiry, dispatch your message directly to <strong className="text-white">{SITE_CONFIG.contact.email}</strong> or <strong className="text-white">WhatsApp ({SITE_CONFIG.contact.whatsappDisplay})</strong> below:
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-xs font-semibold text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email ({SITE_CONFIG.contact.email})</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#06B6D4]/20 hover:bg-[#06B6D4]/30 border border-[#06B6D4]/40 text-xs font-semibold text-[#06B6D4] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp ({SITE_CONFIG.contact.whatsappDisplay})</span>
                    </button>
                  </div>
                </div>
              )}

              {status === 'submitted' && (
                <div className="p-4 rounded-xl bg-[#070B14] border border-emerald-500/40 flex items-center gap-3 text-sm text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Your enquiry was transmitted to the configured form service.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-[#070B14] border border-red-500/40 flex items-center gap-3 text-sm text-red-300">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Primary & Secondary Form Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-[0_10px_25px_-5px_rgba(37,99,235,0.45)] hover:opacity-95 transition-all disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#070B14] hover:bg-[#111C32] border border-white/15 hover:border-[#06B6D4]/50 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#06B6D4]" />
                  <span>Contact on WhatsApp</span>
                </button>
              </div>

              {/* Confidentiality & Privacy Policy Reassurance Note */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A1AAB8]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <span>Your project details are kept strictly confidential.</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent('open-manshal-legal', { detail: 'privacy' })
                    )
                  }
                  className="text-[#06B6D4] hover:text-white underline underline-offset-4 transition-colors"
                >
                  Privacy Policy
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
