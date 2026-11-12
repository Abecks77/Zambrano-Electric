import { Plus } from 'lucide-react';
import type { Faq } from '../../lib/branchSeo';

// Native <details> keeps every answer in the static HTML (crawlable, works
// without JavaScript) while still collapsing visually.
export const FaqList = ({ faqs }: { faqs: Faq[] }) => (
  <div className="space-y-4">
    {faqs.map((faq) => (
      <details key={faq.question} className="group glassmorphism border-l-4 border-l-metal open:border-l-race-red">
        <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
          <h3 className="font-bold uppercase tracking-wide text-sm text-[#E4E3E0]">{faq.question}</h3>
          <Plus className="h-4 w-4 text-race-red flex-shrink-0 transition-transform group-open:rotate-45" />
        </summary>
        <p className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
      </details>
    ))}
  </div>
);
