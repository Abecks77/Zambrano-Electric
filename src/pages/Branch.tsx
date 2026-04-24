import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, HardHat, Wind, Send, Search } from 'lucide-react';

const branchData: Record<string, any> = {
  'electrical': {
    title: 'Electrical Contractor',
    subtitle: 'Commercial & Industrial Solutions',
    description: 'Our electrical division handles high-complexity projects for industrial facilities. From switchgear installation to full plant automation controls, we ensure your infrastructure is safe, compliant, and optimized for maximum uptime.',
    image: 'https://images.unsplash.com/photo-1454165833714-c5a4548c26b8?q=80&w=2070&auto=format&fit=crop',
    icon: Factory,
    features: [
      'High-Voltage Distribution',
      'Transformers & Switchgear',
      'Motor Control Centers (MCC)',
      'Industrial Automation & PLCs',
      'Hazardous Location Wiring',
      '24/7 Emergency Maintenance'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  'underground': {
    title: 'Underground Systems',
    subtitle: 'Precision Earthwork & Infrastructure',
    description: 'We specialize in safe, precise underground utility installation. Utilizing state-of-the-art hydro excavation and heavy-duty ditching equipment, we navigate complex underground environments without disrupting critical existing infrastructure.',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bcadc0e8?q=80&w=2070&auto=format&fit=crop',
    icon: HardHat,
    features: [
      'Hydro Excavation (Non-Destructive)',
      'Directional Drilling',
      'Trenching & Shoring',
      'Underground Duct Banks',
      'Manhole & Vault Installation',
      'Site Utility Preparation'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1590487988330-896898166946?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531834351336-db1be9ec4597?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  'compressed-air': {
    title: 'Compressed Air Systems',
    subtitle: 'Engineering & Piping',
    description: 'Reliable compressed air is the lifeblood of industrial manufacturing. We design, install, and maintain heavy-duty compressed air systems, ensuring optimal pressure, zero leaks, and seamless machinery integration.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop',
    icon: Wind,
    features: [
      'Compressor Room Design & Build',
      'Aluminum & Stainless Steel Piping',
      'Air Dryer & Filtration Systems',
      'Receiver Tank Installation',
      'System Audits & Leak Detection',
      'Machinery Pneumatic Integration'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop'
    ]
  }
};

const BranchContactForm = ({ branchName }: { branchName: string }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glassmorphism p-8 border-t-4 border-t-race-red">
      <h3 className="text-xl font-black uppercase tracking-widest text-[#E4E3E0] mb-6 border-b border-[#4A4A4A]/50 pb-4 flex items-center gap-3">
        <Send className="h-5 w-5 text-race-red" /> Request A Quote: {branchName}
      </h3>
      
      {submitted ? (
        <div className="py-12 text-center">
          <CheckCircle2 className="h-16 w-16 text-race-red mx-auto mb-4" />
          <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Message Dispatched</h4>
          <p className="text-gray-400">Our {branchName} specialists will review your request and contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Subject Matter Partner</label>
              <input required type="text" placeholder="Full Name" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Organization</label>
              <input required type="text" placeholder="Company Name" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Communication Channel</label>
              <input required type="email" placeholder="Email Address" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Project Classification</label>
              <select className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors">
                <option>New Installation</option>
                <option>Retrofit / Upgrade</option>
                <option>Maintenance / Repair</option>
                <option>Emergency Service</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Deployment Specifications</label>
            <textarea required rows={4} placeholder="Tell us about your project requirements..." className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors align-top"></textarea>
          </div>
          <button type="submit" className="w-full p-4 bg-race-red text-black font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 group hover:brightness-110">
            Submit Technical Inquiry <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
};

export const Branch = () => {
  const { id } = useParams<{ id: string }>();
  const branch = id ? branchData[id] : null;

  if (!branch) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display uppercase tracking-widest text-race-red mb-4">Branch Not Found</h2>
          <Link to="/" className="text-gray-400 hover:text-white underline uppercase text-sm tracking-widest">Return Home</Link>
        </div>
      </div>
    );
  }

  const Icon = branch.icon;

  return (
    <div className="flex-1 w-full relative pb-20">
      {/* Branch Hero */}
      <div className="relative h-[50vh] flex items-center border-b border-metal">
         <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity grayscale"
            style={{ backgroundImage: `url(${branch.image})` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center gap-4 mb-4">
               <div className="p-3 bg-race-red rounded shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                  <Icon className="h-8 w-8 text-white" />
               </div>
               <span className="text-gray-400 uppercase tracking-widest text-sm font-bold">{branch.subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
              {branch.title}
            </h1>
          </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-display font-bold uppercase tracking-wider mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-race-red block"></span>
              Overview
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {branch.description}
            </p>
            
            <div className="p-6 glassmorphism border-l-4 border-l-race-red mb-10">
              <h3 className="font-bold text-white uppercase tracking-widest mb-2 font-display">Safety & Precision</h3>
              <p className="text-sm text-gray-400">All work is executed following strict compliance and heavy-duty safety standards. We manage risk so you can focus on operations.</p>
            </div>

            <Link to="/schedule" className="inline-flex items-center px-6 py-3 bg-race-red hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm transition-all">
              Schedule Consultation <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div>
             <h2 className="text-2xl font-display font-bold uppercase tracking-wider mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-metal-light block"></span>
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branch.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-charcoal-light border border-metal hover:border-metal-light transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-race-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4 h-48">
              <div className="flex-1 bg-charcoal bg-cover bg-center border border-metal opacity-80" style={{ backgroundImage: `url(${branch.gallery ? branch.gallery[0] : branch.image})` }}></div>
              <div className="flex-1 bg-charcoal bg-cover bg-center border border-metal opacity-80 mix-blend-luminosity" style={{ backgroundImage: `url(${branch.gallery ? branch.gallery[1] : branch.image})` }}></div>
            </div>
          </div>
        </div>

        {/* Contact Form for specific branches */}
        {(id === 'electrical' || id === 'underground' || id === 'compressed-air') && (
          <div className="mt-20">
             <div className="max-w-3xl mx-auto">
                <BranchContactForm branchName={branch.title} />
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
