import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Factory, HardHat, Wind, Send, Search } from 'lucide-react';

const branchData: Record<string, any> = {
  'electrical': {
    title: 'Electrical Contractor',
    subtitle: 'Commercial & Industrial Solutions',
    description: 'Our electrical division handles high-complexity projects for industrial facilities. From switchgear installation to full plant automation controls, we ensure your infrastructure is safe, compliant, and optimized for maximum uptime.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop', // A more industrial switchgear/panel image if possible, or use one that looks like the screenshot
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
      'Hydro Excavation',
      'Trenching',
      'Manhole/Vault Installation',
      'Underground Electrical Fault Repairs'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1590487988330-896898166946?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531834351336-db1be9ec4597?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  'compressed-air': {
    title: 'Compressed Air',
    subtitle: 'Industrial Pneumatic Solutions',
    description: 'Reliable compressed air is the lifeblood of industrial manufacturing. We design, install, and maintain heavy-duty compressed air systems, ensuring optimal pressure, zero leaks, and seamless machinery integration.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    icon: Wind,
    features: [
      'Compressor Room Design & Build',
      'Compressed Air Piping Installation',
      'Receiver Tank Installation',
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/xAuIjpx4UqRJpgJS79j0/webhook-trigger/5f7fb200-5ad9-462c-a5fc-6fabad15ffb3', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          branch: branchName,
          formType: 'Branch Inquiry'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      // Fallback to showing success state even if webhook fails for UX, or handle error
      setSubmitted(true);
    }
  };

  return (
    <div className="glassmorphism p-8">
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
              <input name="fullName" required type="text" placeholder="Full Name" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Organization</label>
              <input name="company" required type="text" placeholder="Company Name" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Communication Channel</label>
              <input name="email" required type="email" placeholder="Email Address" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Project Classification</label>
              <select name="classification" className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors">
                <option>New Installation</option>
                <option>Retrofit / Upgrade</option>
                <option>Maintenance / Repair</option>
                <option>Emergency Service</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Deployment Specifications</label>
            <textarea name="message" required rows={4} placeholder="Tell us about your project requirements..." className="w-full bg-[#0A0A0A] border border-[rgba(74,74,74,0.5)] focus:border-race-red text-white p-3 outline-none transition-colors align-top"></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20 group active:scale-95 transition-transform"
          >
            <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
              Submit Technical Inquiry <ArrowRight className="h-4 w-4 text-race-red transform group-hover:translate-x-1 transition-transform" />
            </span>
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
      <Helmet>
        <title>{branch.title} | Zambrano Electric | Hereford, TX</title>
        <meta name="description" content={`${branch.description.substring(0, 150)}... Contact Zambrano Electric in Hereford, TX for ${branch.title.toLowerCase()} services.`} />
        <link rel="canonical" href={`https://zambranoelectric.com/branch/${id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${branch.title}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Zambrano Electric LLC",
              "url": "https://zambranoelectric.com"
            },
            "description": `${branch.description}`,
            "areaServed": ["Hereford, TX", "Amarillo, TX", "Texas Panhandle"],
            "url": `https://zambranoelectric.com/branch/${id}`
          })}
        </script>
      </Helmet>
      
      <div className="fixed inset-0 z-0 grid-lines opacity-20 pointer-events-none"></div>
      
      {/* Branch Hero */}
      <div className="relative h-[60vh] flex items-end pb-20">
         <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity grayscale"
            style={{ backgroundImage: `url(${branch.image})` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col gap-6">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-race-red flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.4)] flex-shrink-0">
                     <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 uppercase tracking-[0.4em] text-[10px] font-black">{branch.subtitle}</span>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mt-2">
                        {branch.title}
                    </h1>
                  </div>
               </div>
            </div>
          </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
              <span className="w-10 h-[2px] bg-race-red block"></span>
              Overview
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-medium">
              {branch.description}
            </p>
            
            <div className="p-8 glassmorphism border-l-4 border-l-metal mb-12">
              <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-3">Safety Protocol & Compliance</h3>
              <p className="text-sm text-gray-400 font-mono tracking-tight leading-relaxed">
                All deep-earth operations are executed under strict OSHA compliance and heavy-duty subterranean safety standards. We manage subsurface risk so your timeline remains intact.
              </p>
            </div>

            <Link 
              to="/schedule" 
              className="relative px-12 py-6 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-2xl border border-white/20 active:scale-95 inline-block"
            >
              <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                Initiate Project Protocol <ArrowRight className="h-5 w-5 text-race-red" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7">
             <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
              <span className="w-10 h-[2px] bg-metal block"></span>
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branch.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-charcoal-light border border-metal/30 hover:border-race-red/50 transition-all group">
                  <span className="text-[#E4E3E0] text-xs font-bold uppercase tracking-widest">{feature}</span>
                  <CheckCircle2 className="h-5 w-5 text-race-red opacity-100 group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 h-64">
              <div className="bg-charcoal bg-cover bg-center border border-metal/20 opacity-60 hover:opacity-100 transition-opacity" style={{ backgroundImage: `url(${branch.gallery ? branch.gallery[0] : branch.image})` }}></div>
              <div className="bg-charcoal bg-cover bg-center border border-metal/20 opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all" style={{ backgroundImage: `url(${branch.gallery ? branch.gallery[1] : branch.image})` }}></div>
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
