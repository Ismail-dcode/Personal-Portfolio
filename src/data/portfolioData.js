// Centralized Portfolio Data File
// Customized for Shaikh Ismail - Computer Science Student, Cloud & DevOps Enthusiast

export const portfolioData = {
  // Navigation Links
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "What I Do", href: "#whatido" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Deployments", href: "#deployments" },
    { name: "Experience", href: "#experience" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero Section Data
  hero: {
    image: "/assets/Profile-0.png",
    badge: "Available for Remote Work & Internships",
    titlePrefix: "Building & Automating",
    titleHighlight: "Cloud Architecture",
    titleSuffix: " & Cloud-Native Solutions",
    subtitle: "Computer Science & Engineering Student (Expected 2027) specializing in AWS Cloud, Linux Systems, Docker Containerization, and CI/CD Automation.",
    cta: {
      primary: { text: "View Projects", href: "#projects" },
      secondary: { text: "Get In Touch", href: "#contact" },
      tertiary: { text: "Download Resume", href: "/assets/Resume_Updated_V1.pdf" }
    },
    floatingBadges: [
      { name: "AWS Cloud", icon: "FaAws", color: "from-amber-500 to-orange-500" },
      { name: "Linux Administration", icon: "FaLinux", color: "from-yellow-500 to-amber-600" },
      { name: "Docker Containers", icon: "FaDocker", color: "from-blue-600 to-cyan-500" },
      { name: "GitHub Actions", icon: "FaGithub", color: "from-emerald-500 to-green-500" },
      { name: "React & JavaScript", icon: "FaReact", color: "from-cyan-500 to-blue-500" },
      { name: "C / C++ & SQL", icon: "FaCode", color: "from-emerald-500 to-teal-500" },
    ]
  },

  // Trust / Technology Cards Row
  trustTech: [
    { title: "AWS Cloud", category: "Cloud Infrastructure", icon: "FaCloud", count: "EC2, S3, IAM, Route53" },
    { title: "Linux Admin", category: "Operating Systems", icon: "FaLinux", count: "RHEL & Ubuntu , Shell Scripting" },
    { title: "Containerization", category: "Containers", icon: "FaDocker", count: "Docker & Compose" },
    { title: "DevOps & CI/CD", category: "Automation", icon: "FaTerminal", count: "GitHub Actions" },
    { title: "Frontend Engineering", category: "Web Tech", icon: "FaCode", count: "React, JS, HTML/CSS" },
    { title: "Database Systems", category: "Data Storage", icon: "FaDatabase", count: "MySQL & SQL" },
    { title: "Web Servers", category: "Server Hosting", icon: "FaServer", count: "Apache & Nginx" },
    { title: "Version Control", category: "Workflow", icon: "FaNetworkWired", count: "Git & GitHub" }
  ],

  // Services Section (6 Cards)
  services: [
    {
      id: "srv-1",
      title: "Cloud Infrastructure & Deployment",
      category: "AWS Cloud",
      description: "Deploying and configuring web applications and static sites on AWS EC2, S3, and CloudFront with proper domain routing and security controls.",
      features: ["AWS S3 & CloudFront Setup", "Route53 DNS & SSL Certificates", "Cost-effective Cloud Hosting"]
    },
    {
      id: "srv-2",
      title: "Docker Containerization & Setup",
      category: "DevOps",
      description: "Containerizing frontend and backend web applications using Docker and Docker Compose to ensure consistent environments across local dev and cloud servers.",
      features: ["Multi-stage Dockerfiles", "Docker Compose Orchestration", "Environment Isolation"]
    },
    {
      id: "srv-3",
      title: "CI/CD Pipeline Automation",
      category: "Automation",
      description: "Building automated workflows with GitHub Actions for code linting, automated testing, container builds, and seamless deployment triggers on git push.",
      features: ["GitHub Actions Workflows", "Automated Testing & Builds", "Continuous Deployment"]
    },
    {
      id: "srv-4",
      title: "Linux System Administration",
      category: "System Admin",
      description: "Managing Linux server environments (RHEL/Ubuntu), configuring system services, writing custom Bash scripts, and executing system maintenance tasks.",
      features: ["Bash Automation Scripts", "System Monitoring & Cron Jobs", "User & Access Management"]
    },
  ],

  // Featured Projects
  projects: [
    {
      id: "proj-infrasense",
      title: "InfraSense — Cloud Infrastructure Recommendation Platform",
      category: "Cloud Architecture & AI",
      description: "A rule-based cloud infrastructure recommendation platform that analyzes workload requirements and suggests optimized cloud resources, architecture, and best practices.",
      image: "/assets/infrasence.png",
      tags: ["Cloud Architecture", "AWS", "Rule Engine", "Infrastructure Design", "DevOps"],
      liveUrl: "https://infrasence.ismailshaikh.in",
      githubUrl: "https://github.com/Ismail-dcode/InfraSense-Cloud-Infrastructure-Recommendation-Platform",
      details: {
        problem: "Choosing the optimal cloud resources and architectural patterns for custom software workloads requires deep cloud expertise and is prone to cost over-provisioning.",
        solution: "Engineered a rule-based recommendation platform that evaluates user application specs, traffic expectations, and budget constraints to auto-generate optimized cloud architecture blueprints.",
        keyResults: ["Automated cloud architecture recommendation engine", "Optimized resource sizing & cost estimations", "Customized AWS & cloud best practice blueprints"]
      }
    },
    {
      id: "proj-2",
      title: "Aura Notes — Production AWS Deployment Project",
      category: "AWS Cloud & DevOps",
      description: "Production-grade AWS deployment featuring a Dockerized CRUD app with EC2 Auto Scaling, Application Load Balancer, Amazon ECR, Amazon RDS MySQL, and CloudWatch.",
      image: "/assets/aura.png",
      tags: ["AWS EC2", "Auto Scaling", "ALB", "Amazon ECR", "Amazon RDS", "CloudWatch", "Docker"],
      liveUrl: "https://github.com/Ismail-dcode/Aura-Notes-Complete-AWS-Deployment-Project",
      githubUrl: "https://github.com/Ismail-dcode/Aura-Notes-Complete-AWS-Deployment-Project",
      details: {
        problem: "Deploying a scalable, fault-tolerant Dockerized CRUD web application with zero manual intervention during sudden traffic spikes.",
        solution: "Engineered a production-ready AWS architecture using ECR for container images, RDS MySQL for relational data storage, ALB for Multi-AZ traffic routing, and CloudWatch target-tracking Auto Scaling.",
        keyResults: ["Multi-AZ fault-tolerant EC2 Auto Scaling", "Automated container registry & deployment workflow", "Centralized Amazon RDS database integration"]
      }
    },
    {
      id: "proj-3",
      title: "AWS Automated Cloud Architecture & Static Hosting",
      category: "Cloud Architecture",
      description: "Global cloud topology leveraging AWS S3 static hosting, CloudFront CDN edge distribution, Route53, and IAM security controls.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      tags: ["AWS S3", "AWS CloudFront", "Route53", "IAM", "Bash"],
      liveUrl: "https://github.com/Ismail-dcode",
      githubUrl: "https://github.com/Ismail-dcode",
      details: {
        problem: "Distributing static web assets globally with minimal latency and strict security access.",
        solution: "Configured AWS S3 bucket policies, CloudFront SSL edge distribution, and automated deployment scripts via AWS CLI.",
        keyResults: ["Global low-latency delivery", "Enforced HTTPS encryption", "Minimal cloud operational costs"]
      }
    },
    {
      id: "proj-4",
      title: "Automated Node.js CI/CD Pipeline to AWS EC2",
      category: "DevOps & CI/CD",
      description: "Automated deployment pipeline leveraging GitHub Actions and Docker Compose to continuously deploy Node.js applications to AWS EC2 servers over secure SSH.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
      tags: ["GitHub Actions", "AWS EC2", "Docker Compose", "Node.js", "SSH", "CI/CD"],
      liveUrl: "https://github.com/Ismail-dcode/Node-app-CICD",
      githubUrl: "https://github.com/Ismail-dcode/Node-app-CICD",
      details: {
        problem: "Manual server deployments to AWS EC2 were prone to human error, environment mismatches, and deployment downtime.",
        solution: "Configured automated GitHub Actions workflows executing SSH remote commands to pull late updates and trigger Docker Compose container rebuilds on EC2.",
        keyResults: ["Automated continuous integration & deployment", "Zero-downtime container rebuilds via Docker Compose", "Encrypted SSH authentication with GitHub Secrets"]
      }
    },
    {
      id: "proj-1",
      title: "CodeByte — AI UI Design to Code Generator",
      category: "AI & Full-Stack Web",
      description: "AI-driven application built during Technophilia 2025 AI Hackathon (MIT Aurangabad). Converts UI sketches into functional HTML/CSS code using Gemini AI & Google AI Studio models.",
      image: "/assets/Codebyte.png",
      tags: ["Gemini AI", "Google AI Studio", "Node.js", "JavaScript", "HTML5/CSS3", "AI Hackathon"],
      liveUrl: "https://github.com/Ismail-dcode/CodeByte",
      githubUrl: "https://github.com/Ismail-dcode/CodeByte",
      details: {
        problem: "Manually translating wireframe sketches or UI images into HTML/CSS markup is repetitive and time-consuming.",
        solution: "Engineered an AI web app integrating Gemini Vision models via Google AI Studio to analyze uploaded UI design images and instantly output clean HTML/CSS boilerplate.",
        keyResults: ["Built in 12 hours at Technophilia 2025 AI Hackathon", "Automated UI sketch-to-code conversion", "Integrated local auth & live code preview interface"]
      }
    },

  ],

  // Deployment Showcase Data
  deployments: [
    {
      id: "dep-1",
      name: "Personal Portfolio Website",
      type: "React Edge App",
      hosting: "Vercel / Edge Network",
      status: "Active",
      uptime: "99.9%",
      region: "Global Edge",
      latency: "22ms",
      url: "https://ismailshaikh.in"
    },
    {
      id: "dep-2",
      name: "Aura Notes AWS Deployment",
      type: "EC2 Auto Scaling + ALB",
      hosting: "Amazon Web Services",
      status: "Active",
      uptime: "99.95%",
      region: "AWS Multi-AZ",
      latency: "28ms",
      url: "https://github.com/Ismail-dcode/Aura-Notes-Complete-AWS-Deployment-Project"
    },
    {
      id: "dep-3",
      name: "AWS S3 Static Cloud Hosting",
      type: "AWS S3 + CloudFront CDN",
      hosting: "Amazon Web Services",
      status: "Done",
      uptime: "99.99%",
      region: "Global CDN",
      latency: "18ms",
      url: "https://github.com/Ismail-dcode"
    },
    {
      id: "dep-4",
      name: "GitHub Actions CI/CD Pipeline",
      type: "Automated Workflow",
      hosting: "GitHub Actions Runner",
      status: "Synced",
      uptime: "100%",
      region: "Cloud Runner",
      latency: "Build ~45s",
      url: "https://github.com/Ismail-dcode/Node-app-CICD"
    }
  ],

  // Architecture Showcase (Case Studies)
  architectures: [
    {
      id: "arch-1",
      title: "AWS Cloud-Native Web Hosting Architecture",
      subtitle: "S3, CloudFront & Route53 Blueprint",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      description: "Cloud-native topology integrating AWS S3 storage, CloudFront CDN edge caching, Route53 DNS management, ACM SSL certificates, and IAM access policies.",
      technologies: ["AWS S3", "CloudFront", "Route53", "ACM SSL", "IAM Policies"],
      highlights: ["Global low-latency CDN delivery", "Zero server maintenance required", "Enforced HTTPS security policies"]
    },
    {
      id: "arch-2",
      title: "Aura Notes Multi-AZ AWS Scalable Architecture",
      subtitle: "EC2 Auto Scaling & Load Balancer Blueprint",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      description: "Production AWS application architecture featuring Application Load Balancer, EC2 Auto Scaling, Amazon ECR container registry, and Amazon RDS MySQL.",
      technologies: ["AWS EC2", "Auto Scaling", "ALB", "Amazon ECR", "RDS MySQL", "CloudWatch"],
      highlights: ["Multi-AZ automated target tracking scaling", "Centralized Amazon RDS database storage", "Fault-tolerant load balanced traffic distribution"]
    },
    {
      id: "arch-3",
      title: "Automated CI/CD Workflow Architecture",
      subtitle: "Continuous Integration & Delivery Blueprint",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      description: "Automated pipeline architecture incorporating git commit triggers, lint validation checks, container builds, and deployment pushes to cloud hosting environments.",
      technologies: ["GitHub Actions", "Git", "Docker", "Vercel", "Bash Scripting"],
      highlights: ["Automated build validation checks", "Rapid feedback loop on code push", "Streamlined deployment pipeline"]
    }
  ],

  // Categorized Skills
  skills: [
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "AWS (EC2, S3, IAM)", level: "Intermediate" },
        { name: "CloudFront & Route53", level: "Intermediate" },
        { name: "Cloud Native Basics", level: "Advanced" },
        { name: "Vercel / Netlify", level: "Advanced" },
        { name: "Virtual Machines (VMs)", level: "Intermediate" },
        { name: "Apache Web Server", level: "Intermediate" }
      ]
    },
    {
      category: "DevOps & Automation",
      items: [
        { name: "Docker & Containers", level: "Intermediate" },
        { name: "Docker Compose", level: "Intermediate" },
        { name: "Linux Administration", level: "Advanced" },
        { name: "Red Hat (RHCSA concepts)", level: "Advanced" },
        { name: "GitHub Actions (CI/CD)", level: "Intermediate" },
        { name: "Bash / Shell Scripting", level: "Advanced" }
      ]
    },
    {
      category: "Development & Languages",
      items: [
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "React.js", level: "Intermediate" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Node.js & Express", level: "Intermediate" },
        { name: "C & C++ Programming", level: "Intermediate" },
        { name: "SQL & Databases", level: "Intermediate" }
      ]
    },
    {
      category: "Tools & Workflows",
      items: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Nginx Reverse Proxy", level: "Intermediate" },
        { name: "Postman / API Testing", level: "Intermediate" },
        { name: "VS Code & Terminal", level: "Expert" },
        { name: "Command Line (CLI)", level: "Expert" },
        { name: "Canva / Documentation", level: "Intermediate" }
      ]
    }
  ],

  // Development Process
  processSteps: [
    { step: "01", title: "Requirement Analysis", description: "Understanding project scope, infrastructure needs, system requirements, and target workflows." },
    { step: "02", title: "Architecture & Design", description: "Designing cloud topology, container networks, database schemas, and intuitive UI components." },
    { step: "03", title: "Development & Scripting", description: "Writing modular code, configuration files, Dockerfiles, and shell automation scripts." },
    { step: "04", title: "Containerization & Testing", description: "Packaging application services into Docker containers, testing API routes, and verifying system security." },
    { step: "05", title: "CI/CD & Deployment", description: "Automating build pipelines with GitHub Actions and deploying to AWS, Vercel, or Linux servers." },
    { step: "06", title: "Monitoring & Learning", description: "Tracking deployment health, reviewing server logs, and continuously refining system performance." }
  ],

  // Experience Timeline
  experience: [
    {
      period: "2023 — 2027 (Expected)",
      title: "B.Tech in Computer Science & Engineering",
      company: "Degree Student",
      description: "Pursuing B.Tech degree in Computer Science & Engineering with a focus on Cloud Computing, Operating Systems, Computer Networks, Software Engineering, and Database Management.",
      highlights: ["Specializing in Cloud Architecture & DevOps", "Hands-on projects with AWS, Linux, and Docker", "Actively seeking remote work & DevOps internships"]
    },
    {
      period: "2024 — Present",
      title: "Cloud & DevOps Learner & Developer",
      company: "Personal Projects & Independent Practice",
      description: "Building cloud architectures, containerized web applications, automated CI/CD pipelines, and practicing Linux system administration labs.",
      highlights: ["RHCSA (Red Hat Certified System Administrator) training", "Automated deployment pipelines with GitHub Actions", "Maintains active GitHub repositories and open projects"]
    }
  ],

  // GitHub Stats Data
  github: {
    username: "@Ismail-dcode",
    profileUrl: "https://github.com/Ismail-dcode",
    stats: [
      { label: "Public Repositories", value: "20+" },
      { label: "Degree Status", value: "B.Tech CSE '27" },
      { label: "Core Focus", value: "Cloud & DevOps" },
      { label: "Availability", value: "Open for Roles" }
    ],
    languages: [
      { name: "JavaScript / React", percentage: 40, color: "bg-yellow-400" },
      { name: "Linux & Shell Scripting", percentage: 25, color: "bg-emerald-400" },
      { name: "HTML & CSS", percentage: 20, color: "bg-pink-500" },
      { name: "C / C++ & SQL", percentage: 15, color: "bg-blue-500" }
    ],
    topRepos: [
      {
        name: "InfraSense Platform",
        url: "https://github.com/Ismail-dcode/InfraSense-Cloud-Infrastructure-Recommendation-Platform",
        stars: 1,
        forks: 0,
        language: "Python / AWS",
        description: "Rule-based cloud infrastructure recommendation platform analyzing workload requirements & cloud architectures."
      },
      {
        name: "CodeByte",
        url: "https://github.com/Ismail-dcode/CodeByte",
        stars: 1,
        forks: 0,
        language: "JavaScript / AI",
        description: "AI-driven UI sketch-to-code generator powered by Gemini AI models built during Technophilia 2025 AI Hackathon."
      },
      {
        name: "Aura Notes AWS Deployment",
        url: "https://github.com/Ismail-dcode/Aura-Notes-Complete-AWS-Deployment-Project",
        stars: 1,
        forks: 0,
        language: "Docker / AWS",
        description: "Production AWS deployment with EC2 Auto Scaling, ALB, Amazon ECR, and RDS MySQL."
      },
      {
        name: "Node.js CI/CD Pipeline",
        url: "https://github.com/Ismail-dcode/Node-app-CICD",
        stars: 1,
        forks: 0,
        language: "GitHub Actions",
        description: "Automated deployment pipeline with GitHub Actions & Docker Compose to AWS EC2 over SSH."
      }
    ]
  },

  // Blog Posts
  blogPosts: [
    {
      id: "blog-1",
      title: "Getting Started with AWS S3 & CloudFront Static Site Hosting",
      category: "Cloud Architecture",
      date: "2026",
      readTime: "5 min read",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      snippet: "A practical guide for students to host fast static websites on AWS with CloudFront edge caching and custom domain routing.",
      url: "https://github.com/Ismail-dcode"
    },
    {
      id: "blog-2",
      title: "Dockerizing a React & Node.js Application with Docker Compose",
      category: "DevOps",
      date: "2026",
      readTime: "7 min read",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      snippet: "How to package your web apps into Docker containers for seamless local development and cloud hosting environments.",
      url: "https://github.com/Ismail-dcode"
    },
    {
      id: "blog-3",
      title: "Automating Web Deployments with GitHub Actions: A Student's Journey",
      category: "CI/CD Automation",
      date: "2026",
      readTime: "6 min read",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      snippet: "Learn how to write simple GitHub Actions workflows to automatically lint, test, and deploy code on every git push.",
      url: "https://github.com/Ismail-dcode"
    }
  ],

  // FAQs
  faqs: [
    {
      question: "Are you available for remote jobs or internships?",
      answer: "Yes! I am actively looking for remote internships, part-time roles, and entry-level positions in Cloud Engineering, DevOps, and Full-Stack Web Development."
    },
    {
      question: "What is your primary area of technical focus?",
      answer: "I focus on AWS Cloud Architecture, Linux System Administration (RHEL/Ubuntu), Docker containerization, CI/CD pipeline automation (GitHub Actions), and web development (React/JS)."
    },
    {
      question: "What degree are you currently pursuing?",
      answer: "I am pursuing a Bachelor of Technology (B.Tech) degree in Computer Science & Engineering (expected graduation in 2027)."
    },
    {
      question: "What certifications or hands-on training do you have?",
      answer: "I have trained in Red Hat Certified System Administrator (RHCSA) concepts, AWS Cloud fundamentals, Git & GitHub, and web development."
    },
    {
      question: "Where are you based and can you work remote hours?",
      answer: "I am based in India and fully equipped for remote work with flexible scheduling to align with different global time zones."
    },
    {
      question: "How can I contact or hire you?",
      answer: "You can reach me via the contact form on this site, email me directly at ismailpromt2i@gmail.com, or connect on LinkedIn and GitHub (@Ismail-dcode)."
    }
  ],

  // Contact Info
  contactInfo: {
    email: "ismailpromt2i@gmail.com",
    phone: "+91 7719877580",
    location: "India (Available for Global Remote Roles)",
    availability: "Open for Internships & Remote Opportunities",
    socials: [
      { name: "GitHub", url: "https://github.com/Ismail-dcode", icon: "FaGithub" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ismail-shaikh-19798a335", icon: "FaLinkedin" },
      { name: "Twitter / X", url: "https://x.com/Ismail_dcode", icon: "FaXTwitter" },
      { name: "Website", url: "https://ismailshaikh.in", icon: "FaGlobe" }
    ]
  }
};
