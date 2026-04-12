import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { FaGithub, FaExternalLinkAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiGithubactions } from 'react-icons/si';

const projectsData = [
  {
    title: "Dockerized Node.js Application",
    description: "Containerized a scalable Node.js application to ensure consistent environments across development and production.",
    problemSolution: "Problem: 'It works on my machine' issues and difficult setup. Solution: Dockerized the app for instant spin-up, improving onboarding time by 80%.",
    architecture: "Node.js App → Docker Image (Multi-stage build) → Docker Hub → Server Deploy",
    techStack: ["Docker", "Node.js", "Express", "Linux"],
    githubURL: "https://github.com/Ismail-dcode/Node-app-Local-Hosting",
    liveURL: "https://hub.docker.com/r/ismaildcode/my-personal-portfolio",
    icon: <FaDocker className="text-4xl text-[#2496ED] mb-4" />
  },
  {
    title: "AWS S3 + CloudFront Static Deployment",
    description: "Deployed a static web application on AWS S3, edge-optimized worldwide using CloudFront.",
    problemSolution: "Problem: High latency for global users on traditional servers. Solution: Leveraged AWS CDN (CloudFront) caching with S3 origin for sub-50ms load times globally.",
    architecture: "GitHub → S3 Bucket (Static Hosting) → CloudFront Edge Locations → User",
    techStack: ["AWS S3", "AWS CloudFront", "HTML/CSS", "IAM Policies"],
    githubURL: "https://github.com/Ismail-dcode/AWS-S3-CloudFront-Project",
    liveURL: "https://d2bhhd6ys9k0o4.cloudfront.net/",
    icon: <FaAws className="text-4xl text-[#FF9900] mb-4" />
  },
  {
    title: "CodeByte AI Hackathon Prototype",
    description: "AI-powered tool that converts UI images into responsive HTML/CSS code.",
    problemSolution: "Problem: Slow UI prototyping. Solution: Used Google Gemini AI integration to scan uploaded designs and instantly return usable code.",
    architecture: "React Frontend → Node.js Backend API → Gemini AI Model → Response formatting",
    techStack: ["React", "Node.js", "Google AI API", "Vite"],
    githubURL: "https://github.com/Ismail-dcode/CodeByte",
    liveURL: "https://hub.docker.com/r/ismaildcode/codebyte-v1",
    icon: <span className="text-4xl mb-4 inline-block">🤖</span>
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-darkBg relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world examples of my work, focusing on DevOps, Cloud and Fullstack Development."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-cardBg rounded-xl p-6 sm:p-8 border border-slate-800 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              {/* Highlight gradient on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-[#21d4fd] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {project.icon}

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-4 h-auto md:h-12">
                {project.description}
              </p>

              <div className="bg-darkBg/50 p-4 rounded-lg border border-slate-700/50 mb-4">
                <p className="text-sm text-slate-300"><strong className="text-white">Case:</strong> {project.problemSolution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Architecture Flow</h4>
                <p className="text-sm font-mono text-primary/90 bg-primary/10 p-2 rounded border border-primary/20">
                  {project.architecture}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-slate-800 text-xs font-medium text-slate-300 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 flex gap-4 justify-end relative z-10 w-full border-t border-slate-800/50">
                {project.githubURL && (
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
                {project.liveURL && (
                  <a
                    href={project.liveURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
