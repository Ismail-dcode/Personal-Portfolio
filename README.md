# 🚀 Personal Portfolio Website 🌐 [View](https://ismailshaikh.in)

A dark, editorial portfolio for **Ismail Shaikh** — Cloud & DevOps developer and freelance developer. Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, and deployed on **Vercel**.

---

## 🌟 What the site includes

- ✅ **Work** — hero with availability, selected projects, toolkit, and a freelance teaser
- ✅ **Profile** — about, availability badges, career timeline, credentials, and skills
- ✅ **Freelance** — websites, apps, cloud, content, and video services, engagement types, process, client testimonial, and FAQs
- ✅ **Contact** — inquiry type selector covering web, app, cloud, content, and video, direct email, social links, and EmailJS form
- ✅ **Availability** — full-time, part-time, remote, contract, and internship roles
- ✅ **Freelance services** — website and app building, web development, design, cloud setup, monitoring & management, CI/CD, domain & DNS, deployment, maintenance, content writing, and video editing
- ✅ **Content & video tools** — Adobe Premiere Pro, CapCut, VN Video Editor, and Adobe Express
- ✅ **Client work** — Asclepius Wellness direct-seller website with testimonial and live link
- ✅ **Responsive design** — tested down to 320px
- ✅ **Dockerized setup** for container deployment

---

## 🧰 Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Animation | Framer Motion |
| Icons | React Icons |
| Email | EmailJS |
| Deployment | [Vercel](https://vercel.com/) |
| Container | Docker |
| Version Control | Git, GitHub |

---

## 🚀 Live Site

🌐 [ismailshaikh.in](https://ismailshaikh.in)

---

## 📦 Local Development

```bash
# Clone the repository
git clone https://github.com/Ismail-dcode/Personal-Portfolio.git

# Navigate into the folder
cd Personal-Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev

# Production build
npm run build
```

### Environment variables

The contact form uses EmailJS. Add the following to `.env` (see `.env.example`):

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📝 Content

All written content — projects, services, availability, testimonials, experience, skills, and FAQs — lives in:

```
src/data/portfolioData.js
```

Update it there and every section stays in sync.

---

## 🗂️ Project Structure

```
Personal-Portfolio/
├── api/                     # Optional Node server entry
├── public/assets/           # Images, badges, resume, project previews
├── src/
│   ├── components/          # Header, Footer, Intro, Logo, SmoothScroll
│   ├── data/                # portfolioData.js and animation variants
│   ├── pages/               # Work, Profile, Freelance, Contact
│   ├── services/            # EmailJS integration
│   ├── App.jsx              # Hash-based tab routing
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── README.md
```
