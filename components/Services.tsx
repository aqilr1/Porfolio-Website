
import React from 'react';
import { Bot, Cpu, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-8 h-8 text-[#ff6b4a]" />,
    title: "AI Automation Systems",
    desc: "I design end-to-end AI automation systems that handle repetitive business tasks — from data handling to customer interactions — without human intervention."
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#ff6b4a]" />,
    title: "AI Agents for Business",
    desc: "Intelligent agents that can respond to customers, answer questions, collect data, process orders, and trigger workflows automatically."
  },
  {
    icon: <Zap className="w-8 h-8 text-[#ff6b4a]" />,
    title: "Workflow Optimization",
    desc: "I analyze existing business processes and convert chaotic manual workflows into clean, structured, automated systems."
  },
  {
    icon: <Globe className="w-8 h-8 text-[#ff6b4a]" />,
    title: "Rapid Web Development",
    desc: "I build professional, modern websites in very less time using white-coding techniques — optimized for speed, clarity, and conversion."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal opacity-0 translate-y-10 transition-all duration-700">
          <p className="text-[#ff6b4a] text-xs font-bold uppercase tracking-[0.3em] mb-4">What I Do</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Scalable AI Systems</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group p-10 bg-[#141414] border border-white/5 hover:border-[#ff6b4a]/50 transition-all duration-500 rounded-lg reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-8 p-4 bg-white/5 inline-block rounded-lg group-hover:bg-[#ff6b4a]/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#ff6b4a] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5">
                <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors flex items-center gap-2">
                  Discuss Now <span className="text-[#ff6b4a] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
