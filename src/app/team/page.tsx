'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-custom-dark">
      <div className="pt-32 px-8">
        <h1 className="text-5xl font-bold text-custom-light mb-12">Our Team & Partners</h1>
        <div className="mb-20">
          <section className="logos-section" id="logos">
            <div className="logos-content">
              <h2 className="text-4xl font-semibold text-custom-light mb-12">Trusted by leading brands</h2>
              <div className="logos-scroll-container overflow-hidden rounded-lg bg-gradient-to-r from-sky-600 to-sky-700 h-32 sm:h-24 flex items-center">
                <div className="logos-track flex gap-16 sm:gap-8 whitespace-nowrap">
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/AWWD.png" alt="AWWD" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Bazarvoice.png" alt="Bazarvoice" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Bloomberg.png" alt="Bloomberg" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Classpass.png" alt="Classpass" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/DreamWorks.png" alt="DreamWorks" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Figma.png" alt="Figma" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Freshworks.png" alt="Freshworks" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Google.png" alt="Google" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Guidepoint.png" alt="Guidepoint" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Hertz.png" alt="Hertz" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Kaltura.png" alt="Kaltura" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Microsoft.png" alt="Microsoft" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Nasdaq.png" alt="Nasdaq" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Netflix.png" alt="Netflix" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Paylocity.png" alt="Paylocity" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Pinecone.png" alt="Pinecone" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Rappi.png" alt="Rappi" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Shutterstock.png" alt="Shutterstock" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Stripe.png" alt="Stripe" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Twilio.png" alt="Twilio" className="h-full" />
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/AWWD.png" alt="AWWD" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Bazarvoice.png" alt="Bazarvoice" className="h-full" />
                  </div>
                  <div className="flex-shrink-0 h-20 sm:h-16 flex items-center">
                    <img src="/assets/clients/Bloomberg.png" alt="Bloomberg" className="h-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
