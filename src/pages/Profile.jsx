import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaTools, FaCode, FaServer } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../data/animations';

const Profile = () => {
  const { experience, skills } = portfolioData;

  const certs = [
    { name: 'RHCSA', detail: 'Red Hat Certified System Administrator', badge: '/assets/RHCSA-Badge.png', verifyUrl: 'https://www.credly.com/badges/6024e930-ed6a-45c8-8b42-a9fc3bbe3a1a/public_url' },
    { name: 'AWS SAA-C03', detail: 'Solutions Architect Associate ', badge: '/assets/AWS_SAA_Badge.png', verifyUrl: 'https://www.credly.com/badges/9cff975b-e2dd-4c4c-ac9f-e97eb92f183e/public_url' },
    { name: 'Red Hat OpenShift DO180', detail: 'Containers & Kubernetes — in progress', badge: null, verifyUrl: null },
  ];

  const getTypeBadge = (type) => {
    if (!type) return '';
    if (type.includes('Internship'))
      return 'border-emerald-900 text-emerald-400 bg-emerald-950/60';
    if (type.includes('Education'))
      return 'border-sky-900 text-sky-400 bg-sky-950/60';
    return 'border-zinc-700 text-zinc-400 bg-zinc-900/60';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="mx-auto grid max-w-6xl gap-16 px-5 py-14 sm:px-8 sm:py-20"
    >
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mute">Profile</p>
          <h1 className="mt-3 font-display text-3xl italic leading-tight sm:text-4xl lg:text-5xl">
            About Me
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-mute sm:text-xs">
            B.Tech CSE · Expected 2027
          </p>
          {/* Rectangular Profile Picture */}
          <div className="mt-6 w-full max-w-xs overflow-hidden border border-line sm:max-w-sm">
            <img
              src="/assets/Profile-Pic.jpg"
              alt="Shaikh Ismail"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        <div className="grid content-start gap-4 lg:col-span-7 lg:gap-5">
          <p className="text-sm leading-relaxed text-mute sm:text-base lg:text-lg">
            I am a Computer Science student focused on AWS, Linux administration, Docker, and CI/CD. I build and automate cloud environments that stay simple, reliable, and cheap to run.
          </p>
          <p className="text-sm leading-relaxed text-mute sm:text-base lg:text-lg">
            The work I care about is infrastructure you can explain on a whiteboard: clear architecture, repeatable deploys, and systems that fail in an obvious way.
          </p>
        </div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8"
      >
        <motion.div
          variants={fadeInUp}
          className="flex items-baseline justify-between border-b border-line pb-4"
        >
          <h2 className="font-display text-3xl italic">Career Log</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
            {experience.length} entries
          </span>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative pl-5 sm:pl-9">
          {/* Rail line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-line" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeInLeft}
              className="relative mb-6 last:mb-0 group sm:mb-8"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[21px] sm:-left-[35px] top-4 flex h-[10px] w-[10px] items-center justify-center sm:top-5">
                <span className="h-2 w-2 rounded-full border border-zinc-600 bg-ink group-hover:bg-paper group-hover:border-paper transition-all duration-300" />
              </span>

              {/* Card */}
              <article className="rounded-md border border-line bg-ink p-4 transition-all duration-300 group-hover:border-zinc-600 group-hover:shadow-[0_6px_36px_-10px_rgba(0,0,0,0.7)] sm:p-6">

                {/* Period + type badge */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 sm:mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mute sm:text-[10px]">
                    {exp.period}
                  </span>
                  {exp.duration && (
                    <span className="font-mono text-[9px] text-zinc-700 sm:text-[10px]">· {exp.duration}</span>
                  )}
                  {exp.type && (
                    <span className={`ml-auto font-mono text-[8px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm border sm:text-[9px] ${getTypeBadge(exp.type)}`}>
                      {exp.type}
                    </span>
                  )}
                </div>

                {/* Title & company */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="font-display text-xl leading-snug text-paper transition-colors duration-200 group-hover:text-white sm:text-[1.6rem]">
                    {exp.title}
                  </h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-mute sm:text-[10px]">
                    {exp.company}
                  </p>
                </div>

                {/* Description */}
                <p className="border-t border-line pt-3 text-xs leading-relaxed text-zinc-500 sm:pt-4 sm:text-sm sm:mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mb-3 grid gap-2 sm:mb-4 sm:gap-2.5">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 sm:gap-3 sm:text-sm">
                        <span className="mt-[5px] h-[5px] w-[5px] shrink-0 rounded-full bg-zinc-600 sm:mt-[7px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skill tags */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 border-t border-line pt-3 sm:gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="rounded-sm border border-zinc-800 bg-zinc-900/70 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-500 transition-colors duration-200 group-hover:border-zinc-700 sm:px-2.5 sm:py-1 sm:text-[9px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-10 lg:grid-cols-12"
      >
        <motion.div variants={fadeInLeft} className="lg:col-span-4">
          <h2 className="font-display text-2xl italic sm:text-3xl">Credentials</h2>
        </motion.div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
          {certs.map((cert, idx) => (
            <motion.li
              key={cert.name}
              variants={fadeInRight}
              className="group relative overflow-hidden rounded-md border border-line bg-ink p-4 transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_6px_36px_-10px_rgba(0,0,0,0.7)] sm:p-5"
            >
              {cert.badge ? (
                <div className="relative mb-3 overflow-hidden rounded-sm border border-line/50 bg-zinc-900/50 p-2.5 sm:mb-4 sm:p-3">
                  <img
                    src={cert.badge}
                    alt={`${cert.name} badge`}
                    className="mx-auto max-h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105 sm:max-h-28"
                  />
                </div>
              ) : (
                <div className="mb-3 grid h-24 place-items-center rounded-sm border border-dashed border-line bg-zinc-900/30 sm:mb-4 sm:h-28">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[10px]">
                    In Progress
                  </span>
                </div>
              )}
              <h3 className="font-display text-base leading-snug text-paper sm:text-lg">{cert.name}</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-mute sm:text-xs">{cert.detail}</p>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-line px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-mute transition-all duration-200 hover:border-paper hover:text-paper sm:text-[10px]"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Verify
                </a>
              )}
            </motion.li>
          ))}
        </ul>
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
          className="border-b border-line pb-4 font-display text-2xl italic sm:text-3xl"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4">
          {skills.map((group, idx) => {
            const categoryIcons = {
              'Cloud & Infrastructure': <FaCloud className="text-base text-mute" />,
              'DevOps & Automation': <FaTools className="text-base text-mute" />,
              'Development & Languages': <FaCode className="text-base text-mute" />,
              'Tools & Workflows': <FaServer className="text-base text-mute" />,
            };
            return (
              <motion.div
                key={group.category}
                variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
                className="grid gap-2.5 content-start sm:gap-3"
              >
                <div className="flex items-center gap-2">
                  {categoryIcons[group.category] || <FaCode className="text-base text-mute" />}
                  <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-mute sm:text-[10px]">
                    {group.category}
                  </h3>
                </div>
                <ul className="grid gap-1 text-xs sm:gap-1.5 sm:text-sm">
                  {group.items.map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Profile;
