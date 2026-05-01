import React from 'react';
import { ArrowRight, Zap, Target, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden pt-32 md:pt-48 lg:pt-56">
      {/* Background Image (unsplash placeholder for refinery at night) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550993086-fbcecb8b9c29?q=80&w=2938&auto=format&fit=crop")',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
        }}
      />
      
      {/* Vignette/Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[rgba(5,5,5,0.7)] to-transparent pointer-events-none" />

      {/* Cyber/Tech Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen"
           style={{ 
             backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
             backgroundSize: '80px 80px',
             backgroundPosition: 'center center'
           }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          
          <div className="w-full flex justify-center lg:justify-end items-center relative group mt-12 lg:mt-0">
            {/* Interactive Glow Background - Outer div for hover transition, inner for pulsing */}
            <div className="absolute inset-0 scale-90 group-hover:scale-110 transition-transform duration-1000 ease-in-out pointer-events-none">
              <div className="absolute inset-0 bg-race-red/40 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
            </div>
            
            {/* 3D Interactivity Wrapper */}
            <div className="relative transition-all duration-700 ease-out transform group-hover:scale-105 group-hover:-rotate-3 group-hover:translate-y-[-10px] w-full max-w-[500px]">
              <img 
                src="https://lh3.googleusercontent.com/d/178nfchOeNudYMOx5eA1x-jJRFlTa0h6d"
                alt="Zambrano Electric Logo" 
                className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(204,0,0,0.5)] group-hover:drop-shadow-[0_0_60px_rgba(204,0,0,0.8)] transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
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
