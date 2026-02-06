
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import PortfolioChat from './components/PortfolioChat';
import { PORTFOLIO_DATA } from './constants';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="summary" className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />

        <motion.div 
          className="max-w-7xl mx-auto flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-effect border border-slate-700">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Available for Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I build <span className="text-gradient">high-performance</span> digital experiences.
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
            {PORTFOLIO_DATA.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#experience" 
              className="px-8 py-3.5 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all flex items-center justify-center group"
            >
              View My Work
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-xl glass-effect text-white font-bold hover:bg-white/10 transition-all border border-slate-700"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900/50">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="flex flex-col mb-16 items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full" />
          </div>

          <div className="space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                className="relative pl-8 border-l-2 border-slate-800 group"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { delay: idx * 0.1 } }
                }}
              >
                {/* Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                    <p className="text-indigo-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-1 md:mt-0 text-right">
                    <span className="text-sm font-semibold text-slate-500 bg-slate-800 px-3 py-1 rounded-full uppercase">{exp.period}</span>
                    <p className="text-xs text-slate-500 mt-2">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400 text-sm leading-relaxed">
                      <svg className="w-5 h-5 text-indigo-500 shrink-0 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications & Skills Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-hidden">
        {/* Certifications */}
        <motion.div 
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="flex flex-col mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <div className="h-1 w-16 bg-indigo-500 rounded-full" />
          </div>
          
          <div className="space-y-6">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <motion.div 
                key={idx} 
                className="p-6 rounded-2xl glass-effect border border-slate-800 hover:border-indigo-500/50 transition-all flex items-center justify-between group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                    <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{cert.title}</h4>
                    <p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="flex flex-col mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Skills</h2>
            <div className="h-1 w-16 bg-indigo-500 rounded-full" />
          </div>

          <div className="space-y-10">
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-all cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <motion.div 
          className="max-w-7xl mx-auto rounded-[3rem] bg-indigo-600 p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 z-10">Let's build something <br/> extraordinary together.</h2>
          
          <p className="max-w-xl text-indigo-100 text-lg mb-12 z-10">
            I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 z-10">
            <a 
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center justify-center"
            >
              Email Me
            </a>
            <div className="flex space-x-4">
              <a 
                href={PORTFOLIO_DATA.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-white hover:bg-indigo-400 transition-colors border border-indigo-400"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href={PORTFOLIO_DATA.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-white hover:bg-indigo-400 transition-colors border border-indigo-400"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <p>Built with React & AI</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot Assistant */}
      <PortfolioChat />
    </div>
  );
};

export default App;
