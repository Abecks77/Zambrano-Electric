import React from 'react';
import { ArrowRight, Zap, Target, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image (unsplash placeholder for refinery at night) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550993086-fbcecb8b9c29?q=80&w=2938&auto=format&fit=crop")' }}
      />
      
      {/* Grid Lines Pattern */}
      <div className="absolute inset-0 grid-lines pointer-events-none z-0"></div>

      {/* Vignette/Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-charcoal via-transparent to-transparent opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-metal-light/40 border border-metal backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-race-red animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-300">Industrial Operations Active</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.85] mb-6">
            Powering The <br />
            <span className="text-race-red italic">Texas Panhandle</span>
          </h1>
          
          <p className="mt-6 text-gray-400 max-w-lg text-sm border-l-2 border-race-red pl-4 mb-10">
            The Texas Panhandle's premier industrial and commercial electrical contractors. We specialize in heavy-duty electrical infrastructure, high-pressure excavation, and critical compressed air systems for high-demand environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="tel:8065767703" className="px-10 py-4 bg-race-red text-black font-black uppercase tracking-widest text-sm hover:brightness-110 skew-x-[-10deg] flex items-center justify-center transition-all">
              <span className="inline-block skew-x-[10deg] flex items-center gap-2">Call Us Now</span>
            </a>
            <a href="#branches" className="px-10 py-4 glassmorphism hover:bg-white/5 text-[#E4E3E0] font-black uppercase tracking-widest text-sm transition-all skew-x-[-10deg] flex items-center justify-center">
              <span className="inline-block skew-x-[10deg]">Explore Branches</span>
            </a>
          </div>
        </div>

        {/* Stats / Badges floating at bottom */}
        <div className="hidden md:flex gap-8 mt-20 border-l-2 border-race-red pl-6 animate-pulse-line">
            <div className="flex items-center gap-3">
                <ShieldAlert className="h-8 w-8 text-race-red" strokeWidth={1.5} />
                <div>
                    <div className="text-xl font-display font-bold">100%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Safety Record</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-race-red" strokeWidth={1.5} />
                <div>
                    <div className="text-xl font-display font-bold">Precision</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Engineering</div>
                </div>
            </div>
             <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-race-red" strokeWidth={1.5} />
                <div>
                    <div className="text-xl font-display font-bold">24/7</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Emergency Response</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
