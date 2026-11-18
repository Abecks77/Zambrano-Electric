import { Zap, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { CallButton, CallReassurance } from '../ui/CallButton';
import { BUSINESS } from '../../lib/business';

// Entrance animations are plain CSS (see index.css) so the hero text is fully
// visible in the static HTML and no animation library ships to the browser.
const stats = [
  { icon: ShieldCheck, value: `#${BUSINESS.licenseNumber}`, label: 'TX Licensed Electrical Contractor' },
  { icon: ClipboardCheck, value: 'Free', label: 'Itemized Estimates' },
  { icon: Zap, value: '24/7/365', label: 'Emergency Line' },
];

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#CC0000] pt-36 pb-20">
      {/* Red Gradient Base */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FF3333] via-[#CC0000] to-[#990000] pointer-events-none" />

      {/* Textured Overlays */}
      <div className="absolute inset-0 z-10 bg-diamond-plate opacity-15 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.25)_100%)] pointer-events-none" />

      {/* Feathered transition into the page */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/5 z-30" />

      {/* Atmospheric Scanning Line */}
      <div className="absolute inset-x-0 h-[3px] bg-white/10 z-20 animate-scan blur-[1px] pointer-events-none" />

      {/* HUD Frame */}
      <div className="absolute inset-8 z-30 border border-white/10 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/30" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/30" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/30" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/30" />
      </div>

      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center relative animate-pop">
            {/* Energy Glow Behind Logo */}
            <div className="absolute inset-0 bg-white/20 blur-[120px] rounded-full animate-pulse z-0" />

            <div className="relative z-10 group cursor-crosshair">
              <img
                src="/images/logo-500.webp"
                srcSet="/images/logo-500.webp 500w, /images/logo-900.webp 900w"
                sizes="(min-width: 1024px) 460px, 80vw"
                width={500}
                height={471}
                fetchPriority="high"
                alt="Zambrano Electric LLC logo"
                className="w-full h-auto max-w-[400px] lg:max-w-none object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-700 select-none"
              />

              {/* Interaction Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/60 border border-white/20 backdrop-blur-md rounded shadow-[0_0_20px_rgba(0,0,0,0.3)] mb-8">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Licensed in Texas Since {BUSINESS.licensedSince}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-display font-black uppercase tracking-tighter leading-[1.05] mb-8 animate-rise">
              <span className="block italic text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Commercial &amp;</span>
              <span className="block italic text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Industrial Electrician</span>
              <span className="block text-black text-xl sm:text-2xl md:text-3xl mt-4 font-sans tracking-wide">— Hereford, TX &amp; Amarillo TX</span>
            </h1>

            <div className="mt-10 animate-fade [animation-delay:500ms]">
              <p className="text-white/85 font-sans text-base leading-relaxed border-l-4 border-white pl-6 mb-10 max-w-xl mx-auto lg:mx-0 text-left drop-shadow-sm">
                Licensed industrial and commercial electrical contractor serving Hereford, Amarillo and the Texas Panhandle — plant electrical systems, underground utilities and hydro excavation, and compressed air.
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                <CallButton />
                <a
                  href="#branches"
                  className="group relative px-8 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-xs transition-all skew-x-[-10deg] border border-white/20 shadow-xl"
                >
                  <span className="inline-block skew-x-[10deg]">See Our Services</span>
                </a>
              </div>
              <CallReassurance className="mt-6 text-white/85 justify-center lg:justify-start" />
            </div>
          </div>
        </div>

        {/* Trust stats */}
        <div className="hidden md:flex justify-center lg:justify-start gap-16 mt-16 border-t border-white/10 pt-10 relative animate-rise [animation-delay:800ms]">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 border border-white/20 skew-x-[-12deg] group-hover:bg-white transition-colors">
                <Icon className="h-6 w-6 text-white group-hover:text-black skew-x-[12deg]" />
              </div>
              <div>
                <div className="text-2xl font-display font-black text-white italic">{value}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 z-0 grid-lines opacity-10 pointer-events-none" />
    </section>
  );
};
