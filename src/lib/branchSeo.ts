// Extra per-service content used for SEO / AI-search answers on branch pages.
// Keep claims factual: only services and practices the business actually offers.
export interface Faq {
  question: string;
  answer: string;
}

export interface BranchSeo {
  metaDescription: string;
  safety: string;
  details: string[];
  faqs: Faq[];
}

export const branchSeo: Record<string, BranchSeo> = {
  electrical: {
    metaDescription:
      'Industrial & commercial electrical contractor in Hereford & Amarillo, TX: switchgear, transformers, MCCs, PLC controls, 24/7 emergency. Call (806) 576-7703.',
    safety:
      'Electrical work is performed to NEC and OSHA requirements, including lockout/tagout practices, so your people and equipment stay protected while we work.',
    details: [
      'Zambrano Electric’s electrical division builds and maintains power systems for manufacturing plants, processing facilities, agricultural operations and commercial buildings across the Texas Panhandle — new construction, facility expansions, equipment additions and service upgrades.',
      'Typical projects include high-voltage power distribution, transformer and switchgear installation, motor control centers (MCCs), industrial automation and PLC wiring, and hazardous-location wiring. When equipment goes down, our emergency line is answered 24/7.',
    ],
    faqs: [
      {
        question: 'What kind of electrical work does Zambrano Electric do?',
        answer:
          'We focus on commercial and industrial electrical work: power distribution, transformers and switchgear, motor control centers, PLC and automation wiring, hazardous-location wiring and emergency repair for plants, processing facilities, agricultural operations and commercial buildings.',
      },
      {
        question: 'Do you offer emergency electrical repair?',
        answer:
          'Yes. Our line at (806) 576-7703 is answered 24/7 for equipment failures, power loss and other critical electrical problems across the Texas Panhandle.',
      },
      {
        question: 'How do I get an electrical estimate?',
        answer:
          'Call (806) 576-7703. We’ll ask a few questions about the job, schedule a site visit, and provide an itemized bid covering labor, materials and timeline. Estimates are free.',
      },
      {
        question: 'What should I have ready when I call about an electrical project?',
        answer:
          'Helpful details are the facility address, what equipment or area is involved, the service size or voltage if you know it, any drawings or one-line diagrams, and your timeline. Don’t worry if you don’t have all of it — we gather the rest during the site visit.',
      },
    ],
  },
  underground: {
    metaDescription:
      'Underground utility contractor in the Texas Panhandle: hydro excavation, trenching, vaults & underground fault repair. Call (806) 576-7703.',
    safety:
      'Excavation follows OSHA trenching and excavation requirements, and we use hydro excavation to expose existing utilities before digging near them.',
    details: [
      'Our underground division installs and repairs the infrastructure buried beneath your site: conduit runs, manholes and vaults, and the trenches that carry them.',
      'We use hydro excavation — pressurized water and vacuum — to expose existing lines without the risk of digging blind, which makes it the safer choice around live utilities. When an underground cable fails, we locate and repair the fault so power gets back to your equipment.',
    ],
    faqs: [
      {
        question: 'What is hydro excavation?',
        answer:
          'Hydro excavation uses pressurized water to loosen soil and a vacuum to remove it. It exposes buried pipes and cables without the strike risk of mechanical digging, so it is the preferred method near existing utilities.',
      },
      {
        question: 'Can you repair an underground electrical fault?',
        answer:
          'Yes. We locate and repair underground electrical faults and replace damaged conduit or cable so the affected equipment can be put back in service.',
      },
      {
        question: 'How do I schedule underground or trenching work?',
        answer:
          'Call (806) 576-7703 to describe the job. We’ll set up a site visit, review existing utilities and provide an itemized bid.',
      },
      {
        question: 'What is the difference between hydro excavation and trenching?',
        answer:
          'Trenching cuts an open channel with mechanical equipment to lay conduit or pipe. Hydro excavation uses pressurized water and a vacuum to remove soil, which is safer for exposing existing utilities and for digging in tight or congested areas. Many projects use both: hydro excavation to locate existing lines, then trenching for the new run.',
      },
    ],
  },
  'compressed-air': {
    metaDescription:
      'Industrial compressed air installation in the Texas Panhandle: compressor rooms, air piping, receiver tanks & machinery hookup. Call (806) 576-7703.',
    safety:
      'Air systems are installed to the manufacturer’s requirements and pressure-tested before turnover, so your equipment gets the pressure and volume it needs.',
    details: [
      'We design and install compressed air systems for manufacturing and processing plants, from the compressor room to the point of use: compressor room layout and build-out, distribution piping, receiver tanks, and tying air supply into your production machinery.',
      'Because we are also an electrical contractor, one company can handle both the power to your compressors and the air system itself — fewer contractors to coordinate on a single project.',
    ],
    faqs: [
      {
        question: 'Can you add or expand compressed air in an existing plant?',
        answer:
          'Yes. We install new distribution piping, receiver tanks and drops to new machinery, and can build out or reconfigure a compressor room as your plant grows.',
      },
      {
        question: 'Do you also handle the electrical work for compressors?',
        answer:
          'Yes. Zambrano Electric is an electrical contractor, so we can run power to compressors and related equipment as part of the same project.',
      },
      {
        question: 'How do I get a compressed air estimate?',
        answer:
          'Call (806) 576-7703. We’ll discuss your equipment and air demand, schedule a site visit and provide an itemized bid.',
      },
      {
        question: 'What causes pressure drops in a compressed air system?',
        answer:
          'Common causes are undersized or overly long piping runs, leaks at fittings, hoses and connections, clogged filters, and too little receiver (storage) capacity to cover spikes in demand. A system review pinpoints which of these applies to your plant.',
      },
    ],
  },
};
