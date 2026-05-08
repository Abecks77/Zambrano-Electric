import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, HardHat, Wind, ArrowRight, Terminal, Activity, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section id="branches" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Technical Elements */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-metal/10 border border-metal mb-6 skew-x-[-10deg]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-race-red skew-x-[10deg] flex items-center gap-2">
                <ShieldCheck className="h-3 w-3" /> Division Distribution
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.85] text-[#E4E3E0] mb-6">
              Choose Your <span className="text-race-red">Path</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs uppercase leading-relaxed tracking-[0.1em] max-w-lg">
              Select a core operational environment to view technical capabilities, safety protocols, and deployment logs.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4 p-4 border border-metal bg-charcoal-light/50 backdrop-blur-sm">
                <div className="text-[10px] font-mono text-gray-500 uppercase">Latency: <span className="text-emerald-500">2.4ms</span></div>
                <div className="text-[10px] font-mono text-gray-500 uppercase">Uptime: <span className="text-emerald-500">99.9%</span></div>
                <div className="text-[10px] font-mono text-gray-500 uppercase">Sector: <span className="text-[#E4E3E0]">TX-PAN</span></div>
                <div className="text-[10px] font-mono text-gray-500 uppercase">Status: <span className="text-race-red">READY</span></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {branches.map((branch) => {
            const Icon = branch.icon;
            return (
              <motion.div
                key={branch.id}
                whileHover={{ y: -8 }}
                className="group relative h-full"
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
                        <div className="text-[32px] font-black italic tracking-tighter text-metal opacity-20 group-hover:opacity-10 transition-opacity absolute top-6 right-10">
                          {branch.division}
                        </div>
                      </div>
                      <div className="w-12 h-12 flex items-center justify-center border border-metal bg-charcoal-light text-gray-400 group-hover:text-race-red group-hover:border-race-red group-hover:scale-110 transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mb-auto">
                      <h3 className="text-3xl font-black uppercase tracking-tight text-[#E4E3E0] mb-4 italic leading-none group-hover:text-race-red transition-colors">
                        {branch.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${branch.id === 'electrical' ? 'bg-race-red' : branch.id === 'underground' ? 'bg-blue-500' : 'bg-emerald-500'}`}></div>
                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">{branch.status} // {branch.code}</span>
                      </div>
                      <p className="text-gray-500 text-xs font-mono leading-relaxed mb-10 max-w-[240px]">
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
              </motion.div>
            );
          })}
        </div>

        {/* New CTA: View All Capabilities */}
        <div className="mt-16 flex justify-center">
            <Link 
              to="/services" 
              className="group relative px-12 py-6 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-2xl border border-white/20"
            >
              <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                Browse All Technical Capabilities <ArrowRight className="h-5 w-5 text-race-red" />
              </span>
            </Link>
        </div>

        {/* Global Footer Hub */}
        <div className="mt-20 flex flex-wrap justify-between items-center gap-8 pt-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex gap-12">
                <div className="space-y-1">
                    <div className="text-[8px] font-mono text-gray-500 uppercase bold">Core Load</div>
                    <div className="text-[10px] font-mono text-emerald-500">STABLE</div>
                </div>
                <div className="space-y-1">
                    <div className="text-[8px] font-mono text-gray-500 uppercase bold">Security Protocol</div>
                    <div className="text-[10px] font-mono text-race-red">AES-256</div>
                </div>
                <div className="space-y-1 hidden sm:block">
                    <div className="text-[8px] font-mono text-gray-500 uppercase bold">Frequency</div>
                    <div className="text-[10px] font-mono text-[#E4E3E0]">60Hz</div>
                </div>
            </div>
            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                ©2024 ZAMBRANO_INDUSTRIAL_SYSTEMS
            </div>
        </div>
      </div>
    </section>
  );
};
