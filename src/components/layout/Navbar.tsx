import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Activity, Menu, X, ArrowRight } from 'lucide-react';

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
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-metal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center group">
              <img 
                src="https://lh3.googleusercontent.com/d/178nfchOeNudYMOx5eA1x-jJRFlTa0h6d" 
                alt="Zambrano Electric Logo" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-8 flex items-center space-x-3 lg:space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'text-[10px] lg:text-xs uppercase tracking-wider font-semibold transition-colors whitespace-nowrap',
                    location.pathname === item.path ? 'text-white border-b border-race-red pb-1' : 'text-gray-500 hover:text-[#E4E3E0]'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 ml-4 lg:ml-6 pl-4 lg:pl-6 border-l border-[#4A4A4A]/50">
                <Link
                  to="/schedule"
                  className="px-4 lg:px-6 py-2 bg-race-red text-black text-[10px] lg:text-xs font-black uppercase tracking-widest skew-x-[-10deg] hover:brightness-110 transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="skew-x-[10deg] inline-flex items-center gap-1 sm:gap-2">Schedule <ArrowRight className="h-3 w-3" /></span>
                </Link>
              </div>
            </div>
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

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden glassmorphism border-t border-metal border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium uppercase',
                  location.pathname === item.path ? 'bg-metal text-race-red' : 'text-gray-300 hover:bg-metal-light'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-metal mt-4 flex flex-col gap-2 px-3">
                <Link
                    to="/schedule"
                    onClick={() => setIsOpen(false)}
                    className="block text-center px-4 py-2 bg-race-red text-white text-base font-medium rounded uppercase tracking-wider transition-colors"
                >
                    Start Project
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
