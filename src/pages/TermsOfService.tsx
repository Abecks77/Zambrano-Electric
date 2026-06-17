import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';
import { localBusinessSchema } from '../lib/schemas';

export const TermsOfService = () => {
  return (
    <div className="flex-1 w-full relative">
      <Helmet>
        <title>Terms of Service | Zambrano Electric LLC | Hereford, TX</title>
        <meta name="description" content="Terms of Service for Zambrano Electric LLC in Hereford, TX. Read our guidelines, SMS messaging terms, and service agreements." />
        <link rel="canonical" href="https://zambranoelectric.com/terms-of-service" />
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
            <FileText className="h-8 w-8 text-race-red" />
            Terms of Service
          </h2>
          <p className="text-gray-400 font-mono text-sm">Zambrano Electric &middot; Hereford, Texas &middot; Last updated: June 11, 2026</p>
        </div>

        <div className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-headings:font-display prose-headings:uppercase prose-headings:tracking-widest prose-a:text-race-red hover:prose-a:text-white prose-strong:text-gray-200 max-w-none">
          <p className="lead text-lg mb-8">
            Welcome to Zambrano Electric ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your use of our website and the services we provide, including any text message (SMS) communications you may receive from us. By accessing our website, contacting us, or opting in to receive messages, you agree to these Terms.
          </p>

          <div className="space-y-12">
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">01.</span> Services
              </h3>
              <p>
                Zambrano Electric provides electrical contracting and related services in and around Hereford, Texas. All work, estimates, and scheduling are subject to availability and any separate written agreement between you and the Company.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">02.</span> Use of Our Website
              </h3>
              <p>
                You agree to use our website and contact tools only for lawful purposes. You may not use the site to transmit harmful, fraudulent, or unauthorized content, or to interfere with the operation of the site.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">03.</span> SMS / Text Messaging Terms
              </h3>
              <p className="mb-4">
                By submitting your phone number through our website contact form or chat widget, you consent to receive text messages (SMS) from Zambrano Electric related to your inquiry, appointment scheduling, service updates, estimates, and customer support.
              </p>
              
              <div className="bg-charcoal border border-metal p-6 rounded-sm my-6">
                <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-metal pb-2">Mobile Messaging Program Details</h4>
                <ul className="space-y-3 font-mono text-sm text-gray-400">
                  <li><strong className="text-gray-200">Program description:</strong> Zambrano Electric sends SMS messages for appointment confirmations, service and estimate updates, scheduling, and responses to customer inquiries.</li>
                  <li><strong className="text-gray-200">How to opt in:</strong> You opt in by providing your mobile number and checking the consent box on our website contact form or chat widget. Consent is not a condition of purchasing any goods or services.</li>
                  <li><strong className="text-gray-200">How to opt out:</strong> You can cancel SMS messages at any time by replying STOP to any message. After you send STOP, we will send a one-time confirmation message, after which you will no longer receive SMS from us. To rejoin, reply START.</li>
                  <li><strong className="text-gray-200">Help:</strong> For help, reply HELP to any message, or contact us at (806) 576-7703 or jz@zambranoelectric.com.</li>
                  <li><strong className="text-gray-200">Message frequency:</strong> Message frequency varies based on your interaction with us.</li>
                  <li><strong className="text-gray-200">Cost:</strong> Message and data rates may apply. Please contact your wireless carrier for details on your plan.</li>
                  <li><strong className="text-gray-200">Carriers:</strong> Carriers are not liable for delayed or undelivered messages.</li>
                  <li><strong className="text-gray-200">Privacy:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">04.</span> Estimates and Payment
              </h3>
              <p>
                Estimates are provided based on the information available at the time and may change if project scope, materials, or conditions differ. Payment terms will be set out in your service agreement or invoice. Unpaid balances may be subject to applicable late fees as permitted by law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">05.</span> Cancellations and Scheduling
              </h3>
              <p>
                If you need to reschedule or cancel a scheduled appointment, please notify us as early as possible. We reserve the right to reschedule service due to weather, safety conditions, or circumstances beyond our control.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">06.</span> Warranties and Liability
              </h3>
              <p>
                Workmanship warranties, if any, will be described in your service agreement. Except as expressly stated, the website and our communications are provided "as is" without warranties of any kind. To the fullest extent permitted by Texas law, Zambrano Electric is not liable for indirect, incidental, or consequential damages arising from your use of the website or messaging services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">07.</span> Intellectual Property
              </h3>
              <p>
                All content on this website, including text, logos, and graphics, is the property of Zambrano Electric or its licensors and may not be reproduced without permission.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">08.</span> Changes to These Terms
              </h3>
              <p>
                We may update these Terms from time to time. Changes take effect when posted on this page, with the "Last updated" date revised accordingly.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">09.</span> Governing Law
              </h3>
              <p>
                These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes will be handled in the courts located in Deaf Smith County, Texas.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-race-red font-mono">10.</span> Contact Us
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
