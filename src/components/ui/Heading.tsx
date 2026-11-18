import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

// One heading system for the whole site:
//  - Eyebrow: small red-rule label above a heading
//  - PageHeader: the single upright H1 at the top of every inner page
//  - SectionHeading: italic H2 used for every section, with a red accent word

export const Eyebrow = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn('flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-gray-300 mb-5', className)}>
    <span className="w-10 h-[2px] bg-race-red block flex-shrink-0" />
    {children}
  </p>
);

interface HeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  accent?: ReactNode;
  children?: ReactNode;
  align?: 'left' | 'center';
  size?: 'lg' | 'sm';
  className?: string;
}

export const PageHeader = ({ eyebrow, title, accent, children, className }: HeadingProps) => (
  <header className={cn('mb-12 max-w-4xl', className)}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-balance mb-6">
      {title}
      {accent && <> <span className="text-race-red">{accent}</span></>}
    </h1>
    {children && <div className="text-gray-300 text-lg leading-relaxed max-w-3xl space-y-4">{children}</div>}
  </header>
);

export const SectionHeading = ({ eyebrow, title, accent, children, align = 'left', size = 'lg', className }: HeadingProps) => (
  <div className={cn('mb-12', align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl', className)}>
    {eyebrow && <Eyebrow className={align === 'center' ? 'justify-center' : undefined}>{eyebrow}</Eyebrow>}
    <h2 className={cn('font-black uppercase italic tracking-tighter leading-[0.95] text-balance text-[#E4E3E0]', size === 'lg' ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl')}>
      {title}
      {accent && <> <span className="text-race-red">{accent}</span></>}
    </h2>
    {children && <p className="text-gray-400 text-base leading-relaxed mt-5">{children}</p>}
  </div>
);
