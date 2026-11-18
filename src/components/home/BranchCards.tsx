import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, HardHat, Wind, ArrowRight, Terminal, Activity, ShieldCheck } from 'lucide-react';
import { CallButton } from '../ui/CallButton';
import { SectionHeading } from '../ui/Heading';

const branches = [
  {
    id: 'electrical',
    division: '01',
    title: 'Electrical Contractor',
    description: 'Commercial and industrial electrical systems, switchgear, controls, and high-voltage distribution.',
    icon: Zap,
    status: 'SYSTEM_ACTIVE',
    code: 'SEC_LVL_04',
    color: 'text-race-red'
  },
  {
    id: 'underground',
    division: '02',
    title: 'Underground Systems',
    description: 'Specialized ditching, hydro excavation, and secure installation of subterranean infrastructure.',
    icon: HardHat,
    status: 'OPERATIONAL',
    code: 'GEO_SYNC_09',
    color: 'text-blue-500'
  },
  {
    id: 'compressed-air',
    division: '03',
    title: 'Compressed Air',
    description: 'Heavy-duty piping, machinery integration, and complete compressed air system engineering.',
    icon: Wind,
    status: 'OPTIMIZED',
    code: 'KPA_STABLE',
    color: 'text-emerald-500'
  }
];

export const BranchCards = () => {
  return (
    <section id="branches" className="py-20 bg-transparent relative overflow-hidden scroll-mt-24">
      {/* Background Technical Elements */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading eyebrow="Our Services" title="Choose Your" accent="Service" align="center">
          Three divisions, one contractor. Select a service to see capabilities, safety practices and how to book.
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {branches.map((branch) => {
            const Icon = branch.icon;
            return (
              <div
                key={branch.id}
                className="group relative h-full transition-transform duration-300 hover:-translate-y-2"
              >
                <Link to={`/branch/${branch.id}`} className="block h-full">
                  <div className="relative glassmorphism p-10 border border-metal hover:border-race-red transition-all duration-500 overflow-hidden h-full flex flex-col bg-[#0A0A0A]">
                    
                    {/* Interior Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%]"></div>
                    
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-600"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-600"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-race-red opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex justify-between items-start mb-16">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-[#E4E3E0] uppercase tracking-[0.2em] flex items-center gap-2">
                          <Terminal className="h-3 w-3 text-race-red" /> DIV-{branch.division}
                        </div>
                      </div>
                      <div className="w-12 h-12 flex items-center justify-center border border-metal bg-charcoal-light text-gray-400 group-hover:text-race-red group-hover:border-race-red group-hover:scale-110 transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mb-auto">
                      <h3 className="text-3xl font-black uppercase tracking-tight text-[#E4E3E0] mb-6 italic leading-none group-hover:text-race-red transition-colors">
                        {branch.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-10">
                        {branch.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-8 border-t border-metal/30 flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 group-hover:gap-4 transition-all overflow-hidden whitespace-nowrap">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4E3E0]">Learn More</span>
                          <ArrowRight className="h-4 w-4 text-race-red" />
                        </div>
                        <Activity className="h-4 w-4 text-metal group-hover:text-race-red transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA: not sure which division you need */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-gray-400">Not sure which service you need? Tell us about the job and we’ll point you to the right crew.</p>
            <CallButton label="Call to Talk Through Your Project" />
        </div>

      </div>
    </section>
  );
};
