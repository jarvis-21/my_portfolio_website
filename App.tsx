
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
          <span className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">AWS Certified Data Engineer</span>
          <h1 className="text-7xl md:text-[110px] font-bold tracking-tighter text-white leading-none mb-10">
            Rohith <span className="text-slate-500">Alagiri.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Specializing in high-performance data lakes, automated ETL pipelines, and cloud-native database optimization.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <a href="#summary" className="group flex flex-col items-center gap-4 text-slate-500 hover:text-white transition-colors">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll to Explore</span>
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
              <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                {/* 
                  NOTE TO USER: 
                  Place your photo in the root directory and name it 'profile.jpg'.
                  I've used a premium placeholder that matches the aesthetic for now.
                */}
                <img 
                  src="profile.png" 
                  alt="Rohith Alagiri"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-full -z-10" />
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">The Professional</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Data engineering with <span className="text-slate-500">precision and scalability.</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                {PORTFOLIO_DATA.summary}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 glass-card rounded-2xl">
                  <div className="text-2xl font-bold text-white tracking-tighter">10m → 10s</div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">Query Performance</p>
                </div>
                <div className="p-6 glass-card rounded-2xl">
                  <div className="text-2xl font-bold text-white tracking-tighter">AWS Associate</div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">Certified Expertise</p>
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
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">Professional History</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Enterprise Experience.</h3>
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

                <div className="grid gap-6">
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

      {/* Awards Section - New based on Resume */}
      <section id="awards" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 glass-card rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
               <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
               </svg>
            </div>
            <div className="relative z-10">
              <span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Recognition</span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">On the Spot Award</h3>
              <p className="text-indigo-400 font-bold mb-6 tracking-wide">Tata Consultancy Services (TCS)</p>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                Awarded for Automating materialized view refresh with a CRON job every 30 minutes, enhancing data accuracy and system performance significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">Core Stack</h2>
            <h3 className="text-4xl font-bold text-white">Technical Proficiency.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                className="p-8 glass-card rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h4 className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-950/50 border border-slate-800 text-[11px] text-slate-400 font-medium">
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
      <section className="py-32 px-6 bg-slate-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">Credentials</h2>
            <h3 className="text-3xl font-bold text-white">Verified Certifications.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="p-8 glass-card rounded-2xl hover:bg-slate-900/40 transition-colors cursor-default">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{cert.title}</h4>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">{cert.issuer} • {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-7xl md:text-[120px] font-bold text-white tracking-tighter mb-16 leading-none">
              Get in <br/> <span className="text-slate-700">touch.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-2xl font-light text-slate-300 hover:text-indigo-400 transition-all underline underline-offset-8 decoration-indigo-500/20">
                {PORTFOLIO_DATA.contact.email}
              </a>
              <div className="flex gap-10">
                <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">LinkedIn</a>
                <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-900/50">
        <p className="text-[10px] uppercase tracking-[0.5em] text-slate-800 font-bold">
          {PORTFOLIO_DATA.name} • {PORTFOLIO_DATA.headline} • Chennai
        </p>
      </footer>

      <PortfolioChat />
    </div>
  );
};

export default App;
