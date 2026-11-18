import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../../lib/business';
import { serviceAreas } from '../../lib/content';

export const Footer = () => {
  return (
    <footer className="bg-charcoal relative overflow-hidden pb-12 border-b-[8px] border-b-race-red">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center mb-4 group inline-flex" aria-label="Zambrano Electric Home">
               <img
                 src="/images/logo-240.webp"
                 width={240}
                 height={226}
                 loading="lazy"
                 alt="Zambrano Electric LLC logo"
                 className="h-20 w-auto object-contain"
               />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Licensed industrial &amp; commercial electrical contractor serving Hereford, Amarillo and the Texas Panhandle since {BUSINESS.licensedSince}.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4">Branches</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/branch/electrical" className="hover:text-race-red transition-colors">Electrical Contractor</Link></li>
              <li><Link to="/branch/underground" className="hover:text-race-red transition-colors">Underground Systems</Link></li>
              <li><Link to="/branch/compressed-air" className="hover:text-race-red transition-colors">Compressed Air</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-race-red transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-race-red transition-colors">FAQ</Link></li>
              <li><Link to="/schedule" className="hover:text-race-red transition-colors">Schedule Service</Link></li>
              <li><Link to="/contact" className="hover:text-race-red transition-colors">Contact</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-race-red transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-race-red transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4"><Link to="/service-areas" className="hover:text-race-red">Service Areas</Link></h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {serviceAreas.map((a) => (
                <li key={a.slug}><Link to={`/service-areas/${a.slug}`} className="hover:text-race-red transition-colors">{a.city}, TX</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href={BUSINESS.phoneHref} className="flex items-center gap-2 text-white font-bold hover:text-race-red"><Phone className="h-4 w-4 text-race-red" /> {BUSINESS.phoneDisplay}</a></li>
              <li className="text-xs leading-relaxed">{BUSINESS.hoursDisplay}<br />24/7 emergency line</li>
              <li><a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-race-red break-all"><Mail className="h-4 w-4 text-race-red" /> {BUSINESS.email}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-race-red mt-1" /> 3815 N Progressive Rd<br/>Hereford, TX 79045</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-metal flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Zambrano Electric, LLC. All rights reserved. · {BUSINESS.licenseDisplay}
          </p>
          <div className="flex space-x-6 text-gray-500 text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
