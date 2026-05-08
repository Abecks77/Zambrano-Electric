import React from 'react';
import { ClipboardCheck, PenTool, HardHat, Activity, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Site Assessment',
    description: 'Initial recon and diagnostics. We deploy a senior project manager to evaluate the environment, identify risks, and gather exact specifications.',
    icon: ClipboardCheck
  },
  {
    id: '02',
    title: 'Engineering & Bidding',
    description: 'Our team engineers a robust, compliant solution. We provide a fully transparent, itemized bid covering labor, heavy materials, and timeline.',
    icon: PenTool
  },
  {
    id: '03',
    title: 'Execution Phase',
    description: 'Heavy machinery and certified crews are dispatched. We execute the installation or repair adhering strictly to ISNetworld safety standards.',
    icon: HardHat
  },
  {
    id: '04',
    title: 'Testing & Turnover',
    description: 'Rigorous stress-testing of all electrical, underground, or pneumatic systems before final sign-off and handing over control to your facility managers.',
    icon: Activity
  }
];

export const HowWeWork = () => {
  return (
    <section className="py-24 bg-transparent relative">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-metal-light/20 border border-[rgba(74,74,74,0.5)] mb-6 skew-x-[-10deg]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-race-red skew-x-[10deg]">Standard Operating Procedure</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-[0.9] mb-4 text-[#E4E3E0]">
              Operational <span className="text-race-red">Workflow</span>
            </h2>
            <p className="text-gray-400 text-sm">
              We execute complex industrial projects through a highly-structured and secure 4-phase deployment protocol, prioritizing safety and precision at every step.
            </p>
          </div>
        </div>

        {/* Workflow Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative z-10 flex flex-col">
                {/* Protocol Node */}
                <div className="mb-6 flex items-center justify-between lg:justify-start lg:gap-4">
                  <div className="w-16 h-16 bg-[#0A0A0A] border border-metal flex items-center justify-center relative group">
                    <div className="absolute inset-0 border border-race-red/0 group-hover:border-race-red transition-all cursor-pointer"></div>
                    <Icon className="h-6 w-6 text-race-red relative z-10" />
                  </div>
                  {index !== steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-metal lg:hidden" />
                  )}
                </div>

                {/* Card Content */}
                <div className="glassmorphism p-6 flex-1 group hover:bg-white/5 transition-colors">
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest mb-3">PHASE {step.id}</div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-[#E4E3E0] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* New CTA: Initiate Protocol */}
        <div className="mt-16 flex justify-center">
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-12 py-6 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-2xl border border-white/20"
            >
              <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                Initiate Project Protocol <ArrowRight className="h-5 w-5 text-race-red" />
              </span>
            </button>
        </div>

      </div>
    </section>
  );
};
