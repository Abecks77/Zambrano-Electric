import React, { useState } from 'react';
import { Calendar, Search, ArrowRight, ShieldAlert } from 'lucide-react';

export const HomeContactBooking = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
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
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                                <input type="text" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Company</label>
                                <input type="text" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Transmission Message</label>
                            <textarea rows={4} className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors align-top"></textarea>
                        </div>
                        <button type="button" className="w-full p-4 bg-[rgba(30,30,30,0.8)] border border-[rgba(74,74,74,0.5)] hover:border-race-red text-white font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 group">
                            Send General Inquiry <ArrowRight className="h-4 w-4 text-race-red transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                {/* Booking Calendar Integration */}
                <div className="glassmorphism p-8 border-t-4 border-t-race-red bg-[#0A0A0A]/40">
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
                        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
                            
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                                    Target Date
                                </label>
                                <div className="border border-[rgba(74,74,74,0.5)] p-1 bg-[#050505]">
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
                            </div>

                            <div className="flex gap-4">
                                <label className="flex-1 relative cursor-pointer">
                                    <input type="radio" name="timeOfDayHome" value="morning" className="peer sr-only" defaultChecked />
                                    <div className="p-3 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center text-xs font-bold uppercase tracking-widest text-gray-400 peer-checked:text-white">
                                        AM Slot
                                    </div>
                                </label>
                                <label className="flex-1 relative cursor-pointer">
                                    <input type="radio" name="timeOfDayHome" value="afternoon" className="peer sr-only" />
                                    <div className="p-3 border border-metal bg-charcoal peer-checked:border-race-red peer-checked:bg-race-red/10 transition-colors text-center text-xs font-bold uppercase tracking-widest text-gray-400 peer-checked:text-white">
                                        PM Slot
                                    </div>
                                </label>
                            </div>

                            <div className="mt-auto pt-6">
                                 <button type="submit" className="w-full px-8 py-4 bg-race-red text-black font-black uppercase tracking-widest text-sm hover:brightness-110 skew-x-[-10deg] flex items-center justify-center transition-all">
                                    <span className="inline-block skew-x-[10deg] flex items-center gap-2">Lock In Date</span>
                                </button>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </div>
      </section>
    );
};
