
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import PortfolioChat from './components/PortfolioChat';
import { PORTFOLIO_DATA } from './constants';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const App: React.FC = () => {
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
          <span className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Database Engineer</span>
          <h1 className="text-7xl md:text-[120px] font-bold tracking-tighter text-white leading-none mb-10">
            Rohith <span className="text-slate-500">Alagiri</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            {PORTFOLIO_DATA.headline}
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <a href="#summary" className="group flex flex-col items-center gap-4 text-slate-500 hover:text-white transition-colors">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Discover</span>
              <div className="w-px h-16 bg-gradient-to-b from-indigo-500 to-transparent group-hover:h-24 transition-all duration-500" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Profile & About Section */}
      <section id="summary" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image Column */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                {/* User: Replace this src with your uploaded profile photo path */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Rohith Alagiri"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Abstract Background Element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Architecting high-performance <span className="text-slate-500">database systems.</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                {PORTFOLIO_DATA.summary}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 glass-card rounded-2xl">
                  <div className="text-3xl font-bold text-white tracking-tighter">10m → <span className="text-indigo-500">5m</span></div>
                  <div className="w-px h-8 bg-slate-800" />
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold leading-tight">Query Optimization <br/> Achievements</p>
                </div>
                <div className="flex items-center gap-6 p-6 glass-card rounded-2xl">
                  <div className="text-3xl font-bold text-white tracking-tighter">AWS</div>
                  <div className="w-px h-8 bg-slate-800" />
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold leading-tight">Certified Developer <br/> & Associate</p>
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
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">The Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Work Experience.</h3>
          </div>

          <div className="space-y-24">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                className="relative pl-12 border-l border-slate-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-indigo-500 rounded-full ring-4 ring-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                    <p className="text-indigo-400 text-sm font-semibold tracking-wide mt-1">{exp.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-500">
                    {exp.period}
                  </div>
                </div>

                <ul className="grid gap-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-indigo-500/50 rounded-full mt-2.5 mr-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">Expertise</h2>
            <h3 className="text-4xl font-bold text-white">Technical Skills.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                className="p-10 glass-card rounded-3xl border border-slate-800/50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h4 className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800 text-sm text-slate-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 border-t border-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-7xl md:text-[140px] font-bold text-white tracking-tighter mb-16 leading-none">
              Let's build <br/> <span className="text-slate-700">something.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-2xl font-light text-slate-400 hover:text-white transition-all underline underline-offset-8 decoration-indigo-500/30 hover:decoration-indigo-500">
                {PORTFOLIO_DATA.contact.email}
              </a>
              <div className="flex gap-10">
                <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-indigo-400 transition-colors">LinkedIn</a>
                <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-indigo-400 transition-colors">GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-900">
        <p className="text-[10px] uppercase tracking-[0.5em] text-slate-700 font-bold">
          © {new Date().getFullYear()} Rohith Alagiri Portfolio • Madras, India
        </p>
      </footer>

      <PortfolioChat />
    </div>
  );
};

export default App;
