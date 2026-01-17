
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#050505]">
      {/* Background Layer: Spline Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-40">
        <iframe 
          src='https://my.spline.design/retrofuturisticcircuitloop-iX6Knacw5QdsDc0PvhjF5bZh/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-110"
          title="Spline Background Animation"
        ></iframe>
      </div>

      {/* Middle Layer: Visual Texture & Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-10 pointer-events-none" />
      <div className="scanline z-20" />
      
      {/* Decorative Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ff6b4a]/10 blur-[120px] rounded-full z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-30">
        
        {/* Text Content */}
        <div className="lg:col-span-7 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <span className="inline-block px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] text-[#ff6b4a] border border-[#ff6b4a]/30 uppercase rounded-full bg-[#0a0a0a]/60 backdrop-blur-md">
            AI Automation Specialist
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tighter text-white">
            Transforming Chaos <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ff6b4a] to-[#ff6b4a]/60">
              Into Automated Flow.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-xl leading-relaxed font-light">
            I help high-growth businesses eliminate repetitive tasks and scale their impact using bespoke AI agents and autonomous workflow systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#work" 
              className="group relative w-full sm:w-auto px-10 py-5 bg-[#ff6b4a] text-white text-xs font-black uppercase tracking-widest overflow-hidden rounded-sm text-center transition-all hover:scale-105"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm text-center bg-white/5 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              Start Building <span className="text-[#ff6b4a] group-hover:text-black">→</span>
            </a>
          </div>
        </div>

        {/* Visual Element / Portrait */}
        <div className="lg:col-span-5 relative reveal opacity-0 translate-y-10 transition-all duration-1000 delay-500 lg:delay-700">
          <div className="relative group">
            {/* Decorative HUD Frame */}
            <div className="absolute -inset-4 border border-[#ff6b4a]/20 rounded-2xl pointer-events-none">
              <div className="absolute top-0 left-10 w-20 h-[1px] bg-[#ff6b4a]/40" />
              <div className="absolute bottom-0 right-10 w-20 h-[1px] bg-[#ff6b4a]/40" />
              <div className="absolute top-10 left-0 w-[1px] h-20 bg-[#ff6b4a]/40" />
              <div className="absolute bottom-10 right-0 w-[1px] h-20 bg-[#ff6b4a]/40" />
            </div>
            
            {/* Portrait Image Container */}
            <div className="relative z-10 rounded-xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 group-hover:border-[#ff6b4a]/30 transition-all duration-500">
              <img 
                src="https://lh3.googleusercontent.com/d/1nn_KBNIfMlxynwxvNSOo2rtePNXFH352" 
                alt="Aqil Rasheed - AI Specialist" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              
              {/* Floating Name Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">Aqil Rasheed</p>
                  <p className="text-[8px] uppercase font-bold tracking-widest text-[#ff6b4a]">AI Automation Specialist</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#ff6b4a]/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
            <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 border border-white/5 rounded-full animate-spin-slow-reverse" style={{ animationDuration: '30s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 reveal opacity-0 delay-1000">
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">Scroll To Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#ff6b4a] to-transparent animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
