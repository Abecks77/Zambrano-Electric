import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LightningCanvas } from '../ui/LightningCanvas';

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-race-red selection:text-white relative bg-[#050505]">
      {/* Global continuous grid lines */}
      <div className="fixed inset-0 grid-lines pointer-events-none z-0"></div>
      
      <LightningCanvas className="fixed inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none" />
      <Navbar />
      <main className="flex-1 flex flex-col pt-20 relative z-10 text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
