import React from 'react';
import { MapPin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../../lib/business';
import { serviceAreas } from '../../lib/content';
import { SectionHeading } from '../ui/Heading';

export const ServiceMap = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading eyebrow="Service Area" title="Service Zone &" accent="Dispatch Area" align="center">
          Based in Hereford, Texas, with crews dispatched across the Texas Panhandle and surrounding manufacturing hubs.
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Radar / Map GUI */}
          <div className="glassmorphism p-8 relative group flex flex-col h-full">
            <div className="flex-grow aspect-video bg-[#050505] border border-metal relative overflow-hidden flex items-center justify-center mb-8">
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

            <a 
              href={BUSINESS.phoneHref}
              className="w-full block text-center relative px-6 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20 group"
            >
              <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                Call 24/7 Emergency Line · {BUSINESS.phoneDisplay} <Target className="h-4 w-4 text-race-red" />
              </span>
            </a>
          </div>

          {/* Locations Data */}
          <div>
            <div className="glassmorphism p-8 border-l-4 border-l-race-red h-full flex flex-col">
               <h3 className="text-lg font-black uppercase tracking-widest text-[#E4E3E0] mb-6 pb-4">
                  Primary Coverage Area
               </h3>
               <ul className="grid grid-cols-2 gap-4 text-base text-gray-300 mb-8">
                   {serviceAreas.map((a) => (
                     <li key={a.slug}>
                       <Link to={`/service-areas/${a.slug}`} className="flex items-center gap-3 hover:text-race-red transition-colors">
                         <MapPin className="h-4 w-4 text-race-red"/> {a.city}, TX
                       </Link>
                     </li>
                   ))}
               </ul>

               <div className="mt-auto">
                 <div className="p-5 bg-[rgba(255,0,0,0.05)] border border-race-red/30">
                    <h4 className="text-xs font-black uppercase text-race-red tracking-[0.2em] mb-2">Outside Our 150-Mile Radius?</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        For emergency work outside our 150-mile radius, call our 24/7 line and we’ll arrange crew and heavy-equipment transport.
                    </p>
                 </div>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
