
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ValueProp: React.FC = () => {
  const points = [
    "Reduced operational workload",
    "Faster response times",
    "Clean, structured systems",
    "Lower dependency on manual labor",
    "Scalable AI-driven workflows",
    "Real, measurable efficiency gains"
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#141414] to-[#0d0d0d] border border-white/5 p-12 md:p-20 rounded-3xl relative overflow-hidden reveal opacity-0 translate-y-10 transition-all duration-1000">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b4a]/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b4a]/5 blur-[100px] rounded-full" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
                This is what you get when you <span className="text-[#ff6b4a]">work with me</span>
              </h2>
              <p className="text-white/40 text-lg font-light">
                No fluff, no theory. Just systems that work while you sleep.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {points.map((point, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 transition-colors reveal opacity-0 translate-x-10"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#ff6b4a]" />
                  <span className="text-white/80 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
