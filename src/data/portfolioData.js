// Centralized Portfolio Data File
// Customized for Shaikh Ismail - Computer Science Student, Cloud & DevOps Enthusiast

export const portfolioData = {
  // Navigation Links
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "What I Do", href: "#whatido" },
    { name: "Skills", href: "#skills" },
    { name: "Freelance", href: "#freelance" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Deployments", href: "#deployments" },
    { name: "Experience", href: "#experience" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero Section Data
  hero: {
    image: "/assets/Profile-Pic.jpg",
    badge: "Open for Work — Full\u2011time · Part\u2011time · Remote · Contracts · Internships",
    titlePrefix: "Building & Automating",
    titleHighlight: "Cloud Architecture",
    titleSuffix: " & Cloud-Native Solutions",
    subtitle: "Computer Science & Engineering student (Expected 2027) specializing in AWS Cloud, Linux Systems, Docker, and CI/CD Automation — and a freelance developer who builds websites and apps, manages cloud infrastructure, and writes and edits the content that goes with them.",
    cta: {
      primary: { text: "View Projects", href: "#projects" },
      secondary: { text: "Get In Touch", href: "#contact" },
      tertiary: { text: "Download Resume", href: "/assets/Ismail_Shaikh_R.pdf" }
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

  // Ways I am available to work
  availability: [
    {
      id: "full-time",
      label: "Full-time",
      detail: "Ready to join a team and grow in a Cloud, DevOps, web, or app engineering role."
    },
    {
      id: "part-time",
      label: "Part-time",
      detail: "A reliable weekly commitment alongside my degree."
    },
    {
      id: "remote",
      label: "Remote",
      detail: "Set up for remote work and comfortable across global time zones."
    },
    {
      id: "contract",
      label: "Contracts",
      detail: "Fixed-scope or ongoing contracts with clear deliverables."
    },
    {
      id: "internship",
      label: "Internships",
      detail: "Actively looking for internships in Cloud, DevOps, web, and app development."
    }
  ],

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

  // Cloud & DevOps Services
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

  // Freelance Web Services
  freelance: {
    eyebrow: "Freelance Services",
    title: "Websites, apps, and cloud.",
    intro: "I design, develop, launch, and maintain websites and apps for small businesses, creators, and independent sellers — and I manage the cloud infrastructure behind them. I also write and edit the content that goes with them. One person from the first sketch to the live product, the launch post, and the monitoring dashboard.",
    status: "Currently accepting new web, app, and cloud projects",
    note: "Fixed quote before work starts · Your domain, cloud account, and billing stay in your name · Handover walkthrough and runbook included",
    services: [
      {
        id: "fl-build",
        icon: "FaLaptopCode",
        title: "Website Building",
        description: "New websites built from scratch around your business — landing pages, portfolios, service sites, and product showcases.",
        features: ["Landing pages & personal sites", "Business & service websites", "Product catalogue builds"]
      },
      {
        id: "fl-app",
        icon: "FaMobileAlt",
        title: "App Development",
        description: "React web apps, dashboards, internal tools, and PWAs — with authentication, APIs, and a database when the project needs one.",
        features: ["Dashboards & internal tools", "React apps & PWAs", "Auth, APIs & databases"]
      },
      {
        id: "fl-development",
        icon: "FaCode",
        title: "Web Development",
        description: "Clean, responsive front-end development with React, JavaScript, HTML, and CSS — plus Node.js backends when the project needs one.",
        features: ["React & JavaScript front ends", "Responsive, mobile-first layouts", "APIs and form integrations"]
      },
      {
        id: "fl-design",
        icon: "FaPalette",
        title: "Website Designing",
        description: "Readable interfaces with a consistent visual identity, custom brand colours, and layouts that make your content easy to scan.",
        features: ["UI layout & visual design", "Brand colours and typography", "Mobile and desktop design"]
      },
      {
        id: "fl-cloud",
        icon: "FaCloud",
        title: "Cloud Setup & Migration",
        description: "AWS accounts, Linux servers, Docker, networking, and SSL — configured from scratch or migrated from an aging host.",
        features: ["AWS & Linux setup", "Docker & networking", "Hosting migrations"]
      },
      {
        id: "fl-monitoring",
        icon: "FaChartLine",
        title: "Cloud Management & Monitoring",
        description: "Uptime checks, logs, metrics, alerts, backups, patching, and cost reviews — so production stays healthy after launch.",
        features: ["Uptime, logs & alerts", "Backups & patching", "Cost and security reviews"]
      },
      {
        id: "fl-deployment",
        icon: "FaRocket",
        title: "Deployment & Production",
        description: "Shipping to production on Vercel, Netlify, AWS, or a Linux server — with build settings, environment variables, and CI/CD where useful.",
        features: ["Vercel, Netlify & AWS deploys", "Environment & build configuration", "Production readiness checks"]
      },
      {
        id: "fl-cicd",
        icon: "FaCogs",
        title: "CI/CD & Automation",
        description: "Build, test, and release pipelines with GitHub Actions, Docker, and repeatable deploy scripts — so every push follows the same path.",
        features: ["GitHub Actions pipelines", "Docker builds & releases", "Automated deploy checks"]
      },
      {
        id: "fl-domain",
        icon: "FaGlobe",
        title: "Domain & DNS Setup",
        description: "Domain registration guidance, DNS records, custom email routing, and SSL — configured so your site loads on your own name.",
        features: ["Domain registration guidance", "DNS records & subdomains", "SSL and HTTPS setup"]
      },
      {
        id: "fl-maintenance",
        icon: "FaTools",
        title: "Maintenance & Support",
        description: "Keeping the site and cloud setup healthy after launch — content updates, dependency upgrades, backups, monitoring, and fixes when something breaks.",
        features: ["Updates & dependency patches", "Backups and uptime checks", "Ongoing fixes and support"]
      },
      {
        id: "fl-content",
        icon: "FaPenNib",
        title: "Content Writing",
        description: "Website copy, blog posts, product descriptions, scripts, and social captions — written to match the brand and the audience.",
        features: ["Website & landing page copy", "Blog posts and articles", "Product descriptions & scripts"]
      },
      {
        id: "fl-video",
        icon: "FaVideo",
        title: "Video Editing",
        description: "Short-form and long-form edits for reels, shorts, YouTube, and product promos — cuts, captions, pacing, and clean exports.",
        features: ["Reels, shorts & YouTube edits", "Captions, titles & pacing", "Product and promo videos"]
      }
    ],
    editingTools: [
      {
        name: "Adobe Premiere Pro",
        use: "Long-form edits, cuts, transitions, audio cleanup, and colour."
      },
      {
        name: "CapCut",
        use: "Short-form social edits, captions, effects, and quick turnarounds."
      },
      {
        name: "VN Video Editor",
        use: "Fast mobile edits, reels, and everyday cut-downs."
      },
      {
        name: "Adobe Express",
        use: "Thumbnails, social graphics, and simple brand assets."
      }
    ],
    engagements: [
      {
        title: "Landing Page",
        description: "A focused single page for a person, service, or launch — clear message, strong call to action, fast load.",
        bestFor: "Portfolios, campaigns, personal brands"
      },
      {
        title: "Business Website",
        description: "A multi-page site with services, about, contact, and a clear path for customers to reach you.",
        bestFor: "Local businesses, studios, consultants"
      },
      {
        title: "Product Showcase",
        description: "A catalogue-style site with categories, product detail pages, and direct WhatsApp, call, and email ordering.",
        bestFor: "Direct sellers and small catalogues"
      },
      {
        title: "Web App",
        description: "A React and Node build with authentication, a database, and a real workflow behind it.",
        bestFor: "Internal tools and small products"
      },
      {
        title: "Cloud Setup",
        description: "AWS accounts, Linux servers, Docker, networking, SSL, and a deployment path configured from scratch or migrated.",
        bestFor: "New products and hosting moves"
      },
      {
        title: "Cloud Care",
        description: "Monitoring, alerts, backups, patching, cost checks, and incident response on a fixed monthly scope.",
        bestFor: "Live products that need a reliable operator"
      },
      {
        title: "Cloud Audit",
        description: "A review of your AWS or Linux setup for cost, security, backups, and monitoring gaps — with a prioritised fix list.",
        bestFor: "Teams inheriting a cloud account"
      },
      {
        title: "Content & Video",
        description: "Copywriting and short-form video editing for launches, social channels, and product promos.",
        bestFor: "Brands, creators, and product launches"
      },
      {
        title: "Monthly Retainer",
        description: "Ongoing website updates, new content, and regular edits on a fixed monthly scope.",
        bestFor: "Businesses that need steady help"
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description: "A short call to understand the business, the users, and whether this is a website, an app, or a cloud problem."
      },
      {
        step: "02",
        title: "Scope & Quote",
        description: "A written scope, timeline, and fixed quote before any work starts."
      },
      {
        step: "03",
        title: "Architect & Design",
        description: "Wireframes and a simple architecture — pages, data, cloud services, and the path to production."
      },
      {
        step: "04",
        title: "Build & Configure",
        description: "Responsive development, APIs, cloud resources, content placement, and third-party integrations."
      },
      {
        step: "05",
        title: "Launch & Monitor",
        description: "Domain, DNS, SSL, deployment checks, uptime alerts, and monitoring before handover."
      },
      {
        step: "06",
        title: "Maintain & Improve",
        description: "Ongoing updates, backups, patching, monitoring, and support after handover."
      }
    ],
    faqs: [
      {
        question: "What kinds of freelance projects do you take on?",
        answer: "New websites and web apps, redesigns, cloud setup and migrations, deployment and hosting clean-up, monitoring and ongoing management, domain and DNS setup, CI/CD automation, content writing, and video editing. If it lives on the web or in the cloud, ask."
      },
      {
        question: "Do you also write content and edit video?",
        answer: "Yes. I write website copy, blog posts, product descriptions, scripts, and social captions, and I edit short-form and long-form video in Adobe Premiere Pro, CapCut, VN, and Adobe Express. Content and video can be part of a website project or booked on their own."
      },
      {
        question: "Do you build apps as well as websites?",
        answer: "Yes. I build React web apps, dashboards, internal tools, and PWAs with authentication, APIs, and databases. If you need a small product or an internal tool rather than a marketing site, that is a normal project for me."
      },
      {
        question: "Do you manage cloud infrastructure after launch?",
        answer: "Yes. I set up and look after AWS and Linux environments — uptime checks, logs, metrics, alerts, backups, patching, SSL, and cost reviews. This can be a one-off setup, an audit, or an ongoing monthly arrangement."
      },
      {
        question: "Can you work on an existing website or cloud account?",
        answer: "Yes. I can redesign an outdated site, fix mobile or performance issues, move a site to a new host, take over maintenance, or clean up an existing AWS or Linux setup without rebuilding everything."
      },
      {
        question: "Do you register the domain and set up hosting?",
        answer: "Yes. I guide the domain registration, configure DNS and SSL, and deploy to Vercel, Netlify, AWS, or a Linux server. The domain, cloud account, and billing stay in your name."
      },
      {
        question: "How long does a project take?",
        answer: "A landing page is usually a few days. A multi-page site, product catalogue, or small app typically takes one to three weeks. Cloud setup and monitoring depend on the existing environment; you get a timeline with the quote."
      },
      {
        question: "How do payments work?",
        answer: "Projects start with a deposit, and the balance is due at handover. The scope, timeline, and amount are agreed in writing before work begins."
      },
      {
        question: "What happens after launch?",
        answer: "You get a handover walkthrough and all account access. Optional monthly maintenance covers content updates, backups, monitoring, and fixes."
      }
    ]
  },

  // Client testimonials
  // Drafted from the real project details — replace the quote with the client's exact words before publishing.
  testimonials: [
    {
      id: "test-asclepius",
      // Draft only — replace `quote` and `shortQuote` with Sardar Shaikh's exact words before publishing.
      quote: "Ismail understood what my business needed before I could explain it properly. He built the whole site, put it live, and made sure every product leads straight to my WhatsApp and phone. It looks professional, works on every phone, and I can update the products myself.",
      shortQuote: "He built the whole site, put it live, and made sure every product leads straight to my WhatsApp and phone.",
      author: "Sardar Shaikh",
      role: "Authorised Asclepius Wellness Distributor",
      company: "Asclepius Wellness Pvt. Ltd.",
      location: "Udgir, Latur, India",
      project: "Asclepius Wellness — Direct Seller Website",
      projectUrl: "https://asclepiusclient.vercel.app",
      projectImage: "/assets/asclepius.png",
      projectSummary: "A 9-page, 4-language product showcase with 50 products, direct WhatsApp, call, and email ordering, and an admin dashboard for products, banners, categories, and gallery content.",
      metrics: [
        { value: "9", label: "Pages" },
        { value: "50", label: "Products" },
        { value: "4", label: "Languages" },
        { value: "1", label: "Admin dashboard" }
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "Supabase", "Multi-language", "Vercel"]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "proj-asclepius",
      title: "Asclepius Wellness — Direct Seller Website",
      category: "Client Work · Freelance",
      description: "A multi-language product showcase built for an authorised Asclepius Wellness distributor — 50 products, category filters, and direct WhatsApp, call, and email ordering, backed by an admin dashboard for products, banners, and gallery content.",
      image: "/assets/asclepius.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Supabase", "Multi-language", "Vercel"],
      liveUrl: "https://asclepiusclient.vercel.app",
      githubUrl: "https://github.com/Ismail-dcode/Asclepius-Wellness-Pvt-Client",
      details: {
        problem: "The client sold Asclepius Wellness products directly but had no professional place to send customers — only scattered catalogue PDFs and chat messages.",
        solution: "Built a 9-page static website in English, Hindi, Marathi, and Urdu with 50 products, category filtering, a brand re-theme, and every order routed to the seller's WhatsApp, phone, or email. Added a Supabase-backed admin dashboard for products, banners, categories, and gallery content.",
        keyResults: ["50 products catalogued with direct ordering", "4 languages including right-to-left Urdu", "Client-managed content through an admin dashboard"]
      }
    },
    {
      id: "proj-memory-dairy",
      title: "Memory Diary — Cloud-Native Photo Diary App",
      category: "Full-Stack Cloud & DevOps",
      description: "A private digital photo diary for capturing and managing personal memories with photos, thoughts, places, and dates. React frontend, Node.js/Express backend, Amazon DynamoDB for data, and Amazon S3 for photo storage, containerized with Docker and deployed on Render.",
      image: "/assets/Memory-dairy-app.jpeg",
      tags: ["React", "Node.js", "Express", "Amazon DynamoDB", "Amazon S3", "Docker", "GitHub Actions", "Render"],
      liveUrl: "https://memory-diary.ismailshaikh.in/",
      githubUrl: "https://github.com/Ismail-dcode/Cloud-Memory-app",
      details: {
        problem: "Personal memories and photos need a private, reliable, and easily accessible cloud-based diary instead of scattered local storage.",
        solution: "Built a full-stack app with React, Node.js/Express, JWT auth, bcrypt, DynamoDB metadata storage, S3 presigned photo URLs, Dockerized deployment, and a GitHub Actions CI/CD pipeline pushing to Docker Hub and Render.",
        keyResults: ["Secure JWT-based authentication", "Private S3 photo storage with presigned URLs", "Automated Docker build, push & Render deploy pipeline"]
      }
    },
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
      title: "CRUD-App — Production AWS Deployment Project",
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
      githubUrl: "https://github.com/Ismail-dcode/AWS-S3-CloudFront-Project",
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
      id: "dep-asclepius",
      name: "Asclepius Wellness Client Website",
      type: "Static + Supabase",
      hosting: "Vercel",
      status: "Live",
      uptime: "Live",
      region: "Global Edge",
      latency: "—",
      url: "https://asclepiusclient.vercel.app"
    },
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
        { name: "CloudWatch & Monitoring", level: "Intermediate" },
        { name: "Backups & Recovery", level: "Intermediate" },
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
    },
    {
      category: "Content & Writing",
      items: [
        { name: "Content Writing", level: "Intermediate" },
        { name: "Scripts & Captions", level: "Intermediate" },
        { name: "Blog Posts & Articles", level: "Intermediate" },
        { name: "Product Descriptions", level: "Intermediate" }
      ]
    },
    {
      category: "Video & Graphics",
      items: [
        { name: "Adobe Premiere Pro", level: "Intermediate" },
        { name: "CapCut", level: "Intermediate" },
        { name: "VN Video Editor", level: "Intermediate" },
        { name: "Adobe Express", level: "Intermediate" }
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
      period: "Nov 2026 — Present",
      title: "Freelance Developer",
      company: "Asclepius Wellness · Client: Sardar Shaikh",
      type: "Freelance · Remote",
      duration: "Ongoing",
      description: "Designed, built, and shipped a multi-language product website for an authorised Asclepius Wellness distributor — from content and design through deployment and handover.",
      highlights: [
        "Built a 9-page, 4-language product showcase with 50 products, category filters, and direct WhatsApp, call, and email ordering.",
        "Re-themed the site to the client's brand and rebuilt content and product imagery from the official company catalogue.",
        "Deployed on Vercel and added a Supabase-backed admin dashboard for products, banners, categories, and gallery content."
      ],
      skills: ["Freelance Delivery", "Web Design", "Content Writing", "HTML/CSS", "JavaScript", "Supabase", "Vercel"]
    },
    {
      period: "Jul 2026 — Oct 2026",
      title: "Technical Support Engineer",
      company: "Global IT Providers",
      type: "Internship · Remote",
      duration: "4 mos",
      description: "Providing technical support and troubleshooting in a cloud-native remote environment while gaining hands-on enterprise IT experience.",
      highlights: [
        "Provide technical support and troubleshoot Linux, system, networking, and application-related issues in a remote environment.",
        "Apply cloud-native architecture and infrastructure concepts to understand, diagnose, and resolve technical issues.",
        "Work with system administration, troubleshooting, and infrastructure technologies while gaining practical experience in enterprise IT environments."
      ],
      skills: ["Technical Support", "Cloud-Native Architecture", "Linux Administration", "Networking"]
    },
    {
      period: "2023 — 2027 (Expected)",
      title: "B.Tech in Computer Science & Engineering",
      company: "Degree Student",
      type: "Education",
      duration: "4 years",
      description: "Pursuing B.Tech degree in Computer Science & Engineering with a focus on Cloud Computing, Operating Systems, Computer Networks, Software Engineering, and Database Management.",
      highlights: ["Specializing in Cloud Architecture & DevOps", "Hands-on projects with AWS, Linux, and Docker", "Open to full-time, part-time, remote, contract, and internship roles"],
      skills: ["Cloud Computing", "Operating Systems", "Computer Networks", "Software Engineering"]
    },
    {
      period: "2024 — Present",
      title: "Cloud & DevOps Learner & Developer",
      company: "Personal Projects & Independent Practice",
      type: "Self-Directed",
      duration: "2+ years",
      description: "Building cloud architectures, containerized web applications, automated CI/CD pipelines, and practicing Linux system administration labs.",
      highlights: ["RHCSA (Red Hat Certified System Administrator) training", "Automated deployment pipelines with GitHub Actions", "Maintains active GitHub repositories and open projects"],
      skills: ["AWS", "Docker", "GitHub Actions", "Linux"]
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
      { label: "Availability", value: "Open for Work" }
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
      question: "What kind of work are you available for?",
      answer: "I am open to full-time roles, part-time roles, remote work, contracts, and internships. I am also available for freelance web, app, cloud, content, and video projects — building, development, design, domain and DNS setup, deployment, monitoring, cloud management, maintenance, content writing, and video editing."
    },
    {
      question: "Do you take freelance web, app, cloud, content, or video projects?",
      answer: "Yes. I build websites and React apps, set up and manage AWS or Linux environments, handle domain and DNS, deployment, monitoring, and maintenance, and take on content writing and video editing. You get a fixed quote before work starts, and your domain, cloud account, and billing stay in your name."
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
      answer: "I hold RHCSA and AWS Solutions Architect Associate (SAA-C03) certifications, and I am currently working through Red Hat OpenShift (DO180)."
    },
    {
      question: "Where are you based and can you work remote hours?",
      answer: "I am based in India and fully equipped for remote work, with flexible scheduling to align with different global time zones."
    },
    {
      question: "How can I contact or hire you?",
      answer: "You can reach me via the contact form on this site, email me directly at ismail2i.shaik@gmail.com, or connect on LinkedIn and GitHub (@Ismail-dcode). For freelance work, tell me what you need and I will reply with a scope and quote."
    }
  ],

  // Contact Info
  contactInfo: {
    email: "ismail2i.shaik@gmail.com",
    phone: "+91 7719877580",
    location: "India (Available for Global Remote Roles)",
    availability: "Open for full-time, part-time, remote, contract, and internship roles · Available for freelance web, app, cloud, content, and video projects",
    socials: [
      { name: "GitHub", url: "https://github.com/Ismail-dcode", icon: "FaGithub" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ismail-shaikh-19798a335", icon: "FaLinkedin" },
      { name: "Twitter / X", url: "https://x.com/Ismail_dcode", icon: "FaXTwitter" },
      { name: "Website", url: "https://ismailshaikh.in", icon: "FaGlobe" }
    ]
  }
};
