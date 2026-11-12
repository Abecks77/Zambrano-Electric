// Single source of truth for business details used across CTAs, pages and
// structured data. Change the phone number here and it updates everywhere.
export const BUSINESS = {
  name: 'Zambrano Electric LLC',
  url: 'https://zambranoelectric.com',
  phoneDisplay: '(806) 576-7703',
  phoneHref: 'tel:+18065767703',
  phoneE164: '+1-806-576-7703',
  email: 'jz@zambranoelectric.com',
  street: '3815 N Progressive Rd',
  city: 'Hereford',
  region: 'TX',
  postalCode: '79045',
  hoursDisplay: 'Mon–Fri, 8 AM – 5 PM',
  emergencyDisplay: '24/7 emergency line',
  logo: 'https://lh3.googleusercontent.com/d/178nfchOeNudYMOx5eA1x-jJRFlTa0h6d',
  ogImage: 'https://lh3.googleusercontent.com/d/1LoVQ9qL3Ms5p8RxrCV7OmmrbgmKUZRqO',
} as const;
