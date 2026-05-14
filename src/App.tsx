/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Menu,
  Code2,
  Cpu,
  Smartphone,
  Terminal,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  ExternalLink,
  Star,
  GitFork,
  Award
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100 }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-surface/80 backdrop-blur-lg border-b border-white/5">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-20">
          <div className="text-2xl font-extrabold tracking-tighter text-white">NJAGIDEV</div>

          <div className="hidden items-center gap-10 md:flex">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-white ${item === 'About' ? 'border-b-2 border-white pb-1 text-white' : 'text-white/50'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:njagialex462@gmail.com" className="rounded-lg bg-accent px-6 py-2.5 text-sm font-extrabold text-surface transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,163,0.4)]">
              Hire Me
            </a>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="mx-auto max-w-7xl px-6 pt-24 lg:px-20 lg:pt-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <motion.span variants={itemVariants} className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Full Stack Developer
              </motion.span>
              <motion.h1 variants={itemVariants} className="mb-10 text-5xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-7xl lg:tracking-tighter">
                Software Engineer | <span className="font-editorial bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,163,0.3)]">Fullstack Builder</span> | Problem Solver
              </motion.h1>

              <div className="max-w-2xl space-y-8">
                <motion.p variants={itemVariants} className="font-serif text-xl leading-relaxed text-white/80 lg:text-2xl">
                  I am Alex Njagi, a versatile Full Stack Developer passionate about crafting end-to-end digital experiences. I specialize in both building intuitive user interfaces and architecting robust, scalable backend systems.
                </motion.p>
                <motion.p variants={itemVariants} className="text-base leading-relaxed text-white/60 lg:text-lg">
                  Proficient across the modern stack—including React, TypeScript, Node.js, and React Native—I leverage my BSc in Computer Science from Umma University to deliver efficient, production-ready applications across web and mobile platforms.
                </motion.p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="relative lg:col-span-5">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-high">
                <img
                  src="/alex-njagi.jpg"
                  alt="Alex Njagi"
                  className="h-full w-full object-cover grayscale contrast-[1.1] transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden bg-accent-dim p-8 lg:block">
                <div className="text-4xl font-bold text-white/90">BSc</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Computer Science — Umma University</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="mx-auto max-w-7xl px-6 py-section-gap lg:px-20">
          <div className="grid grid-cols-1 border-t border-white/5 pt-16 lg:grid-cols-3 lg:gap-20">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight">Expertise</h2>
              <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/50">
                A modern toolkit focused on building high-performance, scalable web and mobile applications.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  'TypeScript', 'React.js', 'Node.js', 'React Native', 'JavaScript',
                  'API Development', 'FastAPI', 'Prompt Engineering', 'Agile Methodologies',
                  'Object-Oriented Programming (OOP)', 'Problem Solving', 'Teamwork & Communication'
                ].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-surface-container/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:mt-0"
            >
              {[
                {
                  title: 'Front-End Development',
                  desc: 'Expertise in JavaScript, TypeScript, and React.js to build reactive, high-performance user interfaces and web apps.',
                  icon: Code2
                },
                {
                  title: 'Back-End & API Development',
                  desc: 'Building robust REST APIs and Back-End architectures with Node.js, FastAPI, and optimizing Database Design.',
                  icon: Cpu
                },
                {
                  title: 'Mobile & Full-Stack',
                  desc: 'Developing cross-platform mobile experiences with React Native, and full-stack solutions utilizing Agile Methodologies.',
                  icon: Smartphone
                },
                {
                  title: 'Engineering & Teamwork',
                  desc: 'Applying OOP principles, Prompt Engineering, and strong teamwork/communication to solve complex technical challenges.',
                  icon: Terminal
                }
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group rounded-xl border border-white/5 bg-white/5 p-10 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)]"
                >
                  <skill.icon className="mb-6 h-10 w-10 text-accent" />
                  <h3 className="mb-3 text-2xl font-bold tracking-tight">{skill.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-7xl px-6 py-section-gap lg:px-20">
          <div className="border-t border-white/5 pt-16">
            <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="mb-4 text-4xl font-bold tracking-tight">Projects</h2>
                <p className="max-w-lg text-sm leading-relaxed text-white/50">
                  A selection of open-source projects from my GitHub — ranging from full-stack web apps to mobile experiences.
                </p>
              </div>
              <a
                href="https://github.com/njagial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                View all on GitHub <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  name: 'Vibrend-Web-portal',
                  desc: 'A modern web portal built with React and TypeScript for managing digital content and user interactions.',
                  language: 'TypeScript',
                  langColor: '#3178c6',
                  stars: 1,
                  forks: 0,
                  url: 'https://github.com/njagial/Vibrend-Web-portal'
                },
                {
                  name: 'vibrend-native-app',
                  desc: 'Cross-platform mobile application built with React Native, delivering native performance for content management on the go.',
                  language: 'JavaScript',
                  langColor: '#f1e05a',
                  stars: 1,
                  forks: 0,
                  url: 'https://github.com/njagial/vibrend-native-app'
                },
                {
                  name: 'node-js-sockets-starter',
                  desc: 'A starter template for building real-time applications with Node.js and WebSockets for instant bidirectional communication.',
                  language: 'JavaScript',
                  langColor: '#f1e05a',
                  stars: 0,
                  forks: 0,
                  url: 'https://github.com/njagial/node-js-sockets-starter'
                },
                {
                  name: 'commonwealth-simulation',
                  desc: 'A job simulation project focused on web development skills, showcasing practical application of frontend technologies.',
                  language: 'HTML',
                  langColor: '#e34c26',
                  stars: 0,
                  forks: 0,
                  url: 'https://github.com/njagial/commonwealth-simulation'
                },
                {
                  name: 'Tourism-React-native-app',
                  desc: 'A tourism-focused React Native mobile app designed to help users discover and plan travel destinations.',
                  language: 'React Native',
                  langColor: '#61dafb',
                  stars: 0,
                  forks: 0,
                  url: 'https://github.com/njagial/Tourism-React-native-app'
                },
                {
                  name: 'njagi_portfolio',
                  desc: 'This very portfolio — a fullstack showcase built with React, TypeScript, Vite, and Tailwind CSS with smooth animations.',
                  language: 'TypeScript',
                  langColor: '#3178c6',
                  stars: 0,
                  forks: 0,
                  url: 'https://github.com/njagial/njagi_portfolio'
                }
              ].map((project, idx) => (
                <motion.a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group flex flex-col justify-between rounded-xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)]"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <Github className="h-5 w-5 text-white/40 transition-colors group-hover:text-white" />
                      <h3 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-white">
                        {project.name}
                      </h3>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-white/50">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="flex items-center gap-1.5 text-xs text-white/50">
                      <span
                        className="inline-block h-3 w-3 rounded-full"
                        style={{ backgroundColor: project.langColor }}
                      />
                      {project.language}
                    </span>
                    {project.stars > 0 && (
                      <span className="flex items-center gap-1 text-xs text-white/50">
                        <Star className="h-3.5 w-3.5" /> {project.stars}
                      </span>
                    )}
                    {project.forks > 0 && (
                      <span className="flex items-center gap-1 text-xs text-white/50">
                        <GitFork className="h-3.5 w-3.5" /> {project.forks}
                      </span>
                    )}
                    <ExternalLink className="ml-auto h-4 w-4 text-white/20 transition-colors group-hover:text-white" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-black py-section-gap">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <h2 className="mb-24 text-4xl font-bold tracking-tight text-white lg:text-5xl">Experience Timeline</h2>

            <div className="relative space-y-24 before:absolute before:left-3 before:top-0 before:h-full before:w-[1px] before:bg-surface-container/10 lg:before:left-1/2">
              {/* Freelance Full Stack Developer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col lg:flex-row lg:items-center"
              >
                <div className="hidden lg:block lg:w-1/2 lg:pr-12 lg:text-right">
                  <span className="text-xs font-bold tracking-widest text-white/30 uppercase">January 2024 — Present</span>
                </div>
                <div className="absolute left-3 z-10 -ml-1.5 h-3 w-3 rounded-full border-2 border-accent-dim bg-black lg:left-1/2" />
                <div className="pl-12 lg:w-1/2 lg:pl-16">
                  <span className="mb-2 block text-xs font-bold tracking-widest text-white/30 uppercase lg:hidden">January 2024 — Present</span>
                  <h3 className="mb-1 text-2xl font-bold text-white">Freelance Full Stack Developer</h3>
                  <span className="mb-3 block text-sm font-medium text-accent-dim">Self-Employed</span>
                  <p className="max-w-md text-sm leading-relaxed text-white/40">
                    Architecting and developing custom web and mobile applications for clients. Utilizing React.js, React Native, Node.js, and TypeScript to deliver high-performance, scalable, and user-centric solutions.
                  </p>
                </div>
              </motion.div>

              {/* IT Intern — Meru County Government */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col lg:flex-row-reverse lg:items-center"
              >
                <div className="hidden lg:block lg:w-1/2 lg:pl-12">
                  <span className="text-xs font-bold tracking-widest text-white/30 uppercase">October 2023 — December 2023</span>
                </div>
                <div className="absolute left-3 z-10 -ml-1.5 h-3 w-3 rounded-full border-2 border-white/20 bg-black lg:left-1/2" />
                <div className="pl-12 lg:w-1/2 lg:pr-16 lg:text-right">
                  <span className="mb-2 block text-xs font-bold tracking-widest text-white/30 uppercase lg:hidden">October 2023 — December 2023</span>
                  <h3 className="mb-1 text-2xl font-bold text-white">Information Technology Intern</h3>
                  <span className="mb-3 block text-sm font-medium text-accent-dim">Meru County Government</span>
                  <p className="ml-auto max-w-md text-sm leading-relaxed text-white/40">
                    Provided technical support and assisted in the maintenance of IT systems and infrastructure. Gained hands-on experience in communication, troubleshooting, and system administration within a government environment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-surface-container py-section-gap">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <h2 className="mb-16 text-4xl font-bold tracking-tight lg:text-5xl">Licenses & Certifications</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* AWS Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-2xl font-bold tracking-tight">AWS Educate Cloud 101 - Training Badge</h3>
                <span className="mb-6 font-medium text-white/60">Amazon Web Services (AWS)</span>
                <div className="mb-8 flex flex-col gap-1 text-sm text-white/40">
                  <span>Issued Oct 2025</span>
                </div>
              </motion.div>

              {/* Forage Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col rounded-xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-2xl font-bold tracking-tight">Software Engineering Job Simulation</h3>
                <span className="mb-6 font-medium text-white/60">Commonwealth Bank (Forage)</span>
                <div className="mb-8 flex flex-col gap-1 text-sm text-white/40">
                  <span>Issued Oct 2025</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-section-gap lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="mb-8 text-5xl font-extrabold tracking-tight">Ready to build something efficient?</h2>
            <p className="mb-12 font-serif text-xl text-white/50 lg:text-2xl">
              I am currently open to freelance opportunities and full-stack roles. If you have a complex problem that needs an elegant technical solution, let's connect.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a href="mailto:njagialex462@gmail.com" className="flex items-center gap-2 rounded-lg bg-accent px-10 py-5 text-sm font-extrabold text-surface transition-all hover:gap-4 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,163,0.3)]">
                Start Project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/alex-njagi-a39612255/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 bg-white/5 px-10 py-5 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10">
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:px-20">
          <div className="text-2xl font-extrabold tracking-tighter">NJAGIDEV</div>

          <div className="flex items-center gap-10">
            {[
              { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/alex-njagi-a39612255/' },
              { name: 'GitHub', icon: Github, url: 'https://github.com/njagial' },
              { name: 'Email', icon: Mail, url: 'mailto:njagialex462@gmail.com' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('mailto') ? undefined : '_blank'}
                rel={social.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-xs font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="text-sm text-white/40">
            © 2025 Alex Njagi. All rights reserved. Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
