import React from 'react';
import { Mail, Phone, MapPin, Search } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 flex items-center gap-4">
          <span className="w-12 h-1 bg-metal-light block"></span>
          About & Contact
        </h1>
        <p className="text-gray-400 max-w-3xl text-lg font-light leading-relaxed">
          Founded on the principles of extreme reliability and industrial-grade craftsmanship, Zambrano Electric engineers solutions for the most demanding environments. We don't just build systems; we build the infrastructure that powers progress.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-6">Headquarters</h2>
          
          <div className="glassmorphism p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-metal rounded">
                <MapPin className="h-6 w-6 text-race-red" />
              </div>
              <div>
                <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-1">Facility Address</h3>
                <p className="text-gray-400">Amarillo, TX <br/>Serving the Texas Panhandle</p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="p-3 bg-metal rounded">
                <Phone className="h-6 w-6 text-race-red" />
              </div>
              <div>
                <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-1">Dispatch & Support</h3>
                <p className="text-gray-400">Main: (555) 123-4567<br/>Emergency 24/7: (555) 911-3456</p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="p-3 bg-metal rounded">
                <Mail className="h-6 w-6 text-race-red" />
              </div>
              <div>
                <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-1">Electronic Comm</h3>
                <p className="text-gray-400">info@zambranoelectric.com<br/>bidding@zambranoelectric.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* General Inquiry Form */}
        <div>
           <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-6">General Inquiry</h2>
           <form className="glassmorphism p-8">
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-charcoal border border-metal focus:border-race-red text-white p-3 outline-none transition-colors" />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-charcoal border border-metal focus:border-race-red text-white p-3 outline-none transition-colors" />
              </div>
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-charcoal border border-metal focus:border-race-red text-white p-3 outline-none transition-colors"></textarea>
              </div>
              <button type="button" className="w-full p-4 border border-metal hover:border-race-red text-white font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2">
                Send Transmission <Search className="h-4 w-4" />
              </button>
           </form>
        </div>

      </div>
    </div>
  );
};
