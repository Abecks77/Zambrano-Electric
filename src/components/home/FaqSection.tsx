import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeFaqs } from '../../lib/content';
import { CallButton } from '../ui/CallButton';
import { SectionHeading } from '../ui/Heading';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  side: string;
}

const faqs: FAQ[] = homeFaqs.map((f, i) => ({ id: i + 1, ...f, side: i < 3 ? 'left' : 'right' }));

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
        <div className="p-6 pt-0 text-sm text-gray-400 leading-relaxed max-w-lg">
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
    <section className="py-20 bg-transparent relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading eyebrow="FAQ" title="Frequently Asked" accent="Questions" align="center">
          Straight answers about our services, safety and how we bid projects.
        </SectionHeading>

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
            <p className="text-sm text-gray-400 mb-6">Have a question we didn’t answer? <Link to="/faq" className="text-race-red underline">See all FAQs</Link> or call us.</p>
            <CallButton label="Call & Ask Us Directly" />
        </div>

      </div>
    </section>
  );
};
