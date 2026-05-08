import React, { useState } from 'react';
import { Calendar, Search, ArrowRight, ShieldAlert } from 'lucide-react';

export const HomeContactBooking = () => {
    const [submitted, setSubmitted] = useState(false);
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

    const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const success = await handleWebhookSubmit(new FormData(e.currentTarget), 'Home Slot Booking');
      if (success) setSubmitted(true);
    };

    const handleGeneralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const success = await handleWebhookSubmit(new FormData(e.currentTarget), 'Home General Inquiry');
      if (success) setGeneralInquirySubmitted(true);
    };

    return (
      <section className="pt-24 pb-32 bg-transparent relative">

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-[0.9] mb-4 text-[#E4E3E0]">
                Initiate <span className="text-race-red">Dispatch</span>
                </h2>
                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                Submit an inquiry or schedule an immediate consultation with out project managers.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* General Contact Form */}
                <div className="glassmorphism p-8">
                    <h3 className="text-xl font-black uppercase tracking-widest text-[#E4E3E0] mb-6 border-b border-[#4A4A4A]/50 pb-4 flex items-center gap-3">
                        <Search className="h-5 w-5 text-race-red" /> Direct Communication
                    </h3>
                    
                    {generalInquirySubmitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8">
                            <ArrowRight className="h-12 w-12 text-race-red mb-4" />
                            <h4 className="font-bold text-lg uppercase tracking-widest text-white mb-2">Transmission Success</h4>
                            <p className="text-sm text-gray-400 font-mono">Your signal has been received. Our heavy-duty team will respond shortly.</p>
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
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                                <input name="email" required type="email" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Transmission Message</label>
                                <textarea name="message" required rows={4} className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors align-top"></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20 group"
                            >
                                <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                                    Send General Inquiry <ArrowRight className="h-4 w-4 text-race-red" />
                                </span>
                            </button>
                        </form>
                    )}
                </div>

                {/* Booking Calendar Integration */}
                <div className="glassmorphism p-8 bg-[#0A0A0A]/40">
                    <h3 className="text-xl font-black uppercase tracking-widest text-[#E4E3E0] mb-6 border-b border-[#4A4A4A]/50 pb-4 flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-race-red" /> Secure a Slot
                    </h3>

                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8">
                            <ShieldAlert className="h-12 w-12 text-race-red mb-4 animate-pulse" />
                            <h4 className="font-bold text-lg uppercase tracking-widest text-white mb-2">Slot Locked</h4>
                            <p className="text-sm text-gray-400 font-mono">Your consultation slot has been reserved. Our deployment terminal will confirm via email.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleBookingSubmit} className="space-y-6 flex flex-col">
                            
                            <div className="border border-[rgba(74,74,74,0.5)] bg-[#050505] overflow-hidden">
                                <div className="p-4 border-b border-[rgba(74,74,74,0.5)]">
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                                        Target Date Selection
                                    </label>
                                    <div className="grid grid-cols-7 gap-1 text-center mb-1">
                                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                        <div key={i} className="text-[10px] font-bold text-gray-500 py-1">{day}</div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center">
                                        {Array.from({ length: 28 }).map((_, i) => {
                                        const day = i + 1;
                                        const isPast = day < 5;
                                        const isWeekend = (i + 1) % 7 === 0 || (i + 1) % 7 === 1; 
                                        const isDisabled = isPast || isWeekend;
                                        
                                        return (
                                            <label key={i} className={`relative block p-2 cursor-pointer ${isDisabled ? 'opacity-30 cursor-not-allowed bg-[#111]' : 'hover:bg-race-red/20 bg-[#161616]'}`}>
                                            <input type="radio" name="proposedDateHome" value={day} className="peer sr-only" disabled={isDisabled} defaultChecked={day === 14} />
                                            <span className={`text-sm tracking-tighter ${isDisabled ? 'text-gray-600' : 'text-[#E4E3E0] font-bold'} peer-checked:text-race-red`}>{day}</span>
                                            <div className="absolute inset-0 border border-transparent peer-checked:border-race-red pointer-events-none"></div>
                                            </label>
                                        );
                                        })}
                                    </div>
                                </div>

                                <div className="p-4 bg-charcoal/30 space-y-4">
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-2">
                                        Deployment Window
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex-1 relative cursor-pointer">
                                            <input type="radio" name="timeOfDayHome" value="morning" className="peer sr-only" defaultChecked />
                                            <div className="p-3 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center text-[10px] font-bold uppercase tracking-widest text-gray-500 peer-checked:text-white">
                                                AM Slot
                                            </div>
                                        </label>
                                        <label className="flex-1 relative cursor-pointer">
                                            <input type="radio" name="timeOfDayHome" value="afternoon" className="peer sr-only" />
                                            <div className="p-3 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center text-[10px] font-bold uppercase tracking-widest text-gray-500 peer-checked:text-white">
                                                PM Slot
                                            </div>
                                        </label>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm shadow-xl border border-white/20 active:scale-95 transition-transform"
                                    >
                                        <span className="relative z-10 inline-flex items-center gap-3">
                                            Lock In Deployment Date <Calendar className="h-4 w-4 text-race-red" />
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </div>
      </section>
    );
};
