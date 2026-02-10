
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import PortfolioChat from './components/PortfolioChat';
import { PORTFOLIO_DATA } from './constants';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-44 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
              Rohith <span className="text-indigo-500">Alagiri.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto">
              {PORTFOLIO_DATA.headline}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-px w-12 bg-slate-800 self-center" />
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Database Architect</span>
            <div className="h-px w-12 bg-slate-800 self-center" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="summary" className="py-24 px-6 border-y border-slate-900 bg-slate-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Column */}
            <motion.div 
              className="lg:col-span-5 relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] border border-slate-800 shadow-2xl">
                {/* Replace with actual path or external URL if hosted */}
                <img 
                  src="/profile.png" 
                  alt="Rohith Alagiri"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full -z-10 group-hover:bg-indigo-500/20 transition-all" />
            </motion.div>

            {/* Text Column */}
            <motion.div 
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-6">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Solving complex data challenges with <span className="text-slate-400">cloud-native solutions.</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {PORTFOLIO_DATA.summary}
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-900">
                <div>
                  <h4 className="text-white font-bold mb-1 text-2xl">10m → 5m</h4>
                  <p className="text-slate-500 text-sm uppercase tracking-wider">Query Optimization</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-2xl">AWS</h4>
                  <p className="text-slate-500 text-sm uppercase tracking-wider">Certified Associate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-2">Work History</h2>
            <h3 className="text-4xl font-bold text-white">The Journey.</h3>
          </motion.div>

          <div className="space-y-16">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                className="relative pl-12 border-l border-slate-800"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-slate-900 text-slate-400 text-xs font-bold border border-slate-800 uppercase tracking-widest">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400 leading-relaxed text-sm">
                      <span className="text-indigo-500 mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                className="p-8 glass-card rounded-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-6">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-2">Validated Expertise</h2>
              <h3 className="text-4xl font-bold text-white">Certifications.</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                className="p-6 glass-card rounded-xl hover:border-indigo-500/50 transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{cert.title}</h4>
                <p className="text-slate-500 text-xs uppercase tracking-tighter">{cert.issuer} • {cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 tracking-tighter">Let's talk.</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-xl font-medium text-slate-400 hover:text-white transition-colors border-b border-slate-800 pb-1">
                {PORTFOLIO_DATA.contact.email}
              </a>
              <div className="flex space-x-8">
                <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors font-bold uppercase tracking-widest text-xs">LinkedIn</a>
                <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors font-bold uppercase tracking-widest text-xs">GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-[10px] uppercase tracking-[0.4em]">
        © {new Date().getFullYear()} Rohith Alagiri Portfolio • Optimized for AWS & Database Systems
      </footer>

      <PortfolioChat />
    </div>
  );
};

export default App;
