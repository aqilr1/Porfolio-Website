
import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, ArrowRight, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <p className="text-[#ff6b4a] text-xs font-bold uppercase tracking-[0.3em] mb-4">Get In Touch</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Let’s scale your <span className="text-white/20">operations.</span></h2>
            <p className="text-xl text-white/50 font-light leading-relaxed mb-12 max-w-lg">
              If you’re a business looking to automate operations, improve efficiency, or deploy AI systems that actually work — let’s talk.
            </p>

            <div className="space-y-6">
              <a href="mailto:aqil.rasheed2002@gmail.com" className="group flex items-center gap-4 p-6 bg-[#141414] border border-white/5 rounded-2xl hover:border-[#ff6b4a]/50 transition-all">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#ff6b4a]/10 group-hover:text-[#ff6b4a] transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Email Me</p>
                  <p className="text-white font-medium">aqil.rasheed2002@gmail.com</p>
                </div>
                <ArrowRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </a>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.linkedin.com/in/aqil-rasheed" target="_blank" rel="noopener noreferrer" className="flex-1 group flex items-center gap-4 p-6 bg-[#141414] border border-white/5 rounded-2xl hover:border-[#ff6b4a]/50 transition-all">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#ff6b4a]/10 group-hover:text-[#ff6b4a] transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span className="text-white font-medium">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/aqil.ai.automations/" target="_blank" rel="noopener noreferrer" className="flex-1 group flex items-center gap-4 p-6 bg-[#141414] border border-white/5 rounded-2xl hover:border-[#ff6b4a]/50 transition-all">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#ff6b4a]/10 group-hover:text-[#ff6b4a] transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span className="text-white font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-white/5 p-10 md:p-16 rounded-3xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <h3 className="text-2xl font-bold mb-8">Send a Quick Inquiry</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff6b4a] transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff6b4a] transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Business Problem</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff6b4a] transition-all" placeholder="Tell me what you'd like to automate..."></textarea>
              </div>
              <button 
                disabled={formState !== 'idle'}
                className={`w-full py-4 font-bold uppercase tracking-widest rounded-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 ${
                  formState === 'success' 
                    ? 'bg-green-600 text-white shadow-green-600/20' 
                    : 'bg-[#ff6b4a] text-white shadow-[#ff6b4a]/10 hover:bg-[#e05a3d]'
                }`}
              >
                {formState === 'idle' && 'Send Message'}
                {formState === 'sending' && (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
