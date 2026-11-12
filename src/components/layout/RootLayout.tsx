import React from 'react';
import { Outlet } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LightningCanvas } from '../ui/LightningCanvas';
import { BUSINESS } from '../../lib/business';

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-race-red selection:text-white relative bg-[#050505] pb-20 md:pb-0">
      {/* Global continuous grid lines */}
      <div className="fixed inset-0 grid-lines pointer-events-none z-0"></div>
      
      <LightningCanvas className="fixed inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none" />
      <Navbar />
      <main className="flex-1 flex flex-col pt-20 relative z-10 text-white">
        <Outlet />
      </main>
      <Footer />

      {/* Mobile sticky call bar — leaves room on the right for the chat bubble */}
      <a
        href={BUSINESS.phoneHref}
        className="md:hidden fixed bottom-3 left-3 right-[88px] z-40 flex items-center justify-center gap-2 bg-race-red text-white font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/20"
      >
        <Phone className="h-4 w-4 fill-current" /> Call to Book · {BUSINESS.phoneDisplay}
      </a>
    </div>
  );
};
