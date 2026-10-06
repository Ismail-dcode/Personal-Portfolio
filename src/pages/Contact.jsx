import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';
import { sendEmail } from '../services/emailService';

const socialIcons = {
  GitHub: <FaGithub className="text-lg" />,
  LinkedIn: <FaLinkedin className="text-lg" />,
  'Twitter / X': <FaXTwitter className="text-lg" />,
};

const Contact = () => {
  const { contactInfo } = portfolioData;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const localTime = useMemo(
    () =>
      new Intl.DateTimeFormat('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      }).format(new Date()),
    []
  );

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus({ type: 'error', text: 'Name, email, and message are required.' });
      return;
    }

    setSending(true);
    try {
      await sendEmail({
        from_name: formState.name,
        from_email: formState.email,
        subject: 'Portfolio inquiry',
        opportunity_type: 'General',
        message: formState.message,
      });
      setStatus({ type: 'ok', text: 'Message sent. I will reply soon.' });
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        text: `Could not send from the form. Email me at ${contactInfo.email}.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="mx-auto grid max-w-6xl gap-16 px-5 py-14 sm:px-8 sm:py-20"
    >
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mute">Contact</p>
          <h1 className="mt-3 font-display text-5xl italic leading-tight sm:text-7xl">Let&apos;s Talk</h1>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-mute lg:col-span-5">
          Open for contract, freelancing, remote jobs, and Cloud & DevOps roles.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-px bg-line lg:grid-cols-12">
        <div className="grid gap-8 bg-ink p-6 sm:p-8 lg:col-span-5">
          <div className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Email</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-lg text-paper hover:underline"
            >
              <FaEnvelope className="text-base text-mute" />
              {contactInfo.email}
            </a>
          </div>
          <div className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Location</span>
            <p className="flex items-center gap-2 text-paper">
              <FaClock className="text-base text-mute" />
              India · Remote
            </p>
            <p className="text-sm text-mute">Local time {localTime} IST</p>
          </div>
          <div className="grid gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Links</span>
            <div className="flex flex-wrap gap-3">
              {contactInfo.socials
                .filter((s) => s.name !== 'Website')
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-line px-3 py-2 text-sm text-paper hover:border-paper transition-colors"
                  >
                    {socialIcons[social.name] || <FaGithub className="text-lg" />}
                    {social.name}
                  </a>
                ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 bg-ink p-6 sm:p-8 lg:col-span-7">
          <label className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Name</span>
            <input
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="h-12 border border-line bg-transparent px-3 text-sm outline-none focus:border-paper"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Email</span>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="h-12 border border-line bg-transparent px-3 text-sm outline-none focus:border-paper"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Message</span>
            <textarea
              name="message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              className="border border-line bg-transparent px-3 py-3 text-sm outline-none focus:border-paper"
            />
          </label>
          {status.text && (
            <p className={`text-sm ${status.type === 'error' ? 'text-mute' : 'text-paper'}`}>
              {status.text}
            </p>
          )}
          <button
            type="submit"
            disabled={sending}
            className="flex h-12 items-center justify-center gap-2 bg-paper text-xs font-medium uppercase tracking-[0.18em] text-ink disabled:opacity-50"
          >
            {sending && (
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            )}
            {sending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
