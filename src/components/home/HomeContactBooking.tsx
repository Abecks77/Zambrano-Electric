import React, { useState } from 'react';
import { Search, ArrowRight, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { CallButton } from '../ui/CallButton';
import { BUSINESS } from '../../lib/business';
import { SectionHeading } from '../ui/Heading';

export const HomeContactBooking = () => {
    const [generalInquirySubmitted, setGeneralInquirySubmitted] = useState(false);

    const handleWebhookSubmit = async (formData: FormData, formType: string) => {
      const data = Object.fromEntries(formData.entries());
      try {
        await fetch('https://services.leadconnectorhq.com/hooks/xAuIjpx4UqRJpgJS79j0/webhook-trigger/5f7fb200-5ad9-462c-a5fc-6fabad15ffb3', {
          method: 'POST',
          body: JSON.stringify({
            ...data,
            formType: formType
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return true;
      } catch (error) {
        console.error('Submission error:', error);
        return true; // Still return true for UX fallback
      }
    };

    const handleGeneralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const success = await handleWebhookSubmit(new FormData(e.currentTarget), 'Home General Inquiry');
      if (success) setGeneralInquirySubmitted(true);
    };

    return (
      <section id="contact" className="py-20 bg-transparent relative scroll-mt-28">

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <SectionHeading eyebrow="Get Started" title="Book Your" accent="Appointment" align="center">
              The fastest way to get on our schedule is a phone call. Prefer to write? Send a message and we’ll call you back.
            </SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* General Contact Form */}
                <div className="glassmorphism p-8">
                    <h3 className="text-xl font-black uppercase tracking-widest text-[#E4E3E0] mb-6 border-b border-[#4A4A4A]/50 pb-4 flex items-center gap-3">
                        <Search className="h-5 w-5 text-race-red" /> Request a Call Back
                    </h3>
                    
                    {generalInquirySubmitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8">
                            <ArrowRight className="h-12 w-12 text-race-red mb-4" />
                            <h4 className="font-bold text-lg uppercase tracking-widest text-white mb-2">Request Received</h4>
                            <p className="text-sm text-gray-400 font-mono">Thanks — we’ll call you back during business hours. Need help sooner? Call {BUSINESS.phoneDisplay}.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleGeneralSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                                    <input name="fullName" required type="text" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Company</label>
                                    <input name="company" required type="text" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="home-phone" className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                                    <input id="home-phone" name="phone" required type="tel" autoComplete="tel" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="home-email" className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                                    <input id="home-email" name="email" required type="email" autoComplete="email" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">What do you need done?</label>
                                <textarea name="message" required rows={4} className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors align-top"></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20 group"
                            >
                                <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                                    Request a Call Back <ArrowRight className="h-4 w-4 text-race-red" />
                                </span>
                            </button>
                        </form>
                    )}
                </div>

                {/* Book by phone */}
                <div className="glassmorphism p-8 bg-[#0A0A0A]/40 border-l-4 border-l-race-red flex flex-col order-first">
                    <h3 className="text-xl font-black uppercase tracking-widest text-[#E4E3E0] mb-6 border-b border-[#4A4A4A]/50 pb-4 flex items-center gap-3">
                        <Phone className="h-5 w-5 text-race-red" /> Book by Phone
                    </h3>
                    <ul className="space-y-4 text-sm text-gray-300 mb-8">
                        {[
                          'Talk directly with our team — no call center',
                          'Describe the job and we’ll set a site visit or estimate time',
                          'Free estimates on commercial & industrial projects',
                          'Emergency? Our line is answered 24/7',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-race-red flex-shrink-0 mt-0.5" /> {item}
                          </li>
                        ))}
                    </ul>
                    <div className="mt-auto flex flex-col items-center gap-4">
                        <CallButton className="w-full" />
                        <p className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-400 font-bold">
                            <Clock className="h-4 w-4 text-race-red" /> Office: {BUSINESS.hoursDisplay} · {BUSINESS.emergencyDisplay}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
};
