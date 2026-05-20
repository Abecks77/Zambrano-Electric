import React, { useState } from 'react';
import { Lock, User, KeyRound, ShieldAlert } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { localBusinessSchema } from '../lib/schemas';

export const Portal = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogged(true);
  };

  const helmetContent = (
    <Helmet>
      <title>Client Portal | Zambrano Electric | Hereford, TX</title>
      <meta name="description" content="Secure client portal for Zambrano Electric clients to view project updates and documents." />
      <link rel="canonical" href="https://zambranoelectric.com/portal" />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );

  if (isLogged) {
    return (
      <>
        {helmetContent}
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 text-center">
           <ShieldAlert className="h-24 w-24 text-race-red mx-auto mb-6" />
           <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-4">Secure Terminal Active</h1>
           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Welcome to the Zambrano Electric Client Portal. Here you can view active projects, access compliance documents, and review real-time site updates.</p>
           <button onClick={() => setIsLogged(false)} className="px-6 py-2 border border-metal hover:border-race-red text-gray-400 hover:text-white uppercase text-xs tracking-widest transition-colors font-bold">
             Disconnect
           </button>
        </div>
      </>
    );
  }

  return (
    <>
      {helmetContent}
      <div className="flex-1 flex items-center justify-center w-full py-20 px-4">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-metal rounded-full mb-6">
            <Lock className="h-8 w-8 text-race-red" />
          </div>
          <h1 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-2">Client Portal</h1>
          <p className="text-sm text-gray-400 font-mono">Restricted Access Module</p>
        </div>

        <form onSubmit={handleLogin} className="glassmorphism p-8 shadow-2xl relative overflow-hidden">
          {/* subtle scanline effect */}
          <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)]" />

          <div className="relative z-10 mb-6">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2">
              <User className="h-4 w-4" /> Client ID
            </label>
            <input 
              required 
              type="text" 
              placeholder="ZMB-XXX"
              className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors font-mono" 
            />
          </div>

          <div className="relative z-10 mb-8">
             <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2">
              <KeyRound className="h-4 w-4" /> Access Code
            </label>
            <input 
              required 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors font-mono tracking-widest" 
            />
          </div>

          <div className="relative z-10">
            <button type="submit" className="w-full p-4 bg-transparent border border-race-red hover:bg-race-red/10 text-race-red hover:text-white font-bold uppercase tracking-widest text-sm transition-all group flex items-center justify-between">
              <span>Authenticate</span>
              <ArrowRightWrapper />
            </button>
            <p className="text-center text-xs text-gray-500 mt-6 font-mono align-middle">
              UNAUTHORIZED ACCESS IS PROHIBITED
            </p>
          </div>
        </form>

      </div>
    </div>
    </>
  );
};

// Extracted arrow right wrapper to avoid importing ArrowRight icon component if it causes issues, mostly just for a neat UI layout
const ArrowRightWrapper = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5 transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
)
