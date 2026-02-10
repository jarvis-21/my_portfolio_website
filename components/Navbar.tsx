
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Summary', href: '#summary' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-slate-900 py-6' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          RA<span className="text-indigo-500">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 hover:text-white transition-all"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-white text-black text-[10px] uppercase tracking-widest font-black hover:bg-indigo-500 hover:text-white transition-all active:scale-95"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
