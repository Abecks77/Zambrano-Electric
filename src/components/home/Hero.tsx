import React from 'react';
import { ArrowRight, Zap, Target, ShieldAlert, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-[#CC0000] pt-20">
      {/* Cinematic Background Layers */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay scale-110"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550993086-fbcecb8b9c29?q=80&w=2938&auto=format&fit=crop")',
        }}
      />
      
      {/* Red Gradient Base - Lightened and VIBRANT */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FF3333] via-[#CC0000] to-[#990000] pointer-events-none" />

      {/* Textured Overlays */}
      <div className="absolute inset-0 z-10 bg-diamond-plate opacity-15 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.25)_100%)] pointer-events-none" />

      {/* THE FLOW: Deep feathered transition for seamless integration */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/5 z-30" />

      {/* Atmospheric Scanning Line */}
      <div className="absolute inset-x-0 h-[3px] bg-white/10 z-20 animate-scan blur-[1px] pointer-events-none" />
      
      {/* HUD Frame / Viewport */}
      <div className="absolute inset-8 z-30 border border-white/10 pointer-events-none隐 hidden md:block">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/30" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/30" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/30" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/30" />
      </div>

      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center relative"
          >
             {/* Energy Glow Behind Logo */}
            <div className="absolute inset-0 bg-white/20 blur-[120px] rounded-full animate-pulse z-0" />
            
            <div className="relative z-10 group cursor-crosshair">
              <img 
                src="https://lh3.googleusercontent.com/d/178nfchOeNudYMOx5eA1x-jJRFlTa0h6d"
                alt="Zambrano Electric" 
                className="w-full h-auto max-w-[400px] lg:max-w-none object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-700 select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Interaction Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/60 border border-white/20 backdrop-blur-md rounded shadow-[0_0_20px_rgba(0,0,0,0.3)] mb-8">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">System Status: Optimal</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-[110px] font-display font-black uppercase tracking-tighter leading-[0.82] mb-8"
            >
              <span className="block italic text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Powering</span>
              <span className="block text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">The Texas</span>
              <span className="block text-black">Panhandle</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-10 max-w-xl mx-auto lg:mx-0"
            >
              <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed border-l-4 border-white pl-6 mb-12 drop-shadow-sm">
                Premier industrial and commercial electrical contractors specializing in heavy-duty infrastructure, precision excavation, and critical engine systems for high-pressure environments.
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <a 
                  href="tel:8065767703" 
                  className="group relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20"
                >
                  <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                    <Phone className="h-4 w-4 fill-current text-race-red" /> Call Us Now
                  </span>
                </a>
                <a 
                  href="#branches" 
                  className="group relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm transition-all skew-x-[-10deg] border border-white/20 shadow-xl"
                >
                  <span className="inline-block skew-x-[10deg]">Explore Coverage</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Global Hub Connectors floating at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden md:flex gap-16 mt-24 border-t border-white/10 pt-12 relative"
        >
            <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/10 border border-white/20 skew-x-[-12deg] group-hover:bg-white transition-colors">
                    <ShieldAlert className="h-6 w-6 text-white group-hover:text-black skew-x-[12deg]" />
                </div>
                <div>
                    <div className="text-2xl font-display font-black text-white italic">100%</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Safety Factor</div>
                </div>
            </div>
            <div className="flex items-center gap-4 group">
                 <div className="p-3 bg-white/10 border border-white/20 skew-x-[-12deg] group-hover:bg-white transition-colors">
                    <Target className="h-6 w-6 text-white group-hover:text-black skew-x-[12deg]" />
                </div>
                <div>
                    <div className="text-2xl font-display font-black text-white italic">MIL-SPEC</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Precision</div>
                </div>
            </div>
             <div className="flex items-center gap-4 group">
                 <div className="p-3 bg-white/10 border border-white/20 skew-x-[-12deg] group-hover:bg-white transition-colors">
                    <Zap className="h-6 w-6 text-white group-hover:text-black skew-x-[12deg]" />
                </div>
                <div>
                    <div className="text-2xl font-display font-black text-white italic">24/7/365</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Critical Load</div>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 z-0 grid-lines opacity-10 pointer-events-none" />
    </section>
  );
};

