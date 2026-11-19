import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCloudUploadAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaChartLine,
  FaPenNib,
  FaVideo,
  FaGlobe,
  FaLinux,
  FaCloud,
  FaCode,
  FaTools,
  FaServer,
  FaArrowRight,
  FaQuoteLeft,
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../data/animations';

const Work = ({ onNavigate }) => {
  const { hero, projects, skills, contactInfo, availability, freelance, testimonials } = portfolioData;
  const featured = projects.slice(0, 4);
  const testimonial = testimonials[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="mx-auto grid max-w-6xl gap-20 px-5 py-14 sm:px-8 sm:py-20"
    >
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute sm:text-[11px] sm:tracking-[0.28em]">
            <span className="block xl:inline">Open for Work — Full&#8209;time · Part&#8209;time</span>
            <span className="hidden xl:inline"> · </span>
            <span className="block xl:inline">Remote · Contracts · Internships</span>
          </p>
          <h1 className="mt-4 font-display text-[10vw] leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            Ismail
            <span className="block italic">Shaikh</span>
          </h1>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-mute sm:text-xs">
            Cloud &amp; DevOps Developer · Freelance Web, Apps &amp; Cloud
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mute sm:text-xs">
            <span className="block sm:inline">Full-time · Part-time · Remote</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">Contracts · Internships</span>
          </p>
        </div>

        <div className="grid gap-5 lg:col-span-4 lg:gap-6">
          <p className="max-w-sm text-sm leading-relaxed text-mute sm:text-base">
            I build and automate cloud infrastructure, and I design, ship, and maintain websites and apps for clients. I also monitor and manage the cloud behind them, write the content, and edit the video. AWS, Linux, Docker, CI/CD, and monitoring on one side — React, apps, domain setup, deployment, copy, and edits on the other. Based in India, working remotely.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={hero.cta.tertiary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 place-items-center border border-paper bg-paper text-[11px] font-medium uppercase tracking-[0.16em] text-ink sm:h-12 sm:text-xs"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="grid h-11 place-items-center border border-paper text-[11px] font-medium uppercase tracking-[0.16em] text-paper hover:bg-paper hover:text-ink sm:h-12 sm:text-xs"
            >
              Let&apos;s Talk
            </button>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('freelance')}
            className="inline-flex items-center gap-2 justify-self-start font-mono text-[10px] uppercase tracking-[0.16em] text-mute hover:text-paper sm:text-[11px]"
          >
            Freelance services
            <FaArrowRight className="text-[9px]" />
          </button>
        </div>
      </section>

      {/* Availability */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-5 border-t border-line pt-8"
      >
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-[1fr_auto] items-baseline gap-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute sm:text-[11px]">
            Availability
          </p>
          <button
            type="button"
            onClick={() => onNavigate('freelance')}
            className="font-mono text-[9px] uppercase tracking-[0.16em] text-mute hover:text-paper sm:text-[10px]"
          >
            Freelance projects →
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
          {availability.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="grid content-start gap-2 bg-ink p-4 sm:p-5"
            >
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {item.label}
              </span>
              <p className="text-[11px] leading-relaxed text-mute sm:text-xs">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What I Do */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 border-t border-line pt-10"
      >
        <motion.h2 variants={fadeInUp} className="font-display text-2xl italic sm:text-3xl sm:text-4xl">What I Do</motion.h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[
            {
              icon: <FaCloudUploadAlt className="text-lg text-mute" />,
              title: 'Cloud Deployment & CI/CD',
              desc: 'Deploy on AWS with EC2, S3, CloudFront, and Route53 — then automate builds and releases with GitHub Actions and Docker.',
            },
            {
              icon: <FaChartLine className="text-lg text-mute" />,
              title: 'Cloud Monitoring & Management',
              desc: 'Set up uptime checks, logs, metrics, alerts, backups, patching, and cost reviews so production stays healthy.',
            },
            {
              icon: <FaLaptopCode className="text-lg text-mute" />,
              title: 'Website Development',
              desc: 'Build responsive websites with React, JavaScript, and Node — designed, developed, and shipped end to end.',
            },
            {
              icon: <FaMobileAlt className="text-lg text-mute" />,
              title: 'App Development',
              desc: 'Build React apps, dashboards, internal tools, and PWAs with authentication, APIs, and databases.',
            },
            {
              icon: <FaPalette className="text-lg text-mute" />,
              title: 'Web Design',
              desc: 'Design clean, mobile-first layouts with a consistent brand identity, readable typography, and clear calls to action.',
            },
            {
              icon: <FaGlobe className="text-lg text-mute" />,
              title: 'Domain & DNS',
              desc: 'Register the right domain, configure DNS records and subdomains, and secure the site with HTTPS and SSL.',
            },
            {
              icon: <FaLinux className="text-lg text-mute" />,
              title: 'Linux & Maintenance',
              desc: 'Manage RHEL and Ubuntu servers, write Bash automation, and keep sites healthy with backups, monitoring, and fixes.',
            },
            {
              icon: <FaPenNib className="text-lg text-mute" />,
              title: 'Content Writing',
              desc: 'Write website copy, blog posts, product descriptions, scripts, and social captions that match the brand and the audience.',
            },
            {
              icon: <FaVideo className="text-lg text-mute" />,
              title: 'Video Editing',
              desc: 'Edit short-form and long-form video in Premiere Pro, CapCut, and VN — cuts, captions, pacing, and clean exports.',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="border-t border-line pt-3 sm:pt-4"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper sm:text-[11px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-mute sm:text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8"
      >
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-[1fr_auto] items-end border-b border-line pb-4"
        >
          <h2 className="font-display text-2xl italic sm:text-3xl sm:text-4xl">Selected Works</h2>
          <span className="font-mono text-[11px] text-mute">0{featured.length}</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
          {featured.map((project, idx) => (
            <motion.article
              key={project.id}
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="grid grid-rows-[180px_1fr] bg-ink sm:grid-rows-[220px_1fr]"
            >
              <div className="overflow-hidden border-b border-line">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
              <div className="grid gap-3 p-4 sm:gap-4 sm:p-6">
                <div className="grid gap-1.5 sm:gap-2">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mute sm:text-[10px]">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl leading-tight sm:text-2xl">{project.title}</h3>
                  <p className="text-xs leading-relaxed text-mute sm:text-sm">{project.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 self-end sm:gap-3">
                  {project.liveUrl && project.liveUrl !== project.githubUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-9 place-items-center border border-line text-[10px] uppercase tracking-[0.16em] text-paper hover:border-paper sm:h-10 sm:text-[11px]"
                    >
                      View
                    </a>
                  ) : (
                    <span className="grid h-9 place-items-center border border-line text-[10px] uppercase tracking-[0.16em] text-mute sm:h-10 sm:text-[11px]">
                      Repo
                    </span>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 place-items-center border border-line text-[10px] uppercase tracking-[0.16em] text-paper hover:border-paper sm:h-10 sm:text-[11px]"
                  >
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="border-b border-line pb-4 font-display text-2xl italic sm:text-3xl sm:text-4xl"
        >
          Toolkit
        </motion.h2>
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => {
            const categoryIcons = {
              'Cloud & Infrastructure': <FaCloud className="text-base text-mute" />,
              'DevOps & Automation': <FaTools className="text-base text-mute" />,
              'Development & Languages': <FaCode className="text-base text-mute" />,
              'Tools & Workflows': <FaServer className="text-base text-mute" />,
              'Content & Writing': <FaPenNib className="text-base text-mute" />,
              'Video & Graphics': <FaVideo className="text-base text-mute" />,
            };
            return (
              <motion.div
                key={group.category}
                variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
                className="grid gap-3 bg-ink p-4 sm:gap-4 sm:p-6"
              >
                <div className="flex items-center gap-2">
                  {categoryIcons[group.category] || <FaCode className="text-base text-mute" />}
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute sm:text-[11px]">
                    {group.category}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 gap-1.5 sm:gap-2">
                  {group.items.slice(0, 6).map((item) => (
                    <li
                      key={item.name}
                      className="grid grid-cols-[1fr_auto] gap-3 border-b border-line/80 py-1.5 text-xs last:border-0 sm:gap-4 sm:py-2 sm:text-sm"
                    >
                      <span>{item.name}</span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-mute sm:text-[10px]">
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Freelance teaser */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-10"
      >
        <motion.div variants={fadeInLeft} className="grid content-start gap-4 lg:col-span-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute sm:text-[11px]">
            Freelance
          </p>
          <h2 className="font-display text-2xl italic leading-tight sm:text-3xl sm:text-4xl">
            Websites, apps, and cloud.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-mute">
            I work with small businesses, creators, and independent sellers on new websites, apps, cloud setup, monitoring, domain and DNS, deployment, maintenance, content writing, and video editing. One person from the first sketch to the live product, the launch post, and the monitoring dashboard.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {freelance.services.map((service) => (
              <span
                key={service.id}
                className="rounded-sm border border-zinc-800 bg-zinc-900/70 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-500 sm:px-2.5 sm:py-1 sm:text-[9px]"
              >
                {service.title}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => onNavigate('freelance')}
            className="mt-1 inline-flex w-fit items-center gap-2 border border-paper px-4 py-2.5 text-[10px] uppercase tracking-[0.16em] text-paper hover:bg-paper hover:text-ink sm:text-[11px]"
          >
            Explore freelance services
            <FaArrowRight className="text-[9px]" />
          </button>
        </motion.div>

        {testimonial && (
          <motion.figure
            variants={fadeInRight}
            className="grid content-start gap-4 border-t border-line pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
          >
            <FaQuoteLeft className="text-base text-zinc-600" />
            <blockquote className="font-display text-xl italic leading-snug text-paper sm:text-2xl">
              “{testimonial.shortQuote}”
            </blockquote>
            <figcaption className="grid gap-1 border-t border-line pt-3">
              <span className="text-sm text-paper">{testimonial.author}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-mute sm:text-[10px]">
                {testimonial.role}
              </span>
            </figcaption>
            <a
              href={testimonial.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-mute hover:text-paper sm:text-[10px]"
            >
              View the client project
              <FaArrowRight className="text-[8px]" />
            </a>
          </motion.figure>
        )}
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 items-center gap-6 border-t border-line pt-10 sm:grid-cols-[1fr_auto]"
      >
        <motion.p
          variants={fadeInLeft}
          className="font-display text-lg italic sm:text-2xl sm:text-3xl"
        >
          Open for full-time, part-time, remote, contract, and internship roles — and taking on freelance web, app, cloud, content, and video projects.
        </motion.p>
        <motion.a
          variants={fadeInRight}
          href={`mailto:${contactInfo.email}`}
          className="grid h-11 w-full place-items-center border border-paper px-4 text-[10px] uppercase tracking-[0.16em] hover:bg-paper hover:text-ink sm:h-12 sm:w-auto sm:px-6 sm:text-xs"
        >
          {contactInfo.email}
        </motion.a>
      </motion.section>
    </motion.div>
  );
};

export default Work;
