import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Activity, Menu, X, ArrowRight, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Electrical', path: '/branch/electrical' },
    { name: 'Underground', path: '/branch/underground' },
    { name: 'Compressed Air', path: '/branch/compressed-air' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-6 py-3">
        <div className="flex items-center justify-between h-12 w-full relative">
          {/* Logo or Brand Space (Optional, but kept center for this layout) */}
          <div className="flex-1 flex md:justify-center">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-black transition-all hover:text-white',
                    location.pathname === item.path ? 'text-race-red' : 'text-gray-400'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 pl-6 border-l border-white/10">
              <a
                href="tel:8065767703"
                className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-race-red hover:text-white transition-all transition-duration-300 flex items-center gap-2"
              >
                Call Now <Phone className="h-3 w-3 fill-current" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all',
                  location.pathname === item.path ? 'bg-race-red text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
                <a
                    href="tel:8065767703"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center gap-2 px-4 py-3 bg-white text-black text-xs font-black rounded-xl uppercase tracking-widest transition-colors"
                >
                    Call Now <Phone className="h-4 w-4 fill-current" />
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
