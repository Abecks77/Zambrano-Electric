import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Search, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
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
          formType: 'General Contact Inquiry'
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
        <title>Contact Us | Zambrano Electric | Hereford, TX</title>
        <meta name="description" content="Contact Zambrano Electric in Hereford, TX for 24/7 emergency dispatch and reliable commercial electrical contracting." />
        <link rel="canonical" href="https://zambranoelectric.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Zambrano Electric LLC",
            "url": "https://zambranoelectric.com/contact"
          })}
        </script>
      </Helmet>
      
      <div className="fixed inset-0 z-0 grid-lines opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 text-white">
        
        <div className="mb-16">
          <h1 className="text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
            <span className="w-10 h-[2px] bg-race-red block"></span>
            Organization Overview
          </h1>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 max-w-4xl">
            Engineered for Extreme Reliability
          </h2>
          <p className="text-gray-300 max-w-3xl text-lg font-medium leading-relaxed">
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
                  <p className="text-gray-400">3815 N Progressive Rd <br/>Hereford, TX 79045</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-metal rounded">
                  <Phone className="h-6 w-6 text-race-red" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-1">Dispatch & Support</h3>
                  <p className="text-gray-400">Main: (806) 576-7703<br/>Emergency 24/7: (806) 576-7703</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-metal rounded">
                  <Mail className="h-6 w-6 text-race-red" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-1">Electronic Comm</h3>
                  <p className="text-gray-400">jz@zambranoelectric.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* General Inquiry Form */}
          <div>
             <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-6">General Inquiry</h2>
             {submitted ? (
               <div className="glassmorphism p-12 text-center border-l-4 border-l-race-red">
                  <CheckCircle2 className="h-16 w-16 text-race-red mx-auto mb-6" />
                  <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white mb-4">Transmission Success</h2>
                  <p className="text-gray-400 font-mono text-sm leading-relaxed">Your data has been successfully routed to our dispatch terminal. An operative will contact you as soon as the project scope is analyzed.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="glassmorphism p-8">
                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                    <input name="name" required type="text" className="w-full bg-charcoal border border-metal focus:border-race-red text-white p-3 outline-none transition-colors" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                    <input name="email" required type="email" className="w-full bg-charcoal border border-metal focus:border-race-red text-white p-3 outline-none transition-colors" />
                  </div>
                  <div className="mb-8">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                    <textarea name="message" required rows={5} className="w-full bg-charcoal border border-metal focus:border-race-red text-white p-3 outline-none transition-colors"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20 group active:scale-95 transition-transform"
                  >
                    <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                      Send Transmission <Search className="h-4 w-4 text-race-red" />
                    </span>
                  </button>
               </form>
             )}
          </div>

        </div>
      </div>
    </div>
  );
};
