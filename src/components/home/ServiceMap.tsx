import React from 'react';
import { MapPin, Target } from 'lucide-react';

export const ServiceMap = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none z-0 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-metal rounded-full mb-6 border border-metal-light">
            <Target className="h-6 w-6 text-race-red" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-[0.9] mb-4 text-[#E4E3E0]">
            Service Zone & <span className="text-race-red">Dispatch Area</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Based in Hereford, Texas. Rapidly deploying industrial crews across the entire Texas Panhandle and surrounding regional manufacturing hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Radar / Map GUI */}
          <div className="glassmorphism p-2 relative group skew-x-[2deg]">
            <div className="aspect-video bg-[#050505] border border-metal relative overflow-hidden flex items-center justify-center">
              {/* Radar Grid */}
              <div className="absolute inset-0" style={{
                 backgroundImage: `radial-gradient(circle at center, transparent 0, transparent 48%, rgba(255,0,0,0.1) 49%, transparent 50%),
                                   radial-gradient(circle at center, transparent 0, transparent 23%, rgba(255,0,0,0.1) 24%, transparent 25%)`,
                 backgroundSize: '100% 100%'
              }}></div>
              
              <div className="absolute w-full h-[1px] bg-race-red/20 top-1/2"></div>
              <div className="absolute h-full w-[1px] bg-race-red/20 left-1/2"></div>

              {/* Texas Panhandle Outline Mockup (Abstracted) */}
              <svg className="absolute w-3/4 h-3/4 opacity-10 stroke-race-red fill-transparent" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 10 10 H 90 V 40 L 70 90 L 10 90 Z" strokeWidth="1" />
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-race-red/20 flex items-center justify-center relative">
                    {/* Sweeping Radar Animation */}
                    <div className="absolute inset-0 rounded-full border-t-2 border-race-red animate-[spin_4s_linear_infinite] opacity-50" style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,0,0,0.2) 20%, transparent 21%)' }}></div>
                    
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-race-red/40 flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-race-red drop-shadow-[0_0_8px_#FF0000] relative z-20" />
                        
                        {/* Ping dots */}
                        <div className="absolute w-2 h-2 bg-white rounded-full top-4 left-4 opacity-50 animate-pulse"></div>
                        <div className="absolute w-2 h-2 bg-white rounded-full bottom-4 right-10 opacity-60 animate-pulse delay-700"></div>
                        <div className="absolute w-2 h-2 bg-white rounded-full bottom-8 left-8 opacity-40 animate-pulse delay-300"></div>
                    </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 glassmorphism px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#E4E3E0] flex items-center gap-2">
                <span className="w-2 h-2 bg-race-red rounded-full animate-pulse"></span> Hereford Dispatch Active
              </div>
            </div>
          </div>

          {/* Locations Data */}
          <div>
            <div className="glassmorphism p-8 border-l-4 border-l-race-red">
               <h3 className="text-lg font-black uppercase tracking-widest text-[#E4E3E0] mb-6 border-b border-[#4A4A4A]/50 pb-4">
                  Primary Coverage Nodes
               </h3>
               <ul className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-8 font-mono tracking-tight">
                   <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-race-red"/> Hereford</li>
                   <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-race-red"/> Amarillo</li>
                   <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-race-red"/> Plainview</li>
               </ul>

               <div className="p-4 bg-[rgba(255,0,0,0.05)] border border-race-red/30">
                  <h4 className="text-xs font-bold uppercase text-race-red mb-1">Out of Bounds Deployment</h4>
                  <p className="text-[10px] text-gray-300 font-mono tracking-widest leading-relaxed">
                      For emergency deployments outside the immediate 150-mile radius, please route communications directly to our 24/7 dispatch hotline to authorize out-of-bounds heavy equipment transport.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
