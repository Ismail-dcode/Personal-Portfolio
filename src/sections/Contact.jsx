import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate form submission
      setStatus({ submitted: true, error: false });
      setTimeout(() => setStatus({ submitted: false, error: false }), 5000);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus({ submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-20 bg-darkBg relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Connect"
          subtitle="I'm actively looking for opportunities. Feel free to drop a message."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-cardBg rounded-full flex items-center justify-center border border-slate-700 text-primary shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Me</p>
                <a href="mailto:ismail2i.shaik@gmail.com" className="text-lg hover:text-primary transition-colors">ismail2i.shaik@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-cardBg rounded-full flex items-center justify-center border border-slate-700 text-primary shrink-0">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Call Me</p>
                <p className="text-lg">+91 7719877580</p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800">
              <h4 className="text-lg font-medium text-white mb-4">Follow My Work</h4>
              <div className="flex gap-4">
                <a href="https://github.com/Ismail-dcode" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ismail-shaikh-19798a335/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:bg-slate-700 transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://x.com/Ismail_dcode/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cardBg p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ismail"
                  className="w-full px-4 py-3 bg-darkBg border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ismail@example.com"
                  className="w-full px-4 py-3 bg-darkBg border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we help each other?"
                  className="w-full px-4 py-3 bg-darkBg border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary resize-none"
                  required
                ></textarea>
              </div>

              {status.error && <p className="text-red-400 text-sm">Please fill out all fields correctly.</p>}
              {status.submitted && <p className="text-green-400 text-sm bg-green-500/10 p-3 rounded-lg border border-green-500/20">Thank you! Your message has been sent successfully.</p>}

              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary hover:bg-sky-400 text-slate-900 font-bold rounded-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
