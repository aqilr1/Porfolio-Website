
import React from 'react';

const projects = [
  {
    title: "Product Description Generator",
    problem: "Manual product description writing was slow and inconsistent.",
    solution: "Built an AI-powered product description generator that creates structured, optimized product descriptions instantly.",
    outcome: "Faster content creation, consistent brand tone, and reduced manual effort.",
    image: "https://lh3.googleusercontent.com/d/1J-Te2xb5PyTg0rTK_bdXIzQ32VVckJER",
    accent: "bg-[#ff6b4a]"
  },
  {
    title: "Email Classifier Agent",
    problem: "Inbox overload and delayed responses.",
    solution: "Developed an AI email classifier that automatically categorizes incoming emails and routes them correctly.",
    outcome: "Faster response times, reduced manual sorting, and improved workflow efficiency.",
    image: "https://lh3.googleusercontent.com/d/1iGa--UPUqXc30TJC-HbsxU6M043yWnZt",
    accent: "bg-[#2563eb]"
  },
  {
    title: "Product Database Automation (Client – Kiona)",
    problem: "Product information was being shared through WhatsApp groups, causing chaos and confusion.",
    solution: "Built an automation where uploading a product image to Google Drive automatically updates a structured Google Sheets database.",
    outcome: "Eliminated WhatsApp clutter, centralized clean product database, and faster internal operations.",
    image: "https://lh3.googleusercontent.com/d/1zuDbdIw4uhqApDpDwc5CQk_Sa_2ddiqS",
    accent: "bg-[#059669]"
  },
  {
    title: "Instagram DM Agent (Client – Kiona)",
    problem: "Over 100 DMs per day handled manually by a staff member, consuming all her time.",
    solution: "Built an AI-powered Instagram DM agent connected to the product database that handles queries, collects data, and generates bills.",
    outcome: "Removed full-time manual DM handling, faster customer response, and smoother sales.",
    image: "https://lh3.googleusercontent.com/d/1jS602YfOvE69mqUxPmh3YEen-FuvUUsn",
    accent: "bg-[#db2777]"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="max-w-2xl">
            <p className="text-[#ff6b4a] text-xs font-bold uppercase tracking-[0.3em] mb-4">Aqil Rasheed</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Creative Works</h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-light leading-relaxed">
            Real results for real businesses. These are the systems that move the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group flex flex-col bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className={`absolute top-6 right-6 ${project.accent} px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white`}>
                  Case Study {i + 1}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#ff6b4a] transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-2">The Problem</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-2">Our Solution</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-2">The Outcome</h4>
                    <p className="text-[#ff6b4a] text-sm font-medium leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">AI / Automation / n8n</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ff6b4a] transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
