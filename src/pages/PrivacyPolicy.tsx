import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck } from 'lucide-react';
import { localBusinessSchema } from '../lib/schemas';

export const PrivacyPolicy = () => {
  return (
    <div className="flex-1 w-full relative">
      <Helmet>
        <title>Privacy Policy | Zambrano Electric LLC | Hereford, TX</title>
        <meta name="description" content="Privacy Policy for Zambrano Electric LLC in Hereford, TX. Learn about how we collect, use, and protect your information." />
        <link rel="canonical" href="https://zambranoelectric.com/privacy-policy" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <div className="fixed inset-0 z-0 grid-lines opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 text-gray-300">
        
        <div className="mb-12">
          <h1 className="text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-4 text-white">
            <span className="w-10 h-[2px] bg-race-red block"></span>
            Legal Documentation
          </h1>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white flex items-center gap-4">
            <ShieldCheck className="h-8 w-8 text-race-red" />
            Privacy Policy
          </h2>
          <p className="text-gray-400 font-mono text-sm">Zambrano Electric &middot; Hereford, Texas &middot; Last updated: June 11, 2026</p>
        </div>

        <div className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-headings:font-display prose-headings:uppercase prose-headings:tracking-widest prose-a:text-race-red hover:prose-a:text-white prose-strong:text-gray-200 max-w-none">
          <p className="lead text-lg mb-8">
            Zambrano Electric ("Company," "we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using our website or providing your information to us, you agree to the practices described here.
          </p>

          <div className="space-y-12">
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">01.</span> Information We Collect
              </h3>
              <p>We may collect the following information when you contact us or use our website:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 text-sm font-mono">
                <li><strong className="text-gray-200">Contact information</strong> you provide, such as your name, phone number, email address, and service address.</li>
                <li><strong className="text-gray-200">Service details</strong> you share with us, such as the nature of the electrical work you need.</li>
                <li><strong className="text-gray-200">Messages and communications</strong> you send through our contact form, chat widget, phone, email, or text.</li>
                <li><strong className="text-gray-200">Website usage data</strong> such as IP address, browser type, and pages visited, collected automatically through standard web technologies.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">02.</span> How We Use Your Information
              </h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 text-sm font-mono">
                <li>Respond to your inquiries and provide estimates.</li>
                <li>Schedule, confirm, and follow up on appointments and services.</li>
                <li>Send you service-related text messages (SMS) that you have opted in to receive.</li>
                <li>Process payments and maintain service records.</li>
                <li>Improve our website and services.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">03.</span> SMS / Text Messaging and Mobile Data
              </h3>
              <p>
                When you provide your mobile number through our website contact form or chat widget and consent to receive text messages, we use that number to send messages related to your inquiry, scheduling, estimates, service updates, and customer support. Consent to receive text messages is not a condition of purchasing any goods or services.
              </p>
              <p className="mt-4">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p className="mt-4">
                You can opt out of SMS at any time by replying STOP to any message. Reply HELP for help, or contact us at (806) 576-7703 or jz@zambranoelectric.com. Message and data rates may apply, and message frequency varies.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">04.</span> How We Share Information
              </h3>
              <p>We do not sell your personal information. We may share information only as follows:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 text-sm font-mono">
                <li><strong className="text-gray-200">Service providers and subcontractors</strong> who help us operate our business (for example, scheduling, customer service, or payment processing), and only to the extent needed to perform those services.</li>
                <li><strong className="text-gray-200">Legal compliance</strong> when required by law, subpoena, or to protect our rights, safety, or property.</li>
              </ul>
              <p className="mt-4">
                As stated above, mobile opt-in data and SMS consent are never shared with third parties or affiliates for marketing purposes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">05.</span> Cookies and Tracking
              </h3>
              <p>
                Our website may use cookies and similar technologies to operate the site, remember preferences, and understand site usage. You can adjust your browser settings to refuse cookies, though some features may not function properly as a result.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">06.</span> Data Retention
              </h3>
              <p>
                We keep your information for as long as needed to provide our services, maintain records, and comply with legal obligations. When information is no longer needed, we take reasonable steps to delete or anonymize it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">07.</span> Data Security
              </h3>
              <p>
                We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">08.</span> Your Choices
              </h3>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 text-sm font-mono">
                <li>You may opt out of SMS messages at any time by replying <strong>STOP</strong>.</li>
                <li>You may request that we update or delete your personal information by contacting us using the details below.</li>
                <li>You may unsubscribe from non-essential email communications using the link provided or by contacting us.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">09.</span> Children's Privacy
              </h3>
              <p>
                Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">10.</span> Changes to This Policy
              </h3>
              <p>
                We may update this Privacy Policy from time to time. Changes take effect when posted on this page, with the "Last updated" date revised accordingly.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">11.</span> Contact Us
              </h3>
              <div className="bg-charcoal border border-metal p-6 rounded-sm w-full sm:max-w-md">
                <h4 className="text-white font-bold mb-2">Zambrano Electric</h4>
                <p className="text-gray-400 font-mono text-sm mb-4">Hereford, Texas</p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-gray-300">Phone:</strong> (806) 576-7703</p>
                  <p><strong className="text-gray-300">Email:</strong> jz@zambranoelectric.com</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
