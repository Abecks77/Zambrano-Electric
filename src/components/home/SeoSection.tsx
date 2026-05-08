import React from 'react';
import { ShieldCheck, Map, Zap, Factory } from 'lucide-react';

export const SeoSection = () => {
  return (
    <section className="py-24 bg-transparent relative">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* SEO Content Block */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-metal-light/20 border border-[rgba(74,74,74,0.5)] mb-6 skew-x-[-10deg]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-race-red skew-x-[10deg]">Service Area</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-[0.9] mb-6 text-[#E4E3E0]">
              Trusted Electricians in <br />
              <span className="text-race-red">The Texas Panhandle</span>
            </h2>
            
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed max-w-xl">
              <p>
                When operations are on the line, local industries turn to <strong className="text-gray-200">Zambrano Electric, LLC</strong>. Based locally in Hereford, TX, we are the premier commercial and industrial electrical contractors serving the entire Texas Panhandle region. 
              </p>
              <p>
                From rapid-response machinery troubleshooting to full-scale manufacturing plant wiring, our certified electricians possess the specialized expertise required for complex power systems. We don't just service equipment; we build the resilient electrical infrastructure, underground utilities, and compressed air networks that keep Texas businesses operational 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 border border-[#4A4A4A] bg-[rgba(30,30,30,0.6)]">
                  <Map className="h-5 w-5 text-race-red" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#E4E3E0]">Local Expertise</h4>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">The Texas Panhandle & Surrounding Areas</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-2 border border-[#4A4A4A] bg-[rgba(30,30,30,0.6)]">
                  <Factory className="h-5 w-5 text-race-red" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#E4E3E0]">Industrial Focus</h4>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Manufacturing & Processing</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20"
            >
              <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                Consult Our Experts <Zap className="h-4 w-4 text-race-red" />
              </span>
            </button>
          </div>

          {/* Visual/Keywords Block */}
          <div className="relative">
            <div className="glassmorphism p-8 md:p-12 relative overflow-hidden">
               {/* Internal grid */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)] pointer-events-none"></div>
              
              <h3 className="text-lg font-black uppercase tracking-widest text-[#E4E3E0] mb-8 border-b border-[#4A4A4A]/50 pb-4">
                Core Competencies
              </h3>

              <ul className="space-y-4">
                {[
                  "Industrial Electrical Installation & Repair",
                  "Commercial Electrical Contracting",
                  "High-Voltage Switchgear & Transformers",
                  "Texas Panhandle Emergency Electrical Services",
                  "Underground Conduit & Utility Ditching",
                  "Heavy-Duty Compressed Air Piping"
                ].map((keyword, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <Zap className="h-4 w-4 text-race-red group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-gray-300 font-mono uppercase tracking-tight">{keyword}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#4A4A4A]/50 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-race-red" />
                <div>
                  <div className="text-xs font-black uppercase text-[#E4E3E0]">Licensed & Insured</div>
                  <div className="text-[10px] text-gray-500 font-mono uppercase">Texas State Certified</div>
                </div>
              </div>

            </div>
            
            {/* Design accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-race-red opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#4A4A4A] opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
