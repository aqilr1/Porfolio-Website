
import React from 'react';
import { Linkedin, Instagram, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-extrabold tracking-tighter text-white mb-2 block">
              AQIL RASHEED<span className="text-[#ff6b4a]">.</span>
            </a>
            <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">
              Co-Founder @ NasrLabs | AI Automation Specialist
            </p>
          </div>

          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/aqil-rasheed" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#ff6b4a] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/aqil.ai.automations/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#ff6b4a] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/30 hover:text-[#ff6b4a] transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">
              © {new Date().getFullYear()} NasrLabs. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
