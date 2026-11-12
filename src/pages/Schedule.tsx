import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Briefcase, Activity, FileText, Phone } from 'lucide-react';
import { CallButton, CallReassurance } from '../components/ui/CallButton';
import { BUSINESS } from '../lib/business';
import { localBusinessSchema } from '../lib/schemas';

export const Schedule = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/xAuIjpx4UqRJpgJS79j0/webhook-trigger/5f7fb200-5ad9-462c-a5fc-6fabad15ffb3', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          formType: 'Scheduling Request'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitted(true);
    }
  };

  return (
    <div className="flex-1 w-full relative">
      <Helmet>
        <title>Schedule Service | Zambrano Electric | Hereford, TX</title>
        <meta name="description" content="Schedule a site visit or free estimate with Zambrano Electric. Industrial electrical, underground & compressed air in Hereford and the Texas Panhandle." />
        <link rel="canonical" href="https://zambranoelectric.com/schedule" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <div className="fixed inset-0 z-0 grid-lines opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 text-white">
        
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 flex items-center gap-4">
            <span className="w-12 h-1 bg-race-red block"></span>
            Schedule Service
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            The fastest way to book a site visit or estimate is to call us. Prefer not to call right now? Fill out the form and we’ll call you back.
          </p>
          <CallButton />
          <CallReassurance className="mt-5" />
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
                    <input name="company" required type="text" className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Contact Name</label>
                    <input name="contactName" required type="text" className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                    <input name="email" required type="email" className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                    <input name="phone" required type="tel" className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors" />
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
                  <textarea name="details" required rows={3} className="w-full bg-charcoal border border-metal focus:border-race-red focus:ring-1 focus:ring-race-red text-white p-3 outline-none transition-colors align-top"></textarea>
                </div>

                <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Best Time to Call You
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[['morning', 'Morning'], ['afternoon', 'Afternoon'], ['anytime', 'Anytime']].map(([value, label]) => (
                      <label key={value} className="relative cursor-pointer">
                        <input type="radio" name="timeOfDay" value={value} className="peer sr-only" defaultChecked={value === 'anytime'} />
                        <div className="p-3 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center text-xs font-bold uppercase tracking-widest text-gray-400 peer-checked:text-white">
                          {label}
                        </div>
                      </label>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Have site plans or drawings? Mention it above and we’ll arrange to get them from you.</p>
                </div>

                <button 
                  type="submit" 
                  className="w-full relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20 active:scale-95 transition-transform"
                >
                  <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                    Request a Call Back <Phone className="h-4 w-4 text-race-red" />
                  </span>
                </button>

              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glassmorphism p-6">
              <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-400" /> Availability
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Site visits are scheduled during business hours ({BUSINESS.hoursDisplay}).
              </p>
              <div className="p-3 bg-red-950/30 border border-red-900/50 rounded">
                <p className="text-race-red text-xs font-bold uppercase tracking-wider">Emergency?</p>
                <p className="text-gray-300 text-sm mt-1">For equipment failures and outages, call our 24/7 line: <a href={BUSINESS.phoneHref} className="text-white font-bold underline">{BUSINESS.phoneDisplay}</a></p>
              </div>
            </div>

             <div className="glassmorphism p-6 border-hidden">
              <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-gray-400" /> Bidding Process
              </h3>
              <p className="text-gray-400 text-sm">
                We provide comprehensive, itemized bids for all commercial and industrial projects, ensuring complete transparency on materials and labor before work begins. Estimates are free.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
