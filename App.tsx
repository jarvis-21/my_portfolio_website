
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Navbar from './components/Navbar';
import PortfolioChat from './components/PortfolioChat';
import { PORTFOLIO_DATA } from './constants';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const App: React.FC = () => {
  // Use a string path directly to prevent module resolution errors for the PNG
  const profilePicPath = "./profile.png";

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">{PORTFOLIO_DATA.headline}</span>
          <h1 className="text-7xl md:text-[110px] font-bold tracking-tighter text-white leading-none mb-10">
            {PORTFOLIO_DATA.name.split(' ')[0]} <span className="text-slate-500">{PORTFOLIO_DATA.name.split(' ')[1]}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Architecting scalable data lakes and high-performance database systems on AWS.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <a href="#summary" className="group flex flex-col items-center gap-4 text-slate-500 hover:text-white transition-colors">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Biography</span>
              <div className="w-px h-16 bg-gradient-to-b from-indigo-500 to-transparent group-hover:h-24 transition-all duration-500" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Profile & About Section */}
      <section id="summary" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img 
                  src={profilePicPath} 
                  alt={PORTFOLIO_DATA.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  onError={(e) => {
                    // This fallback triggers if profile.png is not found at the root
                    (e.target as HTMLImageElement).src = "./profile.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full -z-10 animate-pulse" />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">Summary</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Engineering data solutions for <span className="text-slate-500">tomorrow's challenges.</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                {PORTFOLIO_DATA.summary}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 glass-card rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <div className="text-2xl font-bold text-white tracking-tighter">10min → 10s</div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">Latency Reduction</p>
                </div>
                <div className="p-6 glass-card rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <div className="text-2xl font-bold text-white tracking-tighter">30 Min</div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">Auto-Refresh Cycle</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-slate-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">Milestones</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Professional Experience.</h3>
          </div>

          <div className="space-y-20">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                className="relative pl-12 border-l border-slate-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-indigo-400 text-sm font-semibold tracking-wide">{exp.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full text-slate-500">
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex items-start text-slate-400 leading-relaxed text-sm group">
                      <span className="w-1.5 h-1.5 bg-indigo-500/30 rounded-full mt-2 mr-4 shrink-0 group-hover:bg-indigo-500 transition-colors" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">Stack</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Core Competencies.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PORTFOLIO_DATA.skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                className="p-8 glass-card rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h4 className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-6">{skill.category}</h4>
                <div className="space-y-3">
                  {skill.items.map((item, i) => (
                    <div key={i} className="text-slate-300 text-sm font-medium flex items-center">
                      <div className="w-1 h-1 bg-slate-700 rounded-full mr-3 group-hover:bg-indigo-500 transition-colors" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-white/70 font-bold uppercase tracking-widest text-xs mb-4">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter">Let's build something <span className="text-indigo-200">extraordinary.</span></h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                Email Me
              </a>
              <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1">
                LinkedIn
              </a>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 text-xs font-bold uppercase tracking-widest">
              <div>{PORTFOLIO_DATA.contact.location}</div>
              <div>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}</div>
              <div className="flex gap-6">
                <a href={PORTFOLIO_DATA.contact.github} className="hover:text-white transition-colors">Github</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PortfolioChat />
    </div>
  );
};

// Fix: Add default export to resolve "Module has no default export" error in index.tsx
export default App;
