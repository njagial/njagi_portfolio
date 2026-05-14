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
  Dribbble, 
  Instagram,
  ArrowRight
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
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-20">
          <div className="text-2xl font-extrabold tracking-tighter text-black">STUDIO</div>
          
          <div className="hidden items-center gap-10 md:flex">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-black ${item === 'About' ? 'border-b-2 border-black pb-1 text-black' : 'text-black/50'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Hire Me
            </button>
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
              <motion.span variants={itemVariants} className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                The Story Behind the Craft
              </motion.span>
              <motion.h1 variants={itemVariants} className="mb-10 text-5xl font-extrabold leading-[1.1] tracking-tight text-black lg:text-7xl lg:tracking-tighter">
                Full Stack Developer | <span className="font-editorial text-black/80">Tech Enthusiast</span> | Lifelong Learner
              </motion.h1>
              
              <div className="max-w-2xl space-y-8">
                <motion.p variants={itemVariants} className="font-serif text-xl leading-relaxed text-black/80 lg:text-2xl">
                  I am Alex Njagi, a passionate full stack developer with experience in building web applications using modern technologies. I love solving complex problems and creating efficient solutions.
                </motion.p>
                <motion.p variants={itemVariants} className="text-base leading-relaxed text-black/60 lg:text-lg">
                  I believe that great software is built at the intersection of performance and usability. Based in my digital workspace, I collaborate with teams and individuals to turn complex requirements into elegant, scalable web realities using a diverse modern stack.
                </motion.p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="relative lg:col-span-5">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-high">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV4ffplsI78OvwMk-IpmEp0Ga7YvPDFAKPgFy0EymxCQwdeP3YY6HhFRiBg-KEbMnzMA0PV2pZzsxvhRCk7s0UsakScYJngpwB77qLUPhslLhO1geuP9cwLTiO16nuEDlUrteqajP4FdirOmKOyLo5XUdKUpV1AH0w92qc_MdewJUwV1F6tvu6jwGPYoS-wSRRekFp9aa78phIkfIr3DLhmxdIepu1ph6SopxQDeCXxwxfiEP0wVcUKalmp5VpSNjJzHFam754_AU" 
                  alt="Alex Njagi" 
                  className="h-full w-full object-cover grayscale contrast-[1.1] transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden bg-accent-dim p-8 lg:block">
                <div className="text-4xl font-bold text-black/90">2+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/60">Years of Development</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section id="projects" className="mx-auto max-w-7xl px-6 py-section-gap lg:px-20">
          <div className="grid grid-cols-1 border-t border-black/5 pt-16 lg:grid-cols-3 lg:gap-20">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight">Expertise</h2>
              <p className="max-w-xs text-sm leading-relaxed text-black/50">
                A modern toolkit focused on building high-performance, scalable web and mobile applications.
              </p>
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
                  title: 'Frontend Mastery', 
                  desc: 'Expertise in JavaScript, TypeScript, React, and Vue.js to build reactive, high-performance user interfaces.',
                  icon: Code2
                },
                { 
                  title: 'Backend & DB', 
                  desc: 'Building robust APIs with Node.js, Express.js, and managing scalable data with MongoDB and RESTful principles.',
                  icon: Cpu
                },
                { 
                  title: 'Mobile Solutions', 
                  desc: 'Developing cross-platform mobile experiences with React Native, ensuring native performance and feel.',
                  icon: Smartphone
                },
                { 
                  title: 'DevOps & Tools', 
                  desc: 'Streamlining workflows with Git, GitHub, and modern styling frameworks like Tailwind CSS.',
                  icon: Terminal
                }
              ].map((skill, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="group rounded-xl border border-black/5 bg-white p-10 transition-all hover:border-black hover:shadow-2xl hover:shadow-black/5"
                >
                  <skill.icon className="mb-6 h-10 w-10 text-accent" />
                  <h3 className="mb-3 text-2xl font-bold tracking-tight">{skill.title}</h3>
                  <p className="text-sm leading-relaxed text-black/50">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-black py-section-gap">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <h2 className="mb-24 text-4xl font-bold tracking-tight text-white lg:text-5xl">Experience Timeline</h2>
            
            <div className="relative space-y-24 before:absolute before:left-3 before:top-0 before:h-full before:w-[1px] before:bg-white/10 lg:before:left-1/2">
              {/* Freelance */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col lg:flex-row lg:items-center"
              >
                <div className="hidden lg:block lg:w-1/2 lg:pr-12 lg:text-right">
                  <span className="text-xs font-bold tracking-widest text-white/30 uppercase">January 2022 — Present</span>
                </div>
                <div className="absolute left-3 z-10 -ml-1.5 h-3 w-3 rounded-full border-2 border-accent-dim bg-black lg:left-1/2" />
                <div className="pl-12 lg:w-1/2 lg:pl-16">
                  <span className="mb-2 block text-xs font-bold tracking-widest text-white/30 uppercase lg:hidden">January 2022 — Present</span>
                  <h3 className="mb-3 text-2xl font-bold text-white">Freelance Web Developer</h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/40">
                    Self-employed. Built custom websites for small businesses and individuals using HTML, CSS, and JavaScript. Provided ongoing maintenance and ensured SEO optimization.
                  </p>
                </div>
              </motion.div>

              {/* Intern */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col lg:flex-row-reverse lg:items-center"
              >
                <div className="hidden lg:block lg:w-1/2 lg:pl-12">
                  <span className="text-xs font-bold tracking-widest text-white/30 uppercase">June 2023 — August 2023</span>
                </div>
                <div className="absolute left-3 z-10 -ml-1.5 h-3 w-3 rounded-full border-2 border-white/20 bg-black lg:left-1/2" />
                <div className="pl-12 lg:w-1/2 lg:pr-16 lg:text-right">
                  <span className="mb-2 block text-xs font-bold tracking-widest text-white/30 uppercase lg:hidden">June 2023 — August 2023</span>
                  <h3 className="mb-3 text-2xl font-bold text-white">Software Developer Intern</h3>
                  <p className="ml-auto max-w-md text-sm leading-relaxed text-white/40">
                    Tech Solutions Ltd. Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to define and deliver project requirements.
                  </p>
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
            <p className="mb-12 font-serif text-xl text-black/50 lg:text-2xl">
              I am currently open to freelance opportunities and full-stack roles. If you have a complex problem that needs an elegant technical solution, let's connect.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="flex items-center gap-2 rounded-lg bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:gap-4 hover:bg-black/90">
                Start Project <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-lg border border-black px-10 py-5 text-sm font-bold text-black transition-all hover:bg-black/5">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:px-20">
          <div className="text-2xl font-extrabold tracking-tighter">STUDIO</div>
          
          <div className="flex items-center gap-10">
            {[
              { name: 'LinkedIn', icon: Linkedin },
              { name: 'GitHub', icon: Github },
              { name: 'Dribbble', icon: Dribbble },
              { name: 'Instagram', icon: Instagram }
            ].map((social) => (
              <a 
                key={social.name} 
                href="#" 
                className="text-xs font-bold uppercase tracking-widest text-black/40 transition-colors hover:text-black"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="text-sm text-black/40">
            © 2024 Alex Njagi. All rights reserved. Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
