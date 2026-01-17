
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0d0d0d] border-y border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ff6b4a]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 reveal opacity-0 translate-y-10 transition-all duration-700">
            <p className="text-[#ff6b4a] text-xs font-bold uppercase tracking-[0.3em] mb-4">Establishing Credibility</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-white">Aqil <br/><span className="text-white/30">Rasheed</span></h2>
          </div>
          
          <div className="lg:col-span-8 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="space-y-8 text-lg md:text-2xl text-white/70 leading-relaxed font-light">
              <p>
                I’m an <span className="text-white font-medium italic underline decoration-[#ff6b4a] underline-offset-4">AI Automation Specialist</span> with a strong foundation in data, systems, and real-world business workflows.
              </p>
              <p>
                I completed a 5-year integrated <span className="text-white font-medium">MTech in Data Science from VIT Vellore</span>. I am the co-founder of an AI automation agency called <span className="text-[#ff6b4a] font-bold tracking-tight">NasrLabs</span>.
              </p>
              <p>
                Over time, I realized that the real power of AI lies not in theory — but in building systems that <span className="text-white font-semibold">actually remove friction</span> from businesses.
              </p>
              <p>
                Today, I design and deploy AI-powered automations that replace manual work, reduce operational chaos, and allow teams to focus on growth instead of repetitive tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
