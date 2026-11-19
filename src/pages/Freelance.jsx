import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaCloud,
  FaChartLine,
  FaPenNib,
  FaVideo,
  FaGlobe,
  FaRocket,
  FaCogs,
  FaTools,
  FaArrowRight,
  FaQuoteLeft,
  FaExternalLinkAlt,
  FaCheck,
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../data/animations';

const serviceIcons = {
  FaLaptopCode: <FaLaptopCode />,
  FaMobileAlt: <FaMobileAlt />,
  FaCode: <FaCode />,
  FaPalette: <FaPalette />,
  FaCloud: <FaCloud />,
  FaChartLine: <FaChartLine />,
  FaPenNib: <FaPenNib />,
  FaVideo: <FaVideo />,
  FaGlobe: <FaGlobe />,
  FaRocket: <FaRocket />,
  FaCogs: <FaCogs />,
  FaTools: <FaTools />,
};

const Freelance = ({ onNavigate }) => {
  const { freelance, testimonials, contactInfo } = portfolioData;
  const testimonial = testimonials[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="mx-auto grid max-w-6xl gap-20 px-5 py-14 sm:px-8 sm:py-20"
    >
      {/* Hero */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mute">
            {freelance.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[13vw] leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            Websites, apps,
            <span className="block italic">and cloud.</span>
          </h1>
          <p className="mt-5 grid gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-mute sm:text-xs">
            <span className="block">Websites · Apps · Cloud</span>
            <span className="block">Content · Video · Cloud Ops</span>
            <span className="block">Domain · Monitoring · Support</span>
          </p>
        </div>

        <div className="grid gap-5 lg:col-span-4 lg:gap-6">
          <p className="max-w-md text-sm leading-relaxed text-mute sm:text-base">
            {freelance.intro}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`mailto:${contactInfo.email}?subject=Freelance%20project`}
              className="grid h-11 place-items-center border border-paper bg-paper text-[11px] font-medium uppercase tracking-[0.16em] text-ink sm:h-12 sm:text-xs"
            >
              Start a Project
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="grid h-11 place-items-center border border-paper text-[11px] font-medium uppercase tracking-[0.16em] text-paper hover:bg-paper hover:text-ink sm:h-12 sm:text-xs"
            >
              Contact
            </button>
          </div>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {freelance.status}
          </p>
        </div>
      </section>

      {/* Assurances */}
      <div className="grid gap-3 border-y border-line py-4 sm:grid-cols-3 sm:gap-6">
        {freelance.note.split(' · ').map((item) => (
          <p key={item} className="flex items-start gap-2 text-xs leading-relaxed text-mute sm:text-sm">
            <FaCheck className="mt-0.5 shrink-0 text-[10px] text-zinc-600" />
            {item}
          </p>
        ))}
      </div>

      {/* Services */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8"
      >
        <motion.div variants={fadeInUp} className="grid gap-3 border-b border-line pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">What I take on</p>
          <h2 className="font-display text-2xl italic sm:text-3xl sm:text-4xl">
            One point of contact, end to end.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {freelance.services.map((service, idx) => (
            <motion.article
              key={service.id}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="group grid gap-4 bg-ink p-5 transition-colors duration-300 hover:bg-zinc-950 sm:p-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base text-mute transition-colors duration-300 group-hover:text-paper">
                  {serviceIcons[service.icon] || <FaCode />}
                </span>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper sm:text-[11px]">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-mute sm:text-sm">{service.description}</p>
              <ul className="grid gap-2 border-t border-line pt-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[11px] text-zinc-500 sm:text-xs">
                    <span className="mt-[5px] h-[4px] w-[4px] shrink-0 rounded-full bg-zinc-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Content & video tools */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8 border-t border-line pt-10"
      >
        <motion.div
          variants={fadeInUp}
          className="grid gap-3 border-b border-line pb-4 sm:grid-cols-[1fr_auto] sm:items-end"
        >
          <div className="grid gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Content & Video</p>
            <h2 className="font-display text-2xl italic sm:text-3xl sm:text-4xl">
              Written and edited with.
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-mute sm:text-right sm:text-sm">
            The tools behind the copy, captions, reels, and longer edits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {freelance.editingTools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="grid content-start gap-3 bg-ink p-5 sm:p-6"
            >
              <FaVideo className="text-base text-mute" />
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper sm:text-[11px]">
                {tool.name}
              </h3>
              <p className="text-xs leading-relaxed text-mute sm:text-sm">{tool.use}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Engagements */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8"
      >
        <motion.div
          variants={fadeInUp}
          className="grid gap-3 border-b border-line pb-4 sm:grid-cols-[1fr_auto] sm:items-end"
        >
          <div className="grid gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Engagements</p>
            <h2 className="font-display text-2xl italic sm:text-3xl sm:text-4xl">Ways to work together.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-mute sm:text-right">
            Every project is quoted after a short conversation. No packages that force features you do not need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {freelance.engagements.map((item, idx) => (
            <motion.article
              key={item.title}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="grid content-start gap-3 bg-ink p-5 sm:p-6"
            >
              <p className="font-mono text-[10px] text-zinc-600">0{idx + 1}</p>
              <h3 className="font-display text-xl leading-tight sm:text-2xl">{item.title}</h3>
              <p className="text-xs leading-relaxed text-mute sm:text-sm">{item.description}</p>
              <p className="mt-1 border-t border-line pt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:text-[10px]">
                Best for · {item.bestFor}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8"
      >
        <motion.div variants={fadeInUp} className="grid gap-3 border-b border-line pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Process</p>
          <h2 className="font-display text-2xl italic sm:text-3xl sm:text-4xl">
            From first call to production.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {freelance.process.map((step, idx) => (
            <motion.div
              key={step.step}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="grid content-start gap-2 bg-ink p-5 sm:p-6"
            >
              <span className="font-display text-2xl italic text-zinc-600 sm:text-3xl">{step.step}</span>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper sm:text-[11px]">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-mute sm:text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Client work / testimonial */}
      {testimonial && (
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-8 border-t border-line pt-10"
        >
          <motion.div variants={fadeInUp} className="grid gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Client Work</p>
            <h2 className="font-display text-2xl italic sm:text-3xl sm:text-4xl">
              Built for a real business.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <motion.figure variants={fadeInLeft} className="grid content-start gap-6 lg:col-span-7">
              <FaQuoteLeft className="text-xl text-zinc-600" />
              <blockquote className="font-display text-2xl italic leading-snug text-paper sm:text-3xl lg:text-4xl">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="grid gap-1 border-t border-line pt-4">
                <span className="text-sm text-paper sm:text-base">{testimonial.author}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-mute sm:text-[10px]">
                  {testimonial.role}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600 sm:text-[10px]">
                  {testimonial.company} · {testimonial.location}
                </span>
              </figcaption>
            </motion.figure>

            <motion.article
              variants={fadeInRight}
              className="grid content-start gap-5 lg:col-span-5"
            >
              <div className="overflow-hidden border border-line">
                <img
                  src={testimonial.projectImage}
                  alt={`${testimonial.project} preview`}
                  className="h-48 w-full object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-56"
                />
              </div>

              <div className="grid gap-2">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mute sm:text-[10px]">
                  Featured project
                </p>
                <h3 className="font-display text-xl leading-tight sm:text-2xl">{testimonial.project}</h3>
                <p className="text-xs leading-relaxed text-mute sm:text-sm">{testimonial.projectSummary}</p>
              </div>

              <div className="grid grid-cols-2 gap-px border border-line bg-line">
                {testimonial.metrics.map((metric) => (
                  <div key={metric.label} className="grid gap-1 bg-ink p-3 sm:p-4">
                    <span className="font-display text-2xl italic text-paper sm:text-3xl">{metric.value}</span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-mute sm:text-[9px]">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {testimonial.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-zinc-800 bg-zinc-900/70 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-500 sm:px-2.5 sm:py-1 sm:text-[9px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={testimonial.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-paper hover:underline sm:text-xs"
              >
                Visit the live site
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </motion.article>
          </div>
        </motion.section>
      )}

      {/* FAQ */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8"
      >
        <motion.div variants={fadeInUp} className="grid gap-3 border-b border-line pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">FAQ</p>
          <h2 className="font-display text-2xl italic sm:text-3xl sm:text-4xl">Before we start.</h2>
        </motion.div>

        <div className="border-t border-line">
          {freelance.faqs.map((faq, idx) => (
            <motion.details
              key={faq.question}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="group border-b border-line py-4 sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm text-paper sm:text-base">{faq.question}</span>
                <span className="font-mono text-lg leading-none text-zinc-600 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-xs leading-relaxed text-mute sm:text-sm">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 items-center gap-6 border-t border-line pt-10 sm:grid-cols-[1fr_auto]"
      >
        <motion.div variants={fadeInLeft} className="grid gap-2">
          <p className="font-display text-lg italic leading-snug sm:text-2xl sm:text-3xl">
            Have a website, app, or cloud problem? Let&apos;s scope it.
          </p>
          <p className="text-xs text-mute sm:text-sm">
            Send a short description of the business and what you need — a website, app, cloud setup, monitoring, content, or video. I will reply with a plan and a fixed quote.
          </p>
        </motion.div>
        <motion.div variants={fadeInRight} className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${contactInfo.email}?subject=Freelance%20project`}
            className="inline-flex h-11 items-center justify-center gap-2 border border-paper bg-paper px-5 text-[10px] uppercase tracking-[0.16em] text-ink sm:h-12 sm:text-xs"
          >
            Email me
            <FaArrowRight className="text-[10px]" />
          </a>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="grid h-11 place-items-center border border-line px-5 text-[10px] uppercase tracking-[0.16em] text-paper hover:border-paper sm:h-12 sm:text-xs"
          >
            Contact form
          </button>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Freelance;
