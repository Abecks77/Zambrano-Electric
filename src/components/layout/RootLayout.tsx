import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-race-red selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col pt-20 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
