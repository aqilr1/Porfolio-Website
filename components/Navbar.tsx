
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0a0a0a]/95 backdrop-blur-lg border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold tracking-tighter text-white group z-50">
          AQIL RASHEED<span className="text-[#ff6b4a] group-hover:animate-pulse">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold text-white/70 hover:text-[#ff6b4a] transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-[#ff6b4a] hover:text-white transition-all duration-300 shadow-lg shadow-white/5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2 z-50 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={closeMobileMenu}
              className="text-2xl font-black text-white/80 hover:text-[#ff6b4a] transition-colors uppercase tracking-[0.3em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={closeMobileMenu}
            className="px-10 py-4 bg-[#ff6b4a] text-white text-sm font-black uppercase tracking-widest rounded-sm"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
