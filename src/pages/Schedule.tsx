import React, { useState } from 'react';
import { Calendar, Briefcase, Activity, FileText, UploadCloud } from 'lucide-react';

export const Schedule = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
      
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 flex items-center gap-4">
          <span className="w-12 h-1 bg-race-red block"></span>
          Start Your Project
        </h1>
        <p className="text-gray-400 text-lg">
          Select a service branch and request a site visit or consultation. Our coordination team will respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div className="lg:col-span-2">
          {submitted ? (
             <div className="glassmorphism p-12 text-center border-l-4 border-l-race-red">
                <Activity className="h-16 w-16 text-race-red mx-auto mb-6 animate-pulse" />
                <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white mb-4">Request Received</h2>
                <p className="text-gray-400">Your scheduling request has been securely logged into our system. A project manager will contact you shortly to confirm the site visit details.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="glassmorphism p-6 md:p-10">
              
              <div className="mb-8 p-4 bg-metal/30 border border-metal flex items-start gap-4">
                <FileText className="h-6 w-6 text-race-red flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Provide detailed information regarding your facility and project scope. Accurate data ensures we dispatch the correct technical personnel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Company Name</label>
                  <input required type="text" className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Contact Name</label>
                  <input required type="text" className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                  <input required type="tel" className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Service Branch</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label className="relative cursor-pointer">
                    <input type="radio" name="branch" value="electrical" className="peer sr-only" defaultChecked />
                    <div className="p-4 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center">
                      <span className="text-sm font-bold uppercase text-gray-300 peer-checked:text-white">Electrical</span>
                    </div>
                  </label>
                   <label className="relative cursor-pointer">
                    <input type="radio" name="branch" value="underground" className="peer sr-only" />
                    <div className="p-4 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center">
                      <span className="text-sm font-bold uppercase text-gray-300 peer-checked:text-white">Underground</span>
                    </div>
                  </label>
                   <label className="relative cursor-pointer">
                    <input type="radio" name="branch" value="compressed" className="peer sr-only" />
                    <div className="p-4 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center">
                      <span className="text-sm font-bold uppercase text-gray-300 peer-checked:text-white">Air Systems</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project Details & Location</label>
                <textarea required rows={3} className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors align-top"></textarea>
              </div>

              {/* Booking Calendar Selection */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Proposed Consultation Date
                </label>
                <div className="border border-metal p-1 bg-charcoal">
                  <div className="grid grid-cols-7 gap-1 text-center mb-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-[10px] font-bold text-gray-500 py-1">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: 30 }).map((_, i) => {
                      const day = i + 1;
                      const isPast = day < 5;
                      const isWeekend = (i + 1) % 7 === 0 || (i + 1) % 7 === 1; // Basic mock weekend logic
                      const isDisabled = isPast || isWeekend;
                      
                      return (
                        <label key={i} className={`relative block p-2 cursor-pointer ${isDisabled ? 'opacity-30 cursor-not-allowed bg-[#111]' : 'hover:bg-race-red/20 bg-[#161616]'}`}>
                          <input type="radio" name="proposedDate" value={day} className="peer sr-only" disabled={isDisabled} defaultChecked={day === 12} />
                          <span className={`text-sm tracking-tighter ${isDisabled ? 'text-gray-600' : 'text-[#E4E3E0] font-bold'} peer-checked:text-race-red`}>{day}</span>
                          <div className="absolute inset-0 border border-transparent peer-checked:border-race-red pointer-events-none"></div>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                   <label className="flex-1 relative cursor-pointer">
                      <input type="radio" name="timeOfDay" value="morning" className="peer sr-only" defaultChecked />
                      <div className="p-3 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center text-xs font-bold uppercase tracking-widest text-gray-400 peer-checked:text-white">
                        Morning
                      </div>
                   </label>
                   <label className="flex-1 relative cursor-pointer">
                      <input type="radio" name="timeOfDay" value="afternoon" className="peer sr-only" />
                      <div className="p-3 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center text-xs font-bold uppercase tracking-widest text-gray-400 peer-checked:text-white">
                        Afternoon
                      </div>
                   </label>
                </div>
              </div>

              <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Site Plans / Blueprints (Optional)</label>
                  <label htmlFor="file-upload" className="w-full relative cursor-pointer border-2 border-dashed border-metal hover:border-gray-400 p-8 flex flex-col items-center justify-center transition-colors bg-charcoal">
                    <UploadCloud className="h-8 w-8 text-gray-500 mb-2" />
                    <span className="text-sm text-gray-400">Drag files here or click to upload</span>
                    <input id="file-upload" type="file" className="sr-only" />
                  </label>
              </div>

              <button type="submit" className="w-full p-4 bg-race-red hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_15px_rgba(255,0,0,0.3)] border border-transparent">
                Submit Request
              </button>

            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glassmorphism p-6 border-t-2 border-t-race-red">
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-400" /> Availability
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Standard site visits are scheduled during regular business hours (M-F, 7AM - 5PM). 
            </p>
            <div className="p-3 bg-red-950/30 border border-red-900/50 rounded">
              <p className="text-race-red text-xs font-bold uppercase tracking-wider">Emergency Protocol Active</p>
              <p className="text-gray-300 text-sm mt-1">For critical infrastructure failure, call our 24/7 hotline directly.</p>
            </div>
          </div>

           <div className="glassmorphism p-6 border-hidden">
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-gray-400" /> Bidding Process
            </h3>
            <p className="text-gray-400 text-sm">
              We provide comprehensive, itemized bids for all commercial and industrial projects, ensuring complete transparency on materials and labor before deployment.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
