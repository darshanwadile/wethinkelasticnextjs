'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { About } from '@/components/About';

gsap.registerPlugin(ScrollTrigger);

export default function ExpertisePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-custom-dark">
      <div className="pt-32 px-8">
        <h1 className="text-5xl font-bold text-custom-light mb-12">Our Expertise</h1>
        <div className="mb-20">
          <About />
        </div>
      </div>
    </main>
  );
}
