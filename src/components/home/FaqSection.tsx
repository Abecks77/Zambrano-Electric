import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  side: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Do you offer 24/7 emergency electrical services?",
    answer: "Yes. Critical infrastructure doesn't sleep, and neither do we. We provide round-the-clock emergency response for industrial equipment failures, power outages, and critical system faults across the Texas Panhandle.",
    side: 'left'
  },
  {
    id: 2,
    question: "What is your primary service area?",
    answer: "Headquartered in Hereford, TX, we are the premier commercial and industrial electrical contractors serving the entire Texas Panhandle region, including surrounding industrial and agricultural hubs.",
    side: 'left'
  },
  {
    id: 3,
    question: "What types of industrial facilities do you specialize in?",
    answer: "Our expertise is focused on heavy-duty environments. This includes manufacturing plants, processing facilities, oil & gas operations, agricultural processing plants, and large-scale commercial warehousing.",
    side: 'left'
  },
  {
    id: 4,
    question: "Can you handle high-voltage underground installations?",
    answer: "Absolutely. Our dedicated Underground Systems division utilizes non-destructive hydro excavation and precision directional drilling to securely install subterranean conduit and high-voltage distribution lines without disrupting existing utilities.",
    side: 'right'
  },
  {
    id: 5,
    question: "How do you handle project bidding and estimates?",
    answer: "Transparency is key. We provide comprehensive, itemized bids for all commercial and industrial projects, ensuring complete clarity on materials, labor, and timelines before deployment begins.",
    side: 'right'
  },
  {
    id: 6,
    question: "What safety certifications do your crews hold?",
    answer: "We maintain a flawless 100% safety record. All operations strictly adhere to OSHA standards, and we are heavily certified with ISNetworld compliance, ensuring our crews operate securely in high-risk environments.",
    side: 'right'
  }
];

interface FaqItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <div 
      className={`glassmorphism border-l-4 transition-all duration-300 ${isOpen ? 'border-l-race-red' : 'border-l-metal hover:border-l-metal-light'}`}
    >
      <button 
        onClick={() => onToggle(faq.id)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={`font-bold uppercase tracking-wide text-sm ${isOpen ? 'text-[#E4E3E0]' : 'text-gray-400'}`}>
          {faq.question}
        </span>
        <div className={`p-1 bg-[#161616] border transition-colors ${isOpen ? 'border-race-red text-race-red' : 'border-metal text-gray-500'}`}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-xs text-gray-400 leading-relaxed max-w-lg">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export const FaqSection = () => {
  const [openIds, setOpenIds] = useState<number[]>([1, 4]); // Open first of each side by default

  const toggleFaq = (id: number) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const leftFaqs = faqs.filter(faq => faq.side === 'left');
  const rightFaqs = faqs.filter(faq => faq.side === 'right');

  return (
    <section className="py-24 bg-transparent relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-metal rounded-full mb-6 border border-metal-light">
            <HelpCircle className="h-6 w-6 text-race-red" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-[0.9] mb-4 text-[#E4E3E0]">
            Frequently Asked <span className="text-race-red">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Operational details and capabilities for our industrial contracting services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map(faq => (
              <FaqItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openIds.includes(faq.id)} 
                onToggle={toggleFaq} 
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map(faq => (
              <FaqItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openIds.includes(faq.id)} 
                onToggle={toggleFaq} 
              />
            ))}
          </div>
        </div>

        {/* New CTA: Still Have Questions? */}
        <div className="mt-16 flex flex-col items-center">
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-6 font-mono">End of knowledge base // Missing Information?</p>
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-10 py-5 bg-metal-plate text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-all shadow-xl border border-white/20"
            >
              <span className="relative z-10 inline-flex items-center gap-3 skew-x-[10deg]">
                Speak Directly with Management <HelpCircle className="h-4 w-4 text-race-red" />
              </span>
            </button>
        </div>

      </div>
    </section>
  );
};
