import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-charcoal-light border-t border-metal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center mb-4 group inline-flex">
               <img 
                 src="https://lh3.googleusercontent.com/d/178nfchOeNudYMOx5eA1x-jJRFlTa0h6d" 
                 alt="Zambrano Electric Logo" 
                 className="h-20 w-auto object-contain"
                 referrerPolicy="no-referrer"
               />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Top-rated industrial & commercial electrical contractors serving Amarillo and the Texas Panhandle. Powering progress with precision and heavy-duty capabilities.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4">Branches</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/branch/electrical" className="hover:text-race-red transition-colors">Electrical Contractor</Link></li>
              <li><Link to="/branch/underground" className="hover:text-race-red transition-colors">Underground Systems</Link></li>
              <li><Link to="/branch/compressed-air" className="hover:text-race-red transition-colors">Compressed Air</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-race-red transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-race-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2 font-mono"><Phone className="h-4 w-4 text-race-red" /> (806) 576-7703</li>
              <li className="flex items-center gap-2 font-mono"><Mail className="h-4 w-4 text-race-red" /> jz@zambranoelectric.com</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-race-red mt-1" /> Amarillo, TX<br/>Texas Panhandle</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-metal flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Zambrano Electric, LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
