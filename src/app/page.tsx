'use client';

import { useEffect } from 'react';
import {
  Navigation,
  Hero,
  Portfolio,
  About,
  Contact,
  Footer,
  LoadingScreen,
} from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  function Splitting(): void;
}

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Initialize Splitting.js for text animations after a short delay
    const initSplitting = () => {
      if (typeof window !== 'undefined' && (window as any).Splitting) {
        (window as any).Splitting();
        ScrollTrigger.refresh();
      }
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initSplitting);
    } else {
      setTimeout(initSplitting, 100);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (document.readyState === 'loading') {
        document.removeEventListener('DOMContentLoaded', initSplitting);
      }
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {/* <LoadingScreen /> */}
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
