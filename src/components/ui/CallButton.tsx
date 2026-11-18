import { Phone } from 'lucide-react';
import { BUSINESS } from '../../lib/business';
import { cn } from '../../lib/utils';

interface CallButtonProps {
  label?: string;
  showNumber?: boolean;
  className?: string;
  size?: 'md' | 'lg';
}

// Primary call-to-action used site-wide: tapping dials the office to book.
// The number is printed on the button so desktop visitors can dial it too.
export const CallButton = ({
  label = 'Call to Book an Appointment',
  showNumber = true,
  className,
  size = 'lg',
}: CallButtonProps) => (
  <a
    href={BUSINESS.phoneHref}
    aria-label={`${label}: ${BUSINESS.phoneDisplay}`}
    className={cn(
      'group relative inline-block bg-race-red text-white font-black uppercase tracking-widest skew-x-[-10deg] transition-all shadow-[0_10px_30px_rgba(255,0,0,0.35)] border border-white/30 hover:bg-white hover:text-black',
      size === 'lg' ? 'px-8 sm:px-10 py-5 text-sm' : 'px-6 py-4 text-xs',
      className,
    )}
  >
    <span className="relative z-10 flex flex-col items-center skew-x-[10deg] leading-tight">
      <span className="inline-flex items-center gap-3">
        <Phone className="h-4 w-4 fill-current" /> {label}
      </span>
      {showNumber && (
        <span className="mt-1 text-base sm:text-lg tracking-wider font-display">{BUSINESS.phoneDisplay}</span>
      )}
    </span>
  </a>
);

// Short reassurance line shown under call buttons. Each phrase stays on one
// line so wrapping happens between phrases, never mid-phrase.
export const CallReassurance = ({ className }: { className?: string }) => (
  <ul className={cn('flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-widest text-gray-300 font-bold', className)}>
    {['Talk to our team directly', 'Free estimates', BUSINESS.hoursDisplay, BUSINESS.emergencyDisplay].map((item) => (
      <li key={item} className="whitespace-nowrap flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-race-red before:rounded-full">{item}</li>
    ))}
  </ul>
);
