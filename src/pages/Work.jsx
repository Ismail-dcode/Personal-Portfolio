import React from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaDocker, FaGithub, FaLinux, FaCloud, FaCode, FaTools, FaServer } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../data/animations';

const Work = ({ onNavigate }) => {
  const { hero, projects, skills, contactInfo } = portfolioData;
  const featured = projects.slice(0, 4);

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
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mute">
            {hero.badge}
          </p>
          <h1 className="mt-4 font-display text-[10vw] leading-[0.9] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            Ismail
            <span className="block italic">Shaikh</span>
          </h1>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-mute sm:text-xs">
            I am a Cloud Native Developer
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-mute sm:text-xs">
            Open to work in Cloud & DevOps
          </p>
        </div>

        <div className="grid gap-5 lg:col-span-4 lg:gap-6">
          <p className="max-w-sm text-sm leading-relaxed text-mute sm:text-base">
            Cloud & DevOps student building reliable infrastructure. AWS, Linux, Docker, and CI/CD — from idea to deployed system. Based in India.
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
        </div>
      </section>

      {/* What I Do */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 border-t border-line pt-10"
      >
        <motion.h2 variants={fadeInUp} className="font-display text-2xl italic sm:text-3xl sm:text-4xl">What I Do</motion.h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {[
            {
              icon: <FaCloudUploadAlt className="text-lg text-mute" />,
              title: 'Cloud Deployment',
              desc: 'Deploy and manage applications on AWS using EC2, S3, and CloudFront with proper domain routing and SSL configuration.',
            },
            {
              icon: <FaDocker className="text-lg text-mute" />,
              title: 'Containerization',
              desc: 'Package applications into portable Docker containers with multi-stage builds and Docker Compose orchestration.',
            },
            {
              icon: <FaGithub className="text-lg text-mute" />,
              title: 'CI/CD Automation',
              desc: 'Build automated GitHub Actions workflows for testing, building, and deploying code on every push.',
            },
            {
              icon: <FaLinux className="text-lg text-mute" />,
              title: 'Linux Administration',
              desc: 'Manage RHEL and Ubuntu servers, write Bash automation scripts, and configure system services.',
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
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
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
                className="grid gap-3 bg-ink p-4 sm:gap-4 sm:p-6"
              >
                <div className="flex items-center gap-2">
                  {categoryIcons[group.category] || <FaCode className="text-base text-mute" />}
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute sm:text-[11px]">
                    {group.category}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 gap-1.5 sm:gap-2">
                  {group.items.slice(0, 5).map((item) => (
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
          Open for contract, freelancing, remote jobs, and Cloud & DevOps roles.
        </motion.p>
        <motion.a
          variants={fadeInRight}
          href={`mailto:${contactInfo.email}`}
          className="grid h-11 w-full place-items-center border border-paper px-4 text-[10px] uppercase tracking-[0.16em hover:bg-paper hover:text-ink sm:h-12 sm:w-auto sm:px-6 sm:text-xs"
        >
          {contactInfo.email}
        </motion.a>
      </motion.section>
    </motion.div>
  );
};

export default Work;
