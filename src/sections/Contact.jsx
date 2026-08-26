import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheck,
  FaExclamationCircle,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaGlobe
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { sendEmail } from '../services/emailService';

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaXTwitter: FaTwitter,
  FaDiscord: FaDiscord,
  FaTelegram: FaTelegram,
  FaGlobe: FaGlobe,
};


const Contact = () => {
  const { contactInfo } = portfolioData;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    budget: 'Remote Internship',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitted(false);

    // Validate required fields before sending
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send EmailJS payload matching required schema
      await sendEmail({
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        opportunity_type: formState.budget,
        message: formState.message,
      });

      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        budget: 'Remote Internship',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage(
        error?.text || error?.message || 'Failed to send your inquiry. Please check your details and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-slate-950 border-t border-slate-800">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-green-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Get In Touch"
          title="Let's Build & Connect"
          highlight="Together"
          subtitle="Interested in hiring me for remote work, an internship, or a cloud/DevOps project? Reach out below."
        />

        {/* Split Layout: Left Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <GlassCard className="p-6 border border-emerald-500/30">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  {contactInfo.availability}
                </span>
              </div>
              <p className="text-slate-300 text-sm mt-2">
                Currently open for remote internships, entry-level opportunities, and cloud/web development projects.
              </p>
            </GlassCard>

            {/* Direct Contact Cards */}
            <GlassCard className="p-6 border border-white/10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white font-bold text-sm sm:text-base hover:text-emerald-300 transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Phone Status
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    {contactInfo.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                  <FaMapMarkerAlt className="text-lg" />
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Location & Work Preference
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    {contactInfo.location}
                  </span>
                </div>
              </div>
            </GlassCard>

            {/* Social Links Row */}
            <GlassCard className="p-6 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Connect Across Channels
              </h4>
              <div className="flex flex-wrap gap-3">
                {contactInfo.socials.map((social) => {
                  const IconComponent = iconMap[social.icon] || FaGithub;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-xs font-semibold flex items-center gap-2 transition-all"
                    >
                      <IconComponent />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </div>

          {/* Right Side: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10 border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill out the form details below. I will respond to your inquiry promptly.
              </p>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3"
                >
                  <FaCheck className="text-lg shrink-0" />
                  <span>Thank you! Your inquiry has been sent successfully. I'll get back to you as soon as possible.</span>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-sm flex items-center gap-3"
                >
                  <FaExclamationCircle className="text-lg shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="e.g. Remote Internship / Project Role"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Opportunity Type
                    </label>
                    <select
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    >
                      <option value="Remote Internship">Remote Internship</option>
                      <option value="Entry-Level Job / Role">Entry-Level Job / Role</option>
                      <option value="Part-time / Freelance">Part-time / Freelance</option>
                      <option value="General Collaboration">General Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Project Details & Scope *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals, tech stack preferences, timeline, or scope..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-extrabold text-sm shadow-glow-primary flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Submit Direct Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
