import React from 'react';
import { ClipboardCheck, PenTool, HardHat, Activity, ArrowRight } from 'lucide-react';
import { CallButton } from '../ui/CallButton';
import { SectionHeading } from '../ui/Heading';

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
    <section className="py-20 bg-transparent relative">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading eyebrow="How We Work" title="Operational" accent="Workflow" align="center">
          Every project follows the same four phases, so you know what happens next and when.
        </SectionHeading>

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
            <CallButton label="Call to Schedule a Site Assessment" />
        </div>

      </div>
    </section>
  );
};
